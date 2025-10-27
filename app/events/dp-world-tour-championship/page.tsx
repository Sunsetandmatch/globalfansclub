import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Calendar, MapPin, Users, Clock, Trophy, Star, Mail, GuitarIcon as Golf } from "lucide-react"

export default function DPWorldTourChampionship() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/q3nyrse3ftugewpjzrwa-wHapDpRnoEaz3vvAOhjBWX03rcM2k3.jpeg"
            alt="DP World Tour Championship - Earth Course at Jumeirah Golf Estates"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">DP World Tour Championship 2025</h1>
              <p className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
                The season-ending finale of the DP World Tour at the prestigious Jumeirah Golf Estates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:hello@globalfansclub.com?subject=DP World Tour Championship VIP Experience Inquiry"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tournament Details</h2>

              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Calendar className="h-6 w-6 text-[#d71920] mr-3" />
                    <div>
                      <h3 className="font-semibold">Date</h3>
                      <p className="text-gray-600">November 13-16, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-[#d71920] mr-3" />
                    <div>
                      <h3 className="font-semibold">Tournament Format</h3>
                      <p className="text-gray-600">72-hole stroke play</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-[#d71920] mr-3" />
                    <div>
                      <h3 className="font-semibold">Venue</h3>
                      <p className="text-gray-600">Earth Course, Jumeirah Golf Estates</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="h-6 w-6 text-[#d71920] mr-3" />
                    <div>
                      <h3 className="font-semibold">Prize Fund</h3>
                      <p className="text-gray-600">$10 Million USD</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About the DP World Tour Championship</h3>
                <p className="text-gray-600 mb-6">
                  The DP World Tour Championship is the season-ending finale of the DP World Tour, bringing together the
                  top 50 players from the Race to Dubai rankings. This prestigious tournament takes place at the
                  stunning Earth Course at Jumeirah Golf Estates, one of the most challenging and beautiful golf courses
                  in the Middle East.
                </p>

                <p className="text-gray-600 mb-6">
                  As the culmination of the European golf season, this championship determines the Race to Dubai winner
                  and offers one of the richest prize funds in professional golf. The Earth Course, designed by Greg
                  Norman, provides a stern test for the world's best golfers with its strategic layout and pristine
                  conditions.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-4">Tournament Highlights</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Season finale with Race to Dubai championship at stake</li>
                  <li>Elite field of top 50 DP World Tour players</li>
                  <li>World-class hospitality and VIP experiences</li>
                  <li>Pro-Am opportunities with tour professionals</li>
                  <li>Exclusive access to practice rounds and player areas</li>
                  <li>Premium dining and entertainment options</li>
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-4">The Earth Course</h4>
                <p className="text-gray-600 mb-6">
                  Designed by Greg Norman, the Earth Course is a championship layout that has hosted the DP World Tour
                  Championship since 2009. The course features strategic bunkering, water hazards, and undulating greens
                  that test every aspect of a player's game. With its immaculate conditioning and stunning desert
                  landscape, it provides the perfect stage for the season finale.
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
                    Championship Club hospitality
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Premium viewing areas
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Gourmet dining experiences
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Pro-Am playing opportunities
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Player meet & greets
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
                    <Golf className="h-5 w-5 text-[#d71920] mr-3" />
                    <div>
                      <p className="font-semibold">Golf Packages</p>
                      <p className="text-gray-600">Play & watch options</p>
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:hello@globalfansclub.com?subject=DP World Tour Championship VIP Package Inquiry&body=Hi, I'm interested in learning more about the DP World Tour Championship VIP packages. Please provide details about availability, pricing, and what's included."
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
                <h4 className="font-semibold text-lg mb-2">Exclusive Access</h4>
                <p className="text-gray-600">VIP hospitality areas and behind-the-scenes experiences</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-[#d71920] mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Golf Expertise</h4>
                <p className="text-gray-600">Specialized knowledge of professional golf and tournament experiences</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-[#d71920] mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Premium Service</h4>
                <p className="text-gray-600">Personalized service from booking to tournament conclusion</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
