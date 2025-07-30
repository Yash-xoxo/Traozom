"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/components/auth-provider"
import { X, Mail, Phone, User, Calendar } from "lucide-react"
import Image from "next/image"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create user object
    const userData = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      age: Number.parseInt(formData.age) || undefined,
    }

    login(userData)
    onClose()
  }

  const handleGoogleLogin = () => {
    // Simulate Google login
    const userData = {
      id: "google_" + Date.now().toString(),
      name: "John Doe",
      email: "john.doe@gmail.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    }

    login(userData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md"
        >
          <Card className="bg-white dark:bg-travozom-deep-brown border-travozom-dark-beige dark:border-travozom-beige">
            <CardHeader className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="absolute right-2 top-2 text-travozom-deep-brown dark:text-travozom-beige"
              >
                <X className="w-4 h-4" />
              </Button>
              <CardTitle className="text-2xl font-serif text-center text-travozom-deep-brown dark:text-travozom-beige">
                Welcome to Travozom
              </CardTitle>
              <p className="text-center text-travozom-beige dark:text-travozom-beige">Start your journey with us</p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Google Login Button */}
              <Button
                onClick={handleGoogleLogin}
                variant="outline"
                className="w-full flex items-center justify-center space-x-2 border-travozom-dark-beige hover:bg-travozom-light-beige dark:hover:bg-travozom-dark-beige bg-transparent"
              >
                <Image
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  width={20}
                  height={20}
                />
                <span>Continue with Google</span>
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-travozom-dark-beige dark:border-travozom-beige" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-travozom-deep-brown text-travozom-beige dark:text-travozom-beige">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Manual Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-travozom-beige" />
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10 border-travozom-dark-beige focus:border-travozom-gold"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-travozom-beige" />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 border-travozom-dark-beige focus:border-travozom-gold"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-travozom-beige" />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-10 border-travozom-dark-beige focus:border-travozom-gold"
                  />
                </div>

                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-travozom-beige" />
                  <Input
                    type="number"
                    placeholder="Age"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="pl-10 border-travozom-dark-beige focus:border-travozom-gold"
                    min="18"
                    max="100"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white font-medium py-2"
                >
                  Start My Journey
                </Button>
              </form>

              <p className="text-xs text-center text-travozom-beige dark:text-travozom-beige">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
