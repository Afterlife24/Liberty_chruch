import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function LibertyGroupsSignUpPage() {
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
          <h1 className="text-white font-condensed font-black text-3xl md:text-5xl uppercase leading-none">
            Liberty Groups Sign Up
          </h1>
        </div>
      </div>

      {/* Embedded Form */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <iframe
          frameBorder="0"
          height="800"
          allowTransparency={true}
          scrolling="yes"
          src="https://libertychurchwales.churchsuite.com/-/smallgroups/3c0f6ccb-b2f2-4f2c-9598-0c30696f99e4"
          style={{ borderWidth: 0 }}
          width="100%"
          title="Liberty Groups Sign Up"
        />
      </div>
    </div>
  );
}
