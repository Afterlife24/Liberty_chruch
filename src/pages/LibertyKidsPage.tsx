import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Shield, Heart, Users } from 'lucide-react';

export default function LibertyKidsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/8613313/pexels-photo-8613313.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Liberty Kids"
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
                            Liberty Kids
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Fun • Safe • Life-Changing
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                {/* Introduction */}
                <div className="mb-12 text-center">
                    <p className="text-gray-700 text-xl leading-relaxed mb-4">
                        At Liberty Kids, we believe every child is a gift from God with incredible potential.
                        We're committed to providing a fun, safe environment where children can learn about God's love
                        and grow in their faith.
                    </p>
                </div>

                {/* Age Groups */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-8 border-b-4 border-gray-900 pb-2 inline-block">
                        Age Groups
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                            <h3 className="font-condensed font-black text-2xl uppercase text-gray-900 mb-3">
                                Little Liberties (Ages 2-5)
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                Our youngest learners discover God's love through songs, stories, crafts, and play.
                                Every activity is designed to introduce them to Jesus in age-appropriate ways.
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Bible stories with interactive elements</li>
                                <li>• Simple songs and worship</li>
                                <li>• Creative crafts and activities</li>
                                <li>• Snack time and free play</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                            <h3 className="font-condensed font-black text-2xl uppercase text-gray-900 mb-3">
                                Liberty Explorers (Ages 6-11)
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                School-age children dive deeper into God's Word through engaging lessons, games,
                                and activities that help them understand how to live for Jesus.
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Interactive Bible lessons</li>
                                <li>• Group games and challenges</li>
                                <li>• Memory verse competitions</li>
                                <li>• Service projects and missions</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* What Makes Us Special */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        What Makes Liberty Kids Special
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">
                                    Safe Environment
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    All our volunteers are background-checked and trained. We maintain strict
                                    safety protocols to ensure your child is secure and protected.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                                <Star className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">
                                    Engaging Content
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We use creative teaching methods, interactive games, and hands-on activities
                                    to keep children engaged while learning biblical truths.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                                <Heart className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">
                                    Loving Leaders
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Our dedicated volunteers love children and are passionate about helping
                                    them discover God's love in a nurturing, encouraging environment.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-2">
                                    Small Groups
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We keep our groups small to ensure every child receives personal attention
                                    and can build meaningful relationships with leaders and peers.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* When We Meet */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        When We Meet
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                    Sunday Mornings
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed mb-2">
                                    <strong>Time:</strong> During both 10:30 AM services
                                </p>
                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    <strong>Locations:</strong> Available at both Newport and Risca locations
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Children are dismissed from the main service after worship to join their
                                    age-appropriate programs.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                    Special Events
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    Throughout the year, we host special events including:
                                </p>
                                <ul className="space-y-1 text-gray-700">
                                    <li>• Holiday celebrations and parties</li>
                                    <li>• Summer holiday clubs</li>
                                    <li>• Family fun days</li>
                                    <li>• Community outreach events</li>
                                </ul>
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
                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Your First Visit
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                When you arrive, our welcome team will greet you and your child, complete a simple
                                check-in process, and introduce you to your child's group leader. We'll give you
                                a pager so we can contact you if needed during the service.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                A Typical Session
                            </h3>
                            <ul className="space-y-2 text-gray-700 text-lg">
                                <li>• <strong>Welcome & Games:</strong> Fun activities to help children settle in</li>
                                <li>• <strong>Worship Time:</strong> Age-appropriate songs and music</li>
                                <li>• <strong>Bible Story:</strong> Interactive teaching of God's Word</li>
                                <li>• <strong>Activity Time:</strong> Crafts, games, or discussion related to the lesson</li>
                                <li>• <strong>Prayer & Snack:</strong> Closing prayer and healthy refreshments</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Safety & Policies */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Safety & Policies
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            Your child's safety is our top priority. Here's what we do to ensure a secure environment:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li>• All volunteers undergo background checks and safeguarding training</li>
                            <li>• Secure check-in and check-out system with photo ID verification</li>
                            <li>• Two-adult rule maintained in all classrooms</li>
                            <li>• Immediate contact system for parents during services</li>
                            <li>• Allergy and medical condition awareness protocols</li>
                            <li>• Regular safety drills and emergency procedures</li>
                        </ul>
                    </div>
                </section>

                {/* Get Involved */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Get Your Child Involved
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Ready to give your child an amazing experience at Liberty Kids? Just bring them along
                        to any Sunday service! Our team will take care of the rest and help them feel welcome
                        from day one.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        If you have questions about our programs, policies, or would like to volunteer,
                        don't hesitate to speak with our children's ministry team.
                    </p>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        Give Your Child an Amazing Start
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        Join us this Sunday and watch your child discover how much God loves them!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/im-new-here/planning-your-visit"
                            className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors"
                        >
                            Plan Your Visit
                        </Link>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-white/10 transition-colors">
                            Contact Kids Team
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}