import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function RefreshWomenPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Refresh Women"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

                {/* Back Button */}
                <Link
                    to="/"
                    className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-colors shadow-lg"
                    aria-label="Back to Life of Liberty"
                >
                    <ArrowLeft size={24} />
                </Link>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-white font-condensed font-black text-4xl md:text-6xl uppercase leading-none mb-2">
                            Refresh Women
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Empowered • Connected • Growing
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                <div className="text-center">
                    <p className="text-gray-700 text-xl leading-relaxed mb-8">
                        Refresh Women is our ministry dedicated to empowering women to grow in their relationship
                        with God while building strong friendships and supporting one another through every season of life.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        More details about Refresh Women ministry coming soon. Contact us to learn how you can
                        connect with other amazing women in our church family!
                    </p>
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        Join Our Sisterhood
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        Connect with other women and grow together in faith and friendship.
                    </p>
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors">
                        Connect With Us
                    </button>
                </div>
            </div>
        </div>
    );
}