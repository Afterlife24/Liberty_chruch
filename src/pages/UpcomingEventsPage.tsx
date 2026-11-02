import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';

export default function UpcomingEventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Calendar & Events | Liberty Church Newport & Risca"
        description="See what's coming up at Liberty Church. View our full calendar of events across our Gaer Hub (Newport), Risca and The Coffee House."
        path="/events"
      />

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
            Calendar
          </h1>
        </div>
      </div>

      {/* Embedded Calendar */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <iframe
          frameBorder="0"
          height="800"
          allowTransparency={true}
          scrolling="yes"
          src="https://libertychurchwales.churchsuite.com/-/calendar/8d15bc1c-3db8-4f50-a798-08b5c00a625d"
          style={{ borderWidth: 0 }}
          width="100%"
          title="Liberty Church Calendar"
        />
      </div>
    </div>
  );
}
