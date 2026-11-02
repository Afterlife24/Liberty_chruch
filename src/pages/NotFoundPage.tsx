import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <Seo
        title="Page Not Found | Liberty Church"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <h1 className="font-condensed font-black text-6xl md:text-8xl uppercase text-gray-900 mb-4">404</h1>
      <p className="text-gray-700 text-lg mb-8">Sorry, we couldn't find the page you were looking for.</p>
      <Link
        to="/"
        className="bg-gray-900 text-white font-condensed font-bold uppercase tracking-widest px-8 py-3 rounded-md hover:bg-black transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
