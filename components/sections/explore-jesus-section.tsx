import { useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Cross } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingElements, GlowOrb, ParticleField } from "@/components/ui/floating-elements"

export function ExploreJesusSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [20, -20])

  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Multiple Floating Elements for Depth */}
      <FloatingElements variant="gold" count={6} />
      <ParticleField count={15} variant="gold" />

      {/* Central Glow */}
      <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="gold" size="xl" />

      {/* Additional ambient glows */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-amber-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        style={{ y: contentY }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Animated Cross Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 150 }}
            className="relative w-24 h-24 mx-auto mb-8"
          >
            {/* Outer ring pulse */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gold/20"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Inner ring */}
            <div className="absolute inset-2 rounded-full bg-gold/10" />
            {/* Icon container */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Cross className="w-12 h-12 text-gold" />
            </motion.div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gold text-sm font-medium tracking-widest uppercase"
          >
            The Heart of Our Faith
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif font-bold text-charcoal mt-4 mb-6 text-balance"
          >
            Who is Jesus?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8"
          >
            At the center of everything we do is a person - Jesus Christ. He is
            not just a historical figure or a moral teacher. He is the Son of
            God who came to restore our relationship with the Father and give us
            abundant life.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-muted-foreground text-lg leading-relaxed mb-10"
          >
            Whether you are exploring faith for the first time or looking to
            deepen your relationship with God, we would love to walk with you on
            that journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-charcoal font-medium rounded-full group shadow-lg hover:shadow-gold/25 transition-shadow duration-300"
              >
                <Link href="/who-is-jesus">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-warm-white rounded-full transition-all duration-300"
              >
                <a href="#connect">Ask a Question</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
