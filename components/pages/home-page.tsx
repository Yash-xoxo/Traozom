"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LoginModal } from "@/components/auth/login-modal"
import { useState } from "react"
import { Users, Star, ArrowRight, Sparkles, Globe, Heart, Camera, Compass } from "lucide-react"
import Image from "next/image"

export function HomePage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const culturalImages = [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=400&fit=crop",
  ]

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI-Powered Planning",
      description: "Let our intelligent system craft your perfect journey based on your mood and preferences",
      color: "text-travozom-emerald",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Local Guides",
      description: "Connect with verified local experts who know the hidden gems of each destination",
      color: "text-travozom-gold",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Authentic Experiences",
      description: "Discover genuine cultural experiences that go beyond typical tourist attractions",
      color: "text-travozom-emerald",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Travozom helped me discover the most amazing hidden temples in Rajasthan. The local guide was incredible!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "James Wilson",
      location: "London",
      text: "The AI recommendations were spot-on. Found the perfect balance of adventure and relaxation in Kerala.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Maria Garcia",
      location: "Barcelona",
      text: "Best travel planning experience ever! The cultural immersion in Punjab was life-changing.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ]

  return (
    <div className="min-h-screen bg-travozom-beige">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Cultural Sidebar */}
        <div className="absolute left-0 top-16 bottom-0 w-20 md:w-32 bg-gradient-to-b from-travozom-emerald/20 to-travozom-gold/20 backdrop-blur-sm">
          <div className="h-full flex flex-col justify-center space-y-4 p-2">
            {culturalImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Cultural image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ml-20 md:ml-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-travozom-deep-brown mb-6">
              Discover India's
              <span className="block text-travozom-emerald">Hidden Treasures</span>
            </h1>

            <p className="text-xl md:text-2xl text-travozom-dark-beige mb-8 max-w-3xl mx-auto">
              Where AI meets authentic travel. Let us craft your perfect journey through India's most enchanting
              destinations with local expertise and cultural immersion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => setIsLoginOpen(true)}
                className="bg-travozom-emerald hover:bg-travozom-dark-emerald text-white px-8 py-4 text-lg font-semibold rounded-xl emerald-glow transform hover:scale-105 transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-travozom-emerald text-travozom-emerald hover:bg-travozom-emerald hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
              >
                Watch Demo
                <Camera className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-travozom-emerald">50+</div>
                <div className="text-sm text-travozom-dark-beige">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-travozom-emerald">1000+</div>
                <div className="text-sm text-travozom-dark-beige">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-travozom-emerald">200+</div>
                <div className="text-sm text-travozom-dark-beige">Local Guides</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-travozom-emerald">4.9</div>
                <div className="text-sm text-travozom-dark-beige">Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-travozom-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-travozom-deep-brown mb-4">Why Choose Travozom?</h2>
            <p className="text-xl text-travozom-dark-beige max-w-3xl mx-auto">
              Experience travel planning like never before with our unique blend of AI intelligence and human expertise
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
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white beige-glow">
                  <CardContent className="p-8 text-center">
                    <div className={`${feature.color} mb-6 flex justify-center`}>{feature.icon}</div>
                    <h3 className="text-xl font-bold text-travozom-deep-brown mb-4">{feature.title}</h3>
                    <p className="text-travozom-dark-beige leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-travozom-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-travozom-deep-brown mb-4">
              Stories from Our Travelers
            </h2>
            <p className="text-xl text-travozom-dark-beige max-w-3xl mx-auto">
              Discover what makes Travozom special through the experiences of our community
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
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-travozom-deep-brown">{testimonial.name}</h4>
                        <p className="text-sm text-travozom-dark-beige">{testimonial.location}</p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-travozom-gold text-travozom-gold" />
                      ))}
                    </div>

                    <p className="text-travozom-dark-beige italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
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
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready to Begin Your Adventure?</h2>
            <p className="text-xl text-travozom-light-beige mb-8 leading-relaxed">
              Join thousands of travelers who've discovered India's hidden gems through our personalized approach. Your
              perfect journey is just one click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsLoginOpen(true)}
                className="bg-white hover:bg-travozom-cream text-travozom-emerald px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
              >
                Start Planning Now
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-travozom-emerald px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
              >
                Learn More
                <Compass className="ml-2 w-5 h-5" />
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
              <p className="text-travozom-beige leading-relaxed mb-4">
                Crafting extraordinary journeys through India with AI intelligence and human expertise.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-travozom-beige hover:text-white">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-travozom-beige hover:text-white">
                  <Camera className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-travozom-beige hover:text-white">
                  <Globe className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2 text-travozom-beige">
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
              <ul className="space-y-2 text-travozom-beige">
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
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-travozom-beige">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
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

          <div className="border-t border-travozom-beige mt-12 pt-8 text-center text-travozom-beige">
            <p>&copy; 2024 Travozom. All rights reserved. Crafting memories, one journey at a time.</p>
          </div>
        </div>
      </footer>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  )
}
