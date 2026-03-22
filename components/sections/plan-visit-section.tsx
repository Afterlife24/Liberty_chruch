"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion"
import { MapPin, Clock, Car, Baby, Heart, Coffee } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FloatingElements, GlowOrb } from "@/components/ui/floating-elements"

const locations = [
  {
    name: "Newport Campus",
    address: "123 High Street, Newport NP20 1AB",
    times: ["9:30 AM Service", "11:30 AM Service"],
    mapUrl: "https://maps.google.com",
  },
  {
    name: "Risca Campus",
    address: "45 Commercial Street, Risca NP11 6BW",
    times: ["10:30 AM Service"],
    mapUrl: "https://maps.google.com",
  },
]

const expectations = [
  {
    icon: Clock,
    title: "What to Expect",
    description:
      "Our services last about 75 minutes with contemporary worship, a practical message, and time for community.",
  },
  {
    icon: Baby,
    title: "Bringing Children?",
    description:
      "We have dedicated kids programs for ages 0-11 during every service. They will love it!",
  },
  {
    icon: Coffee,
    title: "Refreshments",
    description:
      "Grab a free coffee before or after service and connect with our friendly community.",
  },
  {
    icon: Car,
    title: "Parking",
    description:
      "Free parking is available at both locations. Our welcome team will help you find a spot.",
  },
]

export function PlanVisitSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30])
  const parallaxYSpring = useSpring(parallaxY, { stiffness: 100, damping: 30 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    },
  }

  return (
    <section
      id="plan-visit"
      ref={ref}
      className="py-24 md:py-32 bg-cream relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <FloatingElements variant="light" count={5} />
      <GlowOrb className="top-20 right-10" color="gold" size="lg" />
      <GlowOrb className="bottom-20 left-10" color="cream" size="md" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-gold text-sm font-medium tracking-widest uppercase"
          >
            Visit Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-charcoal mt-4 mb-6 text-balance"
          >
            Plan Your Visit
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We would love to welcome you this Sunday. Here is everything you
            need to know before your first visit.
          </motion.p>
        </motion.div>

        {/* Location Cards with Parallax */}
        <motion.div
          style={{ y: parallaxYSpring }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {locations.map((location, index) => (
            <motion.div 
              key={location.name} 
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <Card className="h-full bg-warm-white border-border/50 hover:shadow-xl transition-all duration-500 group overflow-hidden relative">
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-serif font-semibold text-charcoal group-hover:text-gold transition-colors duration-300">
                        {location.name}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2">
                        <MapPin className="w-4 h-4 text-gold" />
                        <span className="text-sm">{location.address}</span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Heart className="w-8 h-8 text-gold/30 group-hover:text-gold transition-colors duration-300" />
                    </motion.div>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {location.times.map((time, i) => (
                      <motion.div
                        key={time}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                        className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full group-hover:bg-gold/10 transition-colors duration-300"
                      >
                        <Clock className="w-4 h-4 text-gold" />
                        <span className="text-sm font-medium text-charcoal">
                          {time}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-gold text-gold hover:bg-gold hover:text-charcoal rounded-full transition-all duration-300"
                    >
                      Get Directions
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* What to Expect Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {expectations.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <Card className="h-full bg-warm-white border-border/50 hover:shadow-lg transition-all duration-500 group overflow-hidden relative">
                {/* Subtle glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <CardContent className="p-6 text-center relative z-10">
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors duration-300"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-7 h-7 text-gold" />
                  </motion.div>
                  <h4 className="text-lg font-serif font-semibold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
