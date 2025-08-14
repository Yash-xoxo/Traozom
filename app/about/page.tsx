"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Users,
  Star,
  ArrowRight,
  Sparkles,
  Globe,
  Heart,
  Camera,
  Compass,
  Award,
  Target,
  Lightbulb,
  Shield,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedLogo } from "@/components/animated-logo"

const teamMembers = [
  {
    name: "Neelakshi Kaundal",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Visionary leader with a passion for authentic travel experiences across India.",
    expertise: "Leadership & Strategy",
  },
  {
    name: "Yash Gupta",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Tech innovator specializing in AI-powered travel solutions and personalized recommendation systems.",
    expertise: "Travel Technology",
  },
  {
    name: "Devensh Sain",
    role: "CMO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    bio: "Marketing strategist passionate about connecting travelers with authentic Indian experiences.",
    expertise: "Digital Marketing",
  },
]

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Authentic Experiences",
    description: "We believe in genuine cultural connections that go beyond surface-level tourism.",
    color: "text-travozom-emerald",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Local Community",
    description: "Supporting local guides, artisans, and communities is at the heart of everything we do.",
    color: "text-travozom-gold",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "Combining cutting-edge AI with human expertise to create unparalleled travel experiences.",
    color: "text-travozom-emerald",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Trust & Safety",
    description: "Your safety and satisfaction are our top priorities in every journey we craft.",
    color: "text-travozom-gold",
  },
]

const milestones = [
  {
    year: "2020",
    title: "The Vision",
    description: "Founded with the mission to revolutionize travel planning in India through AI and local expertise.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    year: "2021",
    title: "First Partnerships",
    description: "Established relationships with 50+ local guides across Rajasthan, Kerala, and Punjab.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    year: "2022",
    title: "AI Platform Launch",
    description: "Launched our proprietary AI recommendation engine for personalized travel experiences.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    year: "2023",
    title: "1000+ Happy Travelers",
    description: "Reached milestone of serving over 1000 travelers with 4.9-star average rating.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    year: "2024",
    title: "National Expansion",
    description: "Expanded to cover 15+ states across India with 200+ verified local partners.",
    icon: <MapPin className="w-6 h-6" />,
  },
]

const stats = [
  { number: "1000+", label: "Happy Travelers", icon: <Users className="w-6 h-6" /> },
  { number: "200+", label: "Local Guides", icon: <Compass className="w-6 h-6" /> },
  { number: "50+", label: "Destinations", icon: <MapPin className="w-6 h-6" /> },
  { number: "4.9", label: "Average Rating", icon: <Star className="w-6 h-6" /> },
]

export default function AboutPage() {
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
              <Link
                href="/planner"
                className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-emerald transition-colors"
              >
                Trip Planner
              </Link>
              <Link href="/about" className="text-travozom-emerald font-semibold">
                About Us
              </Link>
              <ThemeToggle />
              <Button className="bg-travozom-emerald hover:bg-travozom-dark-emerald text-white">
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=800&fit=crop"
            alt="Indian landscape"
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
            Our Story
            <span className="block text-travozom-gold">Crafting Authentic Journeys</span>
          </h1>

          <p className="text-xl md:text-2xl text-travozom-light-beige mb-8 max-w-3xl mx-auto">
            Born from a passion for India&apos;s rich heritage and powered by cutting-edge AI, we&apos;re redefining how travelers
            discover the soul of incredible India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-travozom-emerald hover:bg-travozom-dark-emerald text-white px-8 py-4 text-lg font-semibold rounded-xl emerald-glow transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/planner">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
            >
              Meet Our Team
              <Users className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-travozom-cream dark:bg-travozom-emerald/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-travozom-emerald dark:text-travozom-gold">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                  {stat.number}
                </div>
                <div className="text-travozom-dark-beige dark:text-travozom-light-beige font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-travozom-beige dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-travozom-dark-beige dark:text-travozom-light-beige mb-6 leading-relaxed">
                To bridge the gap between technology and authentic travel experiences, making India&apos;s incredible
                diversity accessible to every traveler while supporting local communities.
              </p>
              <p className="text-lg text-travozom-dark-beige dark:text-travozom-light-beige mb-8 leading-relaxed">
                We believe that the best journeys happen when cutting-edge AI meets deep local knowledge, creating
                personalized adventures that respect culture, support communities, and create lasting memories.
              </p>
              <div className="flex items-center space-x-4">
                <Badge className="bg-travozom-emerald text-white px-4 py-2">
                  <Target className="w-4 h-4 mr-2" />
                  Authentic Experiences
                </Badge>
                <Badge className="bg-travozom-gold text-travozom-deep-brown px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  Local Impact
                </Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                  alt="Local guide with travelers"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-travozom-deep-brown/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Connecting Cultures</h3>
                  <p className="text-travozom-light-beige">Every journey tells a story</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-travozom-light-beige/30 dark:bg-travozom-emerald/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-4">
              Our Values
            </h2>
            <p className="text-xl text-travozom-dark-beige dark:text-travozom-light-beige max-w-3xl mx-auto">
              The principles that guide every decision we make and every experience we create
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-travozom-emerald/50 beige-glow">
                  <CardContent className="p-8 text-center">
                    <div className={`${value.color} mb-6 flex justify-center`}>{value.icon}</div>
                    <h3 className="text-xl font-bold text-travozom-deep-brown dark:text-travozom-cream mb-4">
                      {value.title}
                    </h3>
                    <p className="text-travozom-dark-beige dark:text-travozom-light-beige leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-travozom-dark-beige dark:text-travozom-light-beige max-w-3xl mx-auto">
              Passionate travelers, technologists, and cultural experts united by a love for authentic Indian
              experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-travozom-emerald/50">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-travozom-deep-brown dark:text-travozom-cream mb-1">
                      {member.name}
                    </h3>
                    <p className="text-travozom-emerald dark:text-travozom-gold font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <Badge className="bg-travozom-light-beige dark:bg-travozom-gold/20 text-travozom-deep-brown dark:text-travozom-cream text-xs">
                      {member.expertise}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-travozom-beige dark:bg-travozom-emerald/20 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-travozom-dark-beige dark:text-travozom-light-beige">
              From vision to reality - the milestones that shaped Travozom
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-travozom-emerald dark:bg-travozom-gold"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12"
              >
                {/* Timeline Node */}
                <div className="flex-shrink-0 w-16 h-16 bg-travozom-emerald dark:bg-travozom-gold rounded-full flex items-center justify-center text-white mr-6 shadow-lg">
                  {milestone.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white dark:bg-travozom-emerald/50 rounded-lg p-6 shadow-lg">
                    <div className="flex items-center mb-3">
                      <Badge className="bg-travozom-gold text-travozom-deep-brown mr-3">{milestone.year}</Badge>
                      <h3 className="text-xl font-bold text-travozom-deep-brown dark:text-travozom-cream">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-travozom-dark-beige dark:text-travozom-light-beige leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-travozom-emerald to-travozom-dark-emerald">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready to Join Our Story?</h2>
            <p className="text-xl text-travozom-light-beige mb-8 leading-relaxed">
              Become part of the Travozom family and discover India like never before. Your perfect journey is waiting
              to be crafted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-travozom-cream text-travozom-emerald px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/planner">
                  Start Planning Now
                  <Sparkles className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-travozom-emerald px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
              >
                Contact Our Team
                <Users className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-travozom-deep-brown text-travozom-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Travozom</h3>
              <p className="text-travozom-light-beige leading-relaxed mb-4">
                Crafting extraordinary journeys through India with AI intelligence and human expertise.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-travozom-light-beige hover:text-white">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-travozom-light-beige hover:text-white">
                  <Camera className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-travozom-light-beige hover:text-white">
                  <Globe className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2 text-travozom-light-beige">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Rajasthan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kerala
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Punjab
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Goa
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-travozom-light-beige">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AI Planning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Local Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cultural Tours
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Custom Packages
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-travozom-light-beige">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-travozom-light-beige mt-12 pt-8 text-center text-travozom-light-beige">
            <p>&copy; 2024 Travozom. All rights reserved. Crafting memories, one journey at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
