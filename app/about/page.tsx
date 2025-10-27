import Header from "@/components/header"
import Footer from "@/components/footer"
import { Users, Trophy, Calendar, Mic, Camera, GuitarIcon as Golf, Music, ShoppingBag } from "lucide-react"

const offerings = [
  {
    title: "Fan Meet-Ups",
    description: "Celebrate match days and major moments with fellow fans in cities around the world.",
    icon: Users,
    color: "bg-green-500",
  },
  {
    title: "Live Q&A Sessions",
    description: "Hear firsthand stories from football legends in intimate, moderated sessions.",
    icon: Mic,
    color: "bg-blue-500",
  },
  {
    title: "Autographs & Photographs",
    description: "Capture the moment with signed memorabilia and photo opportunities.",
    icon: Camera,
    color: "bg-green-500",
  },
  {
    title: "Tailored Private Events",
    description: "From private dinners to bespoke themed evenings — we create exclusive experiences just for you.",
    icon: Calendar,
    color: "bg-purple-500",
  },
  {
    title: "Golf Days with Legends",
    description:
      "Enjoy a round of golf and casual conversation with former pros and sporting icons at premium courses.",
    icon: Golf,
    color: "bg-yellow-500",
  },
  {
    title: "Hire a Guest Speaker",
    description:
      "Inspire your team or audience with motivational talks from former players, managers, or top-level sports personalities.",
    icon: Mic,
    color: "bg-indigo-500",
  },
  {
    title: "Official Merchandise",
    description:
      "Shop a curated collection of memorabilia, including rare signed items, championship displays, and limited-edition prints.",
    icon: ShoppingBag,
    color: "bg-pink-500",
  },
  {
    title: "Live Music",
    description:
      "Enjoy music events that blend the spirit of football with great entertainment, from anthems to acoustic nights.",
    icon: Music,
    color: "bg-orange-500",
  },
]

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Global Fans Club</h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-md">
                <span className="text-red-500 text-3xl">★</span>
              </div>
            </div>
          </div>

          {/* Main Story */}
          <div className="mb-16">
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
              <div className="max-w-4xl mx-auto">
                {/* Highlighted Quote Box */}
                <div className="bg-gradient-to-r from-[#2d5a27] to-[#1f3e1a] text-white p-8 rounded-lg shadow-lg mb-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-5 rounded-full -ml-12 -mb-12"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                        <span className="text-red-500 text-lg">★</span>
                      </div>
                      <span className="text-sm font-medium text-gray-200 uppercase tracking-wider">Our Mission</span>
                    </div>
                    <p className="text-xl font-semibold leading-relaxed">
                      Bringing you closer — we connect passion with experience through unforgettable events and
                      exclusive access to the game's biggest icons. From stadium roars to quiet chats on the fairway, we
                      offer something no ordinary fan club can.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Global Fans Club (GFC) is more than just a destination — it's a community built by fans, for fans.
                  Whether you're a lifelong supporter or a new admirer of the beautiful game, GFC brings you closer to
                  the moments, the legends, and the memories that define football culture.
                </p>

                <div className="bg-[#2d5a27] text-white p-6 rounded-lg text-center">
                  <p className="text-xl font-semibold">
                    At GFC, we're not just watching history — we're helping fans be a part of it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerings.map((offering, index) => {
                const IconComponent = offering.icon
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className={`w-12 h-12 ${offering.color} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{offering.title}</h3>
                    <p className="text-gray-600">{offering.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Community Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Community Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2d5a27] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Connection</h3>
                <p className="text-gray-600">
                  Bringing fans together from around the world to share their passion for the beautiful game.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#2d5a27] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Delivering premium experiences that honor the legends and celebrate the sport we all love.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-red-500 text-2xl">★</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Authenticity</h3>
                <p className="text-gray-600">
                  Every experience is genuine, every story is real, and every moment is crafted with care.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-[#2d5a27] to-[#1f3e1a] text-white p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Club. Live the Passion. Share the Glory.</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're looking to meet fellow fans, experience exclusive events, or get closer to your football
              heroes, Global Fans Club is your gateway to unforgettable moments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/events" className="btn-secondary px-8 py-3">
                Explore Events
              </a>
              <a
                href="/guest-speakers"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2d5a27] hover:border-[#2d5a27]"
              >
                Book a Speaker
              </a>
              <a href="/contact" className="btn-primary px-8 py-3">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The GFC Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Individual Fans</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2d5a27] rounded-full mr-3"></span>
                    Join exclusive fan meet-ups and watch parties
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2d5a27] rounded-full mr-3"></span>
                    Participate in Q&A sessions with legends
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2d5a27] rounded-full mr-3"></span>
                    Access to signed memorabilia and collectibles
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2d5a27] rounded-full mr-3"></span>
                    Golf days with former professionals
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Organizations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2d5a27] rounded-full mr-3"></span>
                    Corporate speaker bookings and events
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2d5a27] rounded-full mr-3"></span>
                    Private themed evenings and dinners
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2d5a27] rounded-full mr-3"></span>
                    Team building experiences with legends
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2d5a27] rounded-full mr-3"></span>
                    Custom entertainment and music events
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
