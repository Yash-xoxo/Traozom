"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedLogo } from "@/components/animated-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { useAuth } from "@/components/auth-provider"
import { User, Settings, LogOut, BookOpen, Menu, X, Bell, Heart, CreditCard, HelpCircle, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function LoggedInNav() {
  const { user, logout } = useAuth()
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    setIsProfileOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-travozom-beige/90 dark:bg-travozom-deep-brown/90 backdrop-blur-md border-b border-travozom-dark-beige dark:border-travozom-beige transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo */}
          <Link href="/dashboard" className="flex items-center">
            <AnimatedLogo />
          </Link>

          {/* Center Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/dashboard"
              className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium"
            >
              Discover
            </Link>
            <Link
              href="/my-journeys"
              className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium"
            >
              My Journeys
            </Link>
            <Link
              href="/favorites"
              className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium"
            >
              Favorites
            </Link>
            <Link
              href="/guides"
              className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium"
            >
              Expert Guides
            </Link>
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Notifications */}
            <Button
              variant="ghost"
              size="sm"
              className="relative text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-travozom-gold rounded-full text-xs"></span>
            </Button>

            <ThemeToggle />

            {/* User Profile Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold"
              >
                {user?.avatar ? (
                  <Image
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 bg-travozom-emerald rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
                <span className="font-medium">{user?.name}</span>
              </Button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-64 bg-white dark:bg-travozom-deep-brown rounded-lg shadow-xl border border-travozom-dark-beige dark:border-travozom-beige"
                  >
                    <div className="p-4 border-b border-travozom-dark-beige dark:border-travozom-beige">
                      <div className="flex items-center space-x-3">
                        {user?.avatar ? (
                          <Image
                            src={user.avatar || "/placeholder.svg"}
                            alt={user.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-travozom-emerald rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-travozom-deep-brown dark:text-travozom-beige">
                            {user?.name}
                          </p>
                          <p className="text-sm text-travozom-beige dark:text-travozom-dark-beige">{user?.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      <Link
                        href="/profile"
                        className="flex items-center space-x-3 px-4 py-2 text-travozom-deep-brown dark:text-travozom-beige hover:bg-travozom-light-beige dark:hover:bg-travozom-dark-beige transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <User className="w-4 h-4" />
                        <span>My Profile</span>
                      </Link>

                      <Link
                        href="/my-journeys"
                        className="flex items-center space-x-3 px-4 py-2 text-travozom-deep-brown dark:text-travozom-beige hover:bg-travozom-light-beige dark:hover:bg-travozom-dark-beige transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>My Bookings</span>
                      </Link>

                      <Link
                        href="/favorites"
                        className="flex items-center space-x-3 px-4 py-2 text-travozom-deep-brown dark:text-travozom-beige hover:bg-travozom-light-beige dark:hover:bg-travozom-dark-beige transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <Heart className="w-4 h-4" />
                        <span>Saved Places</span>
                      </Link>

                      <Link
                        href="/payment-methods"
                        className="flex items-center space-x-3 px-4 py-2 text-travozom-deep-brown dark:text-travozom-beige hover:bg-travozom-light-beige dark:hover:bg-travozom-dark-beige transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <CreditCard className="w-4 h-4" />
                        <span>Payment Methods</span>
                      </Link>

                      <Link
                        href="/reviews"
                        className="flex items-center space-x-3 px-4 py-2 text-travozom-deep-brown dark:text-travozom-beige hover:bg-travozom-light-beige dark:hover:bg-travozom-dark-beige transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <Star className="w-4 h-4" />
                        <span>My Reviews</span>
                      </Link>

                      <Link
                        href="/help"
                        className="flex items-center space-x-3 px-4 py-2 text-travozom-deep-brown dark:text-travozom-beige hover:bg-travozom-light-beige dark:hover:bg-travozom-dark-beige transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <HelpCircle className="w-4 h-4" />
                        <span>Help & Support</span>
                      </Link>

                      <Link
                        href="/settings"
                        className="flex items-center space-x-3 px-4 py-2 text-travozom-deep-brown dark:text-travozom-beige hover:bg-travozom-light-beige dark:hover:bg-travozom-dark-beige transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </Link>

                      <div className="border-t border-travozom-dark-beige dark:border-travozom-beige mt-2 pt-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center space-x-3 px-4 py-2 w-full text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="relative text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-travozom-emerald rounded-full"></span>
            </Button>
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
            className="md:hidden py-4 border-t border-travozom-dark-beige dark:border-travozom-beige"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/dashboard"
                className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Discover
              </Link>
              <Link
                href="/my-journeys"
                className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Journeys
              </Link>
              <Link
                href="/favorites"
                className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Favorites
              </Link>
              <Link
                href="/guides"
                className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Expert Guides
              </Link>
              <div className="border-t border-travozom-dark-beige dark:border-travozom-beige pt-4 mx-4">
                <button onClick={handleLogout} className="flex items-center space-x-2 text-red-600 font-medium">
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
