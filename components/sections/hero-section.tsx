import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ParticleField } from "@/components/ui/floating-elements"

const locations = [
  {
    name: "Newport",
    times: "Sunday 9:30 & 11:30",
    address: "Newport City Centre",
  },
  {
    name: "Risca",
    times: "Sunday 10:30",
    address: "Risca Town Centre",
  },
]

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Simplified parallax - less intensive
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <img
          src="/images/hero-worship.jpg"
          alt="Worship gathering at Liberty Church"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />
      </motion.div>

      {/* Floating Particles - Reduced and hidden on mobile */}
      <div className="hidden md:block">
        <ParticleField count={15} variant="gold" />
      </div>

      {/* Animated Light Rays - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-gold/20 via-gold/5 to-transparent blur-sm"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-warm-white/10 via-warm-white/5 to-transparent blur-sm"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-center text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gold text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase mb-2 sm:mb-3 md:mb-4"
        >
          Welcome to Liberty Church UK
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-warm-white mb-3 sm:mb-4 md:mb-6 text-balance px-2"
        >
          Restore. Renew. Rebuild.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-warm-white/90 max-w-2xl mb-6 sm:mb-8 md:mb-12 px-4 leading-relaxed"
        >
          Join us in Newport or Risca for life-changing worship, community, and
          a place where you belong.
        </motion.p>

        {/* Location Cards with Enhanced Hover */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 w-full max-w-2xl px-4"
        >
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.15, duration: 0.6 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="bg-warm-white/10 backdrop-blur-md border-warm-white/20 hover:bg-warm-white/20 hover:border-gold/40 transition-all duration-500 cursor-pointer group overflow-hidden relative">
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <CardContent className="p-3 sm:p-4 md:p-6 relative z-10">
                  <h3 className="text-base sm:text-lg md:text-xl font-serif font-semibold text-warm-white mb-1.5 sm:mb-2 md:mb-3 group-hover:text-gold transition-colors duration-300">
                    {location.name}
                  </h3>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-warm-white/80 text-xs sm:text-sm mb-1 sm:mb-1.5 md:mb-2">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gold flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{location.times}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-warm-white/80 text-xs sm:text-sm">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gold flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{location.address}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-4 sm:mt-6 md:mt-8 px-4 w-full max-w-xs sm:max-w-sm"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-charcoal font-medium rounded-full px-6 sm:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-gold/25 transition-shadow duration-300 w-full"
            >
              <a href="#plan-visit">Plan Your Visit</a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
