import { MapPin } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { text: "home", href: "/" },
  { text: "i'm new here", href: "/im-new-here" },
  { text: "life of liberty", href: "/life-of-liberty" },
  { text: "sunday gatherings", href: "/sunday-gatherings" },
  { text: "media", href: "/media" },
  { text: "upcoming events", href: "/events" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" aria-label="Liberty Church Home">
            <img
              src="/images/logo/libertylogo_1 (1).png"
              alt="Liberty Church"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Location info */}
          <div className="hidden sm:flex items-start gap-1.5 text-right">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-600" />
            <div className="text-xs text-gray-700 leading-snug">
              <p className="font-bold uppercase tracking-wide text-black">
                Join Us This Sunday At Liberty
              </p>
              <p>Gaer Park Drive, NP20 3NN &nbsp;|&nbsp; 10:30AM</p>
              <p>Risca Scouts Hall, NP11 6LL &nbsp;|&nbsp; 10:30AM</p>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <span className="block w-5 h-0.5 bg-gray-800" />
              <span className="block w-5 h-0.5 bg-gray-800" />
              <span className="block w-5 h-0.5 bg-gray-800" />
            </div>
          </button>
        </div>

        {/* Nav */}
        <nav className="border-t border-gray-200 py-2 text-center hidden sm:block">
          {navLinks.map((link, i) => (
            <span key={link.text}>
              {i > 0 && <span className="text-gray-300 mx-2">|</span>}
              <Link
                to={link.href}
                className="text-gray-800 hover:text-black text-sm font-medium transition-colors capitalize"
              >
                {link.text}
              </Link>
            </span>
          ))}
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="sm:hidden border-t border-gray-200 py-3 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                to={link.href}
                className="text-gray-800 hover:text-black text-sm font-medium capitalize px-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
