"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X, ArrowRight, Users, Heart, Sparkles, Target, BookOpen, Music } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ministries = [
  {
    id: "kids",
    title: "Kids Ministry",
    subtitle: "Ages 0-11",
    description:
      "Our kids ministry provides a safe, fun, and engaging environment where children can learn about Jesus at their level. From nursery to pre-teens, we have age-appropriate programs that make faith exciting and memorable.",
    features: [
      "Age-appropriate teaching",
      "Safe and secure check-in",
      "Trained and vetted volunteers",
      "Fun activities and games",
      "Worship designed for kids",
    ],
    image: "/images/church-kids.jpg",
    icon: Heart,
  },
  {
    id: "families",
    title: "Families",
    subtitle: "Growing Together",
    description:
      "Strong families build strong communities. Our family ministry provides resources, events, and support to help families thrive in every season of life - from newlyweds to empty nesters.",
    features: [
      "Marriage enrichment courses",
      "Parenting workshops",
      "Family-friendly events",
      "Support groups",
      "Counseling resources",
    ],
    image: "/images/church-families.jpg",
    icon: Users,
  },
  {
    id: "youth",
    title: "Youth Ministry",
    subtitle: "Ages 12-17",
    description:
      "Our youth ministry is all about helping teenagers navigate life with faith as their foundation. Through weekly gatherings, camps, and mentorship, we empower the next generation to live boldly for Christ.",
    features: [
      "Weekly Friday night gatherings",
      "Small group discussions",
      "Summer camps and retreats",
      "Leadership development",
      "Community service projects",
    ],
    image: "/images/church-youth.jpg",
    icon: Sparkles,
  },
  {
    id: "young-adults",
    title: "Young Adults",
    subtitle: "Ages 18-30",
    description:
      "Navigating adulthood can be challenging. Our young adults ministry creates space for connection, growth, and purpose. Join us for authentic community and real conversations about faith and life.",
    features: [
      "Weekly connect groups",
      "Social events",
      "Career and calling workshops",
      "Mentorship opportunities",
      "Mission trips",
    ],
    image: "/images/church-community.jpg",
    icon: Target,
  },
  {
    id: "leadership",
    title: "Leadership Team",
    subtitle: "Meet Our Leaders",
    description:
      "Our leadership team is passionate about serving God and serving you. Each leader brings unique gifts and experiences to help guide our church family toward God's purposes.",
    features: [
      "Senior pastoral team",
      "Ministry directors",
      "Elders and trustees",
      "Worship team leaders",
      "Volunteer coordinators",
    ],
    image: "/images/hero-worship.jpg",
    icon: BookOpen,
  },
  {
    id: "vision",
    title: "Vision & Values",
    subtitle: "What Drives Us",
    description:
      "Everything we do flows from our vision to see lives restored, renewed, and rebuilt through the power of the Gospel. Our values shape how we worship, serve, and reach our community.",
    features: [
      "Gospel-centered mission",
      "Authentic community",
      "Passionate worship",
      "Generous giving",
      "Global impact",
    ],
    image: "/images/global-missions.jpg",
    icon: Music,
  },
]

export default function DiscoverPage() {
  const [selectedMinistry, setSelectedMinistry] = useState<typeof ministries[0] | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-24 bg-cream overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 0.05 } : {}}
            className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Find Your Place
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mt-4 mb-6 text-balance">
              Discover Liberty
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              There is a place for everyone at Liberty Church. Explore our
              ministries and find where you can connect, grow, and serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <MinistryCard
                key={ministry.id}
                ministry={ministry}
                index={index}
                onClick={() => setSelectedMinistry(ministry)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMinistry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm"
            onClick={() => setSelectedMinistry(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-warm-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <Image
                  src={selectedMinistry.image}
                  alt={selectedMinistry.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent rounded-t-2xl" />
                <button
                  onClick={() => setSelectedMinistry(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-warm-white/20 backdrop-blur-sm flex items-center justify-center text-warm-white hover:bg-warm-white/30 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6">
                  <span className="text-gold text-sm font-medium">
                    {selectedMinistry.subtitle}
                  </span>
                  <h2 className="text-3xl font-serif font-bold text-warm-white">
                    {selectedMinistry.title}
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {selectedMinistry.description}
                </p>

                <h3 className="font-serif font-semibold text-charcoal mb-4">
                  What We Offer
                </h3>
                <ul className="space-y-3 mb-8">
                  {selectedMinistry.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      <span className="text-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-gold hover:bg-gold-dark text-charcoal font-medium rounded-full">
                  Get Connected
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}

function MinistryCard({
  ministry,
  index,
  onClick,
}: {
  ministry: typeof ministries[0]
  index: number
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      id={ministry.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <Card className="h-full overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300">
        <div className="relative h-48">
          <Image
            src={ministry.image}
            alt={ministry.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
          <div className="absolute top-4 left-4">
            <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center">
              <ministry.icon className="w-5 h-5 text-gold" />
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <span className="text-gold text-xs font-medium tracking-wider uppercase">
            {ministry.subtitle}
          </span>
          <h3 className="text-xl font-serif font-bold text-charcoal mt-1 mb-3 group-hover:text-gold transition-colors">
            {ministry.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {ministry.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
