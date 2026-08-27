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
      if (link.startsWith('http')) {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        navigate(link);
      }
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
    </div>
  );
}

const cards: CardProps[] = [
  {
    image: '/images/media/Liberty Website-Media Section-Listen Again.jpg',
    title: 'Listen Again',
    link: 'https://soundcloud.com/liberty-church-uk',
  },
  {
    image: '/images/media/Liberty Website-Media Section-Video Content.jpg',
    title: 'Video Content',
    link: 'https://www.youtube.com/@libertychurchuk8888',
  },
  {
    image: '/images/media/Liberty Website-Media Section-Additional Resources.jpg',
    title: 'Additional Resources',
    link: '/media/more-resources',
  },
];

const cloned = [...cards.slice(-3), ...cards, ...cards.slice(0, 3)];
const OFFSET = 3;

export default function Media() {
  const [index, setIndex] = useState(OFFSET);
  const [transitioning, setTransitioning] = useState(true);
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
    <section id="media" className="max-w-5xl mx-auto px-4 py-8 scroll-mt-32">
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
