import Link from "next/link"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"

const recentEvents = [
  {
    id: 1,
    title: "Corporate Leadership Summit",
    date: "December 15, 2024",
    location: "Emirates Palace, Abu Dhabi",
    attendees: "200+ executives",
    speaker: "Premier League Legend",
    description: "Inspiring talk on leadership and team building for Fortune 500 company",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Youth Motivation Workshop",
    date: "November 28, 2024",
    location: "Dubai Sports Academy",
    attendees: "150+ students",
    speaker: "Championship Manager",
    description: "Motivational session focused on goal setting and perseverance",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Guest Speakers",
    date: "Available Year Round",
    location: "UAE & International",
    attendees: "Corporate Events",
    speaker: "Professional Athletes",
    description: "Transform your event with inspiring speakers who've competed at the pinnacle of professional sport",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-27%20at%2009.12.39-TWHoHj75UNkuAmM3Kp8X0VdOikDlZ7.png",
  },
]

export default function RecentEvents() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our speakers have transformed events across the UAE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="h-4 w-4 mr-2" />
                    {event.attendees}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#2d5a27]">{event.speaker}</span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/events" className="btn-primary px-8 py-3">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  )
}
