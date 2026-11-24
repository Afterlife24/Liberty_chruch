import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import {
  bagsOfHope,
  christmasEvents,
  christmasIntro,
  christmasTile,
  type ChristmasEvent,
} from '../data/christmas';

const ACCENT = 'text-[#9b1c20]';
const BUTTON =
  'inline-block bg-gray-900 text-white font-condensed font-bold uppercase tracking-widest text-sm px-5 py-2.5 rounded-md hover:bg-black transition-colors';

function EventBlock({ event }: { event: ChristmasEvent }) {
  return (
    <article className="border-l-4 border-[#9b1c20] pl-4 sm:pl-5">
      <h3 className={`font-condensed font-black text-2xl uppercase leading-tight ${ACCENT}`}>{event.date}</h3>

      {event.groups.map((group, i) => (
        <div
          key={i}
          // A divider line between groups keeps each venue's text, sign-up and graphic together.
          className={i === 0 ? 'mt-2' : 'mt-5 pt-5 border-t border-gray-300'}
        >
          <div className={group.image ? 'md:grid md:grid-cols-[1fr_320px] md:gap-6 md:items-start' : ''}>
            <div>
              <ul className="space-y-1 text-gray-700 leading-relaxed">
                {group.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              {group.links && (
                <div className="mt-3 flex flex-wrap gap-3">
                  {group.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={BUTTON}>
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {group.image && (
              <img
                src={group.image.src}
                alt={group.image.alt}
                loading="lazy"
                className="mt-4 md:mt-0 w-full h-auto rounded-md shadow-sm"
              />
            )}
          </div>
        </div>
      ))}
    </article>
  );
}

export default function ChristmasLightbox({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="christmas-title"
        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] shadow-2xl relative flex flex-col"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full transition-colors shadow-lg"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="overflow-y-auto flex-1 rounded-lg">
          {/* The graphic already carries the title, so the heading is for screen readers */}
          <h2 id="christmas-title" className="sr-only">
            Christmas at Liberty
          </h2>
          <img src={christmasTile.src} alt={christmasTile.alt} className="w-full h-auto block rounded-t-lg" />

          <div className="p-6 sm:p-8 space-y-8">
            <p className="text-gray-700 text-lg leading-relaxed">{christmasIntro}</p>

            <div className="space-y-8">
              {christmasEvents.map((event) => (
                <EventBlock key={event.date} event={event} />
              ))}
            </div>

            {/* Bags of Hope appeal */}
            <section className="bg-gray-50 rounded-lg p-5 sm:p-6 border-t-4 border-[#9b1c20]">
              <p className="font-condensed text-xs uppercase tracking-widest text-gray-500 mb-1">Also…</p>
              <h3 className={`font-condensed font-black text-2xl uppercase leading-tight ${ACCENT}`}>
                {bagsOfHope.title}
              </h3>
              <img
                src={bagsOfHope.image.src}
                alt={bagsOfHope.image.alt}
                loading="lazy"
                className="mt-4 w-full max-w-[600px] h-auto rounded-md shadow-sm"
              />
              <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">
                <p className="font-semibold text-gray-900">{bagsOfHope.intro}</p>
                <p>{bagsOfHope.waysIntro}</p>
                <ol className="list-decimal ml-6 space-y-2">
                  {bagsOfHope.ways.map((way) => (
                    <li key={way}>{way}</li>
                  ))}
                </ol>
                <p className="pt-2">{bagsOfHope.itemsIntro}</p>
                <ul className="list-disc ml-6 sm:columns-2 sm:gap-8 space-y-1">
                  {bagsOfHope.items.map((item) => (
                    <li key={item} className="break-inside-avoid">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
