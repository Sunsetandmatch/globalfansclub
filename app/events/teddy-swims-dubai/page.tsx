import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Calendar, MapPin, Users, Clock, Music, Star, Mail, Mic } from "lucide-react"

export default function TeddySwimsLiveDubai() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teddy-Swims-jbGlSIvHYNKojSkH7nVA265LWNAsRD.png"
            alt="Teddy Swims - I've Tried Everything But Therapy Tour 2025 Live in Dubai"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">Teddy Swims Live in Dubai</h1>
              <p className="text-xl sm:text-2xl mb-4 text-gray-100">I've Tried Everything But Therapy Tour 2025</p>
              <p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Experience the soulful voice and incredible energy of Teddy Swims at Coca-Cola Arena
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:hello@globalfansclub.com?subject=Teddy Swims Dubai Concert VIP Experience Inquiry"
                  className="btn-primary px-8 py-4 text-lg flex items-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Book VIP Experience
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Event Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Concert Details</h2>

              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Calendar className="h-6 w-6 text-[#d71920] mr-3" />
                    <div>
                      <h3 className="font-semibold">Date</h3>
                      <p className="text-gray-600">March 22, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-[#d71920] mr-3" />
                    <div>
                      <h3 className="font-semibold">Show Time</h3>
                      <p className="text-gray-600">8:00 PM (Doors open 7:00 PM)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-[#d71920] mr-3" />
                    <div>
                      <h3 className="font-semibold">Venue</h3>
                      <p className="text-gray-600">Coca-Cola Arena, Dubai</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-[#d71920] mr-3" />
                    <div>
                      <h3 className="font-semibold">Capacity</h3>
                      <p className="text-gray-600">17,000 seats</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About Teddy Swims</h3>
                <p className="text-gray-600 mb-6">
                  Teddy Swims (Jaten Dimsdale) has taken the music world by storm with his incredible vocal range,
                  soulful delivery, and genre-blending style that seamlessly combines R&B, soul, country, and pop. Known
                  for his powerful covers and original hits, Teddy has amassed millions of followers across social media
                  platforms and streaming services.
                </p>

                <p className="text-gray-600 mb-6">
                  His "I've Tried Everything But Therapy" tour showcases his most personal and powerful performances
                  yet, featuring hits like "Lose Control," "The Door," and "Bad Dreams." This intimate yet energetic
                  show promises to be an unforgettable experience for fans of authentic, heartfelt music.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Live performances of chart-topping hits and fan favorites</li>
                  <li>Intimate storytelling between songs</li>
                  <li>Incredible vocal performances spanning multiple genres</li>
                  <li>State-of-the-art sound and lighting production</li>
                  <li>Special guest appearances (to be announced)</li>
                  <li>Exclusive merchandise available at the venue</li>
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-4">Coca-Cola Arena</h4>
                <p className="text-gray-600 mb-6">
                  Located in Dubai's City Walk, Coca-Cola Arena is the Middle East's largest multipurpose indoor arena.
                  With world-class acoustics and state-of-the-art facilities, it provides the perfect setting for Teddy
                  Swims' powerful vocals and emotional performances. The venue offers excellent sightlines from every
                  seat and premium hospitality options.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#2d5a27] text-white p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">VIP Package Includes</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Premium seating (front sections)
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    VIP hospitality lounge access
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Complimentary drinks & catering
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Meet & greet opportunity
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Exclusive merchandise package
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Priority venue entry
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Dedicated VIP entrance
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact for Booking</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#d71920] mr-3" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:hello@globalfansclub.com" className="text-[#2d5a27] hover:underline">
                        hello@globalfansclub.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Music className="h-5 w-5 text-[#d71920] mr-3" />
                    <div>
                      <p className="font-semibold">Concert Packages</p>
                      <p className="text-gray-600">Multiple tiers available</p>
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:hello@globalfansclub.com?subject=Teddy Swims Dubai Concert VIP Package Inquiry&body=Hi, I'm interested in learning more about the Teddy Swims concert VIP packages in Dubai. Please provide details about availability, pricing, and what's included."
                  className="btn-primary w-full mt-6 text-center block"
                >
                  Get More Information
                </a>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Popular Songs</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• "Lose Control"</li>
                  <li>• "The Door"</li>
                  <li>• "Bad Dreams"</li>
                  <li>• "Stay"</li>
                  <li>• "Simple Things"</li>
                  <li>• "Broke"</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Global Fans Club</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mic className="h-12 w-12 text-[#d71920] mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Music Expertise</h4>
                <p className="text-gray-600">
                  Specialized knowledge of live music experiences and artist meet & greets
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-[#d71920] mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">VIP Access</h4>
                <p className="text-gray-600">Exclusive backstage access and premium hospitality experiences</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-[#d71920] mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Memorable Experiences</h4>
                <p className="text-gray-600">Creating unforgettable moments with your favorite artists</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
