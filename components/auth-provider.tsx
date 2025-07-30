"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { initializeApp } from "firebase/app"
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth"
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9v8_WW_5SimKKn3Do8SrdRREmGEjJe-E",
  authDomain: "travozom.firebaseapp.com",
  projectId: "travozom",
  storageBucket: "travozom.firebasestorage.app",
  messagingSenderId: "712470564689",
  appId: "1:712470564689:web:4737824be45ba98038cd70",
  measurementId: "G-ZBJNPJL08E",
}

// Initialize Firebase with proper error handling
let app: any = null
let auth: any = null
let db: any = null
let googleProvider: any = null

const initializeFirebase = () => {
  try {
    if (typeof window !== "undefined") {
      app = initializeApp(firebaseConfig)
      auth = getAuth(app)
      db = getFirestore(app)
      googleProvider = new GoogleAuthProvider()
      console.log("Firebase initialized successfully")
    }
  } catch (error) {
    console.warn("Firebase initialization failed, using fallback mode:", error)
    // Set to null to indicate Firebase is not available
    app = null
    auth = null
    db = null
    googleProvider = null
  }
}

// Initialize Firebase
initializeFirebase()

interface User {
  id: string
  name: string
  email: string
  phone?: string
  age?: number
  avatar?: string
  mood?: string
  budget?: number
}

interface AuthContextType {
  user: User | null
  login: (userData: User) => void
  logout: () => Promise<void>
  updateUser: (userData: Partial<User>) => void
  isLoading: boolean
  signInWithGoogle: () => Promise<void>
  signInWithEmail: (email: string, password: string) => Promise<void>
  signUpWithEmail: (email: string, password: string, name: string, phone?: string, age?: number) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!auth) {
      setIsLoading(false)
      return
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser && db) {
        try {
          // Get additional user data from Firestore
          const userDoc = await getDoc(doc(db, "users", firebaseUser.uid))
          const userData = userDoc.data()

          const user: User = {
            id: firebaseUser.uid,
            name: firebaseUser.displayName || userData?.name || "",
            email: firebaseUser.email || "",
            phone: userData?.phone,
            age: userData?.age,
            avatar: firebaseUser.photoURL || userData?.avatar,
            mood: userData?.mood,
            budget: userData?.budget,
          }
          setUser(user)
        } catch (error) {
          console.error("Error fetching user data:", error)
          setUser(null)
        }
      } else {
        setUser(null)
      }
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signInWithGoogle = async () => {
    if (!auth || !googleProvider || !db) {
      // Fallback for development mode - create a demo user
      console.log("Using demo Google login")
      const userData: User = {
        id: "demo_google_" + Date.now(),
        name: "Demo Google User",
        email: "demo.google@example.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      }
      setUser(userData)
      return
    }

    try {
      const result = await signInWithPopup(auth, googleProvider)
      const firebaseUser = result.user

      // Save user data to Firestore
      await setDoc(
        doc(db, "users", firebaseUser.uid),
        {
          name: firebaseUser.displayName,
          email: firebaseUser.email,
          avatar: firebaseUser.photoURL,
          createdAt: new Date(),
          lastLogin: new Date(),
        },
        { merge: true },
      )
    } catch (error) {
      console.error("Google sign-in error:", error)
      // Fallback to demo user on error
      const userData: User = {
        id: "fallback_google_" + Date.now(),
        name: "Demo User (Fallback)",
        email: "fallback@example.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      }
      setUser(userData)
    }
  }

  const signInWithEmail = async (email: string, password: string) => {
    if (!auth) {
      throw new Error("Authentication not available")
    }

    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error("Email sign-in error:", error)
      throw error
    }
  }

  const signUpWithEmail = async (email: string, password: string, name: string, phone?: string, age?: number) => {
    if (!auth || !db) {
      throw new Error("Authentication not available")
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      const firebaseUser = result.user

      // Update the user's display name
      await updateProfile(firebaseUser, {
        displayName: name,
      })

      // Save additional user data to Firestore
      await setDoc(doc(db, "users", firebaseUser.uid), {
        name,
        email,
        phone,
        age,
        createdAt: new Date(),
        lastLogin: new Date(),
      })
    } catch (error) {
      console.error("Email sign-up error:", error)
      throw error
    }
  }

  const login = (userData: User) => {
    setUser(userData)
  }

  const logout = async () => {
    if (!auth) {
      setUser(null)
      return
    }

    try {
      await signOut(auth)
      setUser(null)
    } catch (error) {
      console.error("Logout error:", error)
      throw error
    }
  }

  const updateUser = async (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)

      // Update Firestore if available
      if (auth?.currentUser && db) {
        try {
          await setDoc(
            doc(db, "users", auth.currentUser.uid),
            {
              ...userData,
              updatedAt: new Date(),
            },
            { merge: true },
          )
        } catch (error) {
          console.error("Error updating user data:", error)
        }
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        updateUser,
        isLoading,
        signInWithGoogle,
        signInWithEmail,
        signUpWithEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
