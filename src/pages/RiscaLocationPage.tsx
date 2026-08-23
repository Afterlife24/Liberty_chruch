import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Car, Users, Heart } from 'lucide-react';

export default function RiscaLocationPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Risca Location"
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
                            Risca Location
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Scouts Hall • Community Heart
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
                                            Risca Scouts Hall<br />
                                            Risca<br />
                                            NP11 6LL
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
                                            Free parking available<br />
                                            <span className="text-sm text-gray-600">Street parking and nearby spaces</span>
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
                                            Intimate community gathering<br />
                                            <span className="text-sm text-gray-600">Close-knit, family atmosphere</span>
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
                        What to Expect at Risca
                    </h2>

                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                    Before the Service (10:00 - 10:30 AM)
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-lg">
                                    <li>• Personal welcome at the door</li>
                                    <li>• Tea, coffee, and homemade treats</li>
                                    <li>• Children's area set up for Liberty Kids</li>
                                    <li>• Opportunity for genuine conversation</li>
                                    <li>• Community catch-up time</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                    During the Service (10:30 AM - 12:00 PM)
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-lg">
                                    <li>• Heartfelt worship and singing</li>
                                    <li>• Community sharing and prayer</li>
                                    <li>• Interactive children's program</li>
                                    <li>• Practical, relevant Bible teaching</li>
                                    <li>• Personal prayer ministry available</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                            <div className="flex items-start gap-3">
                                <Heart className="w-6 h-6 mt-1 text-gray-600" />
                                <div>
                                    <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                        After the Service (12:00 - 1:00 PM)
                                    </h3>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-3">
                                        The Risca community loves to linger and connect:
                                    </p>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Extended fellowship time with refreshments</li>
                                        <li>• Children often continue playing together</li>
                                        <li>• Deep conversations and mutual support</li>
                                        <li>• Planning community activities and outreach</li>
                                        <li>• Everyone knows everyone - you'll quickly be family!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Character */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        The Heart of Risca Community
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Our Risca location embodies the true meaning of community. Meeting in the local
                        Scouts Hall, we've created a warm, family atmosphere where everyone matters and
                        no one gets lost in the crowd. This is church as it was meant to be - authentic
                        relationships, genuine care, and shared life together.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                What Makes Risca Special
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 shrink-0"></span>
                                    <span><strong>Everyone has a name:</strong> You'll be known and missed when you're not there</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 shrink-0"></span>
                                    <span><strong>Multigenerational:</strong> From babies to grandparents, all ages worship together</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 shrink-0"></span>
                                    <span><strong>Community focused:</strong> Actively involved in local Risca community life</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 shrink-0"></span>
                                    <span><strong>Personal care:</strong> Real support through life's ups and downs</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Community Involvement
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                The Risca community is deeply embedded in local life:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Active in local schools and community events</li>
                                <li>• Supports local families in need</li>
                                <li>• Participates in town festivals and activities</li>
                                <li>• Partners with other local organizations</li>
                                <li>• Hosts community outreach events</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Facilities & Accessibility */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Facilities at Scouts Hall
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            The Risca Scouts Hall provides a welcoming, comfortable environment for our church family:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                    What's Available
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Main hall with flexible seating</li>
                                    <li>• Kitchen facilities for refreshments</li>
                                    <li>• Dedicated children's space</li>
                                    <li>• Sound system and projection</li>
                                    <li>• Clean restroom facilities</li>
                                    <li>• Heating and comfortable lighting</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                    Accessibility
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Ground level access</li>
                                    <li>• Nearby parking available</li>
                                    <li>• Wheelchair accessible facilities</li>
                                    <li>• Good acoustics for hearing</li>
                                    <li>• Well-lit and safe environment</li>
                                    <li>• Personal assistance always available</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Getting There */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Getting to Risca
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                By Car
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Risca is easily accessible from the wider South Wales area:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• From Newport: A467 north to Risca</li>
                                <li>• From Cardiff: A470 to A467 via Caerphilly</li>
                                <li>• Postcode for GPS: NP11 6LL</li>
                                <li>• Free street parking nearby</li>
                                <li>• Local knowledge available for best routes</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Public Transport & Lifts
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Getting to Risca without a car:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Regular bus services to Risca center</li>
                                <li>• Short walk from main Risca bus stops</li>
                                <li>• Crosskeys railway station nearby</li>
                                <li>• Lift-sharing network within our community</li>
                                <li>• Contact us - we're happy to arrange transport!</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Perfect For */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Risca is Perfect If You...
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg"><strong>Love authentic community</strong> - where everyone knows your name and cares about your story</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg"><strong>Prefer smaller gatherings</strong> - where you can participate and your voice can be heard</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg"><strong>Value multigenerational relationships</strong> - learning from both young and old</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg"><strong>Want to be involved</strong> - opportunities to serve and contribute are always available</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg"><strong>Live in the valleys</strong> - convenient location for Risca, Crosskeys, Blackwood, and surrounding areas</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        Experience Community at Risca
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        Come and discover what it feels like to be part of a genuine church family where everyone belongs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/im-new-here/planning-your-visit"
                            className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors"
                        >
                            Plan Your Visit
                        </Link>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-white/10 transition-colors">
                            Contact Risca Team
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}