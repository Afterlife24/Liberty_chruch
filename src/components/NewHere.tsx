import SectionTitle from './SectionTitle';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useSwipe } from './useSwipe';

interface CardProps {
  image: string;
  label: string;
  title: string;
  link?: string;
  lightbox?: boolean;
  lightboxKey?: string;
}

interface LightboxProps {
  onClose: () => void;
}

function GlobalPictureLightbox({ onClose }: LightboxProps) {
  // Close on backdrop click
  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

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
        <div className="overflow-y-auto flex-1 rounded-lg">
        {/* Banner image */}
        <div className="relative w-full overflow-hidden rounded-t-lg">
          <img
            src="/images/pages_banners_internal/Liberty Website-Internal Page Banner-Global Picture.jpg"
            alt="Global Picture"
            className="w-full h-auto block"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4">
          <h3 className="font-condensed font-black text-2xl uppercase text-gray-900 tracking-wide">
            Genesis Collective
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Genesis Collective is a story of several dear friends from across the globe, who believe that the eternal &amp; intimate God has joined us together in love and mandated us with the adventure of:
          </p>

          <blockquote className="border-l-4 border-gray-900 pl-4 py-1">
            <p className="font-condensed font-bold text-gray-900 text-lg uppercase leading-snug">
              "Planting Jesus Proclaiming, Kingdom Advancing Communities, In All The Nations Of The World."
            </p>
          </blockquote>

          <p className="text-gray-700 leading-relaxed">
            A collective of churches and relationships committed to global church planting, together.
          </p>

          <p className="text-gray-700 leading-relaxed">
            No glitz or glamour in this unfolding narrative. Driven rather by the humble sense of collaborative adventure, we are "partnering in the gospel" to establish communities of love and light in the broken and dark places of our world.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Find out more at{' '}
            <a
              href="https://www.genesiscollective.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 font-semibold underline hover:text-gray-600 transition-colors"
            >
              www.genesiscollective.org
            </a>{' '}
            to learn who Genesis Collective are and how we partner with them.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

function PlanningYourVisitLightbox({ onClose }: LightboxProps) {
  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

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
        <div className="overflow-y-auto flex-1 rounded-lg">
        <div className="relative w-full overflow-hidden rounded-t-lg">
          <img
            src="/images/I'm New Here/Liberty Website-I'm New Here-Plan Your Visit.jpg"
            alt="Planning Your Visit"
            className="w-full h-auto block"
          />
        </div>

        <div className="p-6 sm:p-8 space-y-5">
          <h3 className="font-condensed font-black text-2xl uppercase text-gray-900 tracking-wide">
            Planning Your Visit
          </h3>

          <p className="text-gray-700 leading-relaxed">
            We can't wait to welcome you to Liberty Church! Here's everything you need to know to make your first visit comfortable and enjoyable.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 mb-1">Newport</p>
              <p className="text-gray-700 text-sm">Gaer Park Drive, NP20 3NN</p>
              <p className="text-gray-700 text-sm">Sundays at 10:30AM</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 mb-1">Risca</p>
              <p className="text-gray-700 text-sm">Risca Scouts Hall, NP11 6LL</p>
              <p className="text-gray-700 text-sm">Sundays at 10:30AM</p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <h4 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">What to Expect</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Arrive 10-15 minutes early to grab a coffee and meet our welcome team</li>
              <li>Contemporary worship music followed by Bible-based teaching</li>
              <li>Children's programmes available during the service</li>
              <li>Come as you are — no dress code!</li>
              <li>Free parking at both locations</li>
            </ul>
          </div>

          <div className="bg-gray-900 text-white rounded-lg p-6 text-center">
            <h4 className="font-condensed font-black text-xl uppercase mb-2">We'd Love to See You</h4>
            <p className="text-gray-300 text-sm mb-4">Come and experience the warmth of our Liberty Church family this Sunday.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+447943501007" className="bg-white text-gray-900 font-condensed font-bold uppercase tracking-wide px-6 py-2.5 rounded-md hover:bg-gray-100 transition-colors text-sm">+44 7943 501 007</a>
            </div>
          </div>

          {/* Calendar */}
          <div className="border-t border-gray-100 pt-4">
            <h4 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-3">Upcoming Events</h4>
            <div className="rounded-md overflow-hidden">
              <iframe
                frameBorder="0"
                height="400"
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
        </div>
      </div>
    </div>
  );
}

function ImageCard({ image, label, title, link, lightbox, lightboxKey, onLightboxOpen }: CardProps & { onLightboxOpen?: (key: string) => void }) {
  const commonClass = `relative overflow-hidden rounded-md cursor-pointer group aspect-square flex-shrink-0
    w-[85vw] 
    sm:w-[calc(50%-0.375rem)] 
    md:w-[calc(33.333%-0.5rem)]`;

  const inner = (
    <>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </>
  );

  if (lightbox) {
    return (
      <div className={commonClass} onClick={() => onLightboxOpen?.(lightboxKey || '')}>
        {inner}
      </div>
    );
  }

  return (
    <Link to={link!} className={commonClass}>
      {inner}
    </Link>
  );
}

const cards: CardProps[] = [
  {
    image: "/images/I'm New Here/Liberty Website-I'm New Here-Who is Jesus_.jpg",
    label: 'Discover',
    title: 'Who is Jesus?',
    link: '/im-new-here/who-is-jesus',
  },
  {
    image: "/images/I'm New Here/Liberty Website-I'm New Here-Plan Your Visit.jpg",
    label: 'Come & Join Us',
    title: 'Planning Your Visit',
    lightbox: true,
    lightboxKey: 'planning-your-visit',
  },
  {
    image: "/images/I'm New Here/Liberty Website-I'm New Here-Vision&Values.jpg",
    label: 'Our Heart',
    title: 'Our Vision and Values',
    link: '/im-new-here/vision-and-values',
  },
  {
    image: "/images/I'm New Here/Liberty Website-I'm New Here-What We Believe.jpg",
    label: 'Our Foundation',
    title: 'What We Believe',
    link: '/im-new-here/what-we-believe',
  },
  {
    image: "/images/I'm New Here/Liberty Website-I'm New Here-Global Picture.jpg",
    label: 'Making a Difference',
    title: 'Global Picture',
    lightbox: true,
    lightboxKey: 'global-picture',
  },
];

const cloned = [...cards.slice(-3), ...cards, ...cards.slice(0, 3)];
const OFFSET = 3;

export default function NewHere() {
  const [index, setIndex] = useState(OFFSET);
  const [transitioning, setTransitioning] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState<string | null>(null);
  const [, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getCardWidth = () => {
    if (!containerRef.current) return 0;
    const card = containerRef.current.querySelector('a, div[class*="aspect-square"]') as HTMLElement;
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
    <section id="im-new-here" className="max-w-5xl mx-auto px-4 py-8 scroll-mt-32">
      <SectionTitle title="I'm New Here" />
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
            <ImageCard
              key={`${card.title}-${i}`}
              {...card}
              onLightboxOpen={(key) => setLightboxOpen(key)}
            />
          ))}
        </div>
      </div>

      {lightboxOpen === 'global-picture' && <GlobalPictureLightbox onClose={() => setLightboxOpen(null)} />}
      {lightboxOpen === 'planning-your-visit' && <PlanningYourVisitLightbox onClose={() => setLightboxOpen(null)} />}
    </section>
  );
}
