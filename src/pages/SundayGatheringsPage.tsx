import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface SubPageCardProps {
    title: string;
    description: string;
    link: string;
    image: string;
}

function SubPageCard({ title, description, link, image }: SubPageCardProps) {
    return (
        <Link to={link} className="group">
            <div className="relative overflow-hidden rounded-md aspect-[4/3] mb-4">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-condensed font-black text-xl uppercase leading-tight">
                        {title}
                    </h3>
                </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                {description}
            </p>
        </Link>
    );
}

const subPages = [
    {
        title: "Places of Liberty",
        description: "Discover all the locations where Liberty Church gathers to worship and build community together.",
        link: "/sunday-gatherings/places-of-liberty",
        image: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Newport",
        description: "Join us at our Newport location for Sunday worship at Gaer Park Drive. Find all the details about this vibrant community.",
        link: "/sunday-gatherings/newport",
        image: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Risca",
        description: "Worship with us at our Risca location at the Scouts Hall. Discover this welcoming community and what makes it special.",
        link: "/sunday-gatherings/risca",
        image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
    }
];

export default function SundayGatheringsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Sunday Gatherings"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

                {/* Back Button */}
                <Link
                    to="/"
                    className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-colors shadow-lg"
                    aria-label="Back to home"
                >
                    <ArrowLeft size={24} />
                </Link>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-white font-condensed font-black text-4xl md:text-6xl uppercase leading-none mb-2">
                            Sunday Gatherings
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Worship • Community • Growth
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                <SectionTitle title="Join Us This Sunday" />

                <div className="mb-12">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Every Sunday, we gather as a church family to worship God, learn from His Word, and encourage
                        one another. Whether you're a first-time visitor or a long-time member, you'll find a warm
                        welcome at both of our locations.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Our services are designed to be authentic, relevant, and accessible to people from all walks
                        of life. Come as you are and experience the joy of worshiping together as one family.
                    </p>
                </div>

                {/* Service Overview */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        What to Expect
                    </h2>

                    <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-gray-900 mb-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                    Service Times
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    Both locations meet at <strong>10:30 AM</strong> every Sunday morning.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Services typically run for about 90 minutes, including time for fellowship
                                    before and after.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                    What Happens
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Contemporary worship and music</li>
                                    <li>• Practical, Bible-based teaching</li>
                                    <li>• Times of prayer and reflection</li>
                                    <li>• Community announcements</li>
                                    <li>• Coffee and fellowship</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Locations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {subPages.map((page) => (
                        <SubPageCard key={page.title} {...page} />
                    ))}
                </div>

                {/* For Everyone */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Everyone Is Welcome
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                First-Time Visitors
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                New to church or just visiting the area? Our welcome team will help you
                                feel at home from the moment you arrive.
                            </p>
                        </div>

                        <div className="text-center">
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Families with Children
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                We have age-appropriate programs for children, or they're welcome to
                                stay with you in the main service - whatever works best for your family.
                            </p>
                        </div>

                        <div className="text-center">
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Every Life Stage
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                From young adults to seniors, singles to families, everyone has a place
                                in our church community.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        We Can't Wait to Meet You
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        Choose the location that's most convenient for you and join us this Sunday!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/sunday-gatherings/newport"
                            className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors"
                        >
                            Newport Location
                        </Link>
                        <Link
                            to="/sunday-gatherings/risca"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-white/10 transition-colors"
                        >
                            Risca Location
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}