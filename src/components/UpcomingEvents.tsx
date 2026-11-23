import { Instagram, Facebook, Youtube } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { useState, useEffect } from 'react';
import ChristmasLightbox from './ChristmasLightbox';

interface EventSlide {
  image: string;
  alt: string;
  link: string;
  /** Opens an on-page pop-up instead of an external link. */
  popup?: 'christmas';
}

const events: EventSlide[] = [
  {
    image: '/images/christmas/christmas-at-liberty-tile.jpg',
    alt: 'Christmas at Liberty. Click to see everything happening over Christmas.',
    link: '',
    popup: 'christmas',
  },
  {
    image: '/images/uncomingevents/youth-november-2026.jpg',
    alt: 'Liberty Youth November 2026 dates, Friday nights 7-9pm at Liberty Hub, Gaer Park Drive, Newport. Girls and Boys Night on 27 November',
    link: '',
  },
  {
    image: '/images/uncomingevents/marriage-matters-nov-2026.png',
    alt: 'Marriage Matters, 27th and 28th November 2026. Two becoming one. Click to register your place',
    link: 'https://libertychurchwales.churchsuite.com/events/6smj3p6x',
  },
  {
    image: '/images/uncomingevents/christmas-market-quiz-night-dec-2026.png',
    alt: 'Christmas Market 5-7pm and Quiz Night 7-9pm, Sunday 6th December, The Coffee House, Gaer Park Drive, Newport',
    link: '',
  },
];

export default function UpcomingEvents() {
  const [current, setCurrent] = useState(0);
  const [christmasOpen, setChristmasOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % events.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="upcoming-events" className="max-w-5xl mx-auto px-4 py-8 scroll-mt-32">
      <SectionTitle title="Upcoming Events" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Events Card */}
        <div
          className="relative overflow-hidden rounded-md min-h-[280px] cursor-pointer group bg-black"
          onClick={() => {
            const slide = events[current];
            if (slide.popup === 'christmas') setChristmasOpen(true);
            else if (slide.link) window.open(slide.link, '_blank', 'noopener,noreferrer');
          }}
        >
          {events.map((event, i) => (
            <img
              key={i}
              src={event.image}
              alt={event.alt}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/15 transition-colors" />

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation(); // dots sit inside the clickable slide; don't trigger its link/pop-up
                  setCurrent(i);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`Event ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stay Connected Card */}
        <div className="rounded-md bg-[#d97b60] text-white p-6 flex flex-col gap-3 min-h-[280px]">
          <h3 className="font-condensed font-black text-3xl uppercase leading-tight tracking-wide">
            Stay
            <br />
            Connected
          </h3>

          <p className="text-sm leading-relaxed text-white/90">
            Find out what's happening in the life of Liberty and how you can get involved!
          </p>

          <p className="text-sm font-semibold leading-snug text-white/95">
            Click the link below to join our central Whatsapp communication
          </p>

          <p className="text-xs leading-relaxed text-white/80">
            Through our WhatsApp Announcements, we share upcoming information on what's happening
            in the week.
          </p>

          <a
            href="https://chat.whatsapp.com/B6RoWIOeMwBEgAKddLSDco?mode=wwt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 hover:bg-black text-white text-xs font-condensed font-semibold uppercase tracking-widest py-2.5 px-5 rounded transition-colors self-start mt-auto"
          >
            Receive updates via WhatsApp
          </a>

          <div className="mt-2">
            <p className="text-xs font-condensed font-semibold uppercase tracking-widest text-white/90 mb-2">
              Connect Via Social Media
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/libertychurchuk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-white/70 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/libertychurchfamily"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-white/70 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@libertychurchuk8888"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white hover:text-white/70 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {christmasOpen && <ChristmasLightbox onClose={() => setChristmasOpen(false)} />}
    </section>
  );
}
