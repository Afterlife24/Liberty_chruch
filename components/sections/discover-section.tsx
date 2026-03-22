import { useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FloatingElements } from "@/components/ui/floating-elements"

const categories = [
  {
    title: "Kids",
    description: "Fun, safe, and engaging programs for children ages 0-11.",
    image: "/images/church-kids.jpg",
    href: "/discover#kids",
  },
  {
    title: "Families",
    description: "Building stronger families through community and support.",
    image: "/images/church-families.jpg",
    href: "/discover#families",
  },
  {
    title: "Youth",
    description: "Empowering the next generation to live with purpose.",
    image: "/images/church-youth.jpg",
    href: "/discover#youth",
  },
  {
    title: "Young Adults",
    description: "Connecting young adults in faith, friendship, and growth.",
    image: "/images/church-community.jpg",
    href: "/discover#young-adults",
  },
  {
    title: "Leadership Team",
    description: "Meet the passionate leaders guiding our church family.",
    image: "/images/hero-worship.jpg",
    href: "/discover#leadership",
  },
  {
    title: "Vision & Values",
    description: "Discover what drives us and shapes our community.",
    image: "/images/global-missions.jpg",
    href: "/discover#vision",
  },
]

export function DiscoverSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Simplified parallax for section
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -25])

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
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth feel
      },
    },
  }

  return (
    <section id="discover" ref={ref} className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Floating Background Elements */}
      <FloatingElements variant="light" count={4} />

      {/* Parallax Background Accent */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
      >
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-40 w-48 h-48 bg-amber-200/10 rounded-full blur-2xl" />
      </motion.div>

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
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gold text-sm font-medium tracking-widest uppercase"
          >
            Get Involved
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-serif font-bold text-charcoal mt-4 mb-6 text-balance"
          >
            Discover Liberty
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            There is a place for everyone at Liberty Church. Explore our
            ministries and find where you belong.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{
                y: -12,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group"
            >
              <Link href={category.href}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                  {/* Image with zoom effect */}
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent transition-opacity duration-500" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <motion.h3
                      className="text-2xl font-serif font-bold text-warm-white mb-2 group-hover:text-gold transition-colors duration-300"
                    >
                      {category.title}
                    </motion.h3>
                    <p className="text-warm-white/80 text-sm mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <motion.div
                      className="flex items-center gap-2 text-gold text-sm font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn More</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </motion.div>
                  </div>

                  {/* Gold glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
