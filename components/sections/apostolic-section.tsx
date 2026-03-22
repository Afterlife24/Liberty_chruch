"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion"
import { Target, Heart, Users, Globe, Sparkles, BookOpen } from "lucide-react"
import { FloatingElements, GlowOrb } from "@/components/ui/floating-elements"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We are sent to bring transformation to our cities and beyond.",
  },
  {
    icon: Heart,
    title: "Passionate Worship",
    description:
      "We create space for authentic encounters with God's presence.",
  },
  {
    icon: Users,
    title: "Kingdom Community",
    description:
      "We build genuine relationships that reflect God's family.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "We partner with churches and missions around the world.",
  },
  {
    icon: Sparkles,
    title: "Spirit-Led",
    description:
      "We follow the leading of the Holy Spirit in all we do.",
  },
  {
    icon: BookOpen,
    title: "Biblical Foundation",
    description:
      "We anchor everything we do in the truth of Scripture.",
  },
]

export function ApostolicSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Parallax for content
  const leftContentY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const leftContentYSpring = useSpring(leftContentY, { stiffness: 100, damping: 30 })

  const rightContentY = useTransform(scrollYProgress, [0, 1], [80, -40])
  const rightContentYSpring = useSpring(rightContentY, { stiffness: 100, damping: 30 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  return (
    <section ref={ref} className="py-24 md:py-32 bg-charcoal text-warm-white overflow-hidden relative">
      {/* Floating Elements */}
      <FloatingElements variant="dark" count={6} />

      {/* Glowing Orbs */}
      <GlowOrb className="top-20 left-10" color="gold" size="lg" />
      <GlowOrb className="bottom-20 right-20" color="warm" size="md" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content with Parallax */}
          <motion.div
            style={{ y: leftContentYSpring }}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gold text-sm font-medium tracking-widest uppercase"
            >
              Our Identity
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 text-balance"
            >
              An Apostolic Movement
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-warm-white/80 text-lg mb-6 leading-relaxed"
            >
              Liberty Church is more than a local congregation - we are part of
              a movement committed to establishing God's Kingdom in every sphere
              of society.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-warm-white/80 text-lg leading-relaxed"
            >
              Our apostolic calling compels us to plant churches, raise leaders,
              and extend our reach to the nations. We believe the local church
              is God's chosen vehicle for transformation.
            </motion.p>

            {/* Animated decorative line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
              className="w-32 h-1 bg-gradient-to-r from-gold to-gold/30 mt-8 origin-left rounded-full"
            />
          </motion.div>

          {/* Right Grid with Parallax */}
          <motion.div
            style={{ y: rightContentYSpring }}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="bg-warm-white/5 backdrop-blur-sm border border-warm-white/10 rounded-xl p-6 hover:bg-warm-white/10 hover:border-gold/30 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-6 h-6 text-gold" />
                  </motion.div>
                  <h4 className="text-lg font-serif font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-warm-white/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
