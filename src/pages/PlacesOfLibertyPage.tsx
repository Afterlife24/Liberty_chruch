import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Users, Car } from 'lucide-react';

export default function PlacesOfLibertyPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Places of Liberty"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

                {/* Back Button */}
                <Link
                    to="/"
                    className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-colors shadow-lg"
                    aria-label="Back to Sunday Gatherings"
                >
                    <ArrowLeft size={24} />
                </Link>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-white font-condensed font-black text-4xl md:text-6xl uppercase leading-none mb-2">
                            Places of Liberty
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Two Locations • One Church Family
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                {/* Introduction */}
                <div className="mb-12 text-center">
                    <p className="text-gray-700 text-xl leading-relaxed mb-4">
                        Liberty Church meets in two convenient locations across South Wales, making it easier
                        for our community to gather and worship together as one church family.
                    </p>
                </div>

                {/* Locations Overview */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-8 border-b-4 border-gray-900 pb-2 inline-block">
                        Our Two Locations
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Newport Location */}
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="w-6 h-6 text-gray-600" />
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900">
                                    Newport
                                </h3>
                            </div>
                            <div className="space-y-3">
                                <p className="text-gray-700 text-lg">
                                    <strong>Address:</strong><br />
                                    Gaer Park Drive<br />
                                    Newport, NP20 3NN
                                </p>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-gray-600" />
                                    <p className="text-gray-700">Sundays at 10:30 AM</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Car className="w-5 h-5 text-gray-600" />
                                    <p className="text-gray-700">Free parking available</p>
                                </div>
                            </div>
                            <Link
                                to="/sunday-gatherings/newport"
                                className="inline-block mt-4 bg-gray-900 text-white px-4 py-2 rounded-md font-condensed font-bold uppercase text-sm hover:bg-gray-800 transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Risca Location */}
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="w-6 h-6 text-gray-600" />
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900">
                                    Risca
                                </h3>
                            </div>
                            <div className="space-y-3">
                                <p className="text-gray-700 text-lg">
                                    <strong>Address:</strong><br />
                                    Risca Scouts Hall<br />
                                    Risca, NP11 6LL
                                </p>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-gray-600" />
                                    <p className="text-gray-700">Sundays at 10:30 AM</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Car className="w-5 h-5 text-gray-600" />
                                    <p className="text-gray-700">Free parking available</p>
                                </div>
                            </div>
                            <Link
                                to="/sunday-gatherings/risca"
                                className="inline-block mt-4 bg-gray-900 text-white px-4 py-2 rounded-md font-condensed font-bold uppercase text-sm hover:bg-gray-800 transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Same Church, Different Places */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        One Church, Two Communities
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        While we meet in two different locations, we are one church family united by our
                        shared vision, values, and mission. Both locations offer the same warm welcome,
                        engaging worship, and practical Bible teaching.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <Users className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                            <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                Same Vision
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Both locations share the same mission to rebuild, renew, and restore lives
                            </p>
                        </div>

                        <div className="text-center">
                            <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                            <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                Local Community
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Each location serves its local community while being part of the larger church
                            </p>
                        </div>

                        <div className="text-center">
                            <Clock className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                            <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                Same Time
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Both services meet at 10:30 AM, making it easy to visit either location
                            </p>
                        </div>
                    </div>
                </section>

                {/* What Makes Each Special */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        What Makes Each Location Special
                    </h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Newport - Heart of the City
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Our Newport location serves the heart of the city and surrounding areas.
                                With easy access from major roads and excellent facilities, it's a hub
                                for our larger gatherings and events. The community here reflects the
                                diversity and vibrancy of city life.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Risca - Community Connection
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Our Risca location offers a more intimate, community-focused gathering.
                                Meeting in the local Scouts Hall, this location has a strong neighborhood
                                feel where everyone knows each other and visitors quickly become part of
                                the extended family.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Choosing a Location */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Which Location Should I Choose?
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            The choice is entirely up to you! Consider these factors:
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 shrink-0"></span>
                                <span><strong>Convenience:</strong> Which location is easier for you to reach?</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 shrink-0"></span>
                                <span><strong>Community:</strong> Do you prefer a larger, diverse gathering or a smaller, intimate community?</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 shrink-0"></span>
                                <span><strong>Flexibility:</strong> Feel free to visit both and see which feels like home!</span>
                            </li>
                        </ul>
                        <p className="text-gray-700 text-lg leading-relaxed mt-4">
                            Remember, whichever location you choose, you're joining the same church family
                            with the same heart for God and community.
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        Visit Us This Sunday
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        Choose the location that works best for you, or visit both to see which feels like home!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/sunday-gatherings/newport"
                            className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors"
                        >
                            Newport Details
                        </Link>
                        <Link
                            to="/sunday-gatherings/risca"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-white/10 transition-colors"
                        >
                            Risca Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}