import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const scriptures = [
  {
    date: 'May 2014',
    text: 'They will rebuild the ancient ruins and restore the places long devastated; they will renew the ruined cities that have been devastated for generations.',
    ref: 'Isaiah 61:4 NIV',
  },
  {
    date: 'June 2014',
    text: 'And then GOD answered: "Write this. Write what you see. Write it out in big block letters so that it can be read on the run. This vision-message is a witness pointing to what\'s coming. It aches for the coming—it can hardly wait! And it doesn\'t lie. If it seems slow in coming, wait. It\'s on its way. It will come right on time.',
    ref: 'Habakkuk 2:2, 3 MSG',
  },
  {
    date: '',
    text: 'Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland.',
    ref: 'Isaiah 43:18, 19 NIV',
  },
  {
    date: 'July 2014',
    text: 'When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.',
    ref: 'Isaiah 43:2 NIV',
  },
  {
    date: 'August 2014',
    text: 'Be strong. Take courage. Don\'t be intimidated. Don\'t give them a second thought because GOD, your God, is striding ahead of you. He\'s right there with you. He won\'t let you down; he won\'t leave you.',
    ref: 'Deuteronomy 31:6 MSG',
  },
  {
    date: '',
    text: 'David continued to address Solomon: "Take charge! Take heart! Don\'t be anxious or get discouraged. GOD, my God, is with you in this; he won\'t walk off and leave you in the lurch. He\'s at your side until every last detail is completed for conducting the worship of GOD. You have all the priests and Levites standing ready to pitch in, and skillful craftsmen and artisans of every kind ready to go to work. Both leaders and people are ready. Just say the word."',
    ref: '1 Chronicles 28:20-21 MSG',
  },
  {
    date: 'October 2014',
    text: '"...for such a time as this?"',
    ref: 'Esther 4:14 NLT',
  },
  {
    date: 'February 2015',
    text: '"No weapon that is fashioned against you shall succeed, and you shall refute every tongue that rises against you in judgment. This is the heritage of the servants of the Lord and their vindication from me, declares the Lord."',
    ref: 'Isaiah 54:1-17 ESV',
  },
  {
    date: 'July 2020',
    text: '"The days are coming," declares the Lord, "when the reaper will be overtaken by the plowman and the planter by the one treading grapes. New wine will drip from the mountains and flow from all the hills, and I will bring my people Israel back from exile. They will rebuild the ruined cities and live in them. They will plant vineyards and drink their wine; they will make gardens and eat their fruit. I will plant Israel in their own land, never again to be uprooted from the land I have given them."',
    ref: 'Amos 9:13-15 NIV',
  },
];

export default function VisionAndValuesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        <img
          src="/images/pages_banners_internal/Liberty Website-Internal Page Banner-Vision&Values.jpg"
          alt="Vision and Values"
          className="w-full h-[650px] block object-cover object-bottom"
        />
        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-colors shadow-lg"
          aria-label="Back to home"
        >
          <ArrowLeft size={24} />
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-12">

        {/* Vision Statement */}
        <section>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We see a church who are a vibrant family of hope filled believers who know and demonstrate the love of God.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            A people empowered and anointed to help rebuild, renew and restore people's lives, communities and nations.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            A people who walk in the freedom of who God created them to be reflecting His glory and honour.
          </p>
        </section>

        {/* Key Scriptures */}
        <section>
          <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-8 border-b-4 border-gray-900 pb-2 inline-block">
            Key Scriptures
          </h2>
          <div className="space-y-6">
            {scriptures.map((s, i) => (
              <div key={i} className="border-l-4 border-gray-200 pl-5">
                {s.date && (
                  <p className="text-xs font-condensed uppercase tracking-widest text-gray-400 mb-1">
                    {s.date}
                  </p>
                )}
                <p className="text-gray-700 leading-relaxed italic mb-1">"{s.text}"</p>
                <p className="text-gray-900 font-condensed font-bold text-sm uppercase tracking-wide">
                  {s.ref}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section>
          <h2 className="font-condensed font-black text-3xl md:text-4xl uppercase text-gray-900 mb-4 border-b-4 border-gray-900 pb-2 inline-block">
            Our Values
          </h2>
          <p className="text-gray-500 text-sm italic">PDF Booklet coming soon.</p>
        </section>

      </div>
    </div>
  );
}
