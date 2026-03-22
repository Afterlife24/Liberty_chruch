"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Heart,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type FormType = "general" | "prayer"

const contactInfo = [
  {
    icon: MapPin,
    title: "Newport Campus",
    details: ["123 High Street", "Newport NP20 1AB"],
  },
  {
    icon: MapPin,
    title: "Risca Campus",
    details: ["45 Commercial Street", "Risca NP11 6BW"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+44 1234 567890"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@libertychurch.uk"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday", "9:00 AM - 5:00 PM"],
  },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [formType, setFormType] = useState<FormType>("general")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-cream overflow-hidden"
      >
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
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mt-4 mb-6 text-balance">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              We would love to hear from you. Whether you have questions, need
              prayer, or just want to say hello - we are here for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-6"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border-border/50 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="font-serif font-semibold text-charcoal mb-1">
                            {item.title}
                          </h3>
                          {item.details.map((detail) => (
                            <p
                              key={detail}
                              className="text-muted-foreground text-sm"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-charcoal mb-4">
                      Follow Us
                    </h3>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-colors"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="border-border/50">
                <CardContent className="p-8 md:p-10">
                  {/* Form Type Toggle */}
                  <div className="flex gap-4 mb-8">
                    <button
                      onClick={() => setFormType("general")}
                      className={cn(
                        "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all",
                        formType === "general"
                          ? "bg-gold text-charcoal"
                          : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                      )}
                    >
                      <MessageCircle className="w-4 h-4" />
                      General Inquiry
                    </button>
                    <button
                      onClick={() => setFormType("prayer")}
                      className={cn(
                        "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all",
                        formType === "prayer"
                          ? "bg-gold text-charcoal"
                          : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                      )}
                    >
                      <Heart className="w-4 h-4" />
                      Prayer Request
                    </button>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                        <Heart className="w-10 h-10 text-gold" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        {formType === "prayer"
                          ? "We have received your prayer request and our team will be praying for you."
                          : "We have received your message and will get back to you soon."}
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-charcoal mb-2"
                          >
                            Your Name <span className="text-gold">*</span>
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.01 }}
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-cream border border-border rounded-xl text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                            placeholder="John Smith"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-charcoal mb-2"
                          >
                            Email Address <span className="text-gold">*</span>
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.01 }}
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-cream border border-border rounded-xl text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-charcoal mb-2"
                          >
                            Phone Number
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.01 }}
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-cream border border-border rounded-xl text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                            placeholder="+44 1234 567890"
                          />
                        </div>

                        {formType === "general" && (
                          <div>
                            <label
                              htmlFor="subject"
                              className="block text-sm font-medium text-charcoal mb-2"
                            >
                              Subject <span className="text-gold">*</span>
                            </label>
                            <motion.input
                              whileFocus={{ scale: 1.01 }}
                              type="text"
                              id="subject"
                              required
                              value={formData.subject}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  subject: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 bg-cream border border-border rounded-xl text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                              placeholder="How can we help?"
                            />
                          </div>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-charcoal mb-2"
                        >
                          {formType === "prayer"
                            ? "Your Prayer Request"
                            : "Your Message"}{" "}
                          <span className="text-gold">*</span>
                        </label>
                        <motion.textarea
                          whileFocus={{ scale: 1.01 }}
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-cream border border-border rounded-xl text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
                          placeholder={
                            formType === "prayer"
                              ? "Share your prayer request with us. Everything you share is treated with confidentiality..."
                              : "Tell us how we can help you..."
                          }
                        />
                      </div>

                      {formType === "prayer" && (
                        <p className="text-sm text-muted-foreground">
                          Your prayer request is confidential. Our prayer team
                          will lift your request up in prayer.
                        </p>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        size="lg"
                        className="w-full bg-gold hover:bg-gold-dark text-charcoal font-medium rounded-full disabled:opacity-50"
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
                              className="w-5 h-5 border-2 border-charcoal border-t-transparent rounded-full"
                            />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            {formType === "prayer"
                              ? "Submit Prayer Request"
                              : "Send Message"}
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
