import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Calendar, Clock, Users } from 'lucide-react';

interface VideoCardProps {
    title: string;
    type: 'service' | 'event' | 'teaching';
    date: string;
    duration: string;
    thumbnail: string;
    description: string;
    viewCount?: string;
}

function VideoCard({ title, type, date, duration, thumbnail, description, viewCount }: VideoCardProps) {
    const getTypeLabel = (type: string) => {
        switch (type) {
            case 'service': return 'Sunday Service';
            case 'event': return 'Special Event';
            case 'teaching': return 'Teaching';
            default: return 'Video';
        }
    };

    const getTypeBadgeColor = (type: string) => {
        switch (type) {
            case 'service': return 'bg-blue-600';
            case 'event': return 'bg-green-600';
            case 'teaching': return 'bg-purple-600';
            default: return 'bg-gray-600';
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-video bg-gray-200">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-gray-900 ml-1" />
                    </div>
                </div>

                <div className="absolute top-3 left-3">
                    <span className={`${getTypeBadgeColor(type)} text-white px-2 py-1 rounded text-xs font-condensed font-bold uppercase`}>
                        {getTypeLabel(type)}
                    </span>
                </div>

                <div className="absolute bottom-3 right-3">
                    <span className="bg-black/80 text-white px-2 py-1 rounded text-xs font-mono">
                        {duration}
                    </span>
                </div>
            </div>

            <div className="p-4">
                <h3 className="font-condensed font-black text-lg uppercase text-gray-900 leading-tight mb-2">
                    {title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    {description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{date}</span>
                        </div>
                        {viewCount && (
                            <div className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                <span>{viewCount} views</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

const recentVideos = [
    {
        title: "Walking in Freedom - Full Service",
        type: 'service' as const,
        date: "10 Dec 2024",
        duration: "1:25:30",
        thumbnail: "https://images.pexels.com/photos/7534456/pexels-photo-7534456.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Complete Sunday service including worship, announcements, and the message on walking in the freedom Christ provides.",
        viewCount: "234"
    },
    {
        title: "Christmas Carol Service 2024",
        type: 'event' as const,
        date: "8 Dec 2024",
        duration: "58:45",
        thumbnail: "https://images.pexels.com/photos/1303088/pexels-photo-1303088.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Our special Christmas celebration featuring carols, readings, and the Christmas message of hope and joy.",
        viewCount: "456"
    },
    {
        title: "Building Strong Foundations",
        type: 'teaching' as const,
        date: "3 Dec 2024",
        duration: "32:15",
        thumbnail: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Deep dive teaching on building your life on the solid foundation of God's Word and promises.",
        viewCount: "189"
    },
    {
        title: "Newport Community Outreach",
        type: 'event' as const,
        date: "26 Nov 2024",
        duration: "45:20",
        thumbnail: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Highlights from our community outreach event in Newport, showing God's love in action through practical service.",
        viewCount: "312"
    },
    {
        title: "The Heart of Worship - Full Service",
        type: 'service' as const,
        date: "26 Nov 2024",
        duration: "1:22:10",
        thumbnail: "https://images.pexels.com/photos/7534456/pexels-photo-7534456.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Exploring what it means to worship God in spirit and truth, both corporately and personally.",
        viewCount: "278"
    },
    {
        title: "Liberty Groups Leader Training",
        type: 'teaching' as const,
        date: "19 Nov 2024",
        duration: "1:15:30",
        thumbnail: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Training session for Liberty Groups leaders on facilitating meaningful small group discussions and pastoral care.",
        viewCount: "67"
    }
];

export default function VideoSessionsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/7534456/pexels-photo-7534456.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Video Sessions"
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
                            Video Sessions
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Watch Services & Events
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
                {/* Introduction */}
                <div className="mb-12 text-center">
                    <p className="text-gray-700 text-xl leading-relaxed mb-4">
                        Experience our Sunday services, special events, and teaching sessions from anywhere.
                        Join us virtually when you can't be with us in person.
                    </p>
                </div>

                {/* Featured Video */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Latest Service
                    </h2>

                    <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-gray-900">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src="https://images.pexels.com/photos/7534456/pexels-photo-7534456.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Latest Service"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer hover:bg-black/30 transition-colors">
                                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                                        <Play className="w-10 h-10 text-gray-900 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3">
                                    <span className="bg-black/80 text-white px-2 py-1 rounded text-sm font-mono">
                                        1:25:30
                                    </span>
                                </div>
                            </div>

                            <div>
                                <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-condensed font-bold uppercase mb-3 inline-block">
                                    Sunday Service
                                </span>
                                <h3 className="font-condensed font-black text-2xl uppercase text-gray-900 mb-4">
                                    Walking in Freedom
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    Join us for this powerful message about discovering and living in the freedom
                                    that Christ has purchased for us. This complete service includes worship,
                                    community time, and an encouraging word from Pastor John Smith.
                                </p>

                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>10 December 2024</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        <span>234 views</span>
                                    </div>
                                </div>

                                <button className="bg-gray-900 text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-800 transition-colors">
                                    Watch Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Categories */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Browse by Category
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <button className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition-colors">
                            <h3 className="font-condensed font-black text-xl uppercase mb-2">Sunday Services</h3>
                            <p className="text-blue-100">Complete worship services from both locations</p>
                        </button>

                        <button className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors">
                            <h3 className="font-condensed font-black text-xl uppercase mb-2">Special Events</h3>
                            <p className="text-green-100">Holiday services, community events, and celebrations</p>
                        </button>

                        <button className="bg-purple-600 text-white p-6 rounded-lg hover:bg-purple-700 transition-colors">
                            <h3 className="font-condensed font-black text-xl uppercase mb-2">Teaching Sessions</h3>
                            <p className="text-purple-100">In-depth Bible studies and teaching series</p>
                        </button>
                    </div>
                </section>

                {/* Recent Videos Grid */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Recent Videos
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentVideos.map((video, index) => (
                            <VideoCard key={index} {...video} />
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button className="bg-gray-900 text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-800 transition-colors">
                            Load More Videos
                        </button>
                    </div>
                </section>

                {/* Viewing Options */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        How to Watch
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Play className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                Stream Live
                            </h3>
                            <p className="text-gray-700 text-sm">
                                Watch in high quality from any device with internet
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-condensed font-bold text-xl">📱</span>
                            </div>
                            <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                Mobile Ready
                            </h3>
                            <p className="text-gray-700 text-sm">
                                Optimized for phones and tablets on the go
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-condensed font-bold text-xl">📺</span>
                            </div>
                            <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                Big Screen
                            </h3>
                            <p className="text-gray-700 text-sm">
                                Cast to your TV for a full worship experience
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                Anytime Access
                            </h3>
                            <p className="text-gray-700 text-sm">
                                Available 24/7 - watch when it's convenient for you
                            </p>
                        </div>
                    </div>
                </section>

                {/* Live Streaming Info */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Live Streaming
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            Join us live every Sunday at 10:30 AM! Can't make it in person? Watch our services
                            live as they happen from both our Newport and Risca locations.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                    Live Stream Benefits
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Participate in real-time worship</li>
                                    <li>• Submit prayer requests during service</li>
                                    <li>• Feel connected to your church family</li>
                                    <li>• Perfect for illness, travel, or bad weather</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-condensed font-bold text-lg uppercase text-gray-900 mb-2">
                                    Getting Notified
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Subscribe to our channel for notifications</li>
                                    <li>• Follow us on social media for updates</li>
                                    <li>• Sign up for email reminders</li>
                                    <li>• Set your own calendar reminders</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        Never Miss a Moment
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        Subscribe to stay updated with new videos and live stream notifications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors">
                            Subscribe for Updates
                        </button>
                        <Link
                            to="/media/listen-again"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-white/10 transition-colors"
                        >
                            Listen to Audio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}