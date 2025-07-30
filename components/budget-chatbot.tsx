"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, DollarSign, Sparkles, ArrowRight } from "lucide-react"

interface BudgetChatbotProps {
  isOpen: boolean
  onClose: () => void
  onBudgetSet: (budget: number) => void
}

const budgetRanges = [
  {
    label: "Budget Explorer",
    min: 5000,
    max: 15000,
    icon: "🎒",
    description: "Perfect for backpackers and budget travelers",
  },
  {
    label: "Comfort Traveler",
    min: 15000,
    max: 35000,
    icon: "🏨",
    description: "Good hotels and comfortable experiences",
  },
  {
    label: "Luxury Seeker",
    min: 35000,
    max: 75000,
    icon: "👑",
    description: "Premium accommodations and exclusive experiences",
  },
  { label: "Ultra Luxury", min: 75000, max: 150000, icon: "💎", description: "The finest experiences money can buy" },
]

export function BudgetChatbot({ isOpen, onClose, onBudgetSet }: BudgetChatbotProps) {
  const [step, setStep] = useState(0)
  const [customBudget, setCustomBudget] = useState("")
  const [selectedRange, setSelectedRange] = useState<(typeof budgetRanges)[0] | null>(null)

  const handleRangeSelect = (range: (typeof budgetRanges)[0]) => {
    setSelectedRange(range)
    setStep(1)
  }

  const handleCustomBudget = () => {
    const budget = Number.parseInt(customBudget)
    if (budget && budget > 0) {
      onBudgetSet(budget)
    }
  }

  const handleRangeConfirm = () => {
    if (selectedRange) {
      const avgBudget = (selectedRange.min + selectedRange.max) / 2
      onBudgetSet(avgBudget)
    }
  }

  const resetChatbot = () => {
    setStep(0)
    setCustomBudget("")
    setSelectedRange(null)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md"
        >
          <Card className="bg-white dark:bg-travozom-deep-brown border-travozom-dark-beige dark:border-travozom-beige shadow-2xl">
            <CardHeader className="relative bg-gradient-to-r from-travozom-deep-brown to-travozom-dark-beige text-white rounded-t-lg">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="absolute right-2 top-2 text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-travozom-gold/20 rounded-full flex items-center justify-center">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Budget Assistant</CardTitle>
                  <p className="text-sm opacity-90">Let me help you set your travel budget</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-travozom-deep-brown dark:text-travozom-beige mb-2">
                        What's your travel budget?
                      </h3>
                      <p className="text-travozom-beige dark:text-travozom-beige text-sm">
                        Choose a range or enter a custom amount
                      </p>
                    </div>

                    <div className="space-y-3">
                      {budgetRanges.map((range, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleRangeSelect(range)}
                          className="w-full p-4 text-left border border-travozom-dark-beige hover:border-travozom-gold rounded-lg transition-all duration-200 hover:bg-travozom-light-beige/50 group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{range.icon}</span>
                              <div>
                                <div className="font-semibold text-travozom-deep-brown dark:text-travozom-beige">
                                  {range.label}
                                </div>
                                <div className="text-sm text-travozom-beige dark:text-travozom-beige">
                                  ₹{range.min.toLocaleString()} - ₹{range.max.toLocaleString()}
                                </div>
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-travozom-emerald opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-xs text-travozom-beige dark:text-travozom-beige mt-2 ml-11">
                            {range.description}
                          </p>
                        </motion.button>
                      ))}
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-travozom-beige dark:border-travozom-dark-beige" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white dark:bg-travozom-deep-brown text-travozom-beige dark:text-travozom-beige">
                          Or enter custom amount
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <div className="relative flex-1">
                        <DollarSign className="absolute left-3 top-3 w-4 h-4 text-travozom-beige" />
                        <Input
                          type="number"
                          placeholder="Enter amount"
                          value={customBudget}
                          onChange={(e) => setCustomBudget(e.target.value)}
                          className="pl-10 border-travozom-dark-beige focus:border-travozom-emerald"
                        />
                      </div>
                      <Button
                        onClick={handleCustomBudget}
                        disabled={!customBudget || Number.parseInt(customBudget) <= 0}
                        className="bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white px-6"
                      >
                        Set
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 1 && selectedRange && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{selectedRange.icon}</div>
                      <h3 className="text-xl font-semibold text-travozom-deep-brown dark:text-travozom-beige mb-2">
                        {selectedRange.label}
                      </h3>
                      <Badge className="bg-travozom-emerald text-white px-4 py-1 text-lg">
                        ₹{selectedRange.min.toLocaleString()} - ₹{selectedRange.max.toLocaleString()}
                      </Badge>
                    </div>

                    <div className="bg-travozom-light-beige/50 dark:bg-travozom-dark-beige/20 rounded-lg p-4">
                      <h4 className="font-semibold text-travozom-deep-brown dark:text-travozom-beige mb-2">
                        What this budget includes:
                      </h4>
                      <p className="text-sm text-travozom-beige dark:text-travozom-beige">
                        {selectedRange.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Button
                        onClick={handleRangeConfirm}
                        className="w-full bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white font-medium py-3"
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Find Destinations in This Range
                      </Button>
                      <Button
                        onClick={resetChatbot}
                        variant="outline"
                        className="w-full border-travozom-beige text-travozom-beige hover:bg-travozom-light-beige bg-transparent"
                      >
                        Choose Different Budget
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
