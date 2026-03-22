import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingElements, GlowOrb } from "@/components/ui/floating-elements"

const checklist = [
  "Arrive a few minutes early to grab a coffee",
  "Our welcome team will greet you at the door",
  "Find a seat anywhere - there are no reserved spots",
  "Kids can check in at the kids area",
  "Relax and enjoy - no pressure to participate",
  "Stay after for refreshments and conversation",
]

export function NewHereSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Parallax effects - simplified
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30])
  const contentY = useTransform(scrollYProgress, [0, 1], [20, -20])

  return (
    <section ref={ref} className="py-24 md:py-32 bg-warm-white overflow-hidden relative">
      {/* Floating Elements */}
      <FloatingElements variant="light" count={4} />
      <GlowOrb className="top-1/3 right-0" color="gold" size="lg" />
      <GlowOrb className="bottom-1/3 left-0" color="cream" size="md" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with Parallax */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <img
                src="/images/church-community.jpg"
                alt="Welcoming church community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </motion.div>

            {/* Animated Decorative Elements */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full -z-10"
            >
              <motion.div
                className="w-full h-full rounded-full bg-gold/10"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
              className="absolute -top-6 -left-6 w-24 h-24 bg-gold/10 rounded-full -z-10"
            >
              <motion.div
                className="w-full h-full rounded-full bg-amber-200/20"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content with Parallax */}
          <motion.div
            style={{ y: contentY }}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gold text-sm font-medium tracking-widest uppercase"
            >
              New Here?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl md:text-5xl font-serif font-bold text-charcoal mt-4 mb-6 text-balance"
            >
              We Are So Glad You Found Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              Walking into a new church can feel overwhelming, but it does not
              have to be. Here is a simple checklist to help you feel right at
              home on your first visit.
            </motion.p>

            {/* Animated Checklist */}
            <ul className="space-y-4 mb-8">
              {checklist.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.6 + index * 0.1,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-3 group cursor-default"
                >
                  <motion.div
                    className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/40 transition-colors duration-300"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4, type: "spring" }}
                  >
                    <Check className="w-4 h-4 text-gold" />
                  </motion.div>
                  <span className="text-charcoal group-hover:text-gold transition-colors duration-300">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3, duration: 0.5 }}
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
                  <a href="#connect">
                    Get Connected
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
