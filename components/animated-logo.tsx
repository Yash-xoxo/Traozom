"use client"

import { motion } from "framer-motion"
import { Plane } from "lucide-react"

export function AnimatedLogo() {
  return (
    <div className="flex items-center space-x-3">
      {/* Taking off plane */}
      <motion.div
        className="text-travozom-emerald"
        animate={{
          x: [-25, 0, 25],
          y: [8, -3, -8],
          rotate: [-8, 0, 8],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Plane className="w-6 h-6" />
      </motion.div>

      {/* Logo Text with subtle animation */}
      <motion.span
        className="text-2xl font-bold font-serif text-travozom-deep-brown dark:text-travozom-beige"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        Travozom
      </motion.span>

      {/* Landing plane */}
      <motion.div
        className="text-travozom-gold"
        animate={{
          x: [25, 0, -25],
          y: [-8, -3, 8],
          rotate: [8, 0, -8],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Plane className="w-6 h-6" />
      </motion.div>
    </div>
  )
}
