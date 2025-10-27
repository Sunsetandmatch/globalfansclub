import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Calendar, MapPin, Users, Clock, Car, Trophy, Star, Mail } from "lucide-react"

export default function AbuDhabiGrandPrix() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <Image
            src="/images/events/abu-dhabi-gp.avif"
            alt="Abu Dhabi Grand Prix - Yas Marina Circuit"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">Abu Dhabi Grand Prix 2025</h1>
              <p className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
                Experience the season finale at Yas Marina Circuit with exclusive VIP packages and hospitality
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:hello@globalfansclub.com?subject=Abu Dhabi Grand Prix VIP Experience Inquiry"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Event Details</h2>

              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Calendar className="h-6 w-6 text-[#d71920] mr-3" />
                    <div>
                      <h3 className="font-semibold">Date</h3>
                      <p className="text-gray-600">December 5-7, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-[#d71920] mr-3" />
                    <div>
                      <h3 className="font-semibold">Race Time</h3>
                      <p className="text-gray-600">Sunday 5:00 PM Local Time</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-[#d71920] mr-3" />
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-gray-600">Yas Marina Circuit, Abu Dhabi</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Car className="h-6 w-6 text-[#d71920] mr-3" />
                    <div>
                      <h3 className="font-semibold">Circuit Length</h3>
                      <p className="text-gray-600">5.281 km (55 laps)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Abu Dhabi Grand Prix</h3>
                <p className="text-gray-600 mb-6">
                  The Abu Dhabi Grand Prix marks the spectacular finale of the Formula 1 season at the stunning Yas
                  Marina Circuit. This twilight race offers a unique experience as the sun sets over the Arabian Gulf,
                  with the circuit's iconic architecture providing a breathtaking backdrop for the championship
                  conclusion.
                </p>

                <p className="text-gray-600 mb-6">
                  Yas Marina Circuit is renowned for its state-of-the-art facilities, luxury hospitality options, and
                  the famous Yas Viceroy Hotel that straddles the track. The circuit features challenging corners, long
                  straights, and multiple overtaking opportunities, making for exciting racing action.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-4">What Makes This Special</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Season finale with championship implications</li>
                  <li>Unique twilight race timing (day to night transition)</li>
                  <li>World-class entertainment and concerts</li>
                  <li>Luxury hospitality and VIP experiences</li>
                  <li>Access to Yas Island attractions</li>
                  <li>Meet and greet opportunities with F1 personalities</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#2d5a27] text-white p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">VIP Package Includes</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Paddock Club access
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Premium grandstand seating
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Gourmet dining experiences
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Pit lane walks
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Driver meet & greets
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Exclusive hospitality lounges
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Transportation included
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
                    <Users className="h-5 w-5 text-[#d71920] mr-3" />
                    <div>
                      <p className="font-semibold">Group Bookings</p>
                      <p className="text-gray-600">Special rates available</p>
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:hello@globalfansclub.com?subject=Abu Dhabi Grand Prix VIP Package Inquiry&body=Hi, I'm interested in learning more about the Abu Dhabi Grand Prix VIP packages. Please provide details about availability, pricing, and what's included."
                  className="btn-primary w-full mt-6 text-center block"
                >
                  Get More Information
                </a>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Global Fans Club</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Trophy className="h-12 w-12 text-[#d71920] mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Premium Access</h4>
                <p className="text-gray-600">Exclusive access to areas not available to general admission</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-[#d71920] mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Expert Service</h4>
                <p className="text-gray-600">Dedicated concierge service throughout your experience</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-[#d71920] mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Unforgettable Memories</h4>
                <p className="text-gray-600">Once-in-a-lifetime experiences with fellow motorsport enthusiasts</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
