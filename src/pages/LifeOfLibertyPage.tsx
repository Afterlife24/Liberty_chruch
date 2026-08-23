import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface SubPageCardProps {
    title: string;
    description: string;
    link: string;
    image: string;
    isExternal?: boolean;
}

function SubPageCard({ title, description, link, image, isExternal = false }: SubPageCardProps) {
    const CardContent = () => (
        <div className="group">
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
                        {isExternal && <span className="ml-2 text-sm">↗</span>}
                    </h3>
                </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                {description}
            </p>
        </div>
    );

    if (isExternal) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <CardContent />
            </a>
        );
    }

    return (
        <Link to={link}>
            <CardContent />
        </Link>
    );
}

const subPages = [
    {
        title: "Liberty Groups",
        description: "Connect with others through our small groups where you can build meaningful relationships and grow in faith together.",
        link: "/life-of-liberty/liberty-groups",
        image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Liberty Kids",
        description: "Fun, safe, and engaging programs designed specifically for children to learn about God's love in age-appropriate ways.",
        link: "/life-of-liberty/liberty-kids",
        image: "https://images.pexels.com/photos/8613313/pexels-photo-8613313.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Youth",
        description: "Dynamic programs for teenagers to explore faith, build friendships, and discover their purpose in a supportive environment.",
        link: "/life-of-liberty/youth",
        image: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Young Adults",
        description: "A community for young adults navigating life, career, and faith together in their twenties and thirties.",
        link: "/life-of-liberty/young-adults",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Refresh Women",
        description: "Empowering women to grow in their relationship with God while building strong friendships and supporting one another.",
        link: "/life-of-liberty/refresh-women",
        image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Real Men",
        description: "Men's ministry focused on authentic relationships, spiritual growth, and living out biblical manhood in today's world.",
        link: "/life-of-liberty/real-men",
        image: "https://images.pexels.com/photos/1157394/pexels-photo-1157394.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "The Coffee House",
        description: "A relaxed, welcoming space for conversation, connection, and community over great coffee and light refreshments.",
        link: "/life-of-liberty/coffee-house",
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Prayer and Teaching Service",
        description: "Join us for focused times of prayer, deeper Bible study, and spiritual growth in an intimate setting.",
        link: "/life-of-liberty/prayer-teaching",
        image: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "ChurchSuite",
        description: "Access our church management system to stay connected, manage your information, and engage with church activities.",
        link: "https://liberty.churchsuite.com",
        image: "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=600",
        isExternal: true
    }
];

export default function LifeOfLibertyPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Life of Liberty"
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
                            Life of Liberty
                        </h1>
                        <p className="text-white/90 font-condensed text-lg md:text-xl uppercase tracking-wide">
                            Find Your Place • Grow Together • Make a Difference
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                <SectionTitle title="Discover Your Next Step" />

                <div className="mb-12">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Life is better when we're connected. At Liberty Church, we believe everyone has a place to belong,
                        grow, and serve. Whether you're looking for community, wanting to develop your faith, or ready to
                        make a difference, we have opportunities for every season of life.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Explore our different groups and ministries below to find where you can connect, contribute,
                        and experience the fullness of life together.
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
                        Ready to Get Connected?
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                        Don't wait to get involved! Reach out to us and we'll help you find the perfect place to start your journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/im-new-here/planning-your-visit"
                            className="bg-white text-gray-900 px-8 py-3 rounded-md font-condensed font-bold uppercase hover:bg-gray-100 transition-colors"
                        >
                            Visit This Sunday
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