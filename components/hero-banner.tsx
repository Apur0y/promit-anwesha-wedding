"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Leaf, Heart, Sparkles, Calendar } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { GlowingHeart } from "./heart-glow"

export function HeroBanner() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])
  const opacity = useTransform(scrollY, [0, 200], [1, 0.8])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{ opacity }}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Multi-layered Background with Parallax */}
      <div className="absolute inset-0">
        {/* Optimized Background Image */}
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <Image
            src="/elegant-wedding-couple-romantic-outdoor-sunset.jpg"
            alt="Elegant Wedding Couple at Sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-110"
            quality={100}
            onLoadingComplete={() => setIsLoaded(true)}
          />
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-black/60" />
        {/* <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-transparent to-black/70" /> */}
        
       
      </div>

      {/* Elegant Border Design */}
      <div className="absolute inset-0 border-2 border-gold/20 pointer-events-none" />
      <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
  

        {/* Names with Elegant Typography */}
        <div className="text-center mb-8 w-full">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, type: "spring", stiffness: 100 }}
            className="mb-2"
          >
            <span className="font-serif text-2xl md:text-3xl font-light tracking-[0.5em] text-gold/90">
              THE WEDDING OF
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2, type: "spring" }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl leading-none mb-4 flex flex-col items-center md:flex-row justify-center md:ml-12 w-full"
          >
            <span className="text-white">Promit</span>
            <GlowingHeart/>
            {/* <Heart className="inline w-8 h-8 md:w-28 md:h-28 mx-4 md:mx-8 mt-5 text-gold animate- text-[#FF5A58]" /> */}
            <span className="text-white">Anwesha</span>
          </motion.h1>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
            className="inline-block"
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </motion.div>
        </div>

        {/* Date with Enhanced Design */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-8">
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <Leaf className="w-8 h-8 text-gold animate-leaf-float text-[#FF5A58]" />
            </motion.div>
            
            <div className="text-center">
              <p className="font-serif text-2xl md:text-4xl tracking-widest mb-1">
                January 23, 2026
              </p>
           
            </div>

            <motion.div
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
            >
              <Leaf className="w-8 h-8 text-gold animate-leaf-float-delayed text-[#FF5A58]" />
            </motion.div>
          </div>

          {/* Location */}
         
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes leaf-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes leaf-float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }
        .animate-leaf-float {
          animation: leaf-float 3s ease-in-out infinite;
        }
        .animate-leaf-float-delayed {
          animation: leaf-float-delayed 3s ease-in-out infinite 0.5s;
        }
      `}</style>
    </motion.div>
  )
}