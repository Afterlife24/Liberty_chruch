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
        title: "Listen Again",
        description: "Catch up on Sunday messages and teachings you may have missed. Access our library of audio sermons and talks.",
        link: "/media/listen-again",
        image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Video Sessions",
        description: "Watch recorded services, special events, and teaching series. Experience our gatherings from anywhere.",
        link: "/media/video-sessions",
        image: "https://images.pexels.com/photos/7534456/pexels-photo-7534456.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "More Resources",
        description: "Explore additional materials including study guides, reading resources, and supplementary content to grow your faith.",
        link: "/media/more-resources",
        image: "https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

export default function MediaPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Media"
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
                            Media
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Access • Learn • Grow
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                <SectionTitle title="Stay Connected Wherever You Are" />

                <div className="mb-12">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Whether you missed a Sunday service, want to revisit a powerful message, or explore additional
                        resources for spiritual growth, our media library has everything you need to stay connected
                        and continue learning.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Access our complete collection of sermons, video content, and educational resources anytime,
                        anywhere. Perfect for personal study, group discussions, or sharing with friends and family.
                    </p>
                </div>

                {/* Media Overview */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-8 border-b-4 border-gray-900 pb-2 inline-block">
                        What's Available
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-condensed font-bold text-xl">♪</span>
                            </div>
                            <h3 className="font-condensed font-black text-xl uppercase text-gray-900 mb-3">
                                Audio Content
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Full sermon audio, teaching series, and special event recordings available for streaming or download
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-condensed font-bold text-xl">▶</span>
                            </div>
                            <h3 className="font-condensed font-black text-xl uppercase text-gray-900 mb-3">
                                Video Library
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Complete service recordings, special events, and teaching videos to watch at your own pace
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-condensed font-bold text-xl">📖</span>
                            </div>
                            <h3 className="font-condensed font-black text-xl uppercase text-gray-900 mb-3">
                                Study Resources
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Supplementary materials, study guides, and additional resources to deepen your understanding
                            </p>
                        </div>
                    </div>
                </section>

                {/* Media Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {subPages.map((page) => (
                        <SubPageCard key={page.title} {...page} />
                    ))}
                </div>

                {/* Benefits */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Why Use Our Media Library?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Never Miss a Message
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Couldn't make it to church? Away on holiday? Our complete library ensures
                                you can always catch up on what you've missed and stay connected to your church family.
                            </p>

                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Flexible Learning
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Learn at your own pace, pause to reflect, or replay sections that particularly
                                speak to you. Perfect for personal study or group discussions.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Share with Others
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Easily share messages and resources with friends, family, or those who
                                might be interested in exploring faith but haven't visited church yet.
                            </p>

                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Spiritual Growth
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Access additional resources and deeper teaching materials to help you
                                grow in your faith and understanding of God's Word.
                            </p>
                        </div>
                    </div>
                </section>

                {/* How to Access */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        How to Access
                    </h2>

                    <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-gray-900">
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            All our media content is available free of charge. Simply click on the sections above
                            to explore what's available:
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                    Online Streaming
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Listen or watch directly from our website on any device
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                    Download Options
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Save content for offline access when you don't have internet
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                    Mobile Friendly
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Optimized for phones and tablets - take it with you anywhere
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        Start Exploring Today
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        Dive into our media library and discover content that will inspire, challenge, and encourage you in your faith journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/media/listen-again"
                            className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors"
                        >
                            Listen to Sermons
                        </Link>
                        <Link
                            to="/media/video-sessions"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-white/10 transition-colors"
                        >
                            Watch Videos
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}