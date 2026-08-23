import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Heart, Users, MapPin } from 'lucide-react';

export default function GlobalPicturePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] overflow-hidden">
                <img
                    src="/images/pages_banners_internal/Liberty Website-Internal Page Banner-Global Picture.jpg"
                    alt="Global Picture"
                    className="w-full h-full object-cover object-top"
                />

                {/* Back Button */}
                <Link
                    to="/"
                    className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-colors shadow-lg"
                    aria-label="Back to I'm New Here"
                >
                    <ArrowLeft size={24} />
                </Link>
            </div>

            {/* Page Title */}
            <div className="bg-gray-900 px-6 py-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-white font-condensed font-black text-4xl md:text-6xl uppercase leading-none mb-2">
                        Global Picture
                    </h1>
                    <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                        Making a Difference Worldwide
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                {/* Introduction */}
                <div className="mb-12 text-center">
                    <p className="text-gray-700 text-xl leading-relaxed mb-4">
                        We believe God's love is for everyone, everywhere. While we're rooted locally in Newport and Risca,
                        our heart extends globally as we partner with others to rebuild, renew, and restore lives around the world.
                    </p>
                </div>

                {/* Our Global Vision */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Our Global Vision
                    </h2>

                    <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-gray-900 mb-8">
                        <p className="text-gray-900 text-xl md:text-2xl font-condensed font-bold leading-relaxed mb-4">
                            "To see lives, communities, and nations rebuilt, renewed, and restored through the power of God's love."
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            This vision starts in our own neighborhoods but extends to the ends of the earth.
                            We believe every person deserves to know they are loved, valued, and have a purpose.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-condensed font-black text-xl uppercase text-gray-900 mb-3">
                                Rebuild Lives
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Helping individuals find hope, healing, and wholeness through Christ
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-condensed font-black text-xl uppercase text-gray-900 mb-3">
                                Renew Communities
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Transforming neighborhoods through practical love and service
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-condensed font-black text-xl uppercase text-gray-900 mb-3">
                                Restore Nations
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Supporting global missions and justice initiatives worldwide
                            </p>
                        </div>
                    </div>
                </section>

                {/* Local Impact */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Starting Local
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        We believe global impact starts with local action. In Newport, Risca, and the surrounding
                        areas, we're actively involved in our communities through:
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Community Outreach
                            </h3>
                            <ul className="space-y-2 text-gray-700 text-lg mb-6">
                                <li>• Food banks and support for families in need</li>
                                <li>• Youth programs and mentoring</li>
                                <li>• Elderly care and companionship</li>
                                <li>• Community events and festivals</li>
                            </ul>

                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Practical Support
                            </h3>
                            <ul className="space-y-2 text-gray-700 text-lg">
                                <li>• Job training and employment support</li>
                                <li>• Financial guidance and debt counseling</li>
                                <li>• Family support and counseling services</li>
                                <li>• Emergency assistance programs</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <MapPin className="w-8 h-8 text-gray-600 mb-4" />
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Our Local Partnerships
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                We partner with local organizations, schools, and government initiatives
                                to maximize our impact and avoid duplication of efforts.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                When the local community thrives, it creates a ripple effect that
                                extends far beyond our immediate area.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Global Partnerships */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Global Partnerships
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        While we work locally, we also support and partner with missions and organizations
                        around the world who share our vision of rebuilding, renewing, and restoring.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Church Planting & Leadership Development
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                We support the planting of new churches and training of local leaders
                                in regions where the gospel is taking root and communities need spiritual
                                leadership.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Humanitarian Aid & Development
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                Through our global partners, we contribute to clean water projects,
                                education initiatives, healthcare programs, and disaster relief efforts
                                that address immediate needs while building long-term capacity.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Justice & Advocacy
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                We believe in standing up for the marginalized and oppressed. We support
                                organizations fighting human trafficking, advocating for religious freedom,
                                and working for social justice around the world.
                            </p>
                        </div>
                    </div>
                </section>

                {/* How You Can Be Involved */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        How You Can Be Part of It
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Every person has something valuable to contribute to God's global mission.
                            Whether you're just beginning to explore faith or you're ready to get involved,
                            there are ways for you to make a difference:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-3">
                                    Locally
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Volunteer with community outreach programs</li>
                                    <li>• Use your professional skills to help others</li>
                                    <li>• Join a serving team at church</li>
                                    <li>• Participate in local mission projects</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-3">
                                    Globally
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Support mission partners through giving</li>
                                    <li>• Join short-term mission trips</li>
                                    <li>• Pray for global ministry initiatives</li>
                                    <li>• Consider long-term mission opportunities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Bigger Picture */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        The Bigger Picture
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        We believe that when local churches around the world are healthy, strong, and
                        actively serving their communities, the entire world is impacted for good.
                        Our role is to be faithful in our corner of Wales while supporting others
                        who are doing the same in their communities.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        This is bigger than any one church or organization - it's about God's kingdom
                        advancing through millions of individual acts of love, service, and faithfulness
                        happening simultaneously around the globe.
                    </p>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        Join the Global Mission
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        God has a role for you in His global mission. Whether it's serving locally
                        or supporting global initiatives, you can make a difference.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/im-new-here/planning-your-visit"
                            className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors"
                        >
                            Get Started
                        </Link>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-white/10 transition-colors">
                            Learn About Missions
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}