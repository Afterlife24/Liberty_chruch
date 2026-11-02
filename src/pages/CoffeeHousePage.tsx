import { Link } from 'react-router-dom';
import { ArrowLeft, Instagram, Facebook } from 'lucide-react';
import Seo from '../components/Seo';

export default function CoffeeHousePage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="The Coffee House | Liberty Church Newport"
        description="The Coffee House at Liberty Church, Gaer Park Drive, Newport. A welcoming community space open Tuesday to Friday, 8:30am - 3:00pm."
        path="/coffee-house"
      />

      <div className="relative w-full">
        <img
          src="/images/life of liberty/Liberty Website-Growing Disciples Section-Liberty Coffee House.jpg"
          alt="The Coffee House at Liberty Church Newport"
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

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-8">
        <h1 className="font-condensed font-black text-4xl md:text-5xl uppercase text-gray-900 border-b-4 border-gray-900 pb-4">
          The Coffee House
        </h1>

        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
          <h2 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">Opening Times</h2>
          <p className="text-gray-700 text-lg">Tuesday – Friday</p>
          <p className="text-gray-900 font-semibold text-lg">8:30am – 3:00pm</p>
          <p className="text-gray-600 mt-3">Liberty Church, Gaer Park Drive, Newport, NP20 3NN</p>
        </div>

        <div>
          <h2 className="font-condensed font-black text-2xl uppercase text-gray-900 mb-3">Follow Us</h2>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/thecoffeehouseuk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors">
              <Instagram className="w-5 h-5" /> thecoffeehouseuk
            </a>
            <a href="https://www.facebook.com/thecoffeehouse.uk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors">
              <Facebook className="w-5 h-5" /> thecoffeehouse.uk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
