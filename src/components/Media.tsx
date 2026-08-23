import { useNavigate } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useSwipe } from './useSwipe';

interface CardProps {
  image: string;
  title: string;
  link?: string;
}

function MediaCard({ image, title, link }: CardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative overflow-hidden rounded-md group aspect-video flex-shrink-0
        w-[85vw] 
        sm:w-[calc(50%-0.375rem)] 
        md:w-[calc(33.333%-0.5rem)] 
        ${link ? 'cursor-pointer' : 'cursor-default'}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
        <p className="text-white font-condensed font-black text-sm sm:text-base md:text-lg uppercase leading-tight">
          {title}
        </p>
      </div>
    </div>
  );
}

const cards: CardProps[] = [
  {
    image: '/images/media/Liberty Website-Media Section-Listen Again.jpg',
    title: 'Listen Again',
    link: '/media/listen-again',
  },
  {
    image: '/images/media/Liberty Website-Media Section-Video Content.jpg',
    title: 'Video Sessions',
    link: '/media/video-sessions',
  },
  {
    image: '/images/media/Liberty Website-Media Section-Additional Resources.jpg',
    title: 'Study Resources',
    link: '/media/more-resources',
  },
  {
    image: '/images/media/Liberty Website-Media Section-Video Content.jpg',
    title: 'Live Stream',
    link: '/media/video-sessions',
  },
  {
    image: '/images/media/Liberty Website-Media Section-Listen Again.jpg',
    title: 'Prayer Resources',
    link: '/media/more-resources',
  },
  {
    image: '/images/media/Liberty Website-Media Section-Additional Resources.jpg',
    title: 'Reading List',
    link: '/media/more-resources',
  },
];

const cloned = [...cards.slice(-3), ...cards, ...cards.slice(0, 3)];
const OFFSET = 3;

export default function Media() {
  const [index, setIndex] = useState(OFFSET);
  const [transitioning, setTransitioning] = useState(true);
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
      <SectionTitle title="Media" />
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
            <MediaCard key={`${card.title}-${i}`} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
