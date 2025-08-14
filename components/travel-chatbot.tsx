"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Sparkles, X, Bot, User, Loader2 } from "lucide-react"
import { GoogleGenerativeAI } from "@google/generative-ai"

interface Message {
  id: string
  role: "user" | "model"
  content: string
  timestamp: Date
}

export function TravelChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "model",
      content: "Hello! I'm your travel assistant. How can I help you plan your next adventure?",
      timestamp: new Date(),
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initialize Gemini API
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "")
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      // Create chat history for context
      const chatHistory = messages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.content }]
      }))

      // Add current user message to history
      chatHistory.push({
        role: "user",
        parts: [{ text: inputValue }]
      })

      // Generate response using Gemini
      const chat = model.startChat({
        history: chatHistory,
        generationConfig: {
          maxOutputTokens: 1000,
        },
      })

      const result = await chat.sendMessage(inputValue)
      const response = await result.response
      const text = response.text()

      // Add model response
      const modelMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "model",
        content: text,
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, modelMessage])
    } catch (error) {
      console.error("Error generating content:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "model",
        content: "Sorry, I encountered an error. Could you please try again?",
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="lg"
          className="bg-traozom-deep-brown hover:bg-traozom-dark-beige text-white rounded-full w-16 h-16 shadow-2xl"
          onClick={() => setIsOpen(true)}
        >
          <Bot className="w-8 h-8" />
        </Button>
      </motion.div>

      {/* Chatbot Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl h-[80vh] flex flex-col"
            >
              <Card className="bg-white dark:bg-traozom-deep-brown border-travozom-dark-beige dark:border-travozom-beige shadow-2xl h-full flex flex-col">
                <CardHeader className="relative bg-gradient-to-r from-travozom-deep-brown to-travozom-dark-beige text-white rounded-t-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="absolute right-2 top-2 text-white hover:bg-white/20"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-travozom-gold/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Travel Assistant</CardTitle>
                      <p className="text-sm opacity-90">Your AI-powered travel companion</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-travozom-light-beige/10 dark:bg-travozom-dark-beige/10">
                    <AnimatePresence>
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                              message.role === "user"
                                ? "bg-traozom-deep-brown text-white rounded-tr-none"
                                : "bg-travozom-beige dark:bg-travozom-dark-beige text-travozom-deep-brown dark:text-travozom-cream rounded-tl-none"
                            }`}
                          >
                            <div className="flex items-start space-x-2">
                              {message.role === "model" ? (
                                <Bot className="w-5 h-5 flex-shrink-0 mt-0.5" />
                              ) : (
                                <User className="w-5 h-5 flex-shrink-0 mt-0.5" />
                              )}
                              <div>
                                <p className="whitespace-pre-wrap">{message.content}</p>
                                <p className="text-xs opacity-70 mt-1">
                                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="bg-travozom-beige dark:bg-travozom-dark-beige text-travozom-deep-brown dark:text-travozom-cream rounded-2xl rounded-tl-none px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <Bot className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <Loader2 className="w-4 h-4 animate-spin" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  <div className="p-4 border-t border-travozom-beige dark:border-travozom-dark-beige">
                    <div className="flex space-x-2">
                      <div className="flex-1 relative">
                        <Input
                          placeholder="Ask about destinations, activities, or travel tips..."
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="pr-12 border-travozom-dark-beige focus:border-travozom-emerald"
                          disabled={isLoading}
                        />
                        <Button
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-traozom-deep-brown hover:bg-traozom-dark-beige text-white"
                          onClick={handleSend}
                          disabled={!inputValue.trim() || isLoading}
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-travozom-beige dark:text-travozom-dark-beige text-center">
                      Powered by Gemini Flash 2.0
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}