import { Mic, Trophy, Music, Users, Calendar, Camera } from "lucide-react"
import Image from "next/image"

const eventTypes = [
  {
    id: "guest-speakers",
    title: "Guest Speakers",
    description: "Meet legendary football icons and hear their incredible stories",
    icon: Mic,
    image: "/images/speakers/jamie-carragher.jpg",
  },
  {
    id: "live-events",
    title: "Live Events",
    description: "Experience the thrill of live matches and exclusive viewing parties",
    icon: Trophy,
    image: "/images/events/live-match-screening.jpg",
  },
  {
    id: "concerts",
    title: "Concerts & Entertainment",
    description: "World-class musical performances and entertainment experiences",
    icon: Music,
    image: "/images/events/concerts.webp",
  },
  {
    id: "fan-experiences",
    title: "Fan Experiences",
    description: "Unique opportunities to connect with your favorite teams and players",
    icon: Users,
    image: "/images/events/football-experiences.jpg",
  },
  {
    id: "festivals",
    title: "Global Fans Day",
    description: "Annual celebration bringing together fans from around the world",
    icon: Calendar,
    image: "/images/events/global-fans-day-festival.jpg",
  },
  {
    id: "memorabilia",
    title: "Memorabilia Events",
    description: "Exclusive showcases of rare collectibles and signed merchandise",
    icon: Camera,
    image: "/images/events/memorabilia-popup.jpg",
  },
]

export default function EventsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Types</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From intimate speaker sessions to grand festivals, we create unforgettable experiences for football fans
            worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventTypes.map((eventType) => {
            const IconComponent = eventType.icon
            return (
              <div
                key={eventType.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={eventType.image || "/placeholder.svg"}
                    alt={eventType.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-[#2d5a27] rounded-full flex items-center justify-center mr-3">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{eventType.title}</h3>
                  </div>
                  <p className="text-gray-600">{eventType.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
