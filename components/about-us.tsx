import Link from "next/link"
import Image from "next/image"
import { Mic2, Users, Pen } from "lucide-react"

const categories = ["Sports", "Events", "VIP Access", "Travel", "Music", "Parties", "Memorabilia"]

export default function AboutUs() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      {/* Mobile Category Bar - positioned in white space above About section */}
      <div className="block sm:hidden px-4 mb-8">
        <div className="text-center">
          <div className="bg-gray-100 px-4 py-3 rounded-lg mx-auto inline-block max-w-full">
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm font-light tracking-wider text-gray-700">
              {categories.map((category, index) => (
                <div key={category} className="flex items-center">
                  <span className="hover:text-[#2d5a27] transition-colors cursor-pointer">{category}</span>
                  {index < categories.length - 1 && <span className="text-gray-400 ml-3">/</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About Global Fans Club
          </h2>
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-md">
              <span className="text-red-500 text-2xl sm:text-3xl">★</span>
            </div>
          </div>
        </div>

        {/* Main Story */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-gray-50 p-6 sm:p-8 md:p-12 rounded-lg">
            <div className="max-w-4xl mx-auto">
              {/* Highlighted Quote Box */}
              <div className="bg-gradient-to-r from-[#2d5a27] to-[#1f3e1a] text-white p-6 sm:p-8 rounded-lg shadow-lg mb-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white bg-opacity-10 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-white bg-opacity-5 rounded-full -ml-8 sm:-ml-12 -mb-8 sm:-mb-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-500 text-sm sm:text-lg">★</span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-200 uppercase tracking-wider">
                      Our Mission
                    </span>
                  </div>
                  <p className="text-lg sm:text-xl leading-relaxed mb-4">
                    Bringing you closer — we connect passion with experience through unforgettable events and exclusive
                    access to the game's biggest icons. From stadium roars to quiet chats on the fairway, we offer
                    something no ordinary fan club can.
                  </p>
                  <p className="text-lg sm:text-xl leading-relaxed">
                    Global Fans Club (GFC) is more than just a destination — it's a community built by fans, for fans.
                    Whether you're a lifelong supporter or a new admirer of the beautiful game, GFC brings you closer to
                    the moments, the legends, and the memories that define memorable sporting achievements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">What We Offer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Guest Speakers - NOW FIRST */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden sm:col-span-2 lg:col-span-1">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-19-09-50-18.jpg-BN2iEbxrxMBuVZmmapAkPTvwLDT5GV.jpeg"
                  alt="Professional football speaker in stadium setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#2d5a27] rounded-lg flex items-center justify-center shadow-lg">
                    <Pen className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Guest Speakers</h4>
                <p className="text-sm sm:text-base text-gray-600">
                  Transform your event with inspiring speakers who've competed at the pinnacle of professional sport.
                </p>
              </div>
            </div>

            {/* Live Q&A Sessions - NOW SECOND */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Liveqanda.jpg-JiNNnj8tM6c9996TlKpkQOrqTZ7IeC.jpeg"
                  alt="Liverpool legends on stage during live Q&A session with packed audience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                    <Mic2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Live Q&A Sessions</h4>
                <p className="text-sm sm:text-base text-gray-600">
                  Hear firsthand stories from football legends in intimate, moderated sessions.
                </p>
              </div>
            </div>

            {/* Fan Meet-Ups - NOW THIRD */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fanmeetup.jpg-gcmGfpUiyTWoZirY17uVi1hww6pIBx.jpeg"
                  alt="Liverpool fans gathering at outdoor meet-up event"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#2d5a27] rounded-lg flex items-center justify-center shadow-lg">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Fan Meet-Ups</h4>
                <p className="text-sm sm:text-base text-gray-600">
                  Celebrate match days and major moments with fellow fans in cities around the world.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MORE + Button */}
        <div className="text-center mb-8">
          <Link
            href="/experiences"
            className="inline-flex items-center bg-[#2d5a27] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f3e1a] transition-colors"
          >
            <span className="mr-2">MORE</span>
            <span className="text-xl">+</span>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/about" className="btn-primary px-6 sm:px-8 py-3 text-sm sm:text-base">
            Find Out More
          </Link>
        </div>
      </div>
    </section>
  )
}
