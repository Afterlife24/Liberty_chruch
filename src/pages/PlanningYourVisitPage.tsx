import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Users, Coffee } from 'lucide-react';

export default function PlanningYourVisitPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Planning Your Visit"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

                {/* Back Button */}
                <Link
                    to="/"
                    className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-colors shadow-lg"
                    aria-label="Back to I'm New Here"
                >
                    <ArrowLeft size={24} />
                </Link>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-white font-condensed font-black text-4xl md:text-6xl uppercase leading-none mb-2">
                            Planning Your Visit
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Everything You Need to Know
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                {/* Welcome Message */}
                <div className="mb-12 text-center">
                    <p className="text-gray-700 text-xl leading-relaxed mb-4">
                        We can't wait to welcome you to Liberty Church! Here's everything you need to know
                        to make your first visit comfortable and enjoyable.
                    </p>
                </div>

                {/* Service Times and Locations */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-8 border-b-4 border-gray-900 pb-2 inline-block">
                        When & Where We Meet
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Newport Location */}
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                            <div className="flex items-start gap-3 mb-4">
                                <MapPin className="w-6 h-6 mt-1 text-gray-600" />
                                <div>
                                    <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">
                                        Newport Location
                                    </h3>
                                    <p className="text-gray-700 text-lg">
                                        Gaer Park Drive<br />
                                        Newport, NP20 3NN
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-gray-600" />
                                <p className="text-gray-700 text-lg font-medium">
                                    Sundays at 10:30 AM
                                </p>
                            </div>
                        </div>

                        {/* Risca Location */}
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                            <div className="flex items-start gap-3 mb-4">
                                <MapPin className="w-6 h-6 mt-1 text-gray-600" />
                                <div>
                                    <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">
                                        Risca Location
                                    </h3>
                                    <p className="text-gray-700 text-lg">
                                        Risca Scouts Hall<br />
                                        Risca, NP11 6LL
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-gray-600" />
                                <p className="text-gray-700 text-lg font-medium">
                                    Sundays at 10:30 AM
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

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Coffee className="w-8 h-8 mt-1 text-gray-600 shrink-0" />
                            <div>
                                <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                    Before the Service (10:00 - 10:30 AM)
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Arrive a few minutes early to grab a coffee or tea and meet some friendly faces.
                                    Our welcome team will be happy to show you around and answer any questions.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Users className="w-8 h-8 mt-1 text-gray-600 shrink-0" />
                            <div>
                                <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                    During the Service (10:30 AM - 12:00 PM)
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed mb-3">
                                    Our services typically include:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li className="text-gray-700 text-lg leading-relaxed list-disc">
                                        Welcome and community announcements
                                    </li>
                                    <li className="text-gray-700 text-lg leading-relaxed list-disc">
                                        Contemporary worship music
                                    </li>
                                    <li className="text-gray-700 text-lg leading-relaxed list-disc">
                                        Bible-based teaching that's practical and relevant
                                    </li>
                                    <li className="text-gray-700 text-lg leading-relaxed list-disc">
                                        Time for prayer and reflection
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Practical Information */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Good to Know
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                What to Wear
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Come as you are! You'll see everything from jeans to suits. We care more about
                                your heart than your outfit.
                            </p>

                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Parking
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Free parking is available at both locations. Arrive a few minutes early to
                                find a good spot.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Children & Families
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Children are always welcome in our services. We also have age-appropriate
                                programs available for kids and teens.
                            </p>

                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Accessibility
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Both of our locations are wheelchair accessible. Please let us know if you
                                have any specific needs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* First Visit Tips */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Tips for First-Time Visitors
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                        <ul className="space-y-4">
                            <li className="text-gray-700 text-lg leading-relaxed">
                                <strong className="text-gray-900">Arrive 10-15 minutes early</strong> to get settled
                                and meet our welcome team
                            </li>
                            <li className="text-gray-700 text-lg leading-relaxed">
                                <strong className="text-gray-900">Don't feel pressure</strong> to participate in
                                anything you're not comfortable with
                            </li>
                            <li className="text-gray-700 text-lg leading-relaxed">
                                <strong className="text-gray-900">Stay after the service</strong> if you can -
                                we'd love to meet you and answer questions
                            </li>
                            <li className="text-gray-700 text-lg leading-relaxed">
                                <strong className="text-gray-900">Bring your questions</strong> - we're here to
                                help and would love to chat
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Contact Information */}
                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        Questions Before You Visit?
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        Don't hesitate to reach out! We'd love to help make your visit as comfortable as possible.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors">
                            Call Us
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-white/10 transition-colors">
                            Send an Email
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}