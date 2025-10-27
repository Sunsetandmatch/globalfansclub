"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Users, MapPin, ChevronLeft, ChevronRight } from "lucide-react"

const featuredSpeakers = [
  {
    id: 1,
    name: "Jamie Carragher",
    role: "Liverpool Legend & Sky Sports Pundit",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-19-09-50-18.jpg-bmTe2wcNIv3TZna9VK1k3Y4lI26AjV.jpeg",
    rating: 4.9,
    events: 150,
    location: "Liverpool, UK",
    specialties: ["Leadership", "Team Building", "Mental Resilience"],
    description:
      "Former Liverpool defender and current Sky Sports analyst, Jamie brings unique insights into high-performance teamwork and leadership under pressure.",
  },
  {
    id: 2,
    name: "Gary Neville",
    role: "Manchester United Legend & Business Leader",
    image: "/images/speakers/gary-neville.webp",
    rating: 4.8,
    events: 200,
    location: "Manchester, UK",
    specialties: ["Business Strategy", "Leadership", "Innovation"],
    description:
      "Manchester United legend turned successful businessman and pundit, Gary offers valuable perspectives on leadership, strategy, and building winning cultures.",
  },
  {
    id: 3,
    name: "Ian Wright",
    role: "Arsenal Legend & Media Personality",
    image: "/images/speakers/ian-wright.jpg",
    rating: 4.9,
    events: 180,
    location: "London, UK",
    specialties: ["Motivation", "Overcoming Adversity", "Personal Development"],
    description:
      "Arsenal legend and beloved media personality, Ian's journey from challenging beginnings to football stardom inspires audiences worldwide.",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Microsoft UAE",
    role: "Head of Corporate Events",
    content:
      "Jamie Carragher's presentation on leadership under pressure was absolutely phenomenal. Our team was captivated by his authentic stories and practical insights from the Champions League final. The engagement was incredible.",
    rating: 5,
    event: "Annual Leadership Summit 2024",
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    company: "Emirates Group",
    role: "Director of Human Resources",
    content:
      "Gary Neville brought a unique perspective on building winning cultures that translated perfectly to our business environment. His transition from football to business provided invaluable lessons for our leadership team.",
    rating: 5,
    event: "Executive Development Program",
  },
  {
    id: 3,
    name: "Lisa Chen",
    company: "ADNOC",
    role: "Chief Learning Officer",
    content:
      "Ian Wright's motivational session was transformative for our diversity and inclusion initiative. His authentic storytelling and positive energy created lasting impact across all levels of our organization.",
    rating: 5,
    event: "Diversity & Leadership Conference",
  },
]

export default function GuestSpeakersSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Guest Speakers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book world-class football legends and personalities for your next corporate event, conference, or private
            function. Our speakers deliver powerful insights on leadership, teamwork, and achieving excellence.
          </p>
        </div>

        {/* Featured Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  fill
                  className={`object-cover ${speaker.name === "Sammy Lee" ? "object-[center_20%]" : ""}`}
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Available
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                <p className="text-[#2d5a27] font-medium mb-3">{speaker.role}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{speaker.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{speaker.events}+ events</span>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{speaker.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{speaker.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {speaker.specialties.map((specialty, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Speakers CTA */}
        <div className="text-center mb-16">
          <Link
            href="/speakers"
            className="bg-[#2d5a27] hover:bg-[#1e3d1a] text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center"
          >
            <Users className="h-5 w-5 mr-2" />
            View All Speakers
          </Link>
        </div>

        {/* Client Testimonials */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">What Our Clients Say</h3>
            <p className="text-gray-600">Hear from organizations who've experienced the impact of our speakers</p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex-1 mx-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}</p>
                    <p className="text-sm text-[#2d5a27] font-medium">{testimonials[currentTestimonial].company}</p>
                    <p className="text-xs text-gray-500 mt-1">{testimonials[currentTestimonial].event}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-[#2d5a27]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
