"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Users,
  Utensils,
  Mountain,
  Building,
  Waves,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedLogo } from "@/components/animated-logo"

const travelStyles = [
  {
    id: "cultural",
    name: "Cultural Explorer",
    icon: <Building className="w-8 h-8" />,
    description: "Immerse in local traditions, temples, and heritage sites",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
    color: "from-travozom-gold to-yellow-600",
  },
  {
    id: "adventure",
    name: "Adventure Seeker",
    icon: <Mountain className="w-8 h-8" />,
    description: "Trekking, wildlife safaris, and thrilling experiences",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    color: "from-travozom-deep-brown to-travozom-dark-beige",
  },
  {
    id: "culinary",
    name: "Food Enthusiast",
    icon: <Utensils className="w-8 h-8" />,
    description: "Street food tours, cooking classes, and local delicacies",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    color: "from-travozom-gold to-orange-500",
  },
  {
    id: "relaxation",
    name: "Wellness Traveler",
    icon: <Waves className="w-8 h-8" />,
    description: "Yoga retreats, spa treatments, and peaceful getaways",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
    color: "from-travozom-deep-brown to-travozom-beige",
  },
]

const destinations = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=300&h=200&fit=crop",
    highlights: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
    budget: "₹15,000 - ₹50,000",
  },
  {
    id: "kerala",
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=300&h=200&fit=crop",
    highlights: ["Backwaters", "Munnar", "Kochi", "Thekkady"],
    budget: "₹12,000 - ₹35,000",
  },
  {
    id: "punjab",
    name: "Punjab",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
    highlights: ["Golden Temple", "Amritsar", "Chandigarh", "Patiala"],
    budget: "₹8,000 - ₹25,000",
  },
  {
    id: "goa",
    name: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop",
    highlights: ["Beaches", "Old Goa", "Spice Farms", "Night Markets"],
    budget: "₹10,000 - ₹30,000",
  },
]

export default function StartPlanningPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelStyle: "",
    travelers: "2",
    duration: "7",
    budget: [25000],
    startDate: "",
    interests: "",
    accommodation: "mid-range",
  })

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-travozom-beige dark:bg-travozom-deep-brown transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-travozom-beige/90 dark:bg-travozom-deep-brown/90 backdrop-blur-md border-b border-travozom-dark-beige dark:border-travozom-light-beige transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <AnimatedLogo />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-gold transition-colors"
              >
                Home
              </Link>
              <Link
                href="/destinations"
                className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-gold transition-colors"
              >
                Destinations
              </Link>
              <Link
                href="/planner"
                className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-gold transition-colors"
              >
                Trip Planner
              </Link>
              <Link
                href="/about"
                className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-gold transition-colors"
              >
                About Us
              </Link>
              <ThemeToggle />
              <Button className="bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-travozom-deep-brown to-travozom-dark-beige">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Start Planning Your Dream Journey</h1>
              <p className="text-xl text-travozom-light-beige mb-8">
                Tell us about your travel dreams and we'll craft the perfect Indian adventure for you
              </p>

              {/* Progress Indicator */}
              <div className="flex justify-center items-center space-x-4 mb-8">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        step <= currentStep ? "bg-travozom-gold text-travozom-deep-brown" : "bg-white/20 text-white"
                      }`}
                    >
                      {step < currentStep ? <CheckCircle className="w-4 h-4" /> : step}
                    </div>
                    {step < 4 && (
                      <div className={`w-12 h-0.5 mx-2 ${step < currentStep ? "bg-travozom-gold" : "bg-white/20"}`} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Form Steps */}
        <section className="py-16 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 shadow-xl bg-white dark:bg-travozom-deep-brown/50 beige-glow">
              <CardContent className="p-8">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CardHeader className="px-0 pb-6">
                      <CardTitle className="text-2xl text-travozom-deep-brown dark:text-travozom-cream">
                        Tell Us About Yourself
                      </CardTitle>
                      <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                        Let's start with some basic information
                      </p>
                    </CardHeader>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-travozom-deep-brown dark:text-travozom-light-beige mb-2">
                            Full Name *
                          </label>
                          <Input
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="border-travozom-dark-beige focus:border-travozom-gold"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-travozom-deep-brown dark:text-travozom-light-beige mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="border-travozom-dark-beige focus:border-travozom-gold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-travozom-deep-brown dark:text-travozom-light-beige mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="border-travozom-dark-beige focus:border-travozom-gold"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-travozom-deep-brown dark:text-travozom-light-beige mb-2">
                            Number of Travelers
                          </label>
                          <Select
                            value={formData.travelers}
                            onValueChange={(value) => setFormData({ ...formData, travelers: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Person</SelectItem>
                              <SelectItem value="2">2 People</SelectItem>
                              <SelectItem value="3">3 People</SelectItem>
                              <SelectItem value="4">4 People</SelectItem>
                              <SelectItem value="5+">5+ People</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-travozom-deep-brown dark:text-travozom-light-beige mb-2">
                            Trip Duration
                          </label>
                          <Select
                            value={formData.duration}
                            onValueChange={(value) => setFormData({ ...formData, duration: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="3">3 Days</SelectItem>
                              <SelectItem value="5">5 Days</SelectItem>
                              <SelectItem value="7">1 Week</SelectItem>
                              <SelectItem value="10">10 Days</SelectItem>
                              <SelectItem value="14">2 Weeks</SelectItem>
                              <SelectItem value="21">3+ Weeks</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Travel Preferences */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CardHeader className="px-0 pb-6">
                      <CardTitle className="text-2xl text-travozom-deep-brown dark:text-travozom-cream">
                        What's Your Travel Style?
                      </CardTitle>
                      <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                        Choose the style that best describes your ideal trip
                      </p>
                    </CardHeader>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {travelStyles.map((style) => (
                        <motion.div
                          key={style.id}
                          whileHover={{ scale: 1.02 }}
                          className={`cursor-pointer rounded-lg border-2 transition-all duration-300 ${
                            formData.travelStyle === style.id
                              ? "border-travozom-gold bg-travozom-gold/10"
                              : "border-travozom-dark-beige hover:border-travozom-gold"
                          }`}
                          onClick={() => setFormData({ ...formData, travelStyle: style.id })}
                        >
                          <div className="relative h-32 overflow-hidden rounded-t-lg">
                            <Image
                              src={style.image || "/placeholder.svg"}
                              alt={style.name}
                              fill
                              className="object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${style.color} opacity-70`} />
                            <div className="absolute top-4 left-4 text-white">{style.icon}</div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                              {style.name}
                            </h3>
                            <p className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">
                              {style.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-travozom-deep-brown dark:text-travozom-light-beige mb-2">
                        Preferred Travel Dates
                      </label>
                      <Input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        className="border-travozom-dark-beige focus:border-travozom-gold"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Destination & Budget */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CardHeader className="px-0 pb-6">
                      <CardTitle className="text-2xl text-travozom-deep-brown dark:text-travozom-cream">
                        Choose Your Destination & Budget
                      </CardTitle>
                      <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                        Select where you'd like to go and set your budget
                      </p>
                    </CardHeader>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-4">
                          Popular Destinations
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {destinations.map((destination) => (
                            <motion.div
                              key={destination.id}
                              whileHover={{ scale: 1.02 }}
                              className={`cursor-pointer rounded-lg border-2 transition-all duration-300 ${
                                formData.destination === destination.id
                                  ? "border-travozom-gold bg-travozom-gold/10"
                                  : "border-travozom-dark-beige hover:border-travozom-gold"
                              }`}
                              onClick={() => setFormData({ ...formData, destination: destination.id })}
                            >
                              <div className="flex items-center p-4">
                                <div className="relative w-16 h-16 rounded-lg overflow-hidden mr-4">
                                  <Image
                                    src={destination.image || "/placeholder.svg"}
                                    alt={destination.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                                    {destination.name}
                                  </h4>
                                  <p className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige mb-1">
                                    {destination.highlights.join(", ")}
                                  </p>
                                  <Badge className="bg-travozom-gold text-travozom-deep-brown text-xs">
                                    {destination.budget}
                                  </Badge>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-travozom-deep-brown dark:text-travozom-light-beige mb-4">
                          Budget Range: ₹{formData.budget[0].toLocaleString()}
                        </label>
                        <Slider
                          value={formData.budget}
                          onValueChange={(value) => setFormData({ ...formData, budget: value })}
                          max={100000}
                          min={5000}
                          step={5000}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-travozom-dark-beige dark:text-travozom-light-beige mt-2">
                          <span>₹5,000</span>
                          <span>₹1,00,000</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-travozom-deep-brown dark:text-travozom-light-beige mb-2">
                          Accommodation Preference
                        </label>
                        <Select
                          value={formData.accommodation}
                          onValueChange={(value) => setFormData({ ...formData, accommodation: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="budget">Budget (₹1,000-2,500/night)</SelectItem>
                            <SelectItem value="mid-range">Mid-range (₹2,500-7,500/night)</SelectItem>
                            <SelectItem value="luxury">Luxury (₹7,500-20,000/night)</SelectItem>
                            <SelectItem value="ultra-luxury">Ultra Luxury (₹20,000+/night)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Final Details */}
                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CardHeader className="px-0 pb-6">
                      <CardTitle className="text-2xl text-travozom-deep-brown dark:text-travozom-cream">
                        Tell Us More About Your Interests
                      </CardTitle>
                      <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                        Help us personalize your perfect itinerary
                      </p>
                    </CardHeader>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-travozom-deep-brown dark:text-travozom-light-beige mb-2">
                          Special Interests & Preferences
                        </label>
                        <Textarea
                          placeholder="Tell us about your interests, dietary restrictions, accessibility needs, or any special requests..."
                          rows={6}
                          value={formData.interests}
                          onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                          className="border-travozom-dark-beige focus:border-travozom-gold"
                        />
                      </div>

                      <div className="bg-travozom-light-beige/30 dark:bg-travozom-gold/10 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-4">
                          What Happens Next?
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-travozom-gold rounded-full flex items-center justify-center">
                              <Clock className="w-4 h-4 text-travozom-deep-brown" />
                            </div>
                            <p className="text-travozom-deep-brown dark:text-travozom-light-beige">
                              Our AI will analyze your preferences and create a personalized itinerary
                            </p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-travozom-gold rounded-full flex items-center justify-center">
                              <Users className="w-4 h-4 text-travozom-deep-brown" />
                            </div>
                            <p className="text-travozom-deep-brown dark:text-travozom-light-beige">
                              A travel expert will review and refine your itinerary within 24 hours
                            </p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-travozom-gold rounded-full flex items-center justify-center">
                              <Star className="w-4 h-4 text-travozom-deep-brown" />
                            </div>
                            <p className="text-travozom-deep-brown dark:text-travozom-light-beige">
                              You'll receive your custom travel plan with booking options
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-travozom-dark-beige dark:border-travozom-light-beige">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="border-travozom-dark-beige text-travozom-deep-brown hover:bg-travozom-light-beige bg-transparent"
                  >
                    Previous
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      onClick={handleNext}
                      className="bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white px-8"
                    >
                      Next Step
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      className="bg-travozom-gold hover:bg-yellow-600 text-travozom-deep-brown px-8 font-semibold"
                    >
                      Create My Journey
                      <Sparkles className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
