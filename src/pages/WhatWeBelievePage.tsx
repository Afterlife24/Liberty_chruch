import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: 'Statements of Faith',
    content: (
      <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
        <li>We believe in God the Father, Jesus Christ, and the Holy Spirit.</li>
        <li>We believe that He has given us a new life.</li>
        <li>We believe in the crucifixion, that Jesus conquered hell, that Jesus rose from the dead and that Jesus is coming back.</li>
        <li>We believe there is only one salvation, through Jesus Christ.</li>
      </ul>
    ),
    refs: null,
  },
  {
    title: 'The Scriptures',
    content: (
      <p className="text-gray-700 text-lg leading-relaxed">
        We believe that the Bible is God's Word. It is accurate, authoritative and applicable to our everyday lives.
      </p>
    ),
    refs: '2 Timothy 3:16, 1:13 · 2 Peter 1:20–21 · Psalm 119:105, 160, 12:6 · Proverbs 30:5',
  },
  {
    title: 'The Godhead',
    content: (
      <p className="text-gray-700 text-lg leading-relaxed">
        We believe in one eternal God who is the Creator of all things. He exists in three Persons: God the Father, God the Son and God the Holy Spirit. He is totally loving and completely holy.
      </p>
    ),
    refs: 'Genesis 1:1,26, 27, 3:22 · Psalm 90:2 · Matthew 28:19 · 1 Peter 1:2 · 2 Corinthians 13:14',
  },
  {
    title: 'Jesus and His Work',
    content: (
      <p className="text-gray-700 text-lg leading-relaxed">
        We believe that the Lord Jesus Christ as both God and man is the only One who can reconcile us to God. He lived a sinless and exemplary life, died on the cross in our place, and rose again to prove His victory and empower us for life.
      </p>
    ),
    refs: 'Matthew 1:22, 23 · Isaiah 9:6 · John 1:1–5, 14:10–30 · Hebrews 4:14–15 · 1 Corinthians 15:3–4 · Romans 1:3–4 · Acts 1:9–11 · 1 Timothy 6:14–15 · Titus 2:13',
  },
  {
    title: 'The Person and Work of the Holy Spirit',
    content: (
      <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
        <p>
          The Holy Spirit lives in each Christian from salvation. He is present in the world to make men aware of their need for Jesus Christ. He provides Christians with power for living, understanding of spiritual truth, and guidance in doing what is right.
        </p>
        <p>
          The Holy Spirit enables us to use spiritual gifts, including speaking in tongues. As Christians we seek to live under His influence daily.
        </p>
      </div>
    ),
    refs: 'Acts 1:8 · 1 Corinthians 3:17 · John 16:7–13, 14:16–17 · Galatians 5:25 · 1 Corinthians 2:12, 3:16 · Ephesians 1:13, 5:18',
  },
  {
    title: 'The Fall and Salvation of Man',
    content: (
      <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
        <p>
          We are made in His Image. People are made in the spiritual image of God, to be like Him in character. Although every person has tremendous potential for good, all of us are marred by an attitude of disobedience toward God called "sin." Sin has separated us from God and His purpose for our lives.
        </p>
        <p>
          We believe that Jesus died on the cross and shed His blood for our sins. We believe that all the redeemed, once saved, are kept by God's power and are thus secure in Christ forever.
        </p>
        <p>
          We believe that it is the privilege of believers to rejoice in the assurance of their salvation through the testimony of God's Word — that by placing our faith in Jesus we receive this free gift of salvation.
        </p>
      </div>
    ),
    refs: 'Genesis 1:27 · Psalm 8:3–6 · Isaiah 53:6 · Romans 3:23 · Isaiah 59:1–2 · Romans 6:23 · Ephesians 2:8–9 · John 14:6, 1:2 · Titus 3:5 · Galatians 3:26 · Romans 5:1, 10:9–10',
  },
  {
    title: 'Eternal Destination',
    content: (
      <p className="text-gray-700 text-lg leading-relaxed">
        We believe that our eternal destination of either Heaven or hell is determined by our response to the Lord Jesus Christ. People were created to exist forever. We will either exist eternally separated from God by sin or eternally with God through forgiveness and salvation.
      </p>
    ),
    refs: 'John 3:16, 4:17 · Romans 6:23, 8:17–18 · Revelation 20:15 · 1 Corinthians 2:7–9',
  },
  {
    title: 'The Church and Christian Living',
    content: (
      <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
        <p>
          We believe that the true church comprises all who have been justified by God's grace through faith alone in Christ alone. They are united by the Holy Spirit in the body of Christ, of which He is the Head.
        </p>
        <p>
          The true church is manifest in local churches, whose membership should be composed only of believers. That local church should seek to model, in every way, the pattern of the New Testament example of Christian life, values, structure and power.
        </p>
        <p>
          We believe the Lord Jesus mandated two ordinances, baptism and the Lord's Supper, which visibly and tangibly express the gospel. Though they are not the means of salvation, when celebrated by the church in genuine faith these ordinances confirm and nourish the believer.
        </p>
        <p>
          We believe in the power and significance of the Church and the necessity of believers to meet regularly together for fellowship, prayer and communion. We believe that God has individually equipped us so that we can successfully achieve His purpose for our lives which is to worship God, fulfil our role in the Church and serve the community in which we live.
        </p>
        <p>We believe that God wants to heal and transform us so that we can live healthy and blessed lives in order to help others more effectively.</p>
        <p>We believe that the Lord Jesus Christ is coming back again as He promised.</p>
      </div>
    ),
    refs: null,
  },
  {
    title: 'How We Govern',
    content: (
      <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
        <p>
          Liberty is an autonomous local church led by a team of elders who, under Jesus Christ the head of the church, carry final responsibility for governmental aspects of church life.
        </p>
        <p>
          The eldership team consists of men who qualify biblically according to 1 Timothy 3 and Titus 1 and have been called by Christ. New elders are proposed by the existing eldership team but are ordained, set into the office, by an apostle (Acts 14:23) or an apostle's delegate (Titus 1:5). The eldership team, like any other team, has a leader whom we refer to as the lead elder. A good way of explaining the reason for and the limitations of this role is to say that the lead elder leads the eldership team which leads the church.
        </p>
        <p>
          Elder, pastor and overseer are terms that are used interchangeably in scripture to describe different aspects of the role of eldership. 'Elder' refers to the biblical office these men occupy, while the verb pastor, (literally "to shepherd"), describes their spiritual role. 'Overseer' refers to the functional role of "directing the affairs of the local church", and includes responsibility for direction, doctrine and discipline in the local church. Part of that responsibility includes financial oversight of the church. Financial integrity of the church is safeguarded through a thorough segregation of financial duties and an annual review of our financial records by external auditors.
        </p>
      </div>
    ),
    refs: null,
  },
];

export default function WhatWeBelievePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src="/images/pages_banners_internal/Liberty Website-Internal Page Banner-What We Believe.jpg"
          alt="What We Believe"
          className="w-full h-auto block"
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
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <h1 className="font-condensed font-black text-4xl md:text-5xl uppercase text-gray-900 mb-12 border-b-4 border-gray-900 pb-4">
          What We Believe
        </h1>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <div key={i} className="border-b border-gray-100 pb-10 last:border-0">
              <h2 className="font-condensed font-black text-2xl md:text-3xl uppercase text-gray-900 mb-4">
                {section.title}
              </h2>
              {section.content}
              {section.refs && (
                <p className="mt-4 text-sm text-gray-400 font-condensed tracking-wide">
                  {section.refs}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
