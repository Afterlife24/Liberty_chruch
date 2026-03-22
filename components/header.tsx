import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#plan-visit", label: "Plan Your Visit" },
  { href: "#discover", label: "Discover Liberty" },
  { href: "/global-adventure", label: "Global Adventure" },
  { href: "/who-is-jesus", label: "Who is Jesus?" },
  { href: "/giving", label: "Give" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? "text-charcoal" : "text-warm-white"
                  }`}
              >
                Liberty Church
              </motion.div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${isScrolled
                      ? "text-charcoal/80 hover:text-gold"
                      : "text-warm-white/90 hover:text-gold"
                      }`}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
              <Button
                asChild
                className="bg-gold hover:bg-gold-dark text-charcoal font-medium rounded-full px-6"
              >
                <a href="#connect">Connect</a>
              </Button>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 ${isScrolled ? "text-charcoal" : "text-warm-white"
                }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-lg lg:hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-serif font-bold text-warm-white">
                  Liberty Church
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-warm-white p-2"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-serif text-warm-white hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-charcoal font-medium rounded-full w-full"
                  >
                    <a
                      href="#connect"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Connect With Us
                    </a>
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
