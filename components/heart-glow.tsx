"use client"

import { Heart, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function GlowingHeart() {
  return (
    <div className="relative mx-4 md:mx-8 mt-5">
      {/* Outer Glow Aura */}
      <div className="absolute inset-0 animate-heart-aura"></div>
      
      {/* Middle Glow Aura */}
      <div className="absolute inset-0 animate-heart-aura-delayed"></div>
      
      {/* Inner Glow Aura */}
      <div className="absolute inset-0 animate-heart-aura-delayed-2"></div>
      
      {/* Heart Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 1.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="relative"
      >
        <Heart className="w-16 h-16 md:w-28 md:h-28 text-[#FF5A58] animate-heart-beat" fill="#FF5A58" />
      </motion.div>
      
      {/* Floating Sparkles Around Heart */}
      {/* <div className="absolute -top-4 -left-4">
        <Sparkles className="w-4 h-4 text-[#FF5A58] animate-float-sparkle-1" />
      </div>
      <div className="absolute -top-4 -right-4">
        <Sparkles className="w-3 h-3 text-[#FF5A58] animate-float-sparkle-2" />
      </div>
      <div className="absolute -bottom-4 -left-4">
        <Sparkles className="w-3 h-3 text-[#FF5A58] animate-float-sparkle-3" />
      </div>
      <div className="absolute -bottom-4 -right-4">
        <Sparkles className="w-4 h-4 text-[#FF5A58] animate-float-sparkle-4" />
      </div> */}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes heart-beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes heart-aura {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1.2);
          }
          50% { 
            opacity: 0.7;
            transform: scale(1.8);
          }
        }
        @keyframes heart-aura-delayed {
          0%, 100% { 
            opacity: 0.2;
            transform: scale(1.4);
          }
          50% { 
            opacity: 0.5;
            transform: scale(2);
          }
        }
        @keyframes heart-aura-delayed-2 {
          0%, 100% { 
            opacity: 0.1;
            transform: scale(1.6);
          }
          50% { 
            opacity: 0.3;
            transform: scale(2.2);
          }
        }
        @keyframes float-sparkle-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.8; }
          33% { transform: translate(5px, -5px) rotate(120deg); opacity: 1; }
          66% { transform: translate(-5px, 5px) rotate(240deg); opacity: 0.6; }
        }
        @keyframes float-sparkle-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.7; }
          33% { transform: translate(-6px, -4px) rotate(-120deg); opacity: 0.9; }
          66% { transform: translate(4px, 6px) rotate(-240deg); opacity: 0.5; }
        }
        @keyframes float-sparkle-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.6; }
          33% { transform: translate(4px, 5px) rotate(90deg); opacity: 0.8; }
          66% { transform: translate(-5px, -4px) rotate(180deg); opacity: 0.4; }
        }
        @keyframes float-sparkle-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.9; }
          33% { transform: translate(-5px, 4px) rotate(-90deg); opacity: 1; }
          66% { transform: translate(6px, -5px) rotate(-180deg); opacity: 0.7; }
        }
        .animate-heart-beat {
          animation: heart-beat 2s ease-in-out infinite;
        }
        .animate-heart-aura {
          animation: heart-aura 3s ease-in-out infinite;
          background: radial-gradient(circle, rgba(255,90,88,0.3) 0%, rgba(255,90,88,0) 70%);
          border-radius: 50%;
          width: 120%;
          height: 120%;
          margin-left: -10%;
          margin-top: -10%;
        }
        .animate-heart-aura-delayed {
          animation: heart-aura-delayed 3s ease-in-out infinite 0.3s;
          background: radial-gradient(circle, rgba(255,90,88,0.2) 0%, rgba(255,90,88,0) 70%);
          border-radius: 50%;
          width: 140%;
          height: 140%;
          margin-left: -20%;
          margin-top: -20%;
        }
        .animate-heart-aura-delayed-2 {
          animation: heart-aura-delayed-2 3s ease-in-out infinite 0.6s;
          background: radial-gradient(circle, rgba(255,90,88,0.1) 0%, rgba(255,90,88,0) 70%);
          border-radius: 50%;
          width: 160%;
          height: 160%;
          margin-left: -30%;
          margin-top: -30%;
        }
        .animate-float-sparkle-1 {
          animation: float-sparkle-1 4s ease-in-out infinite;
        }
        .animate-float-sparkle-2 {
          animation: float-sparkle-2 4s ease-in-out infinite 0.5s;
        }
        .animate-float-sparkle-3 {
          animation: float-sparkle-3 4s ease-in-out infinite 1s;
        }
        .animate-float-sparkle-4 {
          animation: float-sparkle-4 4s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  )
}