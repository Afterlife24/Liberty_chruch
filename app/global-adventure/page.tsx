"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Globe, MapPin, Heart, Users, Calendar, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const missionLocations = [
  {
    region: "Africa",
    country: "Uganda",
    description:
      "We partner with local churches in Uganda to plant new congregations, support orphanages, and provide clean water to communities in need.",
    impact: "5 churches planted, 200+ children supported",
    image: "/images/global-missions.jpg",
  },
  {
    region: "Asia",
    country: "India",
    description:
      "Our work in India focuses on supporting orphanages, providing education for underprivileged children, and training local pastors.",
    impact: "3 orphanages supported, 150 children educated",
    image: "/images/church-kids.jpg",
  },
  {
    region: "Europe",
    country: "Romania",
    description:
      "We run annual youth camps in Romania, support local churches, and provide resources for community outreach programs.",
    impact: "500+ youth impacted annually",
    image: "/images/church-youth.jpg",
  },
  {
    region: "South America",
    country: "Brazil",
    description:
      "In Brazil, we partner with local ministries for community outreach, church support, and leadership development.",
    impact: "2 church partnerships, leadership training",
    image: "/images/church-community.jpg",
  },
]

const upcomingTrips = [
  {
    destination: "Uganda",
    date: "July 2026",
    duration: "10 days",
    focus: "Church planting & community work",
  },
  {
    destination: "Romania",
    date: "August 2026",
    duration: "7 days",
    focus: "Youth camp ministry",
  },
  {
    destination: "India",
    date: "October 2026",
    duration: "12 days",
    focus: "Orphanage support & training",
  },
]

const waysToHelp = [
  {
    icon: Heart,
    title: "Give",
    description: "Support our global mission work financially.",
  },
  {
    icon: Users,
    title: "Go",
    description: "Join one of our mission trips.",
  },
  {
    icon: Globe,
    title: "Pray",
    description: "Commit to praying for our global partners.",
  },
]

export default function GlobalAdventurePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/images/global-missions.jpg"
            alt="Global missions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isHeroInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="w-20 h-20 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center mb-6"
          >
            <Globe className="w-10 h-10 text-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold text-warm-white mb-6 text-balance"
          >
            Global Adventure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-warm-white/90 max-w-2xl"
          >
            From Newport to the nations - join us in making a global impact for
            the Kingdom of God.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl text-charcoal font-serif leading-relaxed"
            >
              &ldquo;Go therefore and make disciples of all nations&rdquo; - this
              command of Jesus is at the heart of everything we do. We believe
              every believer is called to play a part in God&apos;s global mission.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Where We Serve */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Our Reach
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mt-4 mb-6">
              Where We Serve
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We partner with churches and organizations around the world to
              bring hope, support, and transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {missionLocations.map((location, index) => (
              <MissionCard key={location.country} location={location} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Trips */}
      <section className="py-24 bg-charcoal text-warm-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Join Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Upcoming Mission Trips
            </h2>
            <p className="text-warm-white/80 max-w-2xl mx-auto text-lg">
              Experience the adventure of serving God in another culture. Our
              trips are life-changing for everyone involved.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingTrips.map((trip, index) => (
              <motion.div
                key={trip.destination}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-warm-white/5 border-warm-white/10 hover:bg-warm-white/10 transition-colors h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-gold mb-4">
                      <MapPin className="w-5 h-5" />
                      <span className="font-serif font-semibold text-xl">
                        {trip.destination}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-warm-white/70 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{trip.date}</span>
                      <span className="text-warm-white/40">|</span>
                      <span>{trip.duration}</span>
                    </div>
                    <p className="text-warm-white/80 mb-4">{trip.focus}</p>
                    <Button
                      variant="outline"
                      className="w-full border-gold text-gold hover:bg-gold hover:text-charcoal rounded-full"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Get Involved
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mt-4 mb-6">
              How You Can Help
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Everyone can play a part in our global mission. Here are three
              ways you can make a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {waysToHelp.map((way, index) => (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                  <way.icon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">
                  {way.title}
                </h3>
                <p className="text-muted-foreground">{way.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-charcoal font-medium rounded-full"
            >
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function MissionCard({
  location,
  index,
}: {
  location: typeof missionLocations[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-shadow h-full group">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="relative h-64 md:h-full">
            <Image
              src={location.image}
              alt={`Mission in ${location.country}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal/20 md:bg-gradient-to-b" />
          </div>
          <CardContent className="p-8 flex flex-col justify-center">
            <span className="text-gold text-xs font-medium tracking-wider uppercase">
              {location.region}
            </span>
            <h3 className="text-2xl font-serif font-bold text-charcoal mt-1 mb-4 group-hover:text-gold transition-colors">
              {location.country}
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {location.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-gold font-medium">
              <Heart className="w-4 h-4" />
              <span>{location.impact}</span>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
}
