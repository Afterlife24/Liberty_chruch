import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';

export default function PlanningYourVisitPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Plan Your Visit | Liberty Church Newport & Risca"
        description="Planning your first visit to Liberty Church? Join us Sundays at Liberty Gaer Hub, Newport (9am & 10:45am) or Liberty Risca (10:30am). Here's what to expect."
        path="/plan-your-visit"
      />

      {/* Hero */}
      <div className="relative w-full">
        <img
          src="/images/I'm New Here/Liberty Website-I'm New Here-Plan Your Visit.jpg"
          alt="Planning your visit to Liberty Church"
          className="w-full h-auto block"
        />
        <Link
          to="/"
          className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-colors shadow-lg"
          aria-label="Back to home"
        >
          <ArrowLeft size={24} />
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-8">
        <h1 className="font-condensed font-black text-4xl md:text-5xl uppercase text-gray-900 border-b-4 border-gray-900 pb-4">
          Planning Your Visit
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          We can't wait to welcome you to Liberty Church in Newport, Wales! Here's everything you need to know to make your first visit comfortable and enjoyable.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
            <h2 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">Liberty Gaer Hub</h2>
            <p className="text-gray-700">Gaer Park Drive, Newport, NP20 3NN</p>
            <p className="text-gray-700 font-semibold mt-1">Sundays at 9am &amp; 10:45am</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
            <h2 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">Liberty Risca</h2>
            <p className="text-gray-700">Risca Scouts Hall, Hafod Y Bryn, Risca, NP11 6LL</p>
            <p className="text-gray-700 font-semibold mt-1">Sundays at 10:30am</p>
          </div>
        </div>

        <div>
          <h2 className="font-condensed font-black text-2xl md:text-3xl uppercase text-gray-900 mb-4">What to Expect</h2>
          <ul className="space-y-2 text-gray-700 text-lg list-disc ml-6">
            <li>Arrive 10-15 minutes early to meet our welcome team</li>
            <li>Contemporary worship music followed by Bible-based teaching</li>
            <li>Children's programmes available during the service</li>
            <li>Come as you are — no dress code!</li>
            <li>There is free parking at our Risca location and street parking at Liberty Gaer Hub</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="font-condensed font-black text-2xl uppercase mb-2">We'd Love to See You</h2>
          <p className="text-gray-300 mb-4">Come and experience the warmth of our Liberty Church family this Sunday.</p>
          <a href="tel:+447943501007" className="inline-block bg-white text-gray-900 font-condensed font-bold uppercase tracking-wide px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            +44 7943 501 007
          </a>
        </div>

        {/* Calendar */}
        <div>
          <h2 className="font-condensed font-black text-2xl md:text-3xl uppercase text-gray-900 mb-4">Upcoming Events</h2>
          <div className="rounded-md overflow-hidden">
            <iframe
              frameBorder="0"
              height="600"
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
  );
}
