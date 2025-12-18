"use client"

import { motion } from "framer-motion"
import { Leaf } from "lucide-react"

export function HeroBanner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/elegant-wedding-couple-romantic-outdoor-sunset.jpg')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl text-center mb-6 text-balance"
        >
          Promit & Anwesha
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <Leaf className="w-5 h-5 text-[#FF5A58]" />
          <p className="text-xl md:text-2xl font-light tracking-wide">January 23, 2026</p>
          <Leaf className="w-5 h-5 text-[#FF5A58] rotate-180" />
        </motion.div>
      </div>
    </motion.div>
  )
}
