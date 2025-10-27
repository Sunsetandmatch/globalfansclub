import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Mic, Users, Award, Target, MessageCircle, Star, Mail, Calendar, Quote } from "lucide-react"

const speakerTypes = [
  {
    title: "Former Professionals",
    description: "Legendary players who've competed at the highest level",
    icon: Award,
  },
  {
    title: "Managers & Coaches",
    description: "Tactical masterminds and leadership experts",
    icon: Target,
  },
  {
    title: "Sports Pundits",
    description: "Media personalities with insider knowledge",
    icon: MessageCircle,
  },
  {
    title: "Elite Athletes",
    description: "Champions from various sports disciplines",
    icon: Star,
  },
]

const featuredSpeakers = [
  {
    id: 1,
    name: "Jamie Carragher",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-19-09-50-18.jpg-bmTe2wcNIv3TZna9VK1k3Y4lI26AjV.jpeg",
    category: "Sports Pundit",
    specialties: ["Leadership", "Loyalty", "Team Dynamics", "Mental Resilience"],
    description:
      "Liverpool-born defender who spent his entire 17-year career at Anfield, making 737 appearances for the club. Carragher was the epitome of loyalty and commitment, captaining Liverpool and playing a crucial role in their Champions League triumph in 2005. Known for his defensive intelligence, leadership qualities, and never-say-die attitude. Since retiring in 2013, he has become one of football's most respected pundits and analysts, working for Sky Sports and providing expert commentary. His one-club career and leadership experience make him an inspiring speaker on loyalty, commitment, and team building.",
    availability: "Available",
    achievements: [
      "UEFA Champions League Winner 2005",
      "FA Cup Winner 2001, 2006",
      "UEFA Cup Winner 2001",
      "UEFA Super Cup Winner 2001, 2005",
      "38 England Caps",
      "Liverpool FC Vice-Captain",
      "737 Appearances for Liverpool",
    ],
    bio: "Jamie Carragher embodies the values of loyalty, dedication, and leadership that define great organizations. His decision to spend his entire career at Liverpool, rising through the youth ranks to become vice-captain, demonstrates the power of commitment and continuous improvement. Carragher's leadership during Liverpool's Champions League victory in Istanbul, where he played through injury, exemplifies the mental strength required to succeed under pressure. His transition from player to respected pundit shows his ability to adapt and excel in new challenges.",
  },
  {
    id: 2,
    name: "John Barnes",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-19-09-55-00.jpg-HuPYd9lFx32BcIOUvSSX4ctXXWOXuM.jpeg",
    category: "Sports Pundit",
    specialties: ["Leadership", "Diversity & Inclusion", "Mental Strength", "Peak Performance"],
    description:
      "Jamaican-born English winger who is widely regarded as one of Liverpool's greatest ever players. Barnes played for Liverpool from 1987-1997, winning two First Division titles and two FA Cups. Known for his pace, skill, and ability to score spectacular goals, he was one of the first black players to achieve superstar status in English football. Post-retirement, Barnes has become a respected pundit, author, and speaker on football, racism in sport, and leadership. His articulate nature and powerful personal story make him one of the most sought-after speakers in football.",
    availability: "Available",
    achievements: [
      "First Division Champion 1988, 1990",
      "FA Cup Winner 1989, 1992",
      "79 England Caps",
      "PFA Players' Player of the Year 1988",
      "Football Writers' Player of the Year 1988",
      "Liverpool FC Hall of Fame",
    ],
    bio: "John Barnes broke barriers both on and off the pitch during his illustrious career. His move to Liverpool in 1987 marked the beginning of one of the most successful periods in the club's history. Barnes faced and overcame significant racial abuse during his career, becoming a powerful advocate for equality in football. His intelligence, charisma, and ability to discuss complex social issues alongside football tactics make him an exceptional speaker for corporate events, diversity initiatives, and leadership conferences.",
  },
  {
    id: 3,
    name: "Luis Garcia",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-19-09-53-11.jpg-KwM3pTveHlzWQ7eutoBGHmBcQxR6Am.jpeg",
    category: "Sports Pundit",
    specialties: ["Leadership", "Team Building", "Resilience", "Champions League Success"],
    description:
      "Spanish midfielder who became a Liverpool legend during his time at Anfield from 2004-2007. Famous for his crucial goals in Liverpool's miraculous Champions League run in 2005, including the semi-final winner against Chelsea. Garcia was known for his technical ability, creativity, and knack for scoring important goals in big matches. Since retiring, he has worked as a football pundit and analyst, providing expert commentary on Spanish and international football. His experience of winning the Champions League and playing at the highest level makes him an inspiring speaker on topics of resilience, teamwork, and achieving success under pressure.",
    availability: "Available",
    achievements: [
      "UEFA Champions League Winner 2005",
      "FA Cup Winner 2006",
      "UEFA Super Cup Winner 2005",
      "Liverpool FC Legend",
      "Spanish International",
    ],
    bio: "Luis Garcia's journey from Atletico Madrid's youth system to becoming a Liverpool legend is a story of perseverance and seizing crucial moments. His famous 'ghost goal' against Chelsea in the 2005 Champions League semi-final helped Liverpool reach the final in Istanbul, where they completed one of football's greatest comebacks. Garcia's ability to perform in high-pressure situations and his understanding of what it takes to succeed at the highest level make him an exceptional motivational speaker for corporate events and team-building sessions.",
  },
  {
    id: 4,
    name: "Sammy Lee",
    image: "/images/speakers/sammy-lee.png",
    category: "Sports Pundit",
    specialties: ["Coaching Excellence", "Youth Development", "Team Management", "Tactical Analysis"],
    description:
      "Former Liverpool midfielder and England international who has had a distinguished career both as a player and coach. Lee won multiple trophies during his playing career at Liverpool in the 1980s before transitioning into coaching and management. He has worked as assistant manager to several high-profile managers and has extensive experience in youth development. Known for his tactical knowledge, coaching expertise, and ability to develop young talent. His experience across different levels of football, from grassroots to international level, makes him an excellent speaker on leadership, development, and achieving excellence.",
    availability: "Available",
    achievements: [
      "First Division Champion (multiple times with Liverpool)",
      "European Cup Winner",
      "FA Cup Winner",
      "14 England Caps",
      "Experienced Coach and Assistant Manager",
      "Youth Development Expert",
    ],
    bio: "Sammy Lee's career spans over four decades in football, from his playing days at Liverpool during their most successful period to his extensive coaching career. His experience working with top managers and developing young players has given him unique insights into what it takes to build successful teams and individuals. Lee's understanding of both the tactical and psychological aspects of football, combined with his experience in nurturing talent, makes him an exceptional speaker for organizations focused on development, mentorship, and achieving sustained success.",
  },
  {
    id: 5,
    name: "Didi Hamann",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-19-09-52-04.jpg-iQN0cqqdPOIq8hGGubhHGwk9mKloIi.jpeg",
    category: "Sports Pundit",
    specialties: ["Mental Strength", "Pressure Performance", "International Experience", "Tactical Intelligence"],
    description:
      "German midfielder who played a crucial role in Liverpool's Champions League victory in 2005, coming on as a substitute at half-time in the final against AC Milan. Hamann was known for his composure, tactical intelligence, and ability to perform under pressure. He had a successful career playing for top clubs including Bayern Munich, Newcastle United, Liverpool, and Manchester City. Capped 59 times for Germany, he played in World Cups and European Championships. Since retiring, he has worked as a pundit and analyst, providing expert insights into the game. His experience of performing in high-pressure situations and international tournaments makes him an inspiring speaker.",
    availability: "Available",
    achievements: [
      "UEFA Champions League Winner 2005",
      "FA Cup Winner 2006",
      "59 Germany Caps",
      "World Cup Finalist 2002",
      "European Championship Semi-finalist 2004",
      "Bundesliga Winner with Bayern Munich",
    ],
    bio: "Didi Hamann's career is defined by his ability to perform when it matters most. His half-time introduction in the 2005 Champions League final helped transform Liverpool's fortunes, contributing to one of football's greatest comebacks. Hamann's international experience with Germany, including reaching a World Cup final, demonstrates his ability to handle pressure at the highest level. His tactical understanding of the game and experience of playing in different football cultures across Europe provide valuable insights for organizations looking to improve performance under pressure and adapt to changing environments.",
  },
]

const eventTypes = [
  "Company talks and corporate events",
  "Team-building seminars and workshops",
  "Conference keynotes and presentations",
  "Youth mentorship sessions",
  "Awards ceremonies and galas",
  "Educational institution talks",
]

const benefits = [
  {
    title: "Real Stories of Resilience",
    description: "Authentic experiences from overcoming challenges at the highest level",
    icon: Award,
  },
  {
    title: "Leadership Insights",
    description: "Proven strategies for leading teams under pressure",
    icon: Target,
  },
  {
    title: "Interactive Q&A",
    description: "Direct engagement opportunities with your audience",
    icon: MessageCircle,
  },
  {
    title: "Elite Performance Mindset",
    description: "Mental strategies used by world-class athletes",
    icon: Star,
  },
]

const testimonials = [
  {
    quote:
      "John Barnes delivered an outstanding presentation on leadership and diversity. His insights were both inspiring and practical for our executive team.",
    author: "Sarah Al-Mansouri",
    company: "Emirates Financial Group",
    rating: 5,
  },
  {
    quote:
      "Jamie Carragher's talk on loyalty and commitment resonated perfectly with our company values. Highly professional and engaging.",
    author: "Ahmed Hassan",
    company: "Dubai Sports Academy",
    rating: 5,
  },
  {
    quote:
      "Luis Garcia brought incredible energy and passion to our event. His Champions League stories were truly motivational.",
    author: "Fatima Al-Zahra",
    company: "Abu Dhabi Business Summit",
    rating: 5,
  },
]

export default function GuestSpeakers() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bring the Game's Greatest to Your Stage
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your event with inspiring speakers who've competed at the pinnacle of professional sport
            </p>
          </div>

          {/* Featured Speakers Portfolio */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Speaker Portfolio</h2>
            <div className="space-y-12">
              {featuredSpeakers.map((speaker, index) => (
                <div
                  key={speaker.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 bg-white rounded-lg shadow-lg overflow-hidden`}
                >
                  <div className="lg:w-1/3">
                    <div className="relative h-80 lg:h-full">
                      <Image
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {speaker.availability}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-gray-900">{speaker.name}</h3>
                      <span className="text-sm text-[#2d5a27] font-medium bg-green-50 px-3 py-1 rounded-full">
                        {speaker.category}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{speaker.bio}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {speaker.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <Award className="h-4 w-4 text-[#2d5a27] mr-2 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Speaking Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {speaker.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`mailto:hello@globalfansclub.com?subject=Speaker Booking Request - ${speaker.name}&body=Hi, I'm interested in booking ${speaker.name} for my event. Please provide availability and pricing information.`}
                        className="btn-primary px-6 py-3 text-center"
                      >
                        Request Booking
                      </a>
                      <a
                        href="/contact"
                        className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center"
                      >
                        More Information
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hire a Legend Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-[#2d5a27] to-[#1f3e1a] text-white p-8 md:p-12 rounded-lg">
              <div className="max-w-4xl mx-auto text-center">
                <Mic className="h-16 w-16 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Hire a Legend</h2>
                <p className="text-xl mb-8">
                  Book former pros, managers, pundits, or athletes for unforgettable speaking experiences
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  {eventTypes.map((eventType, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                      <span>{eventType}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Speaker Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Speaker Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {speakerTypes.map((speaker, index) => {
                const IconComponent = speaker.icon
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <div className="w-12 h-12 bg-[#2d5a27] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{speaker.title}</h3>
                    <p className="text-gray-600">{speaker.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#2d5a27] rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-[#2d5a27] mb-4" />
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What You Get */}
          <div className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <Users className="h-8 w-8 text-[#2d5a27] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Pre-Event Consultation</h3>
                <p className="text-gray-600 text-sm">Tailored content to match your audience and objectives</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <Mic className="h-8 w-8 text-[#2d5a27] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Professional Presentation</h3>
                <p className="text-gray-600 text-sm">Engaging talks with visual aids and interactive elements</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <MessageCircle className="h-8 w-8 text-[#2d5a27] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Q&A Session</h3>
                <p className="text-gray-600 text-sm">Direct interaction between speaker and audience</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <Calendar className="h-8 w-8 text-[#2d5a27] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600 text-sm">Available for in-person and virtual events</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <Award className="h-8 w-8 text-[#2d5a27] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Memorabilia Signing</h3>
                <p className="text-gray-600 text-sm">Optional meet & greet with autograph opportunities</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <Star className="h-8 w-8 text-[#2d5a27] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Premium Experience</h3>
                <p className="text-gray-600 text-sm">Professional coordination from booking to event day</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#2d5a27] text-white p-8 rounded-lg text-center">
            <Mail className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Ready to Inspire Your Audience?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss your speaker requirements and receive a custom package
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@globalfansclub.com?subject=Speaker Package Request&body=Hi, I'm interested in booking a speaker for my event. Please provide details about available speakers and pricing packages."
                className="btn-secondary px-8 py-3"
              >
                Request a Speaker Package
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2d5a27] hover:border-[#2d5a27] transition-colors"
              >
                Enquire Now
              </a>
            </div>

            <p className="text-sm opacity-90 mt-6">
              All pricing quoted in AED. Packages start from AED 15,000 for corporate events
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
