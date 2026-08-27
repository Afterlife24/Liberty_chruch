import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-gray-100 pb-10 last:border-0">
      <h2 className="font-condensed font-black text-2xl md:text-3xl uppercase text-gray-900 mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}

function DigDeeper({ refs }: { refs: string[] }) {
  return (
    <div className="mt-5 bg-gray-50 rounded-md p-4 border-l-4 border-gray-300">
      <p className="font-condensed font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Digging Deeper...</p>
      <ul className="space-y-1">
        {refs.map((r, i) => (
          <li key={i} className="text-gray-600 text-sm">{r}</li>
        ))}
      </ul>
    </div>
  );
}

export default function WhoIsJesusPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full">
        <img
          src="/images/pages_banners_internal/Liberty Website-Internal Page Banner-Who is Jesus_.jpg"
          alt="Who is Jesus?"
          className="w-full h-auto block"
        />
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
          Who Is Jesus?
        </h1>

        <div className="space-y-12">

          {/* Who is Jesus */}
          <Section title="Who Is Jesus?">
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                We hear about Him all the time, whether as a swear word or a fancy dress costume, in our global calendar AD/BC. We celebrate His birth, life and even His death at Christmas and Easter. His story "The Bible" is the best selling book of all time, He's referred to in broadway shows, movies, songs and many other spheres. But who is He really?
              </p>
              <p>
                John 14:6 Jesus answered him, <em>"I am the way, the truth, and the life; no one comes to the Father except by me."</em> The Bible is pretty clear on who it claims Jesus to be.
              </p>
              <p>
                When Jesus was first introduced into the story, the Angel told Mary, the mother of Jesus in Luke 2:32-33 <em>"He will be great and will be called the son of the most high. And the Lord God will give to Him the throne of his father David, and He will reign over the house of Jacob forever, and of His kingdom there will be no end."</em>
              </p>
              <p>
                Jesus is both Saviour to a world that so desperately needs saving and King to a globe that yearns for Him. Jesus is our Heavenly Father's answer to a lost and broken world. A gift born out of love and the door to eternal life.
              </p>
              <p className="font-condensed font-bold text-gray-500">John 3:16</p>
            </div>
            <DigDeeper refs={[
              'Luke 2:1-7 (Birth of Jesus)',
              'Matthew 3:13-17 (Baptism of Jesus)',
              'Mark 15:16-32 (Crucifixion of Jesus)',
              'Matthew 28:1-10 (Jesus\' Resurrection)',
            ]} />
          </Section>

          {/* What is Repentance */}
          <Section title="What Is Repentance?">
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Have you ever come across someone who was always saying "sorry" for behaving badly but never changed what they were doing? It puts me in mind of the man who went to confessional and said "Father forgive me for all I have sinned", then went straight back out and did the same thing again. Is this what it really means to be repentant?
              </p>
              <p className="font-condensed font-bold text-gray-500">Read 2 Corinthians 7:8-9</p>
              <p>
                The word for repent in the New Testament means "To have a change of heart and mind". It is not enough to just say sorry or even feel bad about what you have done. True repentance requires an about turn of 180 degrees. It's turning around and heading in a different direction. Changing what we think, what we say and what we do are the real results of a truly repentant heart.
              </p>
              <p>
                When God commands us to repent and be converted (Acts 3:19), He is asking us to do just that. To turn around from the way we used to think and behave and turn towards Jesus in faith, obedience and trust. When we repent of our sins and ask for forgiveness we are saying that we don't want to be the same anymore. We've had a change of heart and mind. It's this change of heart and mind that God uses to bring us into a life of freedom from guilt, shame and regret. To lead us into a new life of blessing and favour both with God and man.
              </p>
              <p className="font-condensed font-bold text-gray-500">Read 2 Peter 3:9</p>
            </div>
            <DigDeeper refs={['Zephaniah 3:17', 'Psalm 5:12']} />
          </Section>

          {/* Following Jesus */}
          <Section title="Following Jesus">
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p className="font-condensed font-bold text-gray-500">Read Matthew 4:18-19</p>
              <p>
                <strong>The Call.</strong> We are all called to follow Jesus. He comes to the places where we are, in our daily lives and invites us to follow Him.
              </p>
              <p>
                Following will require us leaving behind our old beliefs, behaviours and attitudes and receiving His. We see Jesus calling people from an earthly assignment to a Heavenly assignment.
              </p>
              <p>In this scripture you'll find:</p>
              <ol className="list-decimal ml-6 space-y-1">
                <li>A clear invitation to follow Jesus</li>
                <li>A decision on their part to follow</li>
                <li>Their actual response</li>
              </ol>
              <p>
                <strong>The Cost.</strong> Read Mark 8:34-38. What does it mean to deny ourselves and pick up our cross and follow Him? In these verses we can see that following Jesus is a big, lifelong sacrificial commitment, not just an emotional decision. What does the cross in our lives represent? We could identify the cross as the trials we may have to suffer due to our response and responsibility in following Him. What will it cost us? Are there things we need to put down or leave behind to be able to pick up our cross and follow Him?
              </p>
              <p>
                <strong>The Commission.</strong> Read Mark 16:15-18. Once we have decided to follow Jesus and have picked up our cross, ready to follow Him, He trusts us with an exciting, fulfilling and life changing task.
              </p>
              <p>
                Following Jesus involves mirroring His life in prayer, service and sacrifice. We are called to trust Him in every circumstance, be prepared to face the good with the bad and make a difference in our world by reflecting who Jesus is in our life.
              </p>
            </div>
            <DigDeeper refs={['Romans 12:1-2 AMP', 'Luke 14:28-33']} />
          </Section>

          {/* Water Baptism */}
          <Section title="Water Baptism">
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                The <strong>OUTWARD PHYSICAL</strong> symbolic act of an <strong>INWARD SPIRITUAL</strong> reality — Colossians 2:12 <em>"Having been buried with Him in baptism, in which you were also raised with Him through faith in the powerful working of God, who raised Him from the dead."</em>
              </p>
              <p>
                Water Baptism simply signifies <strong>DEATH, BURIAL and RESURRECTION!</strong> Romans 6:3-6 (this is why we believe in 'full immersion' baptism and not in sprinkling!)
              </p>
              <p>
                <strong>DEATH</strong> to your old way of life (crucified with Christ), <strong>BURIAL</strong> (buried with Him in Baptism), <strong>RESURRECTION</strong> (raised from the dead, to walk in Newness of life in Him).
              </p>
              <p>
                Baptism does not save you, but it is the first step of obedience, following Jesus' example in Luke 3:21 and a testimony to what Christ has done for you! Peter is very clear in these FIRST STEPS of a disciple, when asked; "Brothers, what shall we do?" Acts 2:38 <em>"Repent and be baptised every one of you in the name of Jesus Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit."</em> The Ethiopian Eunuch understood this asking, in Acts 8:36 <em>"See, here is water! What prevents me from being baptised?"</em>
              </p>
            </div>
            <DigDeeper refs={['Matthew 28:19']} />
          </Section>

          {/* The Word of God */}
          <Section title="The Word of God">
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Food glorious food. The Bible is likened to food. Jesus said <em>"Man shall not live by bread alone, but by every word that proceeds from the mouth of God."</em> Made up of 66 different books to read, the Bible feeds and nourishes our souls, gives us energy and equips us for the day.
              </p>
              <p>
                <em>'Your words were found, and I ate them, and your words became to me a joy and the delight of my heart, for I am called by your name, O Lord, God of hosts'</em> Jeremiah 15:16 ESV.
              </p>
              <p>
                We all need to eat, it's built into the routine of our daily lives. Sometimes we know what to eat, other times we need to plan and prepare, and more often than we like to admit we just snack to keep us going.
              </p>
              <p>
                Everyone's lives are busy, but there is a sweetness to the Word of God (Ezekiel 3:1-3), that moulds us and feeds our soul (Hebrews 4:12). It's the primary way He communicates with us, and as in any relationship we need to set time aside to spend time with Him.
              </p>
              <p>
                We don't always get to eat in restaurants and can't savour everything at once. But it is good for us to eat a nutritious meal, that fills us up and equips us each day. Are we feeding our souls with manna from above (Deuteronomy 8:3)?
              </p>
              <p>
                Jeremiah delighted in everything in His Word. Let us prepare ourselves, eat, taste and know He is good (Psalm 34:8), and crave more of Him each day.
              </p>
            </div>
            <DigDeeper refs={['Romans 12:2', '2 Timothy 3:16-17', 'Revelation 10:9']} />
          </Section>

          {/* Prayer */}
          <Section title="Prayer">
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p className="font-condensed font-bold text-gray-500">Read Matthew 6:5-8</p>
              <p>
                Prayer is simply communication between us and God. It's a place of connection with Him — not just talking and listening to Him but being with Him in His presence. Unfortunately, prayer can become a functional, repetitive, religious practice or performance which is contrary to what Jesus teaches us it should be.
              </p>
              <p>
                Jesus also teaches us to pray the Lord's Prayer which gives us the perfect template for how to pray and how we address God, pray His will, ask for His provision, forgiveness, guidance and deliverance (Matthew 6:9-13).
              </p>
              <p>
                We can pray anywhere, with our church family, in a private place, while walking, driving somewhere or lying in bed. He is not looking for fancy words, a performance or "vain repetitions" as Jesus called them, He just wants us to talk to Him and listen to Him. He already knows what we need, so this tells us praying is about the relationship we are building with Him, not just what we are communicating about.
              </p>
              <p>
                Jesus models this in Matthew 26:36, Luke 9:18, John 17 and many more places. He explains to His disciples that He does the things the Father tells Him and His ministry comes from their relationship.
              </p>
              <p>
                In John 14:10-14 He says we can ask anything in His name and He will do it if we believe in Him. This is why when we pray, we always end our prayers in Jesus' name. Be encouraged to find a secret place, pray, connect with Him and do what He asks you to do. Your prayers will cause your relationship to grow with the Father, changing you and others around you.
              </p>
            </div>
            <DigDeeper refs={['James 5:16-18']} />
          </Section>

          {/* The Church */}
          <Section title="The Church">
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                People often say 'Do you go to church, or which church do you go to?' We assume the church is a building or at times an event. The Bible uses the word church to describe a group of people, not an event or a gathering.
              </p>
              <p>The question is not what, but rather who is the church?</p>
              <p>
                <em>"The church is the people of God's family saved by the power of God for the purposes of God in this world."</em> This means we don't stop being the church when we walk out of the building on a Sunday morning. Instead, everything we do, we do as the blood-bought church of God, for the fame of Jesus, everywhere.
              </p>
              <p>
                Jesus said in Matthew 16:18 <em>"I will build My church and the gates of hell will not prevail against it."</em> So in other words, Jesus is the builder of the church and nothing will destroy it.
              </p>
              <p>
                In Ephesians 5:25 it says <em>"Husbands, love your wives, just as Christ loved the church and gave Himself up for her."</em> Jesus loves His church so much that He gave His life for her.
              </p>
              <p>
                Jesus works through the church. The local church is the hope of the world. It is where we get to belong, to grow, to flourish. It is the place where our lives can be transformed. The Bible says it is a body, where we all have a place. It's a place of mission, helping change the world around us. It is Jesus' idea and He desires that all of us be a part of a local church.
              </p>
            </div>
            <DigDeeper refs={['Ephesians 2:19-22', 'Acts 2:40-47', '1 Corinthians 12:12-26']} />
          </Section>

          {/* Next Steps */}
          <Section title="Next Steps">
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                We would love to celebrate with you as you make a decision to follow Jesus. Get in touch with us below to let us know, so we can support you in your journey as a Christian.
              </p>
              <p>
                Fill in your details below so we can get in contact and support you in your journey as a Christian and get you connected into the life of the church. One of our team will get in touch with you shortly!
              </p>
            </div>

            {/* Contact Form */}
            <form className="mt-6 space-y-4">
              <h3 className="font-condensed font-bold text-xl uppercase text-gray-900">Get in Touch!</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:border-gray-900"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:border-gray-900"
                />
              </div>
              <textarea
                placeholder="Your message..."
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:border-gray-900"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white font-condensed font-bold uppercase tracking-widest px-8 py-3 rounded-md hover:bg-black transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* Resource Links */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-condensed font-bold uppercase tracking-wide px-6 py-4 rounded-md transition-colors"
              >
                Discipleship Guide PDF
              </a>
              <a
                href="https://www.bible.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gray-900 hover:bg-black text-white font-condensed font-bold uppercase tracking-wide px-6 py-4 rounded-md transition-colors"
              >
                Download Bible App
              </a>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}
