import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const events = [
  {
    image: '/images/uncomingevents/Liberty Website-Events Section-Life Matters-23August.jpg',
  },
  {
    image: '/images/uncomingevents/Liberty Website-Events Section-LK-Summer Club26.jpg',
  },
  {
    image: '/images/uncomingevents/Liberty Website-Events Section-CH Quiz August26.jpg',
  },
  {
    image: '/images/uncomingevents/Liberty Website-Events Section-Summer Prayer Nights.jpg',
  },
];

export default function UpcomingEventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 px-6 py-8 md:px-12">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <Link
            to="/"
            className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            aria-label="Back to home"
          >
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-white font-condensed font-black text-4xl md:text-6xl uppercase leading-none">
            Upcoming Events
          </h1>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={event.image}
                alt={`Upcoming event ${i + 1}`}
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
