import { MapPin, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { text: "home", anchor: "", isCalendar: false },
  { text: "i'm new here", anchor: "im-new-here", isCalendar: false },
  { text: "life of liberty", anchor: "life-of-liberty", isCalendar: false },
  { text: "sunday gatherings", anchor: "sunday-gatherings", isCalendar: false },
  { text: "media", anchor: "media", isCalendar: false },
  { text: "calendar", anchor: "", isCalendar: true },
];

function CalendarLightbox({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4"
      onClick={handleBackdrop}
    >
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="font-condensed font-black text-2xl uppercase text-gray-900">Calendar</h2>
          <button
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200 text-gray-900 p-2 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-4">
          <iframe
            frameBorder="0"
            height="700"
            allowTransparency={true}
            scrolling="yes"
            src="https://libertychurchwales.churchsuite.com/-/calendar/8d15bc1c-3db8-4f50-a798-08b5c00a625d"
            style={{ borderWidth: 0 }}
            width="100%"
            title="Liberty Church Calendar"
          />
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (anchor: string, isCalendar: boolean) => {
    setMobileOpen(false);
    if (isCalendar) {
      setCalendarOpen(true);
      return;
    }
    if (!anchor) {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
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
                <button
                  onClick={() => handleNavClick(link.anchor, link.isCalendar)}
                  className="text-gray-800 hover:text-black text-sm font-medium transition-colors capitalize"
                >
                  {link.text}
                </button>
              </span>
            ))}
          </nav>

          {/* Mobile nav */}
          {mobileOpen && (
            <nav className="sm:hidden border-t border-gray-200 py-3 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.text}
                  onClick={() => handleNavClick(link.anchor, link.isCalendar)}
                  className="text-gray-800 hover:text-black text-sm font-medium capitalize px-2 text-left"
                >
                  {link.text}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {calendarOpen && <CalendarLightbox onClose={() => setCalendarOpen(false)} />}
    </>
  );
}
