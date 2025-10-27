import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, Video, Clock, ChevronRight, Car, Music, Trophy } from "lucide-react"

const eventTypes = [
  {
    title: "Fan Meet & Greets",
    description: "Connect with fellow fans and share your passion",
    icon: Users,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fanmeetup.jpg-gcmGfpUiyTWoZirY17uVi1hww6pIBx.jpeg",
  },
  {
    title: "Live Match Screenings",
    description: "Watch the biggest games together in an electric atmosphere",
    icon: Video,
    image: "/images/events/live-match-screening.jpg",
  },
  {
    title: "Memorabilia Pop-Ups",
    description: "Exclusive showcases of rare and authentic collectibles",
    icon: Calendar,
    image: "/images/events/memorabilia-popup.jpg",
  },
  {
    title: "Annual Global Fans Day",
    description: "Our biggest celebration of fan culture worldwide",
    icon: Users,
    image: "/images/events/global-fans-day-festival.jpg",
  },
  {
    title: "Grand Prix",
    description: "Premium F1 experiences at the world's most prestigious circuits",
    icon: Car,
    image: "/images/events/abu-dhabi-gp.avif",
  },
  {
    title: "Concerts",
    description: "Live music events and entertainment experiences",
    icon: Music,
    image: "/images/events/concerts.webp",
  },
  {
    title: "Football Experiences",
    description: "VIP match experiences and stadium tours",
    icon: Trophy,
    image: "/images/events/football-experiences.jpg",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Abu Dhabi Grand Prix VIP Experience",
    date: "December 5-7, 2025",
    time: "Race Weekend",
    location: "Yas Marina Circuit, Abu Dhabi",
    type: "In-Person",
    description: "Premium F1 weekend with paddock access and hospitality",
    status: "upcoming",
    image: "/images/events/abu-dhabi-gp.avif",
    link: "/events/abu-dhabi-grand-prix",
  },
  {
    id: 2,
    title: "DP World Tour Championship",
    date: "November 13-16, 2025",
    time: "Tournament Week",
    location: "Jumeirah Golf Estates, Dubai",
    type: "In-Person",
    description: "The season finale of the DP World Tour with VIP hospitality",
    status: "upcoming",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/q3nyrse3ftugewpjzrwa-wHapDpRnoEaz3vvAOhjBWX03rcM2k3.jpeg",
    link: "/events/dp-world-tour-championship",
  },
  {
    id: 3,
    title: "Teddy Swims Live in Dubai",
    date: "March 22, 2025",
    time: "8:00 PM",
    location: "Coca-Cola Arena, Dubai",
    type: "In-Person",
    description: "I've Tried Everything But Therapy Tour 2025 with VIP packages",
    status: "upcoming",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teddy-Swims-jbGlSIvHYNKojSkH7nVA265LWNAsRD.png",
    link: "/events/teddy-swims-dubai",
  },
  {
    id: 4,
    title: "Liverpool Legends Meet & Greet",
    date: "March 15, 2025",
    time: "7:00 PM",
    location: "Dubai Sports City",
    type: "In-Person",
    description: "Meet former Liverpool players and get your memorabilia signed",
    status: "upcoming",
    image: "/placeholder.svg?height=200&width=300",
    link: "/events/liverpool-legends-meet-greet",
  },
  {
    id: 5,
    title: "Champions League Final Screening",
    date: "June 1, 2025",
    time: "9:00 PM",
    location: "Global Fans Club Lounge, Abu Dhabi",
    type: "In-Person",
    description: "Watch the biggest game of the year with fellow fans",
    status: "upcoming",
    image: "/placeholder.svg?height=200&width=300",
    link: "/events/champions-league-final-screening",
  },
  {
    id: 6,
    title: "Steven Gerrard AMA Session",
    date: "April 20, 2025",
    time: "8:00 PM",
    location: "Online",
    type: "Online",
    description: "Ask your questions to the Liverpool legend",
    status: "upcoming",
    image: "/placeholder.svg?height=200&width=300",
    link: "/events/steven-gerrard-ama",
  },
]

export default function Events() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section with Abu Dhabi Image */}
        <section className="relative h-[70vh] overflow-hidden">
          <Image
            src="/images/events/abu-dhabi-gp.avif"
            alt="Abu Dhabi Grand Prix - Yas Marina Circuit"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">Experience the Passion Live</h1>
              <p className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
                From F1 Grand Prix weekends to exclusive fan meet-ups — join the most spectacular events that bring the
                global community together
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:hello@globalfansclub.com?subject=Event Notifications - Sign Me Up"
                  className="btn-primary px-8 py-4 text-lg flex items-center"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Get Event Updates
                </a>
                <Link href="/events/abu-dhabi-grand-prix" className="btn-secondary px-8 py-4 text-lg flex items-center">
                  <Car className="h-5 w-5 mr-2" />
                  Abu Dhabi GP Experience
                </Link>
                <a
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2d5a27] hover:border-[#2d5a27] flex items-center"
                >
                  <Users className="h-5 w-5 mr-2" />
                  Private Events
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Event Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Event Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {eventTypes.map((eventType, index) => {
                  const IconComponent = eventType.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                    >
                      {/* Event Type Image */}
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        <Image
                          src={eventType.image || "/placeholder.svg"}
                          alt={eventType.title}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-6">
                        <div className="w-12 h-12 bg-[#d71920] rounded-full flex items-center justify-center mb-4">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{eventType.title}</h3>
                        <p className="text-gray-600">{eventType.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Filters */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-[#2d5a27] text-white px-6 py-2 rounded-full font-medium">Upcoming</button>
                <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-300">
                  Past
                </button>
                <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-300">
                  Online
                </button>
                <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-300">
                  In-Person
                </button>
              </div>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents
                .filter((event) => event.status === "upcoming")
                .map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Event Image */}
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            event.type === "Online" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                          }`}
                        >
                          {event.type}
                        </span>
                        <span className="text-sm text-gray-500">
                          {event.status === "upcoming" ? "Upcoming" : "Past"}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>

                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>

                      {event.link ? (
                        <Link href={event.link} className="w-full btn-primary py-3 flex items-center justify-center">
                          View Details
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Link>
                      ) : (
                        <button className="w-full btn-primary py-3 flex items-center justify-center">
                          {event.status === "upcoming" ? "Join Event" : "View Details"}
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-[#d71920] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Don't Miss Out</h2>
              <p className="text-xl mb-6">Be the first to know about upcoming events and exclusive fan experiences</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@globalfansclub.com?subject=Event Notifications - Sign Me Up"
                  className="btn-secondary px-8 py-3"
                >
                  Get Event Updates
                </a>
                <a
                  href="mailto:hello@globalfansclub.com?subject=Private Event Inquiry"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2d5a27] hover:border-[#2d5a27]"
                >
                  Host Private Event
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
