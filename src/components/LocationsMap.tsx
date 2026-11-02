import SectionTitle from './SectionTitle';
import { MapPin, Clock } from 'lucide-react';

export default function LocationsMap() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <SectionTitle title="Find Us" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Location details */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
            <h3 className="font-condensed font-black text-xl uppercase text-gray-900 mb-2">Liberty Gaer Hub</h3>
            <p className="flex items-start gap-2 text-gray-700">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-gray-500" />
              Gaer Park Drive, Newport, NP20 3NN
            </p>
            <p className="flex items-center gap-2 text-gray-700 mt-1">
              <Clock className="w-5 h-5 shrink-0 text-gray-500" />
              Sundays at 9am &amp; 10:45am
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
            <h3 className="font-condensed font-black text-xl uppercase text-gray-900 mb-2">Liberty Risca</h3>
            <p className="flex items-start gap-2 text-gray-700">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-gray-500" />
              Risca Scouts Hall, Hafod Y Bryn, Risca, NP11 6LL
            </p>
            <p className="flex items-center gap-2 text-gray-700 mt-1">
              <Clock className="w-5 h-5 shrink-0 text-gray-500" />
              Sundays at 10:30am
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
            <h3 className="font-condensed font-black text-xl uppercase text-gray-900 mb-2">The Coffee House</h3>
            <p className="flex items-start gap-2 text-gray-700">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-gray-500" />
              Gaer Park Drive, Newport, NP20 3NN
            </p>
            <p className="flex items-center gap-2 text-gray-700 mt-1">
              <Clock className="w-5 h-5 shrink-0 text-gray-500" />
              Tuesday – Friday, 8:30am – 3:00pm
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="rounded-lg overflow-hidden min-h-[400px]">
          <iframe
            title="Liberty Church Gaer Park Drive Newport location"
            src="https://www.google.com/maps?q=Gaer+Park+Drive,+Newport,+NP20+3NN&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '400px' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
