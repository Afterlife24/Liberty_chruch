"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Cross, Heart, Sparkles, BookOpen, ArrowRight, Quote } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const beliefs = [
  {
    icon: Cross,
    title: "He is God's Son",
    description:
      "Jesus is the eternal Son of God who became human. He is fully God and fully man - the unique bridge between heaven and earth.",
  },
  {
    icon: Heart,
    title: "He Loves You",
    description:
      "Jesus demonstrated the ultimate love by giving His life for us. No matter your past or present, His love for you is unconditional.",
  },
  {
    icon: Sparkles,
    title: "He Transforms Lives",
    description:
      "Jesus has the power to change everything. He heals the broken, forgives the guilty, and gives hope to the hopeless.",
  },
  {
    icon: BookOpen,
    title: "He Offers New Life",
    description:
      "Through faith in Jesus, we receive forgiveness, purpose, and eternal life. He invites everyone to experience this gift.",
  },
]

const testimonies = [
  {
    quote:
      "I spent years searching for meaning in all the wrong places. When I encountered Jesus, everything changed. He gave me purpose and peace I never knew existed.",
    name: "Sarah",
    role: "Liberty Church Member",
  },
  {
    quote:
      "I thought I had to clean up my life before coming to God. But Jesus met me right where I was, broken and lost. His grace is truly amazing.",
    name: "James",
    role: "Liberty Church Member",
  },
]

export default function WhoIsJesusPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 md:py-40 bg-cream overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 0.08 } : {}}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isHeroInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-8"
            >
              <Cross className="w-12 h-12 text-gold" />
            </motion.div>

            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              The Heart of Our Faith
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mt-4 mb-8 text-balance">
              Who is Jesus?
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              For over 2,000 years, Jesus Christ has been the most influential
              person in human history. But who is He really, and why does He
              matter to you today?
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                The Story
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mt-4 mb-6">
                A Simple Explanation
              </h2>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-cream rounded-2xl p-8 md:p-10"
              >
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  The Problem
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We were created to live in perfect relationship with God - our
                  loving Creator. But something went wrong. Humanity chose its
                  own way, and that choice (what the Bible calls &ldquo;sin&rdquo;) separated
                  us from God. This separation affects every part of our lives -
                  our relationships, our purpose, and our future.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-charcoal text-warm-white rounded-2xl p-8 md:p-10"
              >
                <h3 className="text-2xl font-serif font-bold mb-4">
                  God&apos;s Solution
                </h3>
                <p className="text-warm-white/80 text-lg leading-relaxed">
                  God loved us too much to leave us separated from Him. So He
                  sent His Son, Jesus, to bridge the gap. Jesus lived a perfect
                  life, died on a cross to pay for our sins, and rose again
                  three days later - conquering death itself. Through Jesus, the
                  relationship with God we were made for is restored.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gold/20 rounded-2xl p-8 md:p-10"
              >
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  Your Invitation
                </h3>
                <p className="text-charcoal/80 text-lg leading-relaxed">
                  Jesus offers this gift of restored relationship to everyone -
                  including you. It is not about being perfect or having it all
                  together. It is simply about believing in Jesus, accepting His
                  gift of forgiveness, and beginning a new life with Him. This
                  is the good news we call the Gospel.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Our Beliefs
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mt-4 mb-6">
              What We Believe About Jesus
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-border/50 hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                      <belief.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-3">
                      {belief.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {belief.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonies */}
      <section className="py-24 bg-charcoal text-warm-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Real Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Lives Changed by Jesus
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonies.map((testimony, index) => (
              <motion.div
                key={testimony.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card className="bg-warm-white/5 border-warm-white/10 h-full">
                  <CardContent className="p-8">
                    <Quote className="w-10 h-10 text-gold/50 mb-4" />
                    <p className="text-warm-white/90 text-lg leading-relaxed mb-6 italic">
                      &ldquo;{testimony.quote}&rdquo;
                    </p>
                    <div>
                      <p className="font-serif font-semibold text-gold">
                        {testimony.name}
                      </p>
                      <p className="text-warm-white/60 text-sm">
                        {testimony.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Take the Next Step
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mt-4 mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Whether you are just curious or ready to make a decision, we would
              love to walk with you on your journey. There is no pressure, just
              genuine people ready to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-charcoal font-medium rounded-full group"
              >
                <Link href="/contact">
                  Talk to Someone
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-warm-white rounded-full"
              >
                <Link href="#plan-visit">Visit This Sunday</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
