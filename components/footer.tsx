import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Instagram, Facebook, Youtube } from "lucide-react"

const footerLinks = {
  visit: [
    { label: "Plan Your Visit", href: "#plan-visit" },
    { label: "Newport Campus", href: "#plan-visit" },
    { label: "Risca Campus", href: "#plan-visit" },
    { label: "Service Times", href: "#plan-visit" },
  ],
  connect: [
    { label: "Contact Us", href: "/contact" },
    { label: "Prayer Request", href: "#connect" },
    { label: "Get Involved", href: "/global-adventure" },
    { label: "Give", href: "/giving" },
  ],
  discover: [
    { label: "Who is Jesus?", href: "/who-is-jesus" },
    { label: "Kids Ministry", href: "/discover#kids" },
    { label: "Youth", href: "/discover#youth" },
    { label: "Vision & Values", href: "/discover#vision" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-cream border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-serif font-bold text-charcoal">
                Liberty Church
              </h3>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
              A warm, welcoming church community in Newport and Risca, focused
              on restoring lives and rebuilding hope through the love of Jesus.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-charcoal/10 flex items-center justify-center text-charcoal hover:bg-gold hover:text-charcoal transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-semibold text-charcoal mb-4">
              Visit
            </h4>
            <ul className="space-y-3">
              {footerLinks.visit.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-charcoal mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-charcoal mb-4">
              Discover
            </h4>
            <ul className="space-y-3">
              {footerLinks.discover.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Liberty Church UK. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
