"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/auth-provider"
import { BudgetChatbot } from "@/components/budget-chatbot"
import { Star, ArrowRight, Filter, Heart, Clock, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const destinations = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    tagline: "Land of Kings & Palaces",
    description: "Experience royal heritage, desert adventures, and vibrant culture",
    budget: { min: 15000, max: 50000 },
    duration: "5-10 days",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
    rating: 4.8,
    reviews: 1250,
    highlights: ["Amber Fort", "Thar Desert", "Udaipur Lakes", "Jaipur Markets"],
    bestTime: "Oct-Mar",
    difficulty: "Easy",
  },
  {
    id: "kerala",
    name: "Kerala",
    tagline: "God's Own Country",
    description: "Backwaters, spice plantations, and serene hill stations",
    budget: { min: 12000, max: 35000 },
    duration: "4-8 days",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
    rating: 4.9,
    reviews: 980,
    highlights: ["Alleppey Backwaters", "Munnar Hills", "Kochi Heritage", "Spice Gardens"],
    bestTime: "Sep-Mar",
    difficulty: "Easy",
  },
  {
    id: "punjab",
    name: "Punjab",
    tagline: "Heart of Sikhism",
    description: "Golden Temple, vibrant culture, and delicious cuisine",
    budget: { min: 8000, max: 25000 },
    duration: "3-6 days",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    rating: 4.7,
    reviews: 750,
    highlights: ["Golden Temple", "Wagah Border", "Rural Villages", "Punjabi Cuisine"],
    bestTime: "Oct-Mar",
    difficulty: "Easy",
  },
  {
    id: "goa",
    name: "Goa",
    tagline: "Beach Paradise",
    description: "Pristine beaches, Portuguese heritage, and vibrant nightlife",
    budget: { min: 10000, max: 30000 },
    duration: "4-7 days",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop",
    rating: 4.6,
    reviews: 1100,
    highlights: ["Baga Beach", "Old Goa Churches", "Spice Plantations", "Night Markets"],
    bestTime: "Nov-Feb",
    difficulty: "Easy",
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    tagline: "Land of Snow",
    description: "Mountain adventures, hill stations, and spiritual retreats",
    budget: { min: 18000, max: 45000 },
    duration: "6-12 days",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    rating: 4.8,
    reviews: 890,
    highlights: ["Manali", "Shimla", "Dharamshala", "Spiti Valley"],
    bestTime: "Mar-Jun, Sep-Nov",
    difficulty: "Moderate",
  },
  {
    id: "kashmir",
    name: "Kashmir",
    tagline: "Paradise on Earth",
    description: "Dal Lake, houseboats, and breathtaking mountain scenery",
    budget: { min: 20000, max: 55000 },
    duration: "5-9 days",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    rating: 4.9,
    reviews: 650,
    highlights: ["Dal Lake", "Gulmarg", "Pahalgam", "Srinagar Gardens"],
    bestTime: "Apr-Oct",
    difficulty: "Easy",
  },
]

const featuredRegions = [
  {
    name: "North India",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
    destinations: 15,
    color: "from-travozom-emerald to-travozom-dark-emerald",
  },
  {
    name: "South India",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
    destinations: 12,
    color: "from-travozom-gold to-yellow-600",
  },
  {
    name: "Western India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop",
    destinations: 8,
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Eastern India",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    destinations: 10,
    color: "from-purple-500 to-purple-700",
  },
]

export function DashboardPage() {
  const { user } = useAuth()
  const [budgetFilter, setBudgetFilter] = useState<number | null>(null)
  const [filteredDestinations, setFilteredDestinations] = useState(destinations)
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  useEffect(() => {
    if (budgetFilter) {
      const filtered = destinations.filter((dest) => budgetFilter >= dest.budget.min && budgetFilter <= dest.budget.max)
      setFilteredDestinations(filtered)
    } else {
      setFilteredDestinations(destinations)
    }
  }, [budgetFilter])

  const handleBudgetSet = (budget: number) => {
    setBudgetFilter(budget)
    setIsChatbotOpen(false)
  }

  return (
    <div className="min-h-screen bg-travozom-beige pt-16">
      {/* Welcome Section */}
      <section className="py-12 bg-gradient-to-r from-travozom-beige to-travozom-light-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-travozom-deep-brown mb-4">
              Welcome to the Destinations, {user?.name}!
            </h1>
            <p className="text-xl text-travozom-dark-beige max-w-3xl mx-auto mb-8">
              Discover incredible places tailored to your preferences. Let our AI help you find the perfect adventure.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => setIsChatbotOpen(true)}
                className="bg-travozom-emerald hover:bg-travozom-dark-emerald text-white px-6 py-3 rounded-lg font-medium emerald-glow"
              >
                <DollarSign className="w-4 h-4 mr-2" />
                Set Budget
              </Button>
              <Button
                variant="outline"
                className="border-travozom-emerald text-travozom-emerald hover:bg-travozom-emerald hover:text-white px-6 py-3 rounded-lg font-medium bg-transparent"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button
                variant="outline"
                className="border-travozom-emerald text-travozom-emerald hover:bg-travozom-emerald hover:text-white px-6 py-3 rounded-lg font-medium bg-transparent"
              >
                <Heart className="w-4 h-4 mr-2" />
                Saved Places
              </Button>
            </div>

            {budgetFilter && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mt-6">
                <Badge className="bg-travozom-emerald text-white px-4 py-2 text-lg">
                  Budget: ₹{budgetFilter.toLocaleString()}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setBudgetFilter(null)}
                    className="ml-2 text-white hover:text-travozom-emerald"
                  >
                    ×
                  </Button>
                </Badge>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Regions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-travozom-deep-brown mb-4">Explore by Region</h2>
            <p className="text-xl text-travozom-dark-beige">
              Discover the diverse beauty of India across different regions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRegions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={region.image || "/placeholder.svg"}
                      alt={region.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${region.color} opacity-70 group-hover:opacity-50 transition-opacity duration-300`}
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{region.name}</h3>
                      <p className="text-sm opacity-90">{region.destinations} destinations</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-travozom-light-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-travozom-deep-brown mb-4">Popular Destinations</h2>
            <p className="text-xl text-travozom-dark-beige">
              {budgetFilter
                ? `${filteredDestinations.length} destinations match your budget`
                : "Handpicked destinations for unforgettable experiences"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`group cursor-pointer ${
                  budgetFilter && (budgetFilter < destination.budget.min || budgetFilter > destination.budget.max)
                    ? "opacity-50 grayscale"
                    : ""
                }`}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-travozom-deep-brown font-semibold">
                        {destination.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2 text-white">
                        <Star className="w-4 h-4 fill-travozom-gold text-travozom-gold" />
                        <span className="font-semibold">{destination.rating}</span>
                        <span className="text-sm opacity-90">({destination.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-travozom-deep-brown mb-1">{destination.name}</h3>
                        <p className="text-travozom-emerald font-semibold text-sm">{destination.tagline}</p>
                      </div>
                      <Badge variant="outline" className="border-travozom-beige text-travozom-dark-beige">
                        {destination.bestTime}
                      </Badge>
                    </div>

                    <p className="text-travozom-dark-beige text-sm mb-4 line-clamp-2">{destination.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.highlights.slice(0, 2).map((highlight, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-travozom-light-beige text-travozom-deep-brown text-xs"
                        >
                          {highlight}
                        </Badge>
                      ))}
                      {destination.highlights.length > 2 && (
                        <Badge variant="secondary" className="bg-travozom-light-beige text-travozom-deep-brown text-xs">
                          +{destination.highlights.length - 2} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-4 text-sm text-travozom-dark-beige">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{destination.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>
                            ₹{destination.budget.min.toLocaleString()}-{destination.budget.max.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link href={`/destinations/${destination.id}`}>
                      <Button className="w-full bg-travozom-emerald hover:bg-travozom-dark-emerald text-white font-medium transition-all duration-300">
                        Explore {destination.name}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredDestinations.length === 0 && budgetFilter && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-travozom-deep-brown mb-2">
                No destinations match your budget
              </h3>
              <p className="text-travozom-dark-beige mb-6">Try adjusting your budget or explore our premium packages</p>
              <Button
                onClick={() => setBudgetFilter(null)}
                className="bg-travozom-emerald hover:bg-travozom-dark-emerald text-white"
              >
                Clear Budget Filter
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Budget Chatbot */}
      <BudgetChatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} onBudgetSet={handleBudgetSet} />

      {/* Floating Budget Button */}
      {!isChatbotOpen && (
        <motion.button
          className="fixed bottom-6 right-6 w-16 h-16 bg-travozom-emerald hover:bg-travozom-dark-emerald text-white rounded-full shadow-lg flex items-center justify-center z-40 transition-all duration-300 emerald-glow"
          onClick={() => setIsChatbotOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
        >
          <DollarSign className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  )
}
