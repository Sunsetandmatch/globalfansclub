import Link from "next/link"
import Image from "next/image"
import { Search, Calendar, Mic, Users } from "lucide-react"

export default function SpeakerHero() {
  return (
    <section className="relative text-white">
      {/* Background Image */}
      <div className="relative">
        <Image
          src="/images/events/dubai-crowd-event.jpg"
          alt="Dubai crowd watching football event"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Main Hero Content */}
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Looking for the perfect speaker?</h1>
              <h2 className="text-3xl md:text-4xl text-gray-200 mb-8">View all our categories</h2>
              <Link
                href="/guest-speakers"
                className="inline-block bg-[#2d5a27] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1f3e1a] transition-colors"
              >
                Visit Guest Speakers Page
              </Link>
            </div>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for the perfect speaker"
                  className="flex-1 px-6 py-4 text-lg text-gray-900 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#2d5a27]"
                />
                <button className="bg-[#2d5a27] text-white px-8 py-4 rounded-r-lg hover:bg-[#1f3e1a] transition-colors">
                  <Search className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2d5a27] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-gray-200">Expert Speakers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2d5a27] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-gray-200">Events Delivered</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2d5a27] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">10+</h3>
                <p className="text-gray-200">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
