import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Download, ExternalLink, Search } from 'lucide-react';

interface ResourceCardProps {
    title: string;
    type: 'study-guide' | 'ebook' | 'article' | 'external';
    category: string;
    description: string;
    downloadUrl?: string;
    externalUrl?: string;
    thumbnail: string;
}

function ResourceCard({ title, type, category, description, downloadUrl, externalUrl, thumbnail }: ResourceCardProps) {
    const getTypeLabel = (type: string) => {
        switch (type) {
            case 'study-guide': return 'Study Guide';
            case 'ebook': return 'E-Book';
            case 'article': return 'Article';
            case 'external': return 'External Link';
            default: return 'Resource';
        }
    };

    const getTypeBadgeColor = (type: string) => {
        switch (type) {
            case 'study-guide': return 'bg-blue-600';
            case 'ebook': return 'bg-green-600';
            case 'article': return 'bg-purple-600';
            case 'external': return 'bg-orange-600';
            default: return 'bg-gray-600';
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-gray-200">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                    <span className={`${getTypeBadgeColor(type)} text-white px-2 py-1 rounded text-xs font-condensed font-bold uppercase`}>
                        {getTypeLabel(type)}
                    </span>
                </div>
            </div>

            <div className="p-4">
                <p className="text-gray-600 font-condensed text-sm uppercase tracking-wide mb-1">
                    {category}
                </p>
                <h3 className="font-condensed font-black text-lg uppercase text-gray-900 leading-tight mb-2">
                    {title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {description}
                </p>

                <div className="flex gap-2">
                    {downloadUrl && (
                        <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md font-condensed font-bold uppercase text-sm hover:bg-gray-800 transition-colors">
                            <Download className="w-4 h-4" />
                            Download
                        </button>
                    )}
                    {externalUrl && (
                        <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md font-condensed font-bold uppercase text-sm hover:bg-gray-800 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                            View
                        </button>
                    )}
                    {!downloadUrl && !externalUrl && (
                        <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md font-condensed font-bold uppercase text-sm hover:bg-gray-800 transition-colors">
                            <BookOpen className="w-4 h-4" />
                            Read
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

const resources = [
    {
        title: "Liberty in Christ Study Guide",
        type: 'study-guide' as const,
        category: "Current Series",
        description: "Comprehensive study guide to accompany our Liberty in Christ sermon series. Includes discussion questions, reflection exercises, and additional scriptures.",
        downloadUrl: "/downloads/liberty-in-christ-study-guide.pdf",
        thumbnail: "https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Prayer & Reflection Journal",
        type: 'ebook' as const,
        category: "Spiritual Growth",
        description: "A beautiful digital journal to guide your daily prayers and reflections. Includes prompts for gratitude, intercession, and personal growth.",
        downloadUrl: "/downloads/prayer-reflection-journal.pdf",
        thumbnail: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Building Strong Foundations",
        type: 'article' as const,
        category: "Faith Basics",
        description: "An in-depth article exploring the fundamental principles of Christian faith and how to build your life on God's unchanging truths.",
        thumbnail: "https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Family Devotions Guide",
        type: 'study-guide' as const,
        category: "Family Life",
        description: "Practical resource for families wanting to grow together in faith. Includes age-appropriate activities and discussion starters.",
        downloadUrl: "/downloads/family-devotions-guide.pdf",
        thumbnail: "https://images.pexels.com/photos/1648353/pexels-photo-1648353.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "YouVersion Bible App",
        type: 'external' as const,
        category: "Bible Study",
        description: "Free Bible app with multiple translations, reading plans, and community features. Perfect for daily Bible reading and study.",
        externalUrl: "https://www.youversion.com",
        thumbnail: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Community Service Opportunities",
        type: 'article' as const,
        category: "Outreach",
        description: "Discover ways to serve in our local community and make a difference. Includes current opportunities and how to get involved.",
        thumbnail: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "New Believer's Guide",
        type: 'ebook' as const,
        category: "New to Faith",
        description: "Essential resource for new Christians covering baptism, church membership, spiritual disciplines, and next steps in faith.",
        downloadUrl: "/downloads/new-believers-guide.pdf",
        thumbnail: "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Recommended Reading List",
        type: 'external' as const,
        category: "Book Recommendations",
        description: "Curated list of books recommended by our pastoral team for spiritual growth, theology, and Christian living.",
        externalUrl: "/reading-list",
        thumbnail: "https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

const categories = [
    "All Resources",
    "Current Series",
    "Spiritual Growth",
    "Faith Basics",
    "Family Life",
    "Bible Study",
    "Outreach",
    "New to Faith",
    "Book Recommendations"
];

export default function MoreResourcesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="More Resources"
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
                            More Resources
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Tools for Growth & Learning
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
                {/* Introduction */}
                <div className="mb-12 text-center">
                    <p className="text-gray-700 text-xl leading-relaxed mb-4">
                        Explore our library of study guides, articles, e-books, and recommended resources
                        designed to help you grow in faith and understanding.
                    </p>
                </div>

                {/* Search and Filter */}
                <section className="mb-12">
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                        <div className="flex flex-col md:flex-row gap-4 mb-6">
                            <div className="flex-1">
                                <div className="relative">
                                    <Search className="w-5 h-5 absolute left-3 top-3 text-gray-500" />
                                    <input
                                        type="text"
                                        placeholder="Search resources..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900"
                                    />
                                </div>
                            </div>
                            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900">
                                {categories.map((category) => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </section>

                {/* Featured Resource */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Featured Resource
                    </h2>

                    <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-gray-900">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src="https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Liberty in Christ Study Guide"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div>
                                <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-condensed font-bold uppercase mb-3 inline-block">
                                    Study Guide
                                </span>
                                <h3 className="font-condensed font-black text-2xl uppercase text-gray-900 mb-4">
                                    Liberty in Christ Study Guide
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    Go deeper into our current sermon series with this comprehensive study guide.
                                    Perfect for personal study or small group discussions, this resource includes
                                    reflection questions, additional scriptures, and practical application exercises.
                                </p>

                                <div className="flex gap-4">
                                    <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-800 transition-colors">
                                        <Download className="w-4 h-4" />
                                        Download PDF
                                    </button>
                                    <button className="bg-transparent border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-900 hover:text-white transition-colors">
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resource Categories */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Browse by Type
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        <button className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition-colors">
                            <BookOpen className="w-8 h-8 mx-auto mb-3" />
                            <h3 className="font-condensed font-black text-lg uppercase mb-2">Study Guides</h3>
                            <p className="text-blue-100 text-sm">In-depth guides for personal and group study</p>
                        </button>

                        <button className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors">
                            <Download className="w-8 h-8 mx-auto mb-3" />
                            <h3 className="font-condensed font-black text-lg uppercase mb-2">E-Books</h3>
                            <p className="text-green-100 text-sm">Digital books on faith, growth, and Christian living</p>
                        </button>

                        <button className="bg-purple-600 text-white p-6 rounded-lg hover:bg-purple-700 transition-colors">
                            <Search className="w-8 h-8 mx-auto mb-3" />
                            <h3 className="font-condensed font-black text-lg uppercase mb-2">Articles</h3>
                            <p className="text-purple-100 text-sm">Thought-provoking articles on various topics</p>
                        </button>

                        <button className="bg-orange-600 text-white p-6 rounded-lg hover:bg-orange-700 transition-colors">
                            <ExternalLink className="w-8 h-8 mx-auto mb-3" />
                            <h3 className="font-condensed font-black text-lg uppercase mb-2">External Links</h3>
                            <p className="text-orange-100 text-sm">Recommended websites, apps, and online resources</p>
                        </button>
                    </div>
                </section>

                {/* All Resources Grid */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        All Resources
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resources.map((resource, index) => (
                            <ResourceCard key={index} {...resource} />
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button className="bg-gray-900 text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-800 transition-colors">
                            Load More Resources
                        </button>
                    </div>
                </section>

                {/* How to Use */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        How to Use These Resources
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Personal Study
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Use study guides and articles for personal reflection and growth.
                                Set aside regular time for study and prayer, using these materials
                                to guide your learning.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Small Groups
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Many resources are perfect for Liberty Group discussions. Use study
                                guides to facilitate meaningful conversations and deeper community learning.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                                Share with Others
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Feel free to share these resources with friends, family, or anyone
                                exploring faith. Many are designed to be accessible to people at any
                                stage of their spiritual journey.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Request Resources */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Suggest New Resources
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            Have an idea for a resource that would help you or others grow in faith?
                            We'd love to hear your suggestions! Whether it's a study guide for a specific
                            topic, recommended books, or other materials, let us know what would be helpful.
                        </p>

                        <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-800 transition-colors">
                            Submit Suggestion
                        </button>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        Grow Deeper in Your Faith
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        Take advantage of these free resources to supplement your spiritual journey and learning.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors">
                            Download Study Guide
                        </button>
                        <Link
                            to="/life-of-liberty/liberty-groups"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-white/10 transition-colors"
                        >
                            Join a Group
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}