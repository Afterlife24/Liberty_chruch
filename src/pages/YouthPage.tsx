import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';

export default function YouthPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Liberty Youth | Liberty Church Newport"
        description="Liberty Youth meets every Friday during term-time from 7-9pm at our Gaer Hub in Newport. A great night of fun, community and discipleship for young people."
        path="/youth"
      />

      <div className="relative w-full">
        <img
          src="/images/life of liberty/Liberty Website-Growing Disciples Section-Liberty Youth.jpg"
          alt="Liberty Youth at Liberty Church Newport"
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

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-6 text-gray-700 text-lg leading-relaxed">
        <h1 className="font-condensed font-black text-4xl md:text-5xl uppercase text-gray-900 border-b-4 border-gray-900 pb-4">
          Liberty Youth
        </h1>

        <p>"We're passionate about the young people in our city and are sold out in our desire to become a group of people who 'love God &amp; love people passionately, live dangerously and are influential'."</p>
        <p>We meet every Friday during term-time from 7–9pm at our Gaer Hub and also for Girls and Boys nights across our city.</p>
        <p>We mix between gathering at our Gaer venue, in homes across the city and joining with Firestarters Wales Youth Ministry. For more information on Firestarters visit <a href="https://www.firestarterswales.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500 transition-colors">www.firestarterswales.org</a></p>
        <p className="font-semibold text-gray-900">Please see our calendar for all the dates!</p>

        <a
          href="mailto:youth@libertychurchuk.com"
          className="inline-block bg-gray-900 text-white font-condensed font-bold uppercase tracking-widest px-6 py-3 rounded-md hover:bg-black transition-colors"
        >
          youth@libertychurchuk.com
        </a>
      </div>
    </div>
  );
}
