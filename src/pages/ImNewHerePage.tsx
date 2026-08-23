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
        title: "Who is Jesus?",
        description: "Discover the heart of our faith and learn about Jesus Christ, His life, teachings, and what He means for you today.",
        link: "/im-new-here/who-is-jesus",
        image: "https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Planning Your Visit",
        description: "Everything you need to know for your first visit - what to expect, when we meet, and how to get here.",
        link: "/im-new-here/planning-your-visit",
        image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Our Vision and Values",
        description: "Learn about what drives us as a church family and the values that shape everything we do together.",
        link: "/im-new-here/vision-and-values",
        image: "https://images.pexels.com/photos/3836097/pexels-photo-3836097.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "What We Believe",
        description: "Explore the core beliefs and biblical foundations that guide our church and our relationship with God.",
        link: "/im-new-here/what-we-believe",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Global Picture",
        description: "See how we're part of something bigger - our mission to make a difference locally and around the world.",
        link: "/im-new-here/global-picture",
        image: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

export default function ImNewHerePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="I'm New Here"
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
                            I'm New Here
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Welcome to Liberty Church • Start Your Journey
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                <SectionTitle title="Welcome to Our Church Family" />

                <div className="mb-12">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        We're so glad you're here! Whether you're exploring faith for the first time, returning after time away,
                        or looking for a new church home, we want you to know that you belong here. Our church is a place where
                        everyone is welcome to come as they are and discover God's love together.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Below you'll find everything you need to know about who we are, what we believe, and how you can
                        take your next steps with us. Don't hesitate to reach out with any questions - we'd love to connect with you!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {subPages.map((page) => (
                        <SubPageCard key={page.title} {...page} />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-gray-900 text-white p-8 rounded-lg text-center">
                    <h3 className="font-condensed font-black text-2xl md:text-3xl uppercase mb-4">
                        Ready To Visit Us?
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        Join us this Sunday! We meet at two locations and would love to welcome you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/im-new-here/planning-your-visit"
                            className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors"
                        >
                            Plan Your Visit
                        </Link>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-white/10 transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}