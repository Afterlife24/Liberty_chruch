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
  'churchsuite': (
    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
      <p>ChurchSuite is our church management system where you can manage your details, sign up for groups and events, and stay connected with the life of the church.</p>
      <a
        href="https://liberty.churchsuite.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gray-900 text-white font-condensed font-bold uppercase tracking-widest px-6 py-3 rounded-md hover:bg-black transition-colors"
      >
        Login to ChurchSuite &#x2197;
      </a>
    </div>
  ),
  'liberty-groups': (
    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
      <p>Creating places and spaces to belong, grow, connect and find freedom in God.</p>
      <p>At Liberty, we believe the Church is not defined by a building or a Sunday meeting, but by people living life together on mission. Liberty Groups are how we disciple, care, and mobilise people.</p>
      <p>In a world of isolation and hurry, Liberty Groups create spaces of transformation where you are known, loved, discipled, and mobilised. Whether you are around a dinner table, opening Scripture, praying with friends, or serving your city, you are being the church.</p>
      <p>Each Liberty Group has a different focus, but all share the same purpose: to see people formed in Christ and sent with purpose.</p>
      <p className="font-semibold text-gray-900">Our next term of Liberty Groups will be live for sign up from w/c 7th September... watch this space!</p>
    </div>
  ),
  'liberty-kids': (
    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
      <p>Liberty Kids runs during our Sunday morning services! Sunday mornings are action packed and full of fun! They will learn about who God is, who God says they are and how to walk with Him!</p>
      <p>During the morning we also love to break up into small groups based on their ages to connect, dive deeper into what they are learning and pray together.</p>
      <p className="font-semibold text-gray-900">Come and meet our team at the registration table on a Sunday to find out more and register your kids!</p>
      <div className="border-t border-gray-100 pt-4">
        <h4 className="font-condensed font-black text-lg uppercase text-gray-900 mb-2">Kids (Nursery – Year 6)</h4>
        <p>Liberty Kids runs for children in Nursery (not rising 3's) to Year 6. During the morning, we start our programme together and then split into age groups, where we can tailor our teaching, games etc. to their specific ages.</p>
        <p className="mt-3">Please send your kids with labelled water bottles and sunscreen on when it is sunny as we love to play games outside when we can!</p>
      </div>
      <div className="border-t border-gray-100 pt-4">
        <h4 className="font-condensed font-black text-lg uppercase text-gray-900 mb-2">Unmanned Crèche</h4>
        <p>We have a crèche room available for parents and carers who would like to take their little ones out of the service. You are free to go in and out of this space as much as you need.</p>
        <p className="mt-3">The room is positioned in the kids wing of the building. There are toys, changing facilities and bottle warming available to you and we have a live stream running so you can still feel connected to the service.</p>
      </div>
    </div>
  ),
  'prayer-teaching': (
    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
      <p>Gather with us on a Tuesday evening to dig deeper into the Word of God, exploring key Biblical principles and life-giving truths. Then join us for a time of prayer, as we gather in one accord to seek His face.</p>
      <p className="font-semibold text-gray-900">Look out for dates in our upcoming events.</p>
    </div>
  ),
  'real-men': (
    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
      <p>A chance to grow together as men, to encourage one another to go after all that God has for us. Build friendships, grow in faith and discover what it means to be a real man of God.</p>
    </div>
  ),
  'refresh-women': (
    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
      <p>Join us as women as we get together, dive into the Word, worship &amp; have fun!</p>
      <p className="font-semibold text-gray-900">Keep an eye on our calendar to see when we are next gathering!</p>
    </div>
  ),
  'coffee-house': (
    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
      <div>
        <h4 className="font-condensed font-black text-lg uppercase text-gray-900 mb-2">Opening Times</h4>
        <p>Tuesday – Friday</p>
        <p className="font-semibold text-gray-900">8:30am – 3:00pm</p>
      </div>
      <div className="border-t border-gray-100 pt-4">
        <p className="text-gray-600">Liberty Church, Gaer Park Drive, Newport, NP20 3NN</p>
      </div>
    </div>
  ),
  'young-adults': (
    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
      <p>Join with other young adults, aged 18-35, as we develop connections, build relationally and grow community together.</p>
      <p className="font-semibold text-gray-900">Watch out for upcoming dates for your diary.</p>
    </div>
  ),
  'youth': (
    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
      <p>"We're passionate about the young people in our city and are sold out in our desire to become a group of people who 'love God &amp; love people passionately, live dangerously and are influential'."</p>
      <p>We meet every Friday during term-time from 7–9pm at our Gaer facility for a great night of fun, community and discipleship. Every other Sunday we have Youth AM during the preaching for young people in our Sunday service.</p>
      <p>We mix between gathering at our Gaer venue, in homes across the city and joining with Firestarters Wales Youth Ministry.</p>
      <p className="font-semibold text-gray-900">For more information, get in touch via the link below!</p>
      <a
        href="mailto:youth@libertychurchuk.com"
        className="inline-block bg-gray-900 text-white font-condensed font-bold uppercase tracking-widest px-6 py-3 rounded-md hover:bg-black transition-colors"
      >
        youth@libertychurchuk.com
      </a>
    </div>
  ),
};

const lightboxTitles: Record<string, string> = {
  'churchsuite': 'ChurchSuite',
  'liberty-groups': 'Liberty Groups',
  'liberty-kids': 'Liberty Kids',
  'prayer-teaching': 'Prayer & Teaching',
  'real-men': 'Real Men',
  'refresh-women': 'Refresh Women',
  'coffee-house': 'The Coffee House',
  'young-adults': 'Young Adults',
  'youth': 'Youth',
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
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Banner */}
        <div className="relative w-full h-[200px] sm:h-[260px] overflow-hidden rounded-t-lg">
          <img src={image} alt={lightboxTitles[lightboxKey]} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full transition-colors shadow-lg"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-4 left-6">
            <h2 className="text-white font-condensed font-black text-3xl uppercase leading-none">
              {lightboxTitles[lightboxKey]}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {lightboxContent[lightboxKey]}
        </div>
      </div>
    </div>
  );
}

// ── Card component ────────────────────────────────────────────────────────────

function StoryCard({ image, label, title, lightboxKey, externalLink, onLightboxOpen }: CardProps & { onLightboxOpen?: () => void }) {
  const handleClick = () => {
    if (externalLink) {
      window.open(externalLink, '_blank', 'noopener,noreferrer');
    } else if (lightboxKey && onLightboxOpen) {
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
        <p className="text-white/80 font-condensed text-xs uppercase tracking-widest leading-tight">{label}</p>
        <p className="text-white font-condensed font-black text-sm sm:text-base md:text-lg uppercase leading-tight mt-0.5">{title}</p>
      </div>
      {externalLink && (
        <div className="absolute top-3 right-3">
          <span className="text-white text-xs">↗</span>
        </div>
      )}
    </div>
  );
}

// ── Cards data ────────────────────────────────────────────────────────────────

const cards: CardProps[] = [
  {
    image: '/images/life of liberty/Liberty Website-Growing Disciples Section-Liberty Groups.jpg',
    label: 'Community',
    title: 'Liberty Groups',
    lightboxKey: 'liberty-groups',
  },
  {
    image: '/images/life of liberty/Liberty Website-Growing Disciples Section-Liberty Kids.jpg',
    label: 'Children',
    title: 'Liberty Kids',
    lightboxKey: 'liberty-kids',
  },
  {
    image: '/images/life of liberty/Liberty Website-Growing Disciples Section-Liberty Youth.jpg',
    label: 'Teenagers',
    title: 'Youth',
    lightboxKey: 'youth',
  },
  {
    image: '/images/life of liberty/Liberty Website-Growing Disciples Section-Liberty Young Adults.jpg',
    label: '20s & 30s',
    title: 'Young Adults',
    lightboxKey: 'young-adults',
  },
  {
    image: '/images/life of liberty/Liberty Website-Growing Disciples Section-Liberty Refresh Women.jpg',
    label: "Women's Ministry",
    title: 'Refresh Women',
    lightboxKey: 'refresh-women',
  },
  {
    image: '/images/life of liberty/Liberty Website-Growing Disciples Section-Liberty Real Men.jpg',
    label: "Men's Ministry",
    title: 'Real Men',
    lightboxKey: 'real-men',
  },
  {
    image: '/images/life of liberty/Liberty Website-Growing Disciples Section-Liberty Coffee House.jpg',
    label: 'Community Space',
    title: 'The Coffee House',
    lightboxKey: 'coffee-house',
  },
  {
    image: '/images/life of liberty/Liberty Website-Growing Disciples Section-Liberty Prayer&Teaching.jpg',
    label: 'Spiritual Growth',
    title: 'Prayer & Teaching',
    lightboxKey: 'prayer-teaching',
  },
  {
    image: '/images/life of liberty/Liberty Website-Growing Disciples Section-ChurchSuite.jpg',
    label: 'Church Management',
    title: 'ChurchSuite',
    lightboxKey: 'churchsuite',
  },
];

const cloned = [...cards.slice(-3), ...cards, ...cards.slice(0, 3)];
const OFFSET = 3;

// ── Main component ────────────────────────────────────────────────────────────

export default function LifeOfLiberty() {
  const [index, setIndex] = useState(OFFSET);
  const [transitioning, setTransitioning] = useState(true);
  const [activeLightbox, setActiveLightbox] = useState<{ key: string; image: string } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section className="max-w-5xl mx-auto px-4 py-8">
      <SectionTitle title="Life of Liberty" />
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
            <StoryCard
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
