import Link from "next/link"
import { Award, Target, MessageCircle, Star, Trophy, Users, Briefcase, Heart } from "lucide-react"

const categories = [
  {
    title: "Football Legends",
    description: "Former professional players who've competed at the highest level",
    icon: Award,
    count: "15+ Speakers",
    color: "bg-green-500",
  },
  {
    title: "Managers & Coaches",
    description: "Tactical masterminds and leadership experts",
    icon: Target,
    count: "12+ Speakers",
    color: "bg-blue-500",
  },
  {
    title: "Sports Pundits",
    description: "Media personalities with insider knowledge",
    icon: MessageCircle,
    count: "8+ Speakers",
    color: "bg-green-500",
  },
  {
    title: "Elite Athletes",
    description: "Champions from various sports disciplines",
    icon: Star,
    count: "10+ Speakers",
    color: "bg-purple-500",
  },
  {
    title: "Championship Winners",
    description: "Speakers who've won major tournaments and trophies",
    icon: Trophy,
    count: "20+ Speakers",
    color: "bg-yellow-500",
  },
  {
    title: "Team Captains",
    description: "Natural leaders who've captained their teams",
    icon: Users,
    count: "18+ Speakers",
    color: "bg-indigo-500",
  },
  {
    title: "Business Leaders",
    description: "Sports executives and business personalities",
    icon: Briefcase,
    count: "6+ Speakers",
    color: "bg-gray-600",
  },
  {
    title: "Inspirational Stories",
    description: "Speakers with powerful stories of overcoming adversity",
    icon: Heart,
    count: "14+ Speakers",
    color: "bg-pink-500",
  },
]

export default function SpeakerCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Speaker Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect speaker for your event from our diverse range of football legends, coaches, and sports
            personalities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Link key={index} href="/guest-speakers">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#2d5a27]">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                  <span className="text-xs text-gray-500 font-medium">{category.count}</span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/guest-speakers" className="btn-primary px-8 py-3">
            View All Speakers
          </Link>
        </div>
      </div>
    </section>
  )
}
