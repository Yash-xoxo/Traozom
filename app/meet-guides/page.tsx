"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Star,
  MapPin,
  Users,
  Heart,
  MessageCircle,
  Award,
  Languages,
  Filter,
  Search,
  ArrowRight,
  CheckCircle,
  Globe,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedLogo } from "@/components/animated-logo"

const guides = [
  {
    id: "rajesh-jaipur",
    name: "Rajesh Kumar",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    reviews: 127,
    experience: "8 years",
    languages: ["Hindi", "English", "Rajasthani"],
    specialties: ["Heritage Tours", "Photography", "Local Cuisine"],
    price: "₹2,500/day",
    verified: true,
    description:
      "Born and raised in the Pink City, I know every hidden gem and royal secret. Let me show you Jaipur through the eyes of a local.",
    highlights: [
      "Expert in Rajput history and architecture",
      "Professional photography guidance",
      "Access to private palace areas",
      "Traditional cooking class arrangements",
    ],
    availability: "Available",
    responseTime: "Within 2 hours",
  },
  {
    id: "priya-kerala",
    name: "Priya Nair",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    rating: 4.8,
    reviews: 89,
    experience: "6 years",
    languages: ["Malayalam", "English", "Tamil"],
    specialties: ["Backwater Tours", "Ayurveda", "Spice Gardens"],
    price: "₹2,200/day",
    verified: true,
    description:
      "Kerala's backwaters are my playground. I'll take you on authentic houseboat journeys and introduce you to traditional Ayurvedic practices.",
    highlights: [
      "Certified Ayurveda practitioner",
      "Exclusive houseboat connections",
      "Organic spice farm tours",
      "Traditional Kerala cooking",
    ],
    availability: "Available",
    responseTime: "Within 1 hour",
  },
  {
    id: "arjun-punjab",
    name: "Arjun Singh",
    location: "Amritsar, Punjab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    reviews: 156,
    experience: "10 years",
    languages: ["Punjabi", "Hindi", "English"],
    specialties: ["Religious Tours", "Rural Experiences", "Food Culture"],
    price: "₹2,000/day",
    verified: true,
    description:
      "Experience the warmth of Punjabi hospitality! I'll guide you through Golden Temple's spiritual journey and authentic village life.",
    highlights: [
      "Golden Temple insider access",
      "Rural Punjab village stays",
      "Traditional Punjabi feast experiences",
      "Sikh history and culture expert",
    ],
    availability: "Busy until Dec 15",
    responseTime: "Within 3 hours",
  },
  {
    id: "maya-goa",
    name: "Maya Fernandes",
    location: "Panaji, Goa",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    rating: 4.7,
    reviews: 94,
    experience: "5 years",
    languages: ["Konkani", "Portuguese", "English"],
    specialties: ["Beach Culture", "Portuguese Heritage", "Nightlife"],
    price: "₹2,800/day",
    verified: true,
    description:
      "Goa is more than beaches! Discover Portuguese heritage, hidden churches, and the best local seafood spots with a true Goan perspective.",
    highlights: [
      "Portuguese colonial history expert",
      "Hidden beach and cove access",
      "Authentic Goan cuisine tours",
      "Local music and festival connections",
    ],
    availability: "Available",
    responseTime: "Within 4 hours",
  },
  {
    id: "vikram-himachal",
    name: "Vikram Thakur",
    location: "Manali, Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    reviews: 203,
    experience: "12 years",
    languages: ["Hindi", "English", "Pahari"],
    specialties: ["Mountain Trekking", "Adventure Sports", "Wildlife"],
    price: "₹3,200/day",
    verified: true,
    description:
      "The Himalayas are my home. From gentle nature walks to challenging treks, I'll help you experience the mountains safely and authentically.",
    highlights: [
      "Certified mountain guide",
      "Wildlife photography expert",
      "High-altitude trekking specialist",
      "Local tribal culture knowledge",
    ],
    availability: "Available",
    responseTime: "Within 6 hours",
  },
  {
    id: "deepika-delhi",
    name: "Deepika Sharma",
    location: "New Delhi",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    rating: 4.8,
    reviews: 178,
    experience: "7 years",
    languages: ["Hindi", "English", "Urdu"],
    specialties: ["Historical Tours", "Street Food", "Markets"],
    price: "₹2,600/day",
    verified: true,
    description:
      "Delhi's chaos has a rhythm, and I know it by heart. Let me guide you through centuries of history and the best street food in India.",
    highlights: [
      "Delhi University history graduate",
      "Street food safety expert",
      "Old Delhi heritage specialist",
      "Government monument access",
    ],
    availability: "Available",
    responseTime: "Within 1 hour",
  },
]

const specialtyFilters = [
  "All Specialties",
  "Heritage Tours",
  "Food Culture",
  "Adventure Sports",
  "Religious Tours",
  "Photography",
  "Beach Culture",
  "Mountain Trekking",
  "Backwater Tours",
  "Wildlife",
]

const locationFilters = [
  "All Locations",
  "Rajasthan",
  "Kerala",
  "Punjab",
  "Goa",
  "Himachal Pradesh",
  "Delhi",
  "Tamil Nadu",
  "Maharashtra",
  "Karnataka",
]

export default function MeetGuidesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [filteredGuides, setFilteredGuides] = useState(guides)

  const handleSearch = () => {
    let filtered = guides

    if (searchTerm) {
      filtered = filtered.filter(
        (guide) =>
          guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          guide.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          guide.specialties.some((specialty) => specialty.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    if (selectedSpecialty !== "All Specialties") {
      filtered = filtered.filter((guide) => guide.specialties.includes(selectedSpecialty))
    }

    if (selectedLocation !== "All Locations") {
      filtered = filtered.filter((guide) => guide.location.includes(selectedLocation))
    }

    setFilteredGuides(filtered)
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
              <Button className="bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white">Book a Guide</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=600&fit=crop"
            alt="Local guides"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-travozom-deep-brown/70 dark:bg-black/80" />
        </div>
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Meet Our Expert Guides</h1>
          <p className="text-xl text-travozom-light-beige mb-8">
            Connect with verified local experts who bring India's stories to life
          </p>
          <div className="flex items-center justify-center space-x-8 text-travozom-light-beige">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-travozom-gold" />
              <span>200+ Verified Guides</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-travozom-gold" />
              <span>4.8 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-travozom-gold" />
              <span>15+ States Covered</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg bg-white dark:bg-travozom-deep-brown/50">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-travozom-dark-beige" />
                  <Input
                    placeholder="Search guides, locations, or specialties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-travozom-dark-beige focus:border-travozom-gold"
                  />
                </div>

                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locationFilters.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialtyFilters.map((specialty) => (
                      <SelectItem key={specialty} value={specialty}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  onClick={handleSearch}
                  className="bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filter Guides
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 bg-travozom-beige dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-travozom-deep-brown/50 overflow-hidden">
                  {/* Guide Image & Status */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={guide.image || "/placeholder.svg"}
                      alt={guide.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-travozom-deep-brown/60 to-transparent" />

                    {/* Verification Badge */}
                    {guide.verified && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-travozom-gold text-travozom-deep-brown font-semibold">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      </div>
                    )}

                    {/* Availability Status */}
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${
                          guide.availability === "Available"
                            ? "bg-green-500 text-white"
                            : "bg-yellow-500 text-travozom-deep-brown"
                        }`}
                      >
                        {guide.availability}
                      </Badge>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 fill-travozom-gold text-travozom-gold" />
                          <span className="font-semibold">{guide.rating}</span>
                          <span className="text-sm opacity-90">({guide.reviews})</span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-travozom-gold">{guide.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-travozom-deep-brown dark:text-travozom-cream mb-1">
                        {guide.name}
                      </h3>
                      <div className="flex items-center text-travozom-dark-beige dark:text-travozom-light-beige mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{guide.location}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">{guide.experience} experience</span>
                      </div>
                    </div>

                    <p className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige mb-4 line-clamp-3">
                      {guide.description}
                    </p>

                    {/* Languages */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Languages className="w-4 h-4 mr-2 text-travozom-gold" />
                        <span className="text-sm font-medium text-travozom-deep-brown dark:text-travozom-cream">
                          Languages:
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {guide.languages.map((language, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-travozom-light-beige dark:bg-travozom-gold/20 text-travozom-deep-brown dark:text-travozom-cream text-xs"
                          >
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Award className="w-4 h-4 mr-2 text-travozom-gold" />
                        <span className="text-sm font-medium text-travozom-deep-brown dark:text-travozom-cream">
                          Specialties:
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {guide.specialties.slice(0, 3).map((specialty, idx) => (
                          <Badge key={idx} className="bg-travozom-gold text-travozom-deep-brown text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Response Time */}
                    <div className="flex items-center text-sm text-travozom-dark-beige dark:text-travozom-light-beige mb-6">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      <span>Responds {guide.responseTime}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white"
                        size="sm"
                      >
                        View Profile
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-travozom-gold text-travozom-gold hover:bg-travozom-gold hover:text-travozom-deep-brown bg-transparent"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredGuides.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                No guides found
              </h3>
              <p className="text-travozom-dark-beige dark:text-travozom-light-beige mb-6">
                Try adjusting your search criteria or browse all our amazing guides
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedSpecialty("All Specialties")
                  setSelectedLocation("All Locations")
                  setFilteredGuides(guides)
                }}
                className="bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
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
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to Meet Your Perfect Guide?</h2>
            <p className="text-xl text-travozom-light-beige mb-8">
              Connect with local experts who will transform your Indian journey into an unforgettable adventure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-travozom-gold hover:bg-yellow-600 text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/start-planning">
                  Book Your Guide Now
                  <Users className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
              >
                Become a Guide
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
