import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ExploringFaithPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Image */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Exploring Faith"
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
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-white font-condensed font-black text-4xl md:text-6xl uppercase leading-none mb-2">
                            Exploring Faith
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Global Impact • Making A Difference
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                {/* Introduction */}
                <div className="mb-12">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Faith is a journey, not a destination. Whether you're just beginning to explore Christianity
                        or you've been walking with Christ for years, there's always more to discover about God's
                        love, grace, and purpose for your life.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        At our church, we believe that exploring faith is a personal and communal experience.
                        We're here to walk alongside you, answer your questions, and help you grow in your
                        relationship with God.
                    </p>
                </div>

                {/* Section: What We Believe */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        What We Believe
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Our faith is rooted in the timeless truths of Scripture. We believe in the God who created
                        the universe, sent His Son Jesus Christ to redeem humanity, and continues to work through
                        the Holy Spirit today.
                    </p>
                    <ul className="space-y-3 ml-6">
                        <li className="text-gray-700 text-lg leading-relaxed list-disc">
                            <strong className="text-gray-900">The Bible:</strong> God's inspired Word, our ultimate
                            authority for faith and life
                        </li>
                        <li className="text-gray-700 text-lg leading-relaxed list-disc">
                            <strong className="text-gray-900">Jesus Christ:</strong> The Son of God, our Savior and Lord
                        </li>
                        <li className="text-gray-700 text-lg leading-relaxed list-disc">
                            <strong className="text-gray-900">Salvation:</strong> A free gift of grace through faith
                            in Jesus Christ
                        </li>
                        <li className="text-gray-700 text-lg leading-relaxed list-disc">
                            <strong className="text-gray-900">Community:</strong> The church as the body of Christ,
                            united in love and purpose
                        </li>
                    </ul>
                </section>

                {/* Section: Starting Your Journey */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Starting Your Journey
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        If you're new to faith or returning after time away, we want you to know that you're
                        welcome here exactly as you are. There's no need to have everything figured out—faith
                        grows through questions, community, and experience.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                        <h3 className="font-condensed font-bold text-xl uppercase text-gray-900 mb-3">
                            Next Steps You Can Take
                        </h3>
                        <ol className="space-y-3">
                            <li className="text-gray-700 text-lg leading-relaxed">
                                <strong className="text-gray-900">1. Attend a Sunday Service:</strong> Experience
                                worship and hear practical biblical teaching
                            </li>
                            <li className="text-gray-700 text-lg leading-relaxed">
                                <strong className="text-gray-900">2. Join an Exploring Faith Class:</strong> A
                                safe space to ask questions and learn the basics
                            </li>
                            <li className="text-gray-700 text-lg leading-relaxed">
                                <strong className="text-gray-900">3. Connect with a Small Group:</strong> Build
                                meaningful relationships with others on the journey
                            </li>
                            <li className="text-gray-700 text-lg leading-relaxed">
                                <strong className="text-gray-900">4. Talk to a Pastor:</strong> We're always
                                available to meet and discuss your questions
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Section: Questions Are Welcome */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Questions Are Welcome
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        We believe that asking questions is a vital part of growing in faith. Whether you're
                        wondering about the Bible, struggling with doubt, or curious about what Christians
                        believe, we're here to engage honestly and thoughtfully.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Some common questions people explore include: How can I know God personally? What does
                        it mean to be a Christian? How do I pray? What happens after we die? We'd love to
                        explore these questions with you.
                    </p>
                </section>

                {/* Section: Growing Deeper */}
                <section className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                        Growing Deeper
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        For those who have already made the decision to follow Christ, there's always more
                        to discover. Spiritual growth is a lifelong journey of becoming more like Jesus through
                        study, prayer, service, and community.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        We offer Bible studies, discipleship groups, service opportunities, and leadership
                        development to help you grow in your faith and make a difference in the world around you.
                    </p>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        Ready To Take The Next Step?
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        We'd love to help you on your faith journey. Reach out to us today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors"
                        >
                            Visit Us Sunday
                        </Link>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-white/10 transition-colors">
                            Contact A Pastor
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
}
