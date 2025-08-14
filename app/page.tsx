"use client"

import { useState } from "react"

import type React from "react"
import { useAuth } from "@/components/auth-provider"
import { LoggedOutNav } from "@/components/navigation/logged-out-nav"
import { LoggedInNav } from "@/components/navigation/logged-in-nav"
import { DashboardPage } from "@/components/pages/dashboard-page"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Sparkles, Users, Clock, Star, ArrowRight, Globe, Heart, X, Crown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TravelChatbot } from "@/components/travel-chatbot"

// Define City type for selectedCity

type SubPlace = {
  name: string;
  description: string;
  type: string;
  rating: number;
  image: string;
};

type City = {
  name: string;
  tagline: string;
  experiences: string[];
  budget: string;
  image: string;
  color: string;
  subPlaces: SubPlace[];
};

export default function Page() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && user && !user.mood) {
      // Redirect to mood selector for first-time users
      router.push("/mood-selector")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-travozom-beige flex items-center justify-center">
        <div className="loading-spinner w-8 h-8 border-4 border-travozom-emerald border-t-transparent rounded-full"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-travozom-beige">
      {user ? <LoggedInNav /> : <LoggedOutNav />}
      {user ? <DashboardPage /> : <RenderHomePage />}
    </div>
  )
}

function RenderHomePage() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null)
  const [fireworks, setFireworks] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [showCircularLayout, setShowCircularLayout] = useState(false)

  const cities = [
    {
      name: "London",
      tagline: "Where History Whispers Secrets",
      experiences: ["Secret jazz bars in Soho", "Private Tower of London tour", "Michelin-starred pub crawl"],
      budget: "££££",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
      color: "from-traozom-forest to-traozom-deep-forest",
      subPlaces: [
        {
          name: "Camden Market",
          description: "Eclectic street food and vintage finds",
          type: "Market",
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          name: "Shoreditch Street Art",
          description: "Urban gallery in the open air",
          type: "Culture",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          name: "Covent Garden",
          description: "Street performers and boutique shopping",
          type: "Entertainment",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1529655683826-3e8bea2cfe65?w=400&h=300&fit=crop",
        },
        {
          name: "Borough Market",
          description: "Gourmet food paradise",
          type: "Food",
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          name: "Notting Hill",
          description: "Colorful houses and antique markets",
          type: "Neighborhood",
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=400&h=300&fit=crop",
        },
        {
          name: "Greenwich Observatory",
          description: "Where time begins",
          type: "Science",
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          name: "Hampstead Heath",
          description: "Wild parkland with city views",
          type: "Nature",
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        },
        {
          name: "Leadenhall Market",
          description: "Victorian covered market",
          type: "Architecture",
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      name: "Kyoto",
      tagline: "Ancient Souls, Modern Hearts",
      experiences: ["Private geisha tea ceremony", "Dawn temple meditation", "Kaiseki with master chef"],
      budget: "£££",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop",
      color: "from-traozom-sage to-traozom-orange",
      subPlaces: [
        {
          name: "Arashiyama Bamboo Grove",
          description: "Walk through towering bamboo",
          type: "Nature",
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop",
        },
        {
          name: "Gion District",
          description: "Traditional geisha quarter",
          type: "Culture",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&h=300&fit=crop",
        },
        {
          name: "Philosopher's Path",
          description: "Cherry blossom lined walkway",
          type: "Walking",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&h=300&fit=crop",
        },
        {
          name: "Nijo Castle",
          description: "Shogun's ornate palace",
          type: "History",
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop",
        },
        {
          name: "Pontocho Alley",
          description: "Narrow dining lane",
          type: "Food",
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&h=300&fit=crop",
        },
        {
          name: "Monkey Park Iwatayama",
          description: "Mountain monkeys with city views",
          type: "Wildlife",
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop",
        },
        {
          name: "Tenryu-ji Temple",
          description: "Zen garden masterpiece",
          type: "Spiritual",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop",
        },
        {
          name: "Kiyomizu-dera",
          description: "Wooden temple with panoramic views",
          type: "Temple",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      name: "Marrakech",
      tagline: "Spice Dreams & Desert Winds",
      experiences: ["Berber cooking masterclass", "Atlas Mountains sunrise", "Riad rooftop storytelling"],
      budget: "££",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600&h=400&fit=crop",
      color: "from-traozom-orange to-traozom-light-orange",
      subPlaces: [
        {
          name: "Jardin Majorelle",
          description: "Cobalt blue botanical garden",
          type: "Garden",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop",
        },
        {
          name: "Souks of Medina",
          description: "Labyrinthine marketplace",
          type: "Shopping",
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop",
        },
        {
          name: "Bahia Palace",
          description: "19th-century architectural marvel",
          type: "Palace",
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop",
        },
        {
          name: "Atlas Mountains",
          description: "Berber villages and hiking trails",
          type: "Adventure",
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        },
        {
          name: "Menara Gardens",
          description: "Olive groves and reflecting pool",
          type: "Garden",
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        },
        {
          name: "El Badi Palace",
          description: "Ruins of the golden palace",
          type: "Ruins",
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop",
        },
        {
          name: "Agafay Desert",
          description: "Stone desert glamping",
          type: "Desert",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        },
        {
          name: "Koutoubia Mosque",
          description: "Iconic minaret landmark",
          type: "Religious",
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      name: "New Orleans",
      tagline: "Jazz Souls & Creole Magic",
      experiences: ["Hidden jazz club sessions", "Bayou ghost stories", "Creole cooking secrets"],
      budget: "£££",
      image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600&h=400&fit=crop",
      color: "from-traozom-deep-forest to-traozom-light-forest",
      subPlaces: [
        {
          name: "French Quarter",
          description: "Historic heart with wrought-iron balconies",
          type: "Historic",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=400&h=300&fit=crop",
        },
        {
          name: "Garden District",
          description: "Antebellum mansions and oak trees",
          type: "Architecture",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=400&h=300&fit=crop",
        },
        {
          name: "Frenchmen Street",
          description: "Live music every night",
          type: "Music",
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
        },
        {
          name: "Preservation Hall",
          description: "Intimate jazz performances",
          type: "Music",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
        },
        {
          name: "Magazine Street",
          description: "Shopping and dining corridor",
          type: "Shopping",
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=400&h=300&fit=crop",
        },
        {
          name: "Audubon Park",
          description: "Lagoons and centuries-old oaks",
          type: "Nature",
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        },
        {
          name: "St. Louis Cemetery",
          description: "Above-ground tombs and history",
          type: "Cemetery",
          rating: 4.2,
          image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=400&h=300&fit=crop",
        },
        {
          name: "Bayou Sauvage",
          description: "Urban wildlife refuge",
          type: "Nature",
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      name: "Rajasthan",
      tagline: "Palace Dreams & Spice Tales",
      experiences: ["Private palace dinners", "Camel safari storytelling", "Artisan workshop visits"],
      budget: "££",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
      color: "from-traozom-sage to-traozom-dark-sage",
      subPlaces: [
        {
          name: "Amber Fort",
          description: "Hilltop fortress with mirror palace",
          type: "Fort",
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
        },
        {
          name: "Hawa Mahal",
          description: "Palace of winds with 953 windows",
          type: "Palace",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
        },
        {
          name: "Thar Desert",
          description: "Golden sand dunes and camel rides",
          type: "Desert",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        },
        {
          name: "Udaipur Lakes",
          description: "City of lakes and water palaces",
          type: "Lakes",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
        },
        {
          name: "Jodhpur Blue City",
          description: "Indigo-painted old town",
          type: "City",
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
        },
        {
          name: "Pushkar Camel Fair",
          description: "Annual desert festival",
          type: "Festival",
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        },
        {
          name: "Ranthambore",
          description: "Tiger safari in ancient ruins",
          type: "Wildlife",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        },
        {
          name: "Jaisalmer Fort",
          description: "Living fort in golden sandstone",
          type: "Fort",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      name: "Patagonia",
      tagline: "Where Earth Touches Sky",
      experiences: ["Glacier hiking adventures", "Gaucho ranch experiences", "Stargazing expeditions"],
      budget: "££££",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      color: "from-traozom-forest to-traozom-sage",
      subPlaces: [
        {
          name: "Torres del Paine",
          description: "Granite towers and pristine lakes",
          type: "National Park",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        },
        {
          name: "Perito Moreno Glacier",
          description: "Advancing glacier with ice calving",
          type: "Glacier",
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        },
        {
          name: "Fitz Roy",
          description: "Jagged peaks for serious hikers",
          type: "Mountain",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        },
        {
          name: "Ushuaia",
          description: "End of the world city",
          type: "City",
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        },
        {
          name: "Valdés Peninsula",
          description: "Whale watching paradise",
          type: "Wildlife",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        },
        {
          name: "Marble Caves",
          description: "Blue cathedral carved by waves",
          type: "Caves",
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        },
        {
          name: "Estancia Experience",
          description: "Gaucho ranch life",
          type: "Ranch",
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        },
        {
          name: "Beagle Channel",
          description: "Dramatic fjords and sea lions",
          type: "Waterway",
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        },
      ],
    },
  ]

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI Experience Weaver™",
      subtitle: "Narrative Journeys",
      description: "Activities flow like chapters in your personal adventure novel",
      color: "text-traozom-orange",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Dynamic Itinerary",
      subtitle: "Real-Time Magic",
      description: "Rain cancels hiking? Your plan instantly suggests hot spring alternatives",
      color: "text-traozom-light-forest",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Hybrid Planning",
      subtitle: "Best of Both Worlds",
      description: "AI speed + human intuition = your perfect trip",
      color: "text-traozom-sage",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Dream",
      description: "Share your travel fantasies in a 20-min call",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Weave",
      description: "Our AI crafts your story-driven itinerary draft",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Refine",
      description: "A destination expert polishes every detail",
      icon: <Star className="w-6 h-6" />,
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  const heroImages = [
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const createFullPageFirework = (event: React.MouseEvent) => {
    // Create multiple firework bursts across the entire viewport
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const newFirework = {
          id: Date.now() + i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }
        setFireworks((prev) => [...prev, newFirework])
      }, i * 150)
    }

    // Remove fireworks after animation
    setTimeout(() => {
      setFireworks([])
    }, 3000)
  }

  const createFirework = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const newFirework = {
      id: Date.now(),
      x: x,
      y: y,
    }

    setFireworks((prev) => [...prev, newFirework])

    // Remove firework after animation
    setTimeout(() => {
      setFireworks((prev) => prev.filter((fw) => fw.id !== newFirework.id))
    }, 1000)
  }

  const handleSubPlaceClick = (place: any, event: React.MouseEvent) => {
    createFirework(event)
    console.log("Selected place:", place.name)
  }

  const handleExploreClick = (city: any, event: React.MouseEvent) => {
    // Create full page firework display
    createFullPageFirework(event)

    // Show circular layout after firework delay
    setTimeout(() => {
      setSelectedCity(city)
      setShowCircularLayout(true)
    }, 1000)
  }

  const getCircularPosition = (index: number, total: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / total
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    return { x, y }
  }

  return (
    <div className="min-h-screen bg-traozom-cream dark:bg-traozom-deep-forest transition-colors duration-300">
      {/* Full Page Firework Effects with Logo Colors */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {fireworks.map((firework) => (
          <div key={firework.id} className="absolute" style={{ left: firework.x, top: firework.y }}>
            {/* Large sage burst */}
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-6 firework-sage rounded-full opacity-80"
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 2, 0],
                  x: Math.cos((i * Math.PI * 2) / 24) * 120,
                  y: Math.sin((i * Math.PI * 2) / 24) * 120,
                  opacity: [0.8, 1, 0],
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            ))}
            {/* Medium forest burst */}
            {[...Array(32)].map((_, i) => (
              <motion.div
                key={`forest-${i}`}
                className="absolute w-4 h-4 firework-forest rounded-full opacity-70"
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1.5, 0],
                  x: Math.cos((i * Math.PI * 2) / 32) * 90,
                  y: Math.sin((i * Math.PI * 2) / 32) * 90,
                  opacity: [0.7, 1, 0],
                }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              />
            ))}
            {/* Small orange sparkles */}
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={`orange-${i}`}
                className="absolute w-3 h-3 firework-orange rounded-full opacity-90"
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i * Math.PI * 2) / 40) * 60,
                  y: Math.sin((i * Math.PI * 2) / 40) * 60,
                  opacity: [0.9, 1, 0],
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              />
            ))}
            {/* Tiny cream sparkles */}
            {[...Array(48)].map((_, i) => (
              <motion.div
                key={`cream-${i}`}
                className="absolute w-2 h-2 firework-cream rounded-full opacity-60"
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i * Math.PI * 2) / 48) * 40,
                  y: Math.sin((i * Math.PI * 2) / 48) * 40,
                  opacity: [0.6, 1, 0],
                }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0,
              }}
              transition={{ duration: 2 }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt="Hero background"
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-traozom-deep-forest/70 dark:bg-black/80" />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-traozom-orange rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div className="relative z-10 text-center max-w-4xl mx-auto px-4" style={{ y }}>
          <motion.h1
            className="text-5xl md:text-7xl font-serif text-traozom-cream mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Travel is More Than a Checklist
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-traozom-sage mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Where AI crafts your story, humans perfect it.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-travozom-deep-brown hover:bg-travozom-gold text-white hover:text-travozom-deep-brown transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/design-journey">
                Design My Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-travozom-gold text-travozom-gold hover:bg-travozom-gold hover:text-travozom-deep-brown transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="/meet-guides">
                Meet Our Guides
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* The Traozom Difference */}
      <section className="py-20 bg-travozom-light-beige/30 dark:bg-travozom-deep-brown/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-4">
              The Traozom Difference
            </h2>
            <p className="text-xl text-travozom-dark-beige dark:text-travozom-beige max-w-3xl mx-auto">
              Where technology meets wanderlust, creating journeys that transcend the ordinary
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-travozom-deep-brown/50 beige-glow">
                  <CardContent className="p-8 text-center">
                    <div className={`${feature.color} mb-6 flex justify-center`}>{feature.icon}</div>
                    <h3 className="text-xl font-bold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                      {feature.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-travozom-dark-beige dark:text-travozom-beige mb-4">
                      {feature.subtitle}
                    </h4>
                    <p className="text-travozom-dark-beige dark:text-travozom-beige leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-4">
              How It Works
            </h2>
            <p className="text-xl text-travozom-dark-beige dark:text-travozom-beige max-w-3xl mx-auto">
              From dream to reality in three seamless steps
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-travozom-gold to-travozom-deep-brown hidden md:block" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 md:px-8">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-travozom-deep-brown/50">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-travozom-gold dark:bg-travozom-gold rounded-full flex items-center justify-center text-travozom-deep-brown mr-4">
                          {step.icon}
                        </div>
                        <div>
                          <Badge variant="outline" className="text-travozom-gold border-travozom-gold mb-2">
                            Step {step.number}
                          </Badge>
                          <h3 className="text-2xl font-bold text-travozom-deep-brown dark:text-travozom-cream">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-travozom-dark-beige dark:text-travozom-beige text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:block w-6 h-6 bg-travozom-gold rounded-full border-4 border-travozom-cream dark:border-travozom-deep-brown shadow-lg z-10" />

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* City Showcase */}
      <section className="py-20 bg-traozom-deep-forest dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-traozom-cream mb-4">Where Will Your Story Unfold?</h2>
            <p className="text-xl text-traozom-sage max-w-3xl mx-auto">
              Discover destinations where every corner holds a new chapter
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-0 bg-gradient-to-br from-traozom-forest to-traozom-deep-forest dark:from-traozom-sage/20 dark:to-traozom-forest/20 hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={city.image || "/placeholder.svg"}
                      alt={city.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${city.color} opacity-70 group-hover:opacity-50 transition-opacity duration-300`}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-traozom-orange text-traozom-cream font-bold">{city.budget}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-traozom-cream mb-2">{city.name}</h3>
                    <p className="text-traozom-sage font-semibold mb-4">{city.tagline}</p>
                    <div className="space-y-2 mb-6">
                      {city.experiences.map((experience, expIndex) => (
                        <div key={expIndex} className="flex items-center text-traozom-sage text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-traozom-orange" />
                          {experience}
                        </div>
                      ))}
                    </div>
                    <Button
                      className="w-full bg-traozom-forest hover:bg-traozom-orange text-traozom-cream hover:text-traozom-deep-forest transition-all duration-300 relative overflow-hidden"
                      onClick={(e) => handleExploreClick(city, e)}
                    >
                      Explore {city.name}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-traozom-forest to-traozom-orange dark:from-traozom-deep-forest dark:to-traozom-light-orange">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-traozom-cream mb-6">Ready to Begin Your Story?</h2>
            <p className="text-xl text-traozom-sage mb-8 leading-relaxed">
              Join thousands of travelers who've discovered that the best journeys aren't just about where you go, but
              how your story unfolds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-travozom-gold hover:bg-yellow-600 text-travozom-deep-brown hover:text-travozom-deep-brown transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/start-planning">
                  Start Planning Now
                  <Sparkles className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-traozom-cream text-traozom-cream hover:bg-traozom-cream hover:text-traozom-deep-forest transition-all duration-300 bg-transparent"
              >
                <Clock className="ml-2 w-5 h-5" />
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-traozom-deep-forest dark:bg-black text-traozom-cream py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/traozom-logo.png"
                alt="Traozom"
                width={120}
                height={40}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-traozom-sage leading-relaxed">
                Crafting extraordinary journeys where AI meets human expertise, creating stories that last a lifetime.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-traozom-cream">Destinations</h4>
              <ul className="space-y-2 text-traozom-sage">
                <li>
                  <Link href="/destinations" className="hover:text-traozom-orange transition-colors">
                    Europe
                  </Link>
                </li>
                <li>
                  <Link href="/destinations" className="hover:text-traozom-orange transition-colors">
                    Asia
                  </Link>
                </li>
                <li>
                  <Link href="/destinations" className="hover:text-traozom-orange transition-colors">
                    Americas
                  </Link>
                </li>
                <li>
                  <Link href="/destinations" className="hover:text-traozom-orange transition-colors">
                    Africa
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-traozom-cream">Services</h4>
              <ul className="space-y-2 text-traozom-sage">
                <li>
                  <Link href="/planner" className="hover:text-traozom-orange transition-colors">
                    Trip Planning
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="hover:text-traozom-orange transition-colors">
                    Expert Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-traozom-orange transition-colors">
                    Concierge
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-traozom-orange transition-colors">
                    Group Travel
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-traozom-cream">Connect</h4>
              <ul className="space-y-2 text-traozom-sage">
                <li>
                  <Link href="#" className="hover:text-traozom-orange transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-traozom-orange transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-traozom-orange transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-traozom-orange transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-traozom-forest mt-12 pt-8 text-center text-traozom-sage">
            <p>&copy; 2024 Traozom. All rights reserved. Crafting stories, one journey at a time.</p>
          </div>
        </div>
      </section>

      {/* Circular City Explorer Modal */}
      {selectedCity && showCircularLayout && (
        <motion.div
          className="fixed inset-0 bg-traozom-deep-forest/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setSelectedCity(null)
            setShowCircularLayout(false)
          }}
        >
          <motion.div
            className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedCity(null)
                setShowCircularLayout(false)
              }}
              className="absolute top-4 right-4 z-30 w-12 h-12 bg-traozom-cream/90 dark:bg-traozom-forest/90 hover:bg-traozom-cream dark:hover:bg-traozom-light-forest rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6 text-traozom-forest dark:text-traozom-cream" />
            </button>

            {/* Central City Image */}
            <motion.div
              className="absolute z-20 w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-traozom-orange"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image
                src={selectedCity.image || "/placeholder.svg"}
                alt={selectedCity.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-traozom-deep-forest/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-traozom-cream font-bold text-lg">{selectedCity.name}</h3>
                <p className="text-traozom-sage text-sm">{selectedCity.tagline}</p>
              </div>
            </motion.div>

            {/* Circular Sub-Places */}
            <div className="relative w-full h-full flex items-center justify-center">
              {selectedCity.subPlaces?.map((place: any, index: number) => {
                const position = getCircularPosition(index, selectedCity.subPlaces.length, 280)
                return (
                  <motion.div
                    key={index}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `calc(50% + ${position.x}px - 80px)`,
                      top: `calc(50% + ${position.y}px - 80px)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ scale: 1.1, zIndex: 30 }}
                    onClick={(e) => handleSubPlaceClick(place, e)}
                  >
                    <Card className="w-40 h-40 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-traozom-cream dark:bg-traozom-forest overflow-hidden">
                      <div className="relative h-24 overflow-hidden">
                        <Image src={place.image || "/placeholder.svg"} alt={place.name} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-traozom-deep-forest/60 to-transparent" />
                        <div className="absolute top-2 right-2">
                          <Badge
                            variant="secondary"
                            className="text-xs bg-traozom-forest/90 text-traozom-cream border-none"
                          >
                            {place.type}
                          </Badge>
                        </div>
                        <div className="absolute bottom-1 left-2 flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-traozom-orange text-traozom-orange" />
                          <span className="text-xs text-traozom-cream font-medium">{place.rating}</span>
                        </div>
                      </div>
                      <CardContent className="p-3">
                        <h4 className="font-bold text-traozom-deep-forest dark:text-traozom-cream text-sm mb-1 line-clamp-1">
                          {place.name}
                        </h4>
                        <p className="text-xs text-traozom-forest dark:text-traozom-sage line-clamp-2 mb-2">
                          {place.description}
                        </p>
                        <div className="flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-traozom-orange group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Connection Lines */}
                    <motion.div
                      className="absolute w-1 bg-gradient-to-r from-traozom-forest to-traozom-orange opacity-30"
                      style={{
                        height: Math.sqrt(position.x ** 2 + position.y ** 2) - 120,
                        left: "50%",
                        top: "50%",
                        transformOrigin: "0 0",
                        transform: `rotate(${Math.atan2(position.y, position.x)}rad) translateX(-50%)`,
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.2 + index * 0.05 }}
                    />
                  </motion.div>
                )
              })}
            </div>

            {/* Floating Action Buttons */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <Button size="lg" className="bg-traozom-forest hover:bg-traozom-orange text-traozom-cream px-8" asChild>
                <Link href="/planner">
                  Plan My {selectedCity.name} Adventure
                  <Sparkles className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-traozom-orange text-traozom-orange hover:bg-traozom-orange hover:text-traozom-cream bg-transparent px-8"
              >
                <Crown className="mr-2 w-5 h-5" />
                Premium Experience
              </Button>
            </motion.div>

            {/* Individual Firework Effects */}
            {fireworks.map((firework) => (
              <div
                key={firework.id}
                className="absolute pointer-events-none z-40"
                style={{ left: firework.x, top: firework.y }}
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 firework-sage rounded-full opacity-80"
                    initial={{ scale: 0, x: 0, y: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      x: Math.cos((i * Math.PI * 2) / 8) * 50,
                      y: Math.sin((i * Math.PI * 2) / 8) * 50,
                      opacity: [0.8, 1, 0],
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                ))}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={`spark-${i}`}
                    className="absolute w-1 h-1 firework-orange rounded-full opacity-70"
                    initial={{ scale: 0, x: 0, y: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      x: Math.cos((i * Math.PI * 2) / 12) * 30,
                      y: Math.sin((i * Math.PI * 2) / 12) * 30,
                      opacity: [0.7, 1, 0],
                    }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
