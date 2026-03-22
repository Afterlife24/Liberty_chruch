"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { Send, Heart, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { FloatingElements, GlowOrb, ParticleField } from "@/components/ui/floating-elements"

type FormType = "connect" | "prayer"

export function ConnectSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formType, setFormType] = useState<FormType>("connect")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const contentYSpring = useSpring(contentY, { stiffness: 100, damping: 30 })
  
  const formY = useTransform(scrollYProgress, [0, 1], [30, -30])
  const formYSpring = useSpring(formY, { stiffness: 100, damping: 30 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section
      id="connect"
      ref={ref}
      className="py-24 md:py-32 bg-charcoal text-warm-white relative overflow-hidden"
    >
      {/* Enhanced Floating Elements */}
      <FloatingElements variant="dark" count={6} />
      <ParticleField count={20} variant="gold" />
      
      {/* Animated Glow Orbs */}
      <GlowOrb className="-top-20 -right-20" color="gold" size="xl" />
      <GlowOrb className="-bottom-20 -left-20" color="warm" size="xl" />
      
      {/* Additional Ambient Effects */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          y: [0, -20, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content with Parallax */}
          <motion.div
            style={{ y: contentYSpring }}
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
              Get In Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 text-balance"
            >
              We Would Love to Hear From You
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-warm-white/80 text-lg mb-8 leading-relaxed"
            >
              Whether you have questions about our church, need prayer, or just
              want to say hello - we are here for you. Fill out the form and
              someone from our team will get back to you soon.
            </motion.p>

            {/* Animated Toggle Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex gap-4 mb-8"
            >
              <motion.button
                onClick={() => setFormType("connect")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden",
                  formType === "connect"
                    ? "bg-gold text-charcoal shadow-lg shadow-gold/25"
                    : "bg-warm-white/10 text-warm-white hover:bg-warm-white/20"
                )}
              >
                <MessageCircle className="w-4 h-4" />
                Connect
                {formType === "connect" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gold rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
              <motion.button
                onClick={() => setFormType("prayer")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden",
                  formType === "prayer"
                    ? "bg-gold text-charcoal shadow-lg shadow-gold/25"
                    : "bg-warm-white/10 text-warm-white hover:bg-warm-white/20"
                )}
              >
                <Heart className="w-4 h-4" />
                Prayer Request
                {formType === "prayer" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gold rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Form with Parallax */}
          <motion.div
            style={{ y: formYSpring }}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <Card className="bg-warm-white/5 backdrop-blur-md border-warm-white/10 shadow-2xl overflow-hidden relative">
              {/* Card glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
              />
              
              <CardContent className="p-8 relative z-10">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="text-center py-12"
                    >
                      <motion.div 
                        className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Sparkles className="w-10 h-10 text-gold" />
                      </motion.div>
                      <h3 className="text-2xl font-serif font-bold mb-2">
                        Thank You!
                      </h3>
                      <p className="text-warm-white/80">
                        We have received your message and will be in touch soon.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-warm-white/80 mb-2"
                        >
                          Your Name
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01, borderColor: "rgba(212, 175, 55, 0.5)" }}
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-xl text-warm-white placeholder:text-warm-white/40 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                          placeholder="John Smith"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-warm-white/80 mb-2"
                        >
                          Email Address
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01, borderColor: "rgba(212, 175, 55, 0.5)" }}
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-xl text-warm-white placeholder:text-warm-white/40 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-warm-white/80 mb-2"
                        >
                          {formType === "prayer"
                            ? "Your Prayer Request"
                            : "Your Message"}
                        </label>
                        <motion.textarea
                          whileFocus={{ scale: 1.01, borderColor: "rgba(212, 175, 55, 0.5)" }}
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-xl text-warm-white placeholder:text-warm-white/40 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 resize-none"
                          placeholder={
                            formType === "prayer"
                              ? "Share your prayer request with us..."
                              : "How can we help you?"
                          }
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          size="lg"
                          className="w-full bg-gold hover:bg-gold-dark text-charcoal font-medium rounded-full disabled:opacity-50 shadow-lg hover:shadow-gold/25 transition-shadow duration-300"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{
                                  repeat: Infinity,
                                  duration: 1,
                                  ease: "linear",
                                }}
                                className="w-4 h-4 border-2 border-charcoal border-t-transparent rounded-full"
                              />
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <Send className="w-4 h-4" />
                              Send Message
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
