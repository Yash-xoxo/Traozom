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
import { Star, MessageCircle, Crown, Sparkles, Check, X, Utensils, Compass } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedLogo } from "@/components/animated-logo"

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    quote: "The Tsukiji market tour made me cry – best £150 ever!",
    author: "Naomi, Kyoto Culinary Journey",
    location: "Tokyo",
  },
  {
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop",
    quote: "Learning tagine secrets from a Berber grandmother was magical",
    author: "James, Marrakech Adventure",
    location: "Morocco",
  },
  {
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
    quote: "The private tea ceremony felt like stepping into Downton Abbey",
    author: "Sarah, London Literary Tour",
    location: "London",
  },
  {
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
    quote: "The spice market awakened senses I didn't know I had",
    author: "Priya, Rajasthan Discovery",
    location: "India",
  },
]

const plans = [
  {
    name: "The Essential",
    price: 1500,
    color: "red",
    bgColor: "bg-travozom-light-beige/20 dark:bg-travozom-emerald/20",
    borderColor: "border-travozom-dark-beige dark:border-travozom-light-beige",
    textColor: "text-travozom-deep-brown dark:text-travozom-cream",
    features: [
      "AI-curated itinerary",
      "Basic local recommendations",
      "Email support",
      "Standard accommodations",
      "Limited adjustments",
    ],
    limitations: ["No real-time changes", "No personal guide", "Group experiences only"],
  },
  {
    name: "The Curated",
    price: 3000,
    color: "green",
    bgColor: "bg-travozom-emerald/10 dark:bg-travozom-gold/20",
    borderColor: "border-travozom-emerald dark:border-travozom-gold",
    textColor: "text-travozom-emerald dark:text-travozom-gold",
    features: [
      "Everything in Essential",
      "3 real-time changes per day",
      "Local guide consultations",
      "Premium accommodations",
      "Cultural immersion experiences",
    ],
    limitations: ["Limited guide availability", "Standard dining options"],
    popular: true,
  },
  {
    name: "The Bespoke",
    price: 6000,
    color: "gold",
    bgColor: "bg-travozom-gold/10 dark:bg-travozom-cream/20",
    borderColor: "border-travozom-gold dark:border-travozom-cream",
    textColor: "text-travozom-gold dark:text-travozom-cream",
    features: [
      "Everything in Curated",
      "24/7 dedicated guide access",
      "Unlimited real-time adjustments",
      "Luxury accommodations",
      "Private experiences",
      "Michelin-starred dining",
      "VIP access to attractions",
    ],
    limitations: [],
  },
]

const chatbotResponses = {
  food: {
    message: "Perfect! I sense you're a culinary adventurer. Based on your taste for authentic flavors:",
    suggestions: [
      "Private cooking class with local chef (£120)",
      "Hidden street food tour (£85)",
      "Wine pairing dinner (£200)",
    ],
  },
  adventure: {
    message: "Ah, a thrill-seeker! Your heart beats for the extraordinary:",
    suggestions: [
      "Sunrise hot air balloon ride (£180)",
      "Rock climbing with local guide (£150)",
      "Night photography expedition (£95)",
    ],
  },
  luxury: {
    message: "Exquisite taste! You appreciate life's finer moments:",
    suggestions: ["Private yacht charter (£500)", "Helicopter city tour (£350)", "Spa retreat experience (£280)"],
  },
}

export default function PlannerPage() {
  const [selectedLocation, setSelectedLocation] = useState("")
  const [budget, setBudget] = useState([4000])
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [chatbotStep, setChatbotStep] = useState(0)
  const [userPreference, setUserPreference] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    travelers: "2",
    duration: "7",
    interests: "",
  })

  const handleChatbotChoice = (choice: string) => {
    setUserPreference(choice)
    setChatbotStep(1)
  }

  const getCurrentResponse = () => {
    if (!userPreference) return null
    return chatbotResponses[userPreference as keyof typeof chatbotResponses]
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
                className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-emerald transition-colors"
              >
                Home
              </Link>
              <Link
                href="/destinations"
                className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-emerald transition-colors"
              >
                Destinations
              </Link>
              <Link href="/planner" className="text-travozom-gold font-semibold">
                Trip Planner
              </Link>
              <Link
                href="/about"
                className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-emerald transition-colors"
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
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Your Journey Begins Here</h1>
              <p className="text-xl text-travozom-light-beige mb-8">
                Let AI craft your story while human experts perfect every detail
              </p>
            </motion.div>
          </div>
        </section>

        {/* Location Selector */}
        <section className="py-16 bg-travozom-light-beige/30 dark:bg-travozom-emerald/20 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-4">
                Your Chosen Location for Voyage
              </h2>
              <p className="text-xl text-travozom-dark-beige dark:text-travozom-light-beige">
                Select your destination and let the magic begin
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="border-0 shadow-xl bg-white dark:bg-travozom-emerald/50 beige-glow">
                  <CardHeader>
                    <CardTitle className="text-2xl text-travozom-deep-brown dark:text-travozom-cream">
                      Trip Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-travozom-dark-beige dark:text-travozom-light-beige mb-2">
                        Destination
                      </label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose your destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="london">London, UK</SelectItem>
                          <SelectItem value="kyoto">Kyoto, Japan</SelectItem>
                          <SelectItem value="marrakech">Marrakech, Morocco</SelectItem>
                          <SelectItem value="rajasthan">Rajasthan, India</SelectItem>
                          <SelectItem value="patagonia">Patagonia, Chile</SelectItem>
                          <SelectItem value="neworleans">New Orleans, USA</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-travozom-dark-beige dark:text-travozom-light-beige mb-2">
                          Travelers
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
                            <SelectItem value="4">4+ People</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-travozom-dark-beige dark:text-travozom-light-beige mb-2">
                          Duration
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
                            <SelectItem value="7">1 Week</SelectItem>
                            <SelectItem value="14">2 Weeks</SelectItem>
                            <SelectItem value="21">3+ Weeks</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-travozom-dark-beige dark:text-travozom-light-beige mb-2">
                        Budget Range: £{budget[0].toLocaleString()}
                      </label>
                      <Slider
                        value={budget}
                        onValueChange={setBudget}
                        max={20000}
                        min={1500}
                        step={500}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-travozom-dark-beige dark:text-travozom-light-beige mt-2">
                        <span>£1,500</span>
                        <span>£20,000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop"
                  alt="Destination map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-travozom-deep-brown/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Explore the World</h3>
                  <p className="text-travozom-light-beige">Premium partners worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Food Testimonials */}
        <section className="py-16 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-4">
                Culinary Stories from Fellow Travelers
              </h2>
              <p className="text-xl text-travozom-dark-beige dark:text-travozom-light-beige">
                Taste the memories that last a lifetime
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-travozom-emerald/50">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.location}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-travozom-gold text-travozom-deep-brown">{testimonial.location}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-travozom-gold text-travozom-gold" />
                        ))}
                      </div>
                      <blockquote className="text-travozom-dark-beige dark:text-travozom-light-beige mb-4 italic">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                      <p className="text-sm text-travozom-deep-brown dark:text-travozom-cream font-medium">
                        — {testimonial.author}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan Comparison */}
        <section className="py-16 bg-travozom-light-beige/30 dark:bg-travozom-emerald/20 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-4">
                Choose Your Adventure Level
              </h2>
              <p className="text-xl text-travozom-dark-beige dark:text-travozom-light-beige">
                From essential experiences to bespoke luxury
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-travozom-emerald text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <Card
                    className={`h-full ${plan.bgColor} ${plan.borderColor} border-2 hover:shadow-xl transition-all duration-300 ${selectedPlan === plan.name ? "ring-2 ring-travozom-emerald dark:ring-travozom-gold" : ""}`}
                  >
                    <CardHeader className="text-center pb-4">
                      <CardTitle className={`text-2xl font-bold ${plan.textColor}`}>{plan.name}</CardTitle>
                      <div className="text-4xl font-bold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                        £{plan.price.toLocaleString()}
                      </div>
                      <p className="text-travozom-dark-beige dark:text-travozom-light-beige">per person</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-3">
                          Included:
                        </h4>
                        <ul className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Check className="w-4 h-4 text-travozom-gold dark:text-travozom-gold mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {plan.limitations.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-3">
                            Limitations:
                          </h4>
                          <ul className="space-y-2">
                            {plan.limitations.map((limitation, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">
                                  {limitation}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <Button
                        className={`w-full mt-6 ${
                          selectedPlan === plan.name
                            ? "bg-travozom-emerald dark:bg-travozom-gold text-white"
                            : "bg-white dark:bg-travozom-emerald/50 border-2 border-travozom-emerald dark:border-travozom-gold text-travozom-emerald dark:text-travozom-gold hover:bg-travozom-emerald dark:hover:bg-travozom-gold hover:text-white"
                        }`}
                        onClick={() => setSelectedPlan(plan.name)}
                      >
                        {selectedPlan === plan.name ? "Selected" : "Choose Plan"}
                        {plan.name === "The Bespoke" && <Crown className="ml-2 w-4 h-4" />}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-4">
                Let's Craft Your Story
              </h2>
              <p className="text-xl text-travozom-dark-beige dark:text-travozom-light-beige">
                Share your dreams and we'll make them reality
              </p>
            </motion.div>

            <Card className="border-0 shadow-xl bg-white dark:bg-travozom-emerald/50 beige-glow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-travozom-dark-beige dark:text-travozom-light-beige mb-2">
                      Full Name
                    </label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-travozom-dark-beige dark:text-travozom-light-beige mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-travozom-dark-beige dark:text-travozom-light-beige mb-2">
                    Tell us about your travel dreams
                  </label>
                  <Textarea
                    placeholder="What experiences are you hoping for? Any special occasions or interests?"
                    rows={4}
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                  />
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white px-12">
                    Begin My Journey
                    <Sparkles className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige mt-4">
                    We'll contact you within 24 hours to start crafting your perfect adventure
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* AI Guide Chatbot */}
      {chatbotOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-24 right-6 w-80 bg-white dark:bg-travozom-emerald rounded-lg shadow-2xl border border-travozom-dark-beige dark:border-travozom-light-beige z-50"
        >
          <div className="p-4 bg-travozom-deep-brown dark:bg-travozom-gold text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-travozom-gold dark:bg-travozom-emerald rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold">AI Guide</span>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20"
                onClick={() => setChatbotOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="p-4 space-y-4">
            {chatbotStep === 0 && (
              <>
                <p className="text-travozom-deep-brown dark:text-travozom-cream">
                  What matters most to you on this journey?
                </p>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent border-travozom-dark-beige text-travozom-deep-brown dark:text-travozom-cream hover:bg-travozom-light-beige/20"
                    onClick={() => handleChatbotChoice("food")}
                  >
                    <Utensils className="w-4 h-4 mr-2" />
                    Culinary Adventures
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent border-travozom-dark-beige text-travozom-deep-brown dark:text-travozom-cream hover:bg-travozom-light-beige/20"
                    onClick={() => handleChatbotChoice("adventure")}
                  >
                    <Compass className="w-4 h-4 mr-2" />
                    Thrilling Experiences
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent border-travozom-dark-beige text-travozom-deep-brown dark:text-travozom-cream hover:bg-travozom-light-beige/20"
                    onClick={() => handleChatbotChoice("luxury")}
                  >
                    <Crown className="w-4 h-4 mr-2" />
                    Luxury & Comfort
                  </Button>
                </div>
              </>
            )}

            {chatbotStep === 1 && getCurrentResponse() && (
              <>
                <p className="text-travozom-deep-brown dark:text-travozom-cream">{getCurrentResponse()!.message}</p>
                <div className="space-y-2">
                  {getCurrentResponse()!.suggestions.map((suggestion, idx) => (
                    <div key={idx} className="p-3 bg-travozom-light-beige/20 dark:bg-travozom-gold/20 rounded-lg">
                      <p className="text-sm text-travozom-deep-brown dark:text-travozom-cream">{suggestion}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <p className="text-xs text-travozom-dark-beige dark:text-travozom-light-beige mb-3">
                    For £200 more, add a private cultural immersion experience
                  </p>
                  <Button size="sm" className="w-full bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white">
                    Add to My Journey
                  </Button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}

      {/* Floating Chatbot Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-16 h-16 bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white rounded-full shadow-lg flex items-center justify-center z-40 transition-all duration-300"
        onClick={() => setChatbotOpen(!chatbotOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  )
}
