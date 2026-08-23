import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Download, Calendar, Clock } from 'lucide-react';

interface SermonCardProps {
    title: string;
    speaker: string;
    date: string;
    duration: string;
    series?: string;
    description: string;
}

function SermonCard({ title, speaker, date, duration, series, description }: SermonCardProps) {
    return (
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    {series && (
                        <p className="text-gray-600 font-condensed text-sm uppercase tracking-wide mb-1">
                            {series}
                        </p>
                    )}
                    <h3 className="font-condensed font-black text-xl uppercase text-gray-900 leading-tight mb-2">
                        {title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                        {description}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{duration}</span>
                    </div>
                    <span>by {speaker}</span>
                </div>

                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md font-condensed font-bold uppercase text-sm hover:bg-gray-800 transition-colors">
                        <Play className="w-4 h-4" />
                        Play
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <Download className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

const recentSermons = [
    {
        title: "Walking in Freedom",
        speaker: "Pastor John Smith",
        date: "10 Dec 2024",
        duration: "32 min",
        series: "Liberty in Christ Series",
        description: "Discover what it truly means to walk in the freedom that Christ has given us and how to live it out daily."
    },
    {
        title: "Building Strong Foundations",
        speaker: "Pastor Sarah Johnson",
        date: "3 Dec 2024",
        duration: "28 min",
        series: "Liberty in Christ Series",
        description: "Learn how to build your life on the solid foundation of God's Word and promises."
    },
    {
        title: "The Heart of Worship",
        speaker: "Pastor Mike Williams",
        date: "26 Nov 2024",
        duration: "35 min",
        description: "Exploring what it means to worship God in spirit and truth, both corporately and personally."
    },
    {
        title: "Community and Connection",
        speaker: "Pastor John Smith",
        date: "19 Nov 2024",
        duration: "30 min",
        series: "Life Together Series",
        description: "Understanding God's design for authentic community and how we can build meaningful relationships."
    },
    {
        title: "Generous Living",
        speaker: "Pastor Sarah Johnson",
        date: "12 Nov 2024",
        duration: "33 min",
        series: "Life Together Series",
        description: "Discovering the joy and blessing that comes from living with open hands and generous hearts."
    }
];

export default function ListenAgainPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Listen Again"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

                {/* Back Button */}
                <Link
                    to="/"
                    className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-colors shadow-lg"
                    aria-label="Back to Media"
                >
                    <ArrowLeft size={24} />
                </Link>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-white font-condensed font-black text-4xl md:text-6xl uppercase leading-none mb-2">
                            Listen Again
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Catch Up on Sunday Messages
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                {/* Introduction */}
                <div className="mb-12">
                    <p className="text-gray-700 text-xl leading-relaxed mb-4">
                        Never miss a Sunday message again! Access our complete library of audio sermons,
                        teaching series, and special talks from our pastoral team.
                    </p>
                </div>

                {/* Current Series Highlight */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Current Series: Liberty in Christ
                    </h2>

                    <div className="bg-gray-900 text-white p-8 rounded-lg mb-8">
                        <h3 className="font-condensed font-black text-2xl uppercase mb-4">
                            Discovering True Freedom
                        </h3>
                        <p className="text-gray-200 text-lg leading-relaxed mb-6">
                            Join us as we explore what it means to live in the freedom that Christ has purchased for us.
                            This powerful series examines how we can break free from the things that hold us back and
                            step into the abundant life God has planned.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors">
                                Listen to Latest
                            </button>
                            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-condensed font-bold uppercase hover:bg-white/10 transition-colors">
                                View Full Series
                            </button>
                        </div>
                    </div>
                </section>

                {/* Recent Messages */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Recent Messages
                    </h2>

                    <div className="space-y-6">
                        {recentSermons.map((sermon, index) => (
                            <SermonCard key={index} {...sermon} />
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button className="bg-gray-900 text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-800 transition-colors">
                            Load More Messages
                        </button>
                    </div>
                </section>

                {/* How to Listen */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        How to Listen
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Play className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Stream Online
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Click play to listen instantly from any device with an internet connection
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Download className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Download
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Save messages to your device for offline listening during commutes or travels
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-condensed font-bold text-xl">📱</span>
                            </div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Mobile Friendly
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Optimized for phones and tablets - perfect for listening on the go
                            </p>
                        </div>
                    </div>
                </section>

                {/* Search & Browse */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Find What You're Looking For
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                    Browse by Series
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Liberty in Christ (Current)</li>
                                    <li>• Life Together</li>
                                    <li>• Foundations of Faith</li>
                                    <li>• Christmas Messages 2024</li>
                                    <li>• Summer Teaching Series</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                    Browse by Speaker
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Pastor John Smith</li>
                                    <li>• Pastor Sarah Johnson</li>
                                    <li>• Pastor Mike Williams</li>
                                    <li>• Guest Speakers</li>
                                    <li>• Special Events</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Search Messages
                            </h3>
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Search by title, speaker, or topic..."
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900"
                                />
                                <button className="bg-gray-900 text-white px-6 py-2 rounded-md font-condensed font-bold uppercase hover:bg-gray-800 transition-colors">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        Stay Connected Through God's Word
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        Don't let distance or circumstances keep you from growing in faith.
                        Our audio library is here to support your spiritual journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors">
                            Subscribe to Updates
                        </button>
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