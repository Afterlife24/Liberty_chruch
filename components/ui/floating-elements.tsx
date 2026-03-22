"use client"

import { motion } from "framer-motion"

interface FloatingElementsProps {
  variant?: "light" | "dark" | "gold"
  count?: number
  className?: string
}

export function FloatingElements({
  variant = "light",
  count = 3, // Reduced from 5
  className = "",
}: FloatingElementsProps) {
  const elements = Array.from({ length: count }, (_, i) => i)

  const getColor = () => {
    switch (variant) {
      case "dark":
        return "bg-warm-white/5"
      case "gold":
        return "bg-gold/10"
      default:
        return "bg-charcoal/5"
    }
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((i) => {
        const size = Math.random() * 150 + 100 // Smaller sizes
        const initialX = Math.random() * 100
        const initialY = Math.random() * 100
        const duration = Math.random() * 30 + 30 // Slower animations
        const delay = Math.random() * 5

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${getColor()} blur-3xl`}
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              x: [0, 20, 0], // Simplified movement
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear", // Simpler easing
            }}
          />
        )
      })}
    </div>
  )
}

interface GlowOrbProps {
  className?: string
  color?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function GlowOrb({ className = "", color = "gold", size = "md" }: GlowOrbProps) {
  const sizeMap = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]",
  }

  const colorMap: Record<string, string> = {
    gold: "bg-gold/20",
    warm: "bg-orange-300/15",
    cream: "bg-amber-100/20",
  }

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${sizeMap[size]} ${colorMap[color] || colorMap.gold} ${className}`}
      animate={{
        scale: [1, 1.1, 1], // Reduced scale change
        opacity: [0.2, 0.3, 0.2], // Lower opacity
      }}
      transition={{
        duration: 10, // Slower
        repeat: Infinity,
        ease: "linear",
      }}
    />
  )
}

interface ParticleFieldProps {
  count?: number
  variant?: "light" | "dark" | "gold"
}

export function ParticleField({ count = 10, variant = "light" }: ParticleFieldProps) { // Reduced from 20
  const particles = Array.from({ length: count }, (_, i) => i)

  const getColor = () => {
    switch (variant) {
      case "dark":
        return "bg-warm-white/30"
      case "gold":
        return "bg-gold/40"
      default:
        return "bg-charcoal/20"
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => {
        const size = Math.random() * 3 + 2 // Smaller particles
        const initialX = Math.random() * 100
        const initialY = Math.random() * 100
        const duration = Math.random() * 20 + 15 // Slower
        const delay = Math.random() * 5

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${getColor()}`}
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              y: [0, -80, 0], // Reduced distance
              opacity: [0, 0.6, 0], // Lower opacity
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )
      })}
    </div>
  )
}
