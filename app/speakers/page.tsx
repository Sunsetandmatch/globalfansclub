"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Star, Users, MapPin, Trophy, Target, MessageCircle } from "lucide-react"

const allSpeakers = [
  {
    id: 1,
    name: "Jamie Carragher",
    role: "Liverpool Legend & Sky Sports Pundit",
    category: "Former Professional",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-19-09-50-18.jpg-bmTe2wcNIv3TZna9VK1k3Y4lI26AjV.jpeg",
    rating: 4.9,
    events: 150,
    availability: "Available",
    location: "Liverpool, UK",
    specialties: ["Leadership", "Team Building", "Mental Resilience", "High-Performance Culture"],
    description:
      "Former Liverpool defender and current Sky Sports analyst, Jamie brings unique insights into high-performance teamwork and leadership under pressure. His experience in crucial matches like the 2005 Champions League final provides powerful lessons for corporate audiences.",
    achievements: ["Champions League Winner 2005", "FA Cup Winner", "UEFA Cup Winner", "Liverpool Hall of Fame"],
    speakingTopics: ["Leadership Under Pressure", "Building Team Chemistry", "Overcoming Setbacks", "Mental Toughness"],
  },
  {
    id: 2,
    name: "Gary Neville",
    role: "Manchester United Legend & Business Leader",
    category: "Former Professional",
    image: "/images/speakers/gary-neville.webp",
    rating: 4.8,
    events: 200,
    availability: "Available",
    location: "Manchester, UK",
    specialties: ["Business Strategy", "Leadership", "Innovation", "Entrepreneurship"],
    description:
      "Manchester United legend turned successful businessman and pundit, Gary offers valuable perspectives on leadership, strategy, and building winning cultures. His transition from football to business provides unique insights for corporate leaders.",
    achievements: [
      "8x Premier League Winner",
      "2x Champions League Winner",
      "Successful Entrepreneur",
      "Hotel & Property Developer",
    ],
    speakingTopics: ["Winning Mentality", "Strategic Planning", "Business Innovation", "Leadership Transition"],
  },
  {
    id: 3,
    name: "Ian Wright",
    role: "Arsenal Legend & Media Personality",
    category: "Former Professional",
    image: "/images/speakers/ian-wright.jpg",
    rating: 4.9,
    events: 180,
    availability: "Available",
    location: "London, UK",
    specialties: ["Motivation", "Overcoming Adversity", "Personal Development", "Diversity & Inclusion"],
    description:
      "Arsenal legend and beloved media personality, Ian's journey from challenging beginnings to football stardom inspires audiences worldwide. His authentic storytelling and motivational approach resonates with diverse audiences.",
    achievements: ["Arsenal All-Time Top Scorer", "England International", "Media Icon", "MBE Recipient"],
    speakingTopics: ["Overcoming Adversity", "Personal Motivation", "Achieving Dreams", "Diversity in Sport"],
  },
  {
    id: 4,
    name: "Sammy Lee",
    role: "Liverpool Legend & Former England Coach",
    category: "Manager & Coach",
    image: "/images/speakers/sammy-lee.png",
    rating: 4.6,
    events: 95,
    availability: "Available",
    location: "Liverpool, UK",
    specialties: ["Coaching Excellence", "Team Development", "Youth Mentoring", "Technical Skills"],
    description:
      "Former Liverpool midfielder and England assistant coach, Sammy brings decades of experience in player development and coaching excellence. His insights into nurturing talent and building successful teams are invaluable for organizational growth.",
    achievements: [
      "Liverpool First Team Player",
      "England Assistant Coach",
      "Youth Development Expert",
      "Coaching Qualification Specialist",
    ],
    speakingTopics: ["Talent Development", "Coaching Leadership", "Team Building", "Performance Excellence"],
  },
  {
    id: 5,
    name: "Didi Hamann",
    role: "Liverpool Legend & International Star",
    category: "Former Professional",
    image: "/images/speakers/speaker-5.jpg",
    rating: 4.7,
    events: 130,
    availability: "Available",
    location: "Liverpool, UK",
    specialties: ["International Experience", "Pressure Management", "Cultural Adaptation", "Mental Strength"],
    description:
      "Former Liverpool and Germany midfielder, Didi's international career and Champions League experience provide unique insights into performing under pressure and adapting to different cultures and environments.",
    achievements: ["Champions League Winner", "World Cup Finalist", "Premier League Winner", "International Captain"],
    speakingTopics: ["International Leadership", "Pressure Performance", "Cultural Intelligence", "Mental Resilience"],
  },
  {
    id: 6,
    name: "John Barnes",
    role: "Liverpool Legend & Cultural Icon",
    category: "Former Professional",
    image: "/images/speakers/speaker-2.jpg",
    rating: 4.8,
    events: 165,
    availability: "Available",
    location: "Liverpool, UK",
    specialties: ["Cultural Change", "Breaking Barriers", "Leadership", "Social Impact"],
    description:
      "Liverpool legend and England international, John Barnes broke barriers and changed perceptions throughout his career. His insights into leadership, cultural change, and making a positive social impact resonate powerfully with modern audiences.",
    achievements: ["Liverpool Legend", "England International", "Cultural Pioneer", "Social Impact Advocate"],
    speakingTopics: ["Breaking Barriers", "Cultural Leadership", "Social Change", "Inspirational Leadership"],
  },
  {
    id: 7,
    name: "Luis Garcia",
    role: "Liverpool Legend & Spanish International",
    category: "Former Professional",
    image: "/images/speakers/speaker-1.jpg",
    rating: 4.5,
    events: 85,
    availability: "Available",
    location: "Liverpool, UK",
    specialties: ["Creative Thinking", "Adaptability", "International Perspective", "Team Chemistry"],
    description:
      "Former Liverpool and Spain midfielder, Luis Garcia's creative approach and international experience provide valuable insights into innovative thinking, adaptability, and building strong team relationships across cultures.",
    achievements: ["Champions League Winner", "Spain International", "Creative Midfielder", "Team Player"],
    speakingTopics: ["Creative Problem Solving", "International Teamwork", "Adaptability", "Building Chemistry"],
  },
]

const categories = [
  { id: "All", name: "All Speakers", icon: Users },
  { id: "Former Professional", name: "Former Professionals", icon: Trophy },
  { id: "Manager & Coach", name: "Managers & Coaches", icon: Target },
  { id: "Sports Pundit", name: "Sports Pundits", icon: MessageCircle },
]

export default function SpeakersPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredSpeakers =
    selectedCategory === "All" ? allSpeakers : allSpeakers.filter((speaker) => speaker.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2d5a27] text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Speaker Directory</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book world-class football legends and personalities for your next event. Each speaker brings unique
              insights and inspiring stories to captivate your audience.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact?type=speaker"
                className="bg-white text-[#2d5a27] hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Request Custom Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors inline-flex items-center ${
                    selectedCategory === category.id
                      ? "bg-[#2d5a27] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {category.name}
                </button>
              )
            })}
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Showing {filteredSpeakers.length} speaker{filteredSpeakers.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredSpeakers.map((speaker) => (
              <div
                key={speaker.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
                  <div className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                    {speaker.availability}
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

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{speaker.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Speaking Topics:</h4>
                    <div className="flex flex-wrap gap-1">
                      {speaker.specialties.slice(0, 2).map((specialty, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {specialty}
                        </span>
                      ))}
                      {speaker.specialties.length > 2 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          +{speaker.specialties.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {speaker.achievements.slice(0, 2).map((achievement, index) => (
                        <li key={index}>• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#2d5a27] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find the Perfect Speaker?</h2>
          <p className="text-xl mb-8">
            We have connections with many more football personalities and can help you find the ideal speaker for your
            specific event requirements.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact?type=speaker"
              className="bg-white text-[#2d5a27] hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Request Custom Speaker
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
