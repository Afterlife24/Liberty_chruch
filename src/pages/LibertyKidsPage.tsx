import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';

export default function LibertyKidsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Liberty Kids | Liberty Church Newport & Risca"
        description="Liberty Kids runs during our Sunday morning services for children from Nursery to Year 6. Fun, safe and engaging programmes at Liberty Church, Newport."
        path="/liberty-kids"
      />

      <div className="relative w-full">
        <img
          src="/images/life of liberty/Liberty Website-Growing Disciples Section-Liberty Kids.jpg"
          alt="Liberty Kids children's ministry at Liberty Church"
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
          Liberty Kids
        </h1>

        <p>Liberty Kids runs during our Sunday morning services! Sunday mornings are action packed and full of fun! They will learn about who God is, who God says they are and how to walk with Him!</p>
        <p>During the morning we also love to break up into small groups based on their ages to connect, dive deeper into what they are learning and pray together.</p>
        <p className="font-semibold text-gray-900">Come and meet our team at the registration table on a Sunday to find out more and register your kids!</p>

        <div className="border-t border-gray-100 pt-6">
          <h2 className="font-condensed font-black text-2xl uppercase text-gray-900 mb-3">Kids (Nursery – Year 6)</h2>
          <p>Liberty Kids runs for children in Nursery (not rising 3's) to Year 6. During the morning, we start our programme together and then split into age groups, where we can tailor our teaching, games etc. to their specific ages.</p>
          <p className="mt-3">Please send your kids with labelled water bottles and sunscreen on when it is sunny as we love to play games outside when we can!</p>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <h2 className="font-condensed font-black text-2xl uppercase text-gray-900 mb-3">Unmanned Crèche - Gaer Hub</h2>
          <p>We have a crèche room available for parents and carers who would like to take their little ones out of the service. You are free to go in and out of this space as much as you need.</p>
          <p className="mt-3">The room is positioned off of the main auditorium.</p>
        </div>
      </div>
    </div>
  );
}
