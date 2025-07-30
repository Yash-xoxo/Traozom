"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedLogo } from "@/components/animated-logo"
import { LoginModal } from "@/components/auth/login-modal"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function LoggedOutNav() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-travozom-deep-brown/90 dark:bg-travozom-dark-beige/90 backdrop-blur-md border-b border-travozom-beige dark:border-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Side - Logo */}
            <Link href="/" className="flex items-center">
              <AnimatedLogo />
            </Link>

            {/* Center Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/how-it-works"
                className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium"
              >
                How It Works
              </Link>
              <Link
                href="/destinations"
                className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium"
              >
                Destinations
              </Link>
              <Link
                href="/about"
                className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium"
              >
                About Us
              </Link>
            </div>

            {/* Right Side - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <Button
                onClick={() => setIsLoginOpen(true)}
                className="bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
              >
                Sign In / Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-travozom-deep-brown dark:text-travozom-beige"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden py-4 border-t border-travozom-beige dark:border-travozom-deep-brown"
            >
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/how-it-works"
                  className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="/destinations"
                  className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Destinations
                </Link>
                <Link
                  href="/about"
                  className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Button
                  onClick={() => {
                    setIsLoginOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                  className="bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white mx-4 py-2 rounded-lg font-medium"
                >
                  Sign In / Sign Up
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  )
}
