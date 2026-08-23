import { Link } from 'react-router-dom';
import { ArrowLeft, Coffee, Users, Clock, MapPin } from 'lucide-react';

export default function CoffeeHousePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="The Coffee House"
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
                            The Coffee House
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Community • Conversation • Connection
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                {/* Introduction */}
                <div className="mb-12 text-center">
                    <p className="text-gray-700 text-xl leading-relaxed mb-4">
                        Sometimes the best conversations happen over a great cup of coffee. Welcome to The Coffee House -
                        our relaxed space for community, conversation, and authentic connection.
                    </p>
                </div>

                {/* What Is The Coffee House */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        What Is The Coffee House?
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        The Coffee House is more than just a place to grab a drink - it's a welcoming space where
                        relationships are built, ideas are shared, and community happens naturally. Whether you're
                        looking to connect with others, have meaningful conversations, or simply enjoy great coffee
                        in a comfortable environment, you'll find your place here.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                                <Coffee className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">
                                    Great Coffee & Treats
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Enjoy freshly brewed coffee, specialty drinks, pastries, and light refreshments
                                    in a comfortable, cafe-style atmosphere.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">
                                    Authentic Community
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Meet new people, reconnect with friends, and build meaningful relationships
                                    in a relaxed, no-pressure environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* When We're Open */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        When We're Open
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="w-6 h-6 text-gray-600" />
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900">
                                    Sunday Mornings
                                </h3>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-3">
                                <strong>Before Service:</strong> 9:45 AM - 10:25 AM
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-3">
                                <strong>After Service:</strong> 12:00 PM - 1:00 PM
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Perfect for connecting before worship or continuing conversations after the service.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="w-6 h-6 text-gray-600" />
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900">
                                    Special Events
                                </h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Throughout the month, we host special Coffee House events including:
                            </p>
                            <ul className="space-y-1 text-gray-700">
                                <li>• Community coffee mornings</li>
                                <li>• Meet & greet sessions for newcomers</li>
                                <li>• Themed conversation evenings</li>
                                <li>• Book club discussions</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* What You'll Find */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        What You'll Find
                    </h2>

                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                    Beverages
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-lg">
                                    <li>• Freshly brewed coffee and espresso</li>
                                    <li>• Specialty lattes and cappuccinos</li>
                                    <li>• Selection of teas and herbal infusions</li>
                                    <li>• Hot chocolate and cold drinks</li>
                                    <li>• Fresh juices and smoothies</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                    Food & Snacks
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-lg">
                                    <li>• Fresh pastries and muffins</li>
                                    <li>• Homemade cakes and biscuits</li>
                                    <li>• Light sandwiches and paninis</li>
                                    <li>• Healthy snacks and fruit</li>
                                    <li>• Special dietary options available</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Atmosphere */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        The Atmosphere
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            Our Coffee House is designed to feel like your favorite local cafe - warm, welcoming,
                            and comfortable. You'll find:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-2 text-gray-700">
                                <li>• Comfortable seating areas for small groups</li>
                                <li>• Quiet corners for intimate conversations</li>
                                <li>• Communal tables for meeting new people</li>
                                <li>• Relaxed background music</li>
                            </ul>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Free WiFi for those who need to work</li>
                                <li>• Reading materials and local information</li>
                                <li>• Child-friendly spaces for families</li>
                                <li>• Accessibility features for everyone</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Perfect For */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Perfect For
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="text-center p-4">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                First-Time Visitors
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Meet people and get to know our church family in a relaxed setting
                            </p>
                        </div>

                        <div className="text-center p-4">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Coffee className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                Catch-Up Sessions
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Reconnect with friends or have those important conversations over coffee
                            </p>
                        </div>

                        <div className="text-center p-4">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                Quiet Moments
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Take time to reflect, read, or simply enjoy a peaceful moment
                            </p>
                        </div>
                    </div>
                </section>

                {/* Get Involved */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Get Involved
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        The Coffee House runs thanks to our amazing volunteers who love serving others.
                        If you're interested in being part of the team, we'd love to have you! Whether
                        you enjoy making coffee, baking, serving customers, or simply creating a welcoming
                        atmosphere, there's a place for you.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                        <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                            Volunteer Opportunities
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Barista team - making great coffee and drinks</li>
                            <li>• Kitchen team - preparing food and managing supplies</li>
                            <li>• Hospitality team - welcoming guests and creating atmosphere</li>
                            <li>• Setup/cleanup crew - helping with logistics</li>
                            <li>• Special events team - organizing themed gatherings</li>
                        </ul>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        Come For The Coffee, Stay For The Community
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        Join us at The Coffee House and discover what real community feels like over a great cup of coffee.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/im-new-here/planning-your-visit"
                            className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors"
                        >
                            Visit This Sunday
                        </Link>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-white/10 transition-colors">
                            Join The Team
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}