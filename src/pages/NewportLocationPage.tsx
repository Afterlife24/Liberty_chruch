import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Car, Users, Coffee } from 'lucide-react';

export default function NewportLocationPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Newport Location"
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
                            Newport Location
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Gaer Park Drive • Heart of the City
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                {/* Location Details */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-8 border-b-4 border-gray-900 pb-2 inline-block">
                        Location Information
                    </h2>

                    <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-gray-900 mb-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <div className="flex items-start gap-3 mb-6">
                                    <MapPin className="w-6 h-6 mt-1 text-gray-600" />
                                    <div>
                                        <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">
                                            Address
                                        </h3>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Gaer Park Drive<br />
                                            Newport<br />
                                            NP20 3NN
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Clock className="w-6 h-6 mt-1 text-gray-600" />
                                    <div>
                                        <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">
                                            Service Time
                                        </h3>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Sundays at 10:30 AM<br />
                                            <span className="text-sm text-gray-600">Service typically runs until 12:00 PM</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-start gap-3 mb-6">
                                    <Car className="w-6 h-6 mt-1 text-gray-600" />
                                    <div>
                                        <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">
                                            Parking
                                        </h3>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Free parking available on-site<br />
                                            <span className="text-sm text-gray-600">Accessible parking spaces available</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Users className="w-6 h-6 mt-1 text-gray-600" />
                                    <div>
                                        <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">
                                            Congregation Size
                                        </h3>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Our larger gathering<br />
                                            <span className="text-sm text-gray-600">Diverse, city-wide community</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What to Expect */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        What to Expect at Newport
                    </h2>

                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                    Before the Service (10:00 - 10:30 AM)
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-lg">
                                    <li>• Welcome team at the entrance</li>
                                    <li>• Coffee and light refreshments</li>
                                    <li>• Children's check-in for Liberty Kids</li>
                                    <li>• Opportunity to meet and greet others</li>
                                    <li>• Information about church activities</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                    During the Service (10:30 AM - 12:00 PM)
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-lg">
                                    <li>• Contemporary worship music</li>
                                    <li>• Community announcements</li>
                                    <li>• Children dismissed to Liberty Kids</li>
                                    <li>• Bible-based teaching and message</li>
                                    <li>• Time for prayer and reflection</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                            <div className="flex items-start gap-3">
                                <Coffee className="w-6 h-6 mt-1 text-gray-600" />
                                <div>
                                    <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                        After the Service (12:00 - 1:00 PM)
                                    </h3>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-3">
                                        Don't rush off! Some of the best connections happen after the service:
                                    </p>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• The Coffee House is open for refreshments</li>
                                        <li>• Children's pickup from Liberty Kids</li>
                                        <li>• Opportunity to meet the pastoral team</li>
                                        <li>• Connect with Liberty Groups leaders</li>
                                        <li>• Get information about getting involved</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Facilities */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Facilities & Accessibility
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Available Facilities
                            </h3>
                            <ul className="space-y-2 text-gray-700 text-lg">
                                <li>• Main worship area with comfortable seating</li>
                                <li>• Children's areas for Liberty Kids programs</li>
                                <li>• The Coffee House for refreshments</li>
                                <li>• Clean restroom facilities</li>
                                <li>• Lobby area for meeting and greeting</li>
                                <li>• Sound system with hearing loop</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Accessibility Features
                            </h3>
                            <ul className="space-y-2 text-gray-700 text-lg">
                                <li>• Wheelchair accessible entrance and facilities</li>
                                <li>• Accessible parking spaces close to entrance</li>
                                <li>• Hearing loop system available</li>
                                <li>• Clear sight lines throughout worship area</li>
                                <li>• Accessible restrooms</li>
                                <li>• Assistance available - just ask our team</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Getting There */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Getting to Newport
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                    By Car
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Gaer Park Drive is easily accessible from major Newport routes:
                                </p>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                    <li>• From M4: Exit at Junction 25 or 26</li>
                                    <li>• From city center: Follow signs to Gaer</li>
                                    <li>• Postcode for GPS: NP20 3NN</li>
                                    <li>• Free on-site parking available</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                    Public Transport
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Newport has good public transport links:
                                </p>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                    <li>• Regular bus services to Gaer area</li>
                                    <li>• Newport railway station nearby</li>
                                    <li>• Check local bus timetables for Sunday services</li>
                                    <li>• Happy to arrange lifts - just contact us!</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Focus */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Our Newport Community
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Our Newport location serves as a hub for the wider Newport area and beyond.
                        We're a diverse community that reflects the multicultural heart of the city,
                        with people from all walks of life, ages, and backgrounds coming together
                        as one church family.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        This location often hosts our larger church-wide events, special celebrations,
                        and community outreach programs. It's also home to many of our Liberty Groups,
                        ministry teams, and serves as a central point for church administration and
                        pastoral care.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Whether you live in Newport, work in the city, or are just passing through,
                        you'll find a warm welcome and genuine community at our Newport location.
                    </p>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        Join Us This Sunday at Newport
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        Experience the warmth of our Newport community and discover what it means to be part of the Liberty Church family.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/im-new-here/planning-your-visit"
                            className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors"
                        >
                            Plan Your Visit
                        </Link>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-white/10 transition-colors">
                            Contact Newport Team
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}