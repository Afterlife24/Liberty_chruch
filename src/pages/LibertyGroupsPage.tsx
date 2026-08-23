import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Calendar, MapPin, Heart } from 'lucide-react';

export default function LibertyGroupsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Liberty Groups"
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
                            Liberty Groups
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Community • Connection • Growth
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                {/* Introduction */}
                <div className="mb-12 text-center">
                    <p className="text-gray-700 text-xl leading-relaxed mb-4">
                        Life change happens in relationship. Our Liberty Groups are where you'll find authentic community,
                        spiritual growth, and lasting friendships.
                    </p>
                </div>

                {/* What Are Liberty Groups */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        What Are Liberty Groups?
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        Liberty Groups are small communities of 8-15 people who meet regularly to study the Bible,
                        pray together, and support each other through life's journey. These groups are the heart
                        of our church community where real relationships are built and faith is strengthened.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">
                                    Community
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Build meaningful relationships with people who will walk alongside you
                                    through both celebrations and challenges.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                                <Heart className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">
                                    Support
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Experience care and encouragement from others who understand your journey
                                    and want to see you thrive.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What to Expect */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        What to Expect
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900 mb-6">
                        <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-4">
                            A Typical Group Meeting
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 shrink-0"></div>
                                <span className="text-gray-700 text-lg">
                                    <strong>Welcome & Check-in:</strong> Share what's happening in your life
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 shrink-0"></div>
                                <span className="text-gray-700 text-lg">
                                    <strong>Bible Study:</strong> Explore God's Word together in practical ways
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 shrink-0"></div>
                                <span className="text-gray-700 text-lg">
                                    <strong>Prayer:</strong> Support each other through prayer and encouragement
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 shrink-0"></div>
                                <span className="text-gray-700 text-lg">
                                    <strong>Fellowship:</strong> Enjoy refreshments and deeper conversation
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Group Types */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Types of Groups
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Mixed Groups
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Men and women studying together, perfect for couples, families,
                                and anyone who enjoys diverse perspectives and discussions.
                            </p>

                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Men's Groups
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Focused on issues and topics relevant to men, providing a space
                                for honest conversation and brotherhood.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Women's Groups
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Designed specifically for women to build friendships and explore
                                faith together in a supportive environment.
                            </p>

                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Age-Specific Groups
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Groups for young adults, middle-aged, and seniors, focusing on
                                the unique challenges and opportunities of each life stage.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Meeting Details */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        When & Where We Meet
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                            <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                Weekly Meetings
                            </h3>
                            <p className="text-gray-700">
                                Most groups meet once a week for 1.5-2 hours
                            </p>
                        </div>

                        <div className="text-center">
                            <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                            <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                Various Locations
                            </h3>
                            <p className="text-gray-700">
                                Homes, church building, and community spaces
                            </p>
                        </div>

                        <div className="text-center">
                            <Users className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                            <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                Small & Personal
                            </h3>
                            <p className="text-gray-700">
                                8-15 people for meaningful conversation
                            </p>
                        </div>
                    </div>
                </section>

                {/* How to Join */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        How to Join a Group
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            Getting connected to a Liberty Group is easy! Here are a few ways to get started:
                        </p>
                        <ol className="space-y-3">
                            <li className="text-gray-700 text-lg leading-relaxed">
                                <strong className="text-gray-900">1. Talk to us after a Sunday service</strong> -
                                Our team can help match you with the right group
                            </li>
                            <li className="text-gray-700 text-lg leading-relaxed">
                                <strong className="text-gray-900">2. Fill out a connection card</strong> -
                                Available at our welcome desk or online
                            </li>
                            <li className="text-gray-700 text-lg leading-relaxed">
                                <strong className="text-gray-900">3. Contact our church office</strong> -
                                We'll personally help you find your fit
                            </li>
                            <li className="text-gray-700 text-lg leading-relaxed">
                                <strong className="text-gray-900">4. Try a group</strong> -
                                Most groups welcome visitors before you commit
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        Ready to Find Your Group?
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        Don't do life alone. Join a Liberty Group and discover the joy of authentic community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors">
                            Find a Group
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-white/10 transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}