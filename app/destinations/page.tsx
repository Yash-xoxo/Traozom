"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ThemeToggle } from "@/components/theme-toggle"
import { MapPin, Utensils, Landmark, AlertCircle, Star, ArrowRight, Crown, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedLogo } from "@/components/animated-logo"

const destinations = [
  {
    id: "london",
    name: "London",
    subtitle: "Where History Whispers Secrets",
    description: "Thames fog, royal gold",
    budget: { min: 4000, max: 15000 },
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    landmarks: [
      { name: "Tower of London", crowd: "high", time: "Morning best" },
      { name: "Westminster Abbey", crowd: "medium", time: "Afternoon ideal" },
      { name: "Borough Market", crowd: "high", time: "Early morning" },
    ],
    food: [
      { name: "Fish & Chips", description: "Crispy cod with mushy peas", price: "£12" },
      { name: "Sunday Roast", description: "Yorkshire pudding perfection", price: "£28" },
      { name: "Afternoon Tea", description: "Scones with clotted cream", price: "£45" },
    ],
    laws: ["Pub closing times vary by license", "Tipping 10-15% expected", "Mind the gap on the Tube"],
  },
  {
    id: "kyoto",
    name: "Kyoto",
    subtitle: "Ancient Souls, Modern Hearts",
    description: "Cherry blossom pink, temple gold",
    budget: { min: 3500, max: 12000 },
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    landmarks: [
      { name: "Fushimi Inari Shrine", crowd: "high", time: "Dawn magical" },
      { name: "Kinkaku-ji Temple", crowd: "very high", time: "Early morning" },
      { name: "Bamboo Grove", crowd: "medium", time: "Late afternoon" },
    ],
    food: [
      { name: "Kaiseki", description: "Multi-course artistry", price: "¥15,000" },
      { name: "Ramen", description: "Rich tonkotsu broth", price: "¥1,200" },
      { name: "Matcha & Wagashi", description: "Tea ceremony sweets", price: "¥800" },
    ],
    laws: ["Remove shoes in temples", "No photos of geishas", "Bow when greeting"],
  },
  {
    id: "marrakech",
    name: "Marrakech",
    subtitle: "Spice Dreams & Desert Winds",
    description: "Saffron gold, sunset red",
    budget: { min: 2500, max: 8000 },
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=600&fit=crop",
    landmarks: [
      { name: "Jemaa el-Fnaa", crowd: "very high", time: "Evening spectacle" },
      { name: "Majorelle Garden", crowd: "medium", time: "Morning cool" },
      { name: "Saadian Tombs", crowd: "low", time: "Afternoon quiet" },
    ],
    food: [
      { name: "Tagine", description: "Slow-cooked lamb with apricots", price: "120 MAD" },
      { name: "Couscous", description: "Friday tradition with vegetables", price: "80 MAD" },
      { name: "Mint Tea", description: "Sweet hospitality in a glass", price: "15 MAD" },
    ],
    laws: ["Dress modestly in medina", "Bargaining expected in souks", "Friday prayers respected"],
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    subtitle: "Palace Dreams & Spice Tales",
    description: "Rogan Josh red, desert gold",
    budget: { min: 2000, max: 10000 },
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    landmarks: [
      { name: "Amber Fort", crowd: "high", time: "Sunrise golden" },
      { name: "City Palace", crowd: "medium", time: "Morning tours" },
      { name: "Hawa Mahal", crowd: "high", time: "Late afternoon" },
    ],
    food: [
      { name: "Rogan Josh", description: "Aromatic lamb curry", price: "₹450" },
      { name: "Dal Baati Churma", description: "Traditional Rajasthani feast", price: "₹350" },
      { name: "Lassi", description: "Creamy yogurt drink", price: "₹80" },
    ],
    laws: ["Skip Tuesdays at Jain temples", "Respect photography rules", "Shoes off in religious sites"],
  },
]

const budgetComparisons = [
  { amount: 4000, description: "Joycean Dublin Odyssey", color: "text-travozom-emerald" },
  { amount: 8000, description: "Proustian Paris Retreat", color: "text-travozom-dark-beige" },
  { amount: 12000, description: "García Márquez Cartagena", color: "text-travozom-gold" },
  { amount: 16000, description: "Hemingway Havana Dreams", color: "text-travozom-emerald" },
  { amount: 20000, description: "Shakespearean Stratford Sojourn", color: "text-travozom-deep-brown" },
]

export default function DestinationsPage() {
  const [budget, setBudget] = useState([8000])
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null)

  const getCurrentComparison = () => {
    const currentBudget = budget[0]
    return budgetComparisons.reduce((prev, curr) =>
      Math.abs(curr.amount - currentBudget) < Math.abs(prev.amount - currentBudget) ? curr : prev,
    )
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
              <Link href="/destinations" className="text-travozom-gold font-semibold">
                Destinations
              </Link>
              <Link
                href="/planner"
                className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-emerald transition-colors"
              >
                Trip Planner
              </Link>
              <Link
                href="/about"
                className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-emerald transition-colors"
              >
                About Us
              </Link>
              <ThemeToggle />
              <Button className="bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white">
                Design My Journey
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop"
            alt="Travelers exploring"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-travozom-deep-brown/60 dark:bg-black/70" />
        </div>
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif text-travozom-cream mb-6">Welcome to Destinations</h1>
          <p className="text-xl text-travozom-light-beige">Where every journey becomes a story worth telling</p>
        </motion.div>
      </section>

      {/* Budget Converter */}
      <section className="py-16 bg-travozom-light-beige/30 dark:bg-travozom-emerald/20 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-8">
              What&apos;s Your Story Worth?
            </h2>

            <Card className="border-0 shadow-xl bg-white dark:bg-travozom-emerald/50 beige-glow">
              <CardContent className="p-8">
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-travozom-deep-brown dark:text-travozom-light-beige">
                      £4,000
                    </span>
                    <span className="text-lg font-semibold text-travozom-deep-brown dark:text-travozom-light-beige">
                      £20,000
                    </span>
                  </div>
                  <Slider
                    value={budget}
                    onValueChange={setBudget}
                    max={20000}
                    min={4000}
                    step={500}
                    className="w-full"
                  />
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                    £{budget[0].toLocaleString()}
                  </div>
                  <div className={`text-xl font-semibold ${getCurrentComparison().color} mb-4`}>
                    {getCurrentComparison().description}
                  </div>
                  <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                    Your investment unlocks experiences that transform perspectives and create lifelong memories
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* City Cord System */}
      <section className="py-16 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-4">
              Destination Deep Dive
            </h2>
            <p className="text-xl text-travozom-dark-beige dark:text-travozom-light-beige">
              Explore the soul of each destination through our curated insights
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={destination.id} className="border-0">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-travozom-emerald/50">
                    <AccordionTrigger className="hover:no-underline p-0">
                      <div className="flex items-center w-full p-6">
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden mr-6">
                          <Image
                            src={destination.image || "/placeholder.svg"}
                            alt={destination.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-2xl font-bold text-travozom-deep-brown dark:text-travozom-cream mb-1">
                            {destination.name}
                          </h3>
                          <p className="text-lg text-travozom-gold dark:text-travozom-gold font-semibold mb-2">
                            {destination.subtitle}
                          </p>
                          <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                            {destination.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-travozom-gold text-travozom-deep-brown font-bold">
                            £{destination.budget.min.toLocaleString()} - £{destination.budget.max.toLocaleString()}
                          </Badge>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent>
                      <div className="px-6 pb-6">
                        <div className="grid md:grid-cols-3 gap-8">
                          {/* Landmarks */}
                          <div>
                            <h4 className="flex items-center text-lg font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-4">
                              <Landmark className="w-5 h-5 mr-2 text-travozom-gold dark:text-travozom-gold" />
                              Landmarks
                            </h4>
                            <div className="space-y-3">
                              {destination.landmarks.map((landmark, idx) => (
                                <div key={idx} className="flex items-start space-x-3">
                                  <MapPin className="w-4 h-4 mt-1 text-travozom-gold" />
                                  <div>
                                    <p className="font-medium text-travozom-deep-brown dark:text-travozom-cream">
                                      {landmark.name}
                                    </p>
                                    <div className="flex items-center space-x-2 text-sm">
                                      <Badge
                                        variant={
                                          landmark.crowd === "high"
                                            ? "destructive"
                                            : landmark.crowd === "medium"
                                              ? "default"
                                              : "secondary"
                                        }
                                        className="text-xs"
                                      >
                                        {landmark.crowd} crowds
                                      </Badge>
                                      <span className="text-travozom-dark-beige dark:text-travozom-light-beige">
                                        {landmark.time}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Food */}
                          <div>
                            <h4 className="flex items-center text-lg font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-4">
                              <Utensils className="w-5 h-5 mr-2 text-travozom-gold dark:text-travozom-gold" />
                              Culinary Highlights
                            </h4>
                            <div className="space-y-3">
                              {destination.food.map((dish, idx) => (
                                <div key={idx} className="border-l-2 border-travozom-gold pl-3">
                                  <div className="flex justify-between items-start mb-1">
                                    <p className="font-medium text-travozom-deep-brown dark:text-travozom-cream">
                                      {dish.name}
                                    </p>
                                    <span className="text-travozom-gold dark:text-travozom-gold font-semibold text-sm">
                                      {dish.price}
                                    </span>
                                  </div>
                                  <p className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">
                                    {dish.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Local Laws & Tips */}
                          <div>
                            <h4 className="flex items-center text-lg font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-4">
                              <AlertCircle className="w-5 h-5 mr-2 text-travozom-gold dark:text-travozom-gold" />
                              Local Wisdom
                            </h4>
                            <div className="space-y-2">
                              {destination.laws.map((law, idx) => (
                                <div key={idx} className="flex items-start space-x-2">
                                  <Star className="w-4 h-4 mt-0.5 text-travozom-gold" />
                                  <p className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">
                                    {law}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-travozom-dark-beige dark:border-travozom-light-beige">
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white" asChild>
                              <Link href="/planner">
                                Plan Your {destination.name} Journey
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              className="border-travozom-gold text-travozom-gold hover:bg-travozom-gold hover:text-travozom-deep-brown bg-transparent"
                            >
                              <Crown className="mr-2 w-4 h-4" />
                              Premium Experience
                            </Button>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-travozom-deep-brown to-travozom-dark-beige">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to Craft Your Story?</h2>
            <p className="text-xl text-travozom-light-beige mb-8">
              Let our AI weave your perfect itinerary while our experts add the human touch
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-travozom-cream text-travozom-deep-brown hover:text-travozom-deep-brown transition-all duration-300"
              asChild
            >
              <Link href="/planner">
                Start Your Journey
                <Sparkles className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
