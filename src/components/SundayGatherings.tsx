import SectionTitle from './SectionTitle';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useSwipe } from './useSwipe';

interface CardProps {
  image: string;
  label: string;
  title: string;
  lightboxKey?: string;
  externalLink?: string;
}

// ── Lightbox content ─────────────────────────────────────────────────────────

const lightboxContent: Record<string, React.ReactNode> = {
  'newport': (
    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
      <p>Join us this Sunday at our Newport location. Experience the warmth of our Newport community and discover what it means to be part of the Liberty Church family.</p>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-semibold text-gray-900">Location:</p>
        <p>Gaer Park Drive, Newport, NP20 3NN</p>
        <p className="mt-2 font-semibold text-gray-900">Time:</p>
        <p>Sundays at 10:30AM</p>
      </div>
      <div className="bg-gray-900 text-white rounded-lg p-6 text-center mt-6">
        <h3 className="font-condensed font-black text-xl uppercase mb-2">Join Us This Sunday At Newport</h3>
        <p className="text-gray-300 text-sm mb-4">Experience the warmth of our Newport community and discover what it means to be part of the Liberty Church family.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="border-2 border-white text-white font-condensed font-bold uppercase tracking-wide px-6 py-2.5 rounded-md hover:bg-white/10 transition-colors text-sm">Contact Newport Team</button>
        </div>
      </div>
    </div>
  ),
  'risca': (
    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
      <p>Join us this Sunday at our Risca location. A welcoming community where you can grow in faith and build lasting friendships.</p>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-semibold text-gray-900">Location:</p>
        <p>Risca Scouts Hall, NP11 6LL</p>
        <p className="mt-2 font-semibold text-gray-900">Time:</p>
        <p>Sundays at 10:30AM</p>
      </div>
      <div className="bg-gray-900 text-white rounded-lg p-6 text-center mt-6">
        <h3 className="font-condensed font-black text-xl uppercase mb-2">Join Us This Sunday At Risca</h3>
        <p className="text-gray-300 text-sm mb-4">Experience the warmth of our Risca community and discover what it means to be part of the Liberty Church family.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="border-2 border-white text-white font-condensed font-bold uppercase tracking-wide px-6 py-2.5 rounded-md hover:bg-white/10 transition-colors text-sm">Contact Risca Team</button>
        </div>
      </div>
    </div>
  ),
  'prayer-requests': (
    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
      <p>We believe in the power of prayer. Submit your prayer requests through ChurchSuite and our prayer team will be lifting you up.</p>
      <a
        href="https://libertychurchwales.churchsuite.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gray-900 text-white font-condensed font-bold uppercase tracking-widest px-6 py-3 rounded-md hover:bg-black transition-colors"
      >
        Submit Prayer Request
      </a>
      <div className="bg-gray-900 text-white rounded-lg p-6 text-center mt-6">
        <h3 className="font-condensed font-black text-xl uppercase mb-2">Join Us This Sunday</h3>
        <p className="text-gray-300 text-sm mb-4">Experience the warmth of our community and discover what it means to be part of the Liberty Church family.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="border-2 border-white text-white font-condensed font-bold uppercase tracking-wide px-6 py-2.5 rounded-md hover:bg-white/10 transition-colors text-sm">Contact Team</button>
        </div>
      </div>
    </div>
  ),
  'places-of-liberty': (
    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
      <p>Liberty Church gathers across multiple locations. Wherever you are, there is a place for you in our family.</p>
      <div className="border-t border-gray-100 pt-4 space-y-3">
        <div>
          <p className="font-semibold text-gray-900">Newport</p>
          <p>Gaer Park Drive, NP20 3NN | Sundays 10:30AM</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Risca</p>
          <p>Scouts Hall, NP11 6LL | Sundays 10:30AM</p>
        </div>
      </div>
      <div className="bg-gray-900 text-white rounded-lg p-6 text-center mt-6">
        <h3 className="font-condensed font-black text-xl uppercase mb-2">Join Us This Sunday</h3>
        <p className="text-gray-300 text-sm mb-4">Experience the warmth of our community and discover what it means to be part of the Liberty Church family.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="border-2 border-white text-white font-condensed font-bold uppercase tracking-wide px-6 py-2.5 rounded-md hover:bg-white/10 transition-colors text-sm">Contact Team</button>
        </div>
      </div>
    </div>
  ),
  'giving-donations': (
    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
      <p>If you would like to support the work of Liberty Church, you can give using these details:</p>
      <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-900">
        <p className="font-semibold text-gray-900">Liberty Church</p>
        <p>Sort Code: 20-18-17</p>
        <p>Account Number: 63979261</p>
      </div>
      <p>You can add a reference if giving to a specific appeal/project (i.e. NEPAL or KIDS CHURCH PROJECT) or mark the gift TITHE/OFFERING for general gifts.</p>
      <p>For any further information about giving, you can contact us at <a href="mailto:admin@libertychurchuk.com" className="text-gray-900 font-semibold underline hover:text-gray-600 transition-colors">admin@libertychurchuk.com</a></p>
      <p className="font-semibold text-gray-900">Thank you for your continued generosity.</p>
      <div className="bg-gray-900 text-white rounded-lg p-6 text-center mt-6">
        <h3 className="font-condensed font-black text-xl uppercase mb-2">Join Us This Sunday</h3>
        <p className="text-gray-300 text-sm mb-4">Experience the warmth of our community and discover what it means to be part of the Liberty Church family.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="border-2 border-white text-white font-condensed font-bold uppercase tracking-wide px-6 py-2.5 rounded-md hover:bg-white/10 transition-colors text-sm">Contact Team</button>
        </div>
      </div>
    </div>
  ),
  'worship-services': (
    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
      <p>Our Sunday worship services are a time for the whole church family to gather, worship God, hear from His Word, and be encouraged together.</p>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-semibold text-gray-900">Every Sunday at 10:30AM</p>
        <p>Newport: Gaer Park Drive, NP20 3NN</p>
        <p>Risca: Scouts Hall, NP11 6LL</p>
      </div>
      <div className="bg-gray-900 text-white rounded-lg p-6 text-center mt-6">
        <h3 className="font-condensed font-black text-xl uppercase mb-2">Join Us This Sunday</h3>
        <p className="text-gray-300 text-sm mb-4">Experience the warmth of our community and discover what it means to be part of the Liberty Church family.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="border-2 border-white text-white font-condensed font-bold uppercase tracking-wide px-6 py-2.5 rounded-md hover:bg-white/10 transition-colors text-sm">Contact Team</button>
        </div>
      </div>
    </div>
  ),
};

const lightboxTitles: Record<string, string> = {
  'newport': 'Newport',
  'risca': 'Risca',
  'prayer-requests': 'Prayer Requests',
  'places-of-liberty': 'Places of Liberty',
  'giving-donations': 'Giving & Donations',
  'worship-services': 'Worship Services',
};

// ── Lightbox component ────────────────────────────────────────────────────────

function Lightbox({ lightboxKey, image, onClose }: { lightboxKey: string; image: string; onClose: () => void }) {
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
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      onClick={handleBackdrop}
    >
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] shadow-2xl relative flex flex-col">
        {/* Fixed Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full transition-colors shadow-lg"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 rounded-lg">
        {/* Banner */}
        <div className="relative w-full overflow-hidden rounded-t-lg">
          <img src={image} alt={lightboxTitles[lightboxKey]} className="w-full h-auto block" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h2 className="font-condensed font-black text-2xl uppercase text-gray-900 mb-4">
            {lightboxTitles[lightboxKey]}
          </h2>
          {lightboxContent[lightboxKey]}
        </div>
        </div>
      </div>
    </div>
  );
}

// ── Card component ────────────────────────────────────────────────────────────

function GatheringCard({ image, title, lightboxKey, onLightboxOpen }: CardProps & { onLightboxOpen?: () => void }) {
  const handleClick = () => {
    if (lightboxKey && onLightboxOpen) {
      onLightboxOpen();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative overflow-hidden rounded-md group aspect-video flex-shrink-0 cursor-pointer
        w-[85vw] 
        sm:w-[calc(50%-0.375rem)] 
        md:w-[calc(33.333%-0.5rem)]"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}

// ── Cards data ────────────────────────────────────────────────────────────────

const cards: CardProps[] = [
  {
    image: '/images/sundaygathering/Liberty Website-Sunday Gatherings Section-Liberty Newport.jpg',
    label: 'Gaer Park Drive',
    title: 'Newport',
    lightboxKey: 'newport',
  },
  {
    image: '/images/sundaygathering/Liberty Website-Sunday Gatherings Section-Liberty Risca.jpg',
    label: 'Scouts Hall',
    title: 'Risca',
    lightboxKey: 'risca',
  },
  {
    image: '/images/sundaygathering/Liberty Website-Sunday Gatherings Section-Prayer&Praise.jpg',
    label: 'Prayer Ministry',
    title: 'Prayer Requests',
    lightboxKey: 'prayer-requests',
  },
  {
    image: '/images/sundaygathering/Liberty Website-Sunday Gatherings Section-Places of Liberty.jpg',
    label: 'Our Locations',
    title: 'Places of Liberty',
    lightboxKey: 'places-of-liberty',
  },
  {
    image: '/images/sundaygathering/Liberty Website-Sunday Gatherings Section-Giving&Donations.jpg',
    label: 'Support Ministry',
    title: 'Giving & Donations',
    lightboxKey: 'giving-donations',
  },
  {
    image: '/images/sundaygathering/Liberty Website-Sunday Gatherings Section-Worship Nights.jpg',
    label: 'Sunday 10:30 AM',
    title: 'Worship Services',
    lightboxKey: 'worship-services',
  },
];

const cloned = [...cards.slice(-3), ...cards, ...cards.slice(0, 3)];
const OFFSET = 3;

// ── Main component ────────────────────────────────────────────────────────────

export default function SundayGatherings() {
  const [index, setIndex] = useState(OFFSET);
  const [transitioning, setTransitioning] = useState(true);
  const [activeLightbox, setActiveLightbox] = useState<{ key: string; image: string } | null>(null);
  const [, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getCardWidth = () => {
    if (!containerRef.current) return 0;
    const card = containerRef.current.querySelector('div[class*="aspect-video"]') as HTMLElement;
    if (!card) return 0;
    const gap = window.innerWidth >= 640 ? 12 : 8;
    return card.offsetWidth + gap;
  };

  const goTo = (newIndex: number, animate = true) => {
    setTransitioning(animate);
    setIndex(newIndex);
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const swipeHandlers = useSwipe(next, prev);

  useEffect(() => {
    if (!transitioning) return;
    const timeout = setTimeout(() => {
      if (index < OFFSET) {
        goTo(index + cards.length, false);
      } else if (index >= OFFSET + cards.length) {
        goTo(index - cards.length, false);
      }
    }, 350);
    return () => clearTimeout(timeout);
  }, [index, transitioning]);

  const translateX = -(index * getCardWidth());

  return (
    <section id="sunday-gatherings" className="max-w-5xl mx-auto px-4 py-8 scroll-mt-32">
      <SectionTitle title="Sunday Gatherings" />
      <div className="relative group/section overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full opacity-0 group-hover/section:opacity-100 transition-opacity"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full opacity-0 group-hover/section:opacity-100 transition-opacity"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>

        {/* Track */}
        <div
          ref={containerRef}
          className="flex gap-2 sm:gap-3"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: transitioning ? 'transform 0.35s ease' : 'none',
          }}
          {...swipeHandlers}
        >
          {cloned.map((card, i) => (
            <GatheringCard
              key={`${card.title}-${i}`}
              {...card}
              onLightboxOpen={() =>
                card.lightboxKey && setActiveLightbox({ key: card.lightboxKey, image: card.image })
              }
            />
          ))}
        </div>
      </div>

      {activeLightbox && (
        <Lightbox
          lightboxKey={activeLightbox.key}
          image={activeLightbox.image}
          onClose={() => setActiveLightbox(null)}
        />
      )}
    </section>
  );
}
