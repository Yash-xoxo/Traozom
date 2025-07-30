"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sparkles,
  Users,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  Crown,
  MapPin,
  Calendar,
  Headphones,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedLogo } from "@/components/animated-logo"

const designPackages = [
  {
    id: "essential",
    name: "Essential Design",
    price: "₹2,999",
    duration: "3-5 days",
    icon: <Star className="w-8 h-8" />,
    color: "from-travozom-beige to-travozom-light-beige",
    features: [
      "AI-powered itinerary creation",
      "Basic destination recommendations",
      "Standard accommodation suggestions",
      "Email support",
      "Digital travel guide",
      "Basic customization (2 revisions)",
    ],
    limitations: ["No real-time support", "Limited local insights", "Standard experiences only"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
  },
  {
    id: "premium",
    name: "Premium Design",
    price: "₹7,999",
    duration: "2-3 days",
    icon: <Crown className="w-8 h-8" />,
    color: "from-travozom-gold to-yellow-600",
    popular: true,
    features: [
      "Everything in Essential",
      "Expert travel consultant review",
      "Premium accommodation options",
      "Local guide recommendations",
      "Cultural experience curation",
      "Phone & chat support",
      "Unlimited revisions",
      "Real-time itinerary adjustments",
    ],
    limitations: ["Standard response time (24-48 hours)"],
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
  },
  {
    id: "luxury",
    name: "Luxury Bespoke",
    price: "₹15,999",
    duration: "1-2 days",
    icon: <Sparkles className="w-8 h-8" />,
    color: "from-travozom-deep-brown to-travozom-dark-beige",
    features: [
      "Everything in Premium",
      "Dedicated travel designer",
      "Luxury accommodation & experiences",
      "Private guide arrangements",
      "VIP access to attractions",
      "24/7 concierge support",
      "Emergency travel assistance",
      "Exclusive local connections",
      "Photography recommendations",
      "Surprise elements & upgrades",
    ],
    limitations: [],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
  },
]

const designProcess = [
  {
    step: "01",
    title: "Discovery Call",
    description: "30-minute consultation to understand your travel dreams and preferences",
    icon: <Headphones className="w-6 h-6" />,
    duration: "30 mins",
  },
  {
    step: "02",
    title: "AI Analysis",
    description: "Our AI processes your preferences and creates initial itinerary options",
    icon: <Sparkles className="w-6 h-6" />,
    duration: "2-4 hours",
  },
  {
    step: "03",
    title: "Expert Curation",
    description: "Travel experts refine and enhance your itinerary with local insights",
    icon: <Users className="w-6 h-6" />,
    duration: "1-2 days",
  },
  {
    step: "04",
    title: "Final Design",
    description: "Receive your personalized travel design with all details and bookings",
    icon: <CheckCircle className="w-6 h-6" />,
    duration: "Same day",
  },
]

const testimonials = [
  {
    name: "Arjun & Priya Mehta",
    location: "Mumbai",
    package: "Premium Design",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote:
      "The design process was incredible! They understood exactly what we wanted and created a perfect Rajasthan itinerary.",
    rating: 5,
    trip: "Rajasthan Heritage Tour",
  },
  {
    name: "Sarah Johnson",
    location: "London",
    package: "Luxury Bespoke",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    quote: "Worth every penny! The luxury touches and exclusive experiences made our Kerala trip unforgettable.",
    rating: 5,
    trip: "Kerala Backwaters & Hills",
  },
  {
    name: "David & Lisa Chen",
    location: "Singapore",
    package: "Essential Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    quote: "Great value for money. The AI recommendations were spot-on and saved us hours of planning.",
    rating: 5,
    trip: "Golden Triangle Tour",
  },
]

export default function DesignJourneyPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=800&fit=crop"
            alt="Travel design"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-travozom-deep-brown/70 dark:bg-black/80" />
        </div>

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
            Design My
            <span className="block text-travozom-gold">Perfect Journey</span>
          </h1>

          <p className="text-xl md:text-2xl text-travozom-light-beige mb-8 max-w-3xl mx-auto">
            Let our expert travel designers craft a personalized Indian adventure that matches your dreams, style, and
            budget perfectly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-travozom-gold hover:bg-yellow-600 text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="#packages">
                Choose Your Design Package
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
            >
              Schedule Free Consultation
              <Calendar className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-travozom-gold">500+</div>
              <div className="text-sm text-travozom-light-beige">Journeys Designed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-travozom-gold">4.9</div>
              <div className="text-sm text-travozom-light-beige">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-travozom-gold">24hrs</div>
              <div className="text-sm text-travozom-light-beige">Design Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-travozom-gold">100%</div>
              <div className="text-sm text-travozom-light-beige">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-travozom-dark-beige dark:text-travozom-light-beige max-w-3xl mx-auto">
              From your first call to your final itinerary, we make the design process seamless and exciting
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-travozom-gold to-travozom-deep-brown hidden md:block" />

            {designProcess.map((process, index) => (
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
                        <div className="w-12 h-12 bg-travozom-gold rounded-full flex items-center justify-center text-travozom-deep-brown mr-4">
                          {process.icon}
                        </div>
                        <div>
                          <Badge variant="outline" className="text-travozom-gold border-travozom-gold mb-2">
                            Step {process.step}
                          </Badge>
                          <h3 className="text-2xl font-bold text-travozom-deep-brown dark:text-travozom-cream">
                            {process.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-travozom-dark-beige dark:text-travozom-light-beige text-lg leading-relaxed mb-4">
                        {process.description}
                      </p>
                      <div className="flex items-center text-sm text-travozom-gold">
                        <Clock className="w-4 h-4 mr-2" />
                        {process.duration}
                      </div>
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

      {/* Design Packages */}
      <section
        id="packages"
        className="py-20 bg-travozom-light-beige/30 dark:bg-travozom-gold/10 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-4">
              Choose Your Design Package
            </h2>
            <p className="text-xl text-travozom-dark-beige dark:text-travozom-light-beige max-w-3xl mx-auto">
              From AI-powered essentials to luxury bespoke experiences, we have the perfect design service for every
              traveler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {designPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-travozom-gold text-travozom-deep-brown px-4 py-1 font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`h-full border-2 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    selectedPackage === pkg.id
                      ? "border-travozom-gold ring-2 ring-travozom-gold/50"
                      : "border-travozom-dark-beige hover:border-travozom-gold"
                  } bg-white dark:bg-travozom-deep-brown/50`}
                >
                  {/* Package Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${pkg.color} opacity-80`} />
                    <div className="absolute top-4 left-4 text-white">{pkg.icon}</div>
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-white/90 text-travozom-deep-brown font-semibold">{pkg.duration}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                        {pkg.name}
                      </h3>
                      <div className="text-4xl font-bold text-travozom-gold mb-2">{pkg.price}</div>
                      <p className="text-travozom-dark-beige dark:text-travozom-light-beige">per journey design</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-3">
                          What&apos;s Included:
                        </h4>
                        <ul className="space-y-2">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-travozom-gold mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {pkg.limitations.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-3">
                            Limitations:
                          </h4>
                          <ul className="space-y-2">
                            {pkg.limitations.map((limitation, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <div className="w-4 h-4 border border-travozom-dark-beige rounded-full mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">
                                  {limitation}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <Button
                      className={`w-full mt-8 ${
                        selectedPackage === pkg.id
                          ? "bg-travozom-gold text-travozom-deep-brown"
                          : "bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white"
                      } font-semibold py-3`}
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      {selectedPackage === pkg.id ? "Selected" : "Choose This Package"}
                      {pkg.id === "luxury" && <Crown className="ml-2 w-4 h-4" />}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {selectedPackage && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-12">
              <Button
                size="lg"
                className="bg-travozom-gold hover:bg-yellow-600 text-travozom-deep-brown px-12 py-4 text-lg font-semibold rounded-xl"
                asChild
              >
                <Link href="/start-planning">
                  Start Design Process
                  <Sparkles className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-travozom-beige dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-travozom-dark-beige dark:text-travozom-light-beige">
              Real stories from travelers who trusted us to design their perfect journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-travozom-deep-brown/50">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">
                          {testimonial.location}
                        </p>
                        <Badge className="bg-travozom-gold text-travozom-deep-brown text-xs mt-1">
                          {testimonial.package}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-travozom-gold text-travozom-gold" />
                      ))}
                    </div>

                    <blockquote className="text-travozom-dark-beige dark:text-travozom-light-beige mb-4 italic">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>

                    <div className="flex items-center text-sm text-travozom-gold">
                      <MapPin className="w-4 h-4 mr-1" />
                      {testimonial.trip}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-travozom-deep-brown to-travozom-dark-beige">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready to Design Your Perfect Journey?</h2>
            <p className="text-xl text-travozom-light-beige mb-8 leading-relaxed">
              Join hundreds of satisfied travelers who trusted us to create their dream Indian adventure. Your perfect
              journey is just one design away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-travozom-gold hover:bg-yellow-600 text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/start-planning">
                  Start My Design
                  <Sparkles className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
              >
                Schedule Free Call
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
