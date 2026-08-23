import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExploringFaith() {
    return (
        <div className="font-body bg-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Exploring Faith"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end max-w-5xl mx-auto px-4 pb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4 w-fit"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-condensed uppercase text-sm tracking-wider">Back to Home</span>
                    </Link>
                    <h1 className="text-white font-condensed font-black text-5xl md:text-7xl uppercase leading-none">
                        Exploring Faith
                    </h1>
                    <p className="text-white/90 font-condensed text-xl md:text-2xl uppercase tracking-wide mt-2">
                        Discover what it means to follow Jesus
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-4xl mx-auto px-4 py-16">
                {/* Introduction */}
                <div className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase mb-6 text-gray-900">
                        Welcome to the Journey
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Whether you're taking your first steps in faith or rediscovering what it means to
                        follow Jesus, we're here to walk alongside you. Exploring faith isn't about having
                        all the answers—it's about asking questions, seeking truth, and being open to
                        transformation.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        At our church, we believe that faith is both personal and communal. It's a journey
                        that unfolds through Scripture, prayer, relationships, and serving others. No matter
                        where you are on this path, you belong here.
                    </p>
                </div>

                {/* What to Expect Section */}
                <div className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase mb-6 text-gray-900">
                        What to Expect
                    </h2>

                    <div className="space-y-6">
                        <div className="border-l-4 border-gray-900 pl-6">
                            <h3 className="font-condensed font-bold text-xl uppercase mb-2 text-gray-900">
                                A Welcoming Community
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                You'll find a diverse group of people at various stages of their faith journey.
                                We're committed to creating a safe space where doubts and questions are welcomed,
                                and where genuine connection happens.
                            </p>
                        </div>

                        <div className="border-l-4 border-gray-900 pl-6">
                            <h3 className="font-condensed font-bold text-xl uppercase mb-2 text-gray-900">
                                Practical Teaching
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our Sunday messages explore how ancient Scripture speaks to modern life. We dig
                                into the Bible together, asking hard questions and discovering timeless truths
                                that can transform everyday living.
                            </p>
                        </div>

                        <div className="border-l-4 border-gray-900 pl-6">
                            <h3 className="font-condensed font-bold text-xl uppercase mb-2 text-gray-900">
                                Small Group Connections
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Faith grows best in relationship. Our small groups provide intimate settings
                                where you can explore beliefs, share your story, and find support from others
                                who understand the journey.
                            </p>
                        </div>

                        <div className="border-l-4 border-gray-900 pl-6">
                            <h3 className="font-condensed font-bold text-xl uppercase mb-2 text-gray-900">
                                Opportunities to Serve
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Following Jesus means loving and serving others. We offer various ways to put
                                faith into action—whether in our local community or around the world.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Getting Started Section */}
                <div className="mb-12">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase mb-6 text-gray-900">
                        Next Steps
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Ready to take the next step? Here are some ways to get started:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-md">
                            <h3 className="font-condensed font-bold text-xl uppercase mb-3 text-gray-900">
                                Join Us on Sunday
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Experience worship and teaching designed to inspire and challenge. Services are
                                at 9:00 AM and 11:00 AM.
                            </p>
                            <Link
                                to="/"
                                className="inline-block text-gray-900 font-condensed font-bold uppercase text-sm hover:underline"
                            >
                                Plan Your Visit →
                            </Link>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-md">
                            <h3 className="font-condensed font-bold text-xl uppercase mb-3 text-gray-900">
                                Attend an Alpha Course
                            </h3>
                            <p className="text-gray-700 mb-4">
                                A relaxed series exploring the Christian faith. Share meals, watch videos, and
                                discuss life's big questions.
                            </p>
                            <Link
                                to="/"
                                className="inline-block text-gray-900 font-condensed font-bold uppercase text-sm hover:underline"
                            >
                                Learn More →
                            </Link>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-md">
                            <h3 className="font-condensed font-bold text-xl uppercase mb-3 text-gray-900">
                                Connect with a Pastor
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Have questions? Want to chat? Our pastoral team is here to listen and guide you
                                on your journey.
                            </p>
                            <Link
                                to="/"
                                className="inline-block text-gray-900 font-condensed font-bold uppercase text-sm hover:underline"
                            >
                                Get in Touch →
                            </Link>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-md">
                            <h3 className="font-condensed font-bold text-xl uppercase mb-3 text-gray-900">
                                Join a Small Group
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Find community and grow in faith through meaningful conversations and genuine
                                friendships.
                            </p>
                            <Link
                                to="/"
                                className="inline-block text-gray-900 font-condensed font-bold uppercase text-sm hover:underline"
                            >
                                Find a Group →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gray-900 text-white p-8 md:p-12 rounded-md text-center">
                    <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase mb-4">
                        Questions? We're Here to Help
                    </h2>
                    <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                        Don't hesitate to reach out. Whether you're curious about faith, looking for
                        community, or ready to take the next step, we'd love to hear from you.
                    </p>
                    <Link
                        to="/"
                        className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase text-sm hover:bg-gray-100 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
