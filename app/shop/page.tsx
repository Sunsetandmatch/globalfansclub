import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const clubTeams = [
  {
    name: "Liverpool",
    slug: "liverpool",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-24-17-08-25%202.jpg-6mVwDzcgUphqe0jNHwCtxZKriP8WAl.jpeg",
    color: "bg-red-600",
    description: "You'll Never Walk Alone",
    available: true,
  },
  {
    name: "Manchester United",
    slug: "manchester-united",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-27-44%203.jpg-3L1kXasYyyxnZW3hUgE2FPQGEgnTmQ.jpeg",
    color: "bg-red-600",
    description: "The Red Devils",
    available: true,
  },
  {
    name: "Real Madrid",
    slug: "real-madrid",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-20-53.jpg-v1albwva4nZ5jMsx5bT45Fpd4TPIlw.jpeg",
    color: "bg-white border-2 border-gray-300",
    description: "Hala Madrid",
    available: true,
  },
  {
    name: "AC Milan",
    slug: "ac-milan",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-27-44.jpg-5bo3Lp7j69JAzTF2lx86JFH1d8RDjo.jpeg",
    color: "bg-red-600",
    description: "Rossoneri",
    available: true,
  },
  {
    name: "Barcelona",
    slug: "barcelona",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-16-14.jpg-gxBQTmx2JtNLuN78xWpnjsy1sUgb5w.jpeg",
    color: "bg-blue-700",
    description: "Més que un club",
    available: false,
  },
  {
    name: "Arsenal",
    slug: "arsenal",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19243.jpg-8BlZypchPQgNJ10aOxt6oiTdjlbfy1.jpeg",
    color: "bg-red-600",
    description: "The Gunners",
    available: true,
  },
  {
    name: "Ajax",
    slug: "ajax",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-27-44%202.jpg-Acm7RrN4NcIGMn2LgP5nGykYWUIxnG.jpeg",
    color: "bg-red-600",
    description: "Godenzonen",
    available: false,
  },
  {
    name: "Chelsea",
    slug: "chelsea",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-34-36.jpg-6UFhOwyJO3WaMAKyAjkvykFa1Kb1VX.jpeg",
    color: "bg-blue-600",
    description: "The Blues",
    available: true,
  },
  {
    name: "Manchester City",
    slug: "manchester-city",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-42-36.jpg-o8SZFy6piJlXL05ivWj8QeMmEDCcmV.jpeg",
    color: "bg-sky-400",
    description: "Citizens",
    available: false,
  },
  {
    name: "Bayer Leverkusen",
    slug: "bayer-leverkusen",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-54-14.jpg-SsyUFREQXgAH2sN6XAhu1mbi2pn4Cx.jpeg",
    color: "bg-yellow-400",
    description: "Die Werkself",
    available: false,
  },
  {
    name: "Celtic",
    slug: "celtic",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-42-37.jpg-BApwGmjfYlIU8en4JuWBya33Ha5BDv.jpeg",
    color: "bg-green-600",
    description: "The Bhoys",
    available: false,
  },
  {
    name: "Rangers",
    slug: "rangers",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-42-37%204.jpg-BzpH476CCOjnmBV4hYgViBLlvSOzoh.jpeg",
    color: "bg-blue-700",
    description: "The Gers",
    available: false,
  },
  {
    name: "Bayern Munich",
    slug: "bayern-munich",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-42-37%202.jpg-pmLLVvm4yaDxFAKAz6MMrcMegA9anC.jpeg",
    color: "bg-red-600",
    description: "Mia san mia",
    available: false,
  },
  {
    name: "Juventus",
    slug: "juventus",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-42-37%203.jpg-dTeUXMd95eDCqjmTJdGYVHxP9D1pLR.jpeg",
    color: "bg-black",
    description: "The Old Lady",
    available: false,
  },
  {
    name: "Newcastle",
    slug: "newcastle",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-47-33.jpg-Wm6s73JOmfl5tpDJZFBJTdS0NtbCAq.jpeg",
    color: "bg-black",
    description: "The Magpies",
    available: false,
  },
  {
    name: "Paris Saint-Germain",
    slug: "paris-saint-germain",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-47-34.jpg-WvmB0W0ktg48lmrPG9DgcW10D014rv.jpeg",
    color: "bg-blue-900",
    description: "Ici c'est Paris",
    available: false,
  },
]

const internationalTeams = [
  {
    name: "England",
    slug: "england",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-12-25-22%203.jpg-vTPemklt4AfprrnokFwucyjRGPnKe5.jpeg",
    color: "bg-white border-2 border-red-600",
    description: "Three Lions",
    available: false,
  },
  {
    name: "Argentina",
    slug: "argentina",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-12-25-22%202.jpg-lx6VcBwnfdpuBvKj4Rut45NhjQgTrl.jpeg",
    color: "bg-sky-400",
    description: "La Albiceleste",
    available: false,
  },
  {
    name: "Brazil",
    slug: "brazil",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-12-25-22.jpg-70A4thWtlZwCX4VvlAO6logHwOqXwQ.jpeg",
    color: "bg-yellow-400 border-2 border-green-600",
    description: "Seleção",
    available: false,
  },
  {
    name: "Germany",
    slug: "germany",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-12-26-02.jpg-eYZazluo8fDdlK0K9CAn0iwwEchdHo.jpeg",
    color: "bg-yellow-400 border-2 border-red-600",
    description: "Die Mannschaft",
    available: false,
  },
]

export default function Shop() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-md">
                <span className="text-red-500 text-2xl sm:text-3xl">★</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Shop Your Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your team to explore authentic memorabilia, signed items, and exclusive collectibles
            </p>
          </div>

          {/* Club Teams Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-md mr-4">
                <span className="text-red-500 text-lg">★</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Club Teams</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clubTeams.map((team) => (
                <Link key={team.slug} href={`/shop/${team.slug}`}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden group relative">
                    {/* Availability indicator */}
                    {team.available && (
                      <div className="absolute top-2 right-2 z-10">
                        <div className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-red-500 text-xs">★</span>
                        </div>
                      </div>
                    )}

                    {!team.available && (
                      <div className="absolute top-2 right-2 z-10">
                        <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Coming Soon
                        </span>
                      </div>
                    )}

                    {/* Team Color Header */}
                    <div className={`h-3 ${team.color}`}></div>

                    {/* Card Content */}
                    <div className="p-6 text-center">
                      {/* Team Logo */}
                      <div className="flex justify-center mb-4">
                        <div
                          className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg overflow-hidden ${
                            team.name === "Liverpool" || team.name === "Arsenal" ? "bg-red-600" : "bg-white"
                          }`}
                        >
                          <Image
                            src={team.logo || "/placeholder.svg"}
                            alt={`${team.name} logo`}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>

                      {/* Team Name */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2d5a27] transition-colors">
                        {team.name}
                      </h3>

                      {/* Team Description */}
                      <p className="text-gray-600 text-sm mb-4">{team.description}</p>

                      {/* Shop Button */}
                      <div className="flex items-center justify-center text-[#2d5a27] font-medium group-hover:text-[#1f3e1a]">
                        <span className="mr-2">{team.available ? "Shop Now" : "View Collection"}</span>
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* International Teams Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-md mr-4">
                <span className="text-red-500 text-lg">★</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">International Teams</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {internationalTeams.map((team) => (
                <Link key={team.slug} href={`/shop/${team.slug}`}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden group relative">
                    {/* Coming Soon indicator */}
                    <div className="absolute top-2 right-2 z-10">
                      <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Coming Soon
                      </span>
                    </div>

                    {/* Team Color Header */}
                    <div className={`h-3 ${team.color}`}></div>

                    {/* Card Content */}
                    <div className="p-6 text-center">
                      {/* Team Logo */}
                      <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white border-2 border-gray-200">
                          <Image
                            src={team.logo || "/placeholder.svg"}
                            alt={`${team.name} logo`}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>

                      {/* Team Name */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2d5a27] transition-colors">
                        {team.name}
                      </h3>

                      {/* Team Description */}
                      <p className="text-gray-600 text-sm mb-4">{team.description}</p>

                      {/* Shop Button */}
                      <div className="flex items-center justify-center text-[#2d5a27] font-medium group-hover:text-[#1f3e1a]">
                        <span className="mr-2">View Collection</span>
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Liverpool Featured Section */}
          <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg relative">
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-md">
                <span className="text-red-500 text-sm">★</span>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Liverpool Collection Available Now!</h2>
              <p className="text-xl mb-6 opacity-90">
                Explore our exclusive Liverpool memorabilia including signed shirts, framed displays, and rare
                collectibles
              </p>
              <Link href="/shop/liverpool" className="btn-secondary px-8 py-3 inline-block">
                Shop Liverpool Collection
              </Link>
            </div>
          </div>

          {/* All Teams Link */}
          <div className="text-center mt-12">
            <Link href="/shop/all" className="btn-secondary px-8 py-3 inline-flex items-center">
              <span className="mr-2">Browse All Available Items</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Info Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 relative">
            <div className="absolute top-4 right-4">
              <div className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-red-500 text-xs">★</span>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentic Memorabilia</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                Every item in our collection comes with a Certificate of Authenticity. From signed shirts to framed
                displays, we offer premium memorabilia from your favorite teams and legendary players.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm mb-6 max-w-md mx-auto">
                <h3 className="font-semibold text-gray-900 mb-3">Get Notified:</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Be the first to know when new team collections become available
                </p>
                <a
                  href="mailto:hello@globalfansclub.com?subject=Notify me about new team collections&body=Hi, I'm interested in being notified when new team memorabilia collections become available. Please add me to your notification list."
                  className="btn-primary px-6 py-2 text-sm"
                >
                  Join Notification List
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#2d5a27] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Certified Authentic</h3>
                <p className="text-gray-600 text-sm">All items come with official Certificate of Authenticity</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#2d5a27] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">🚚</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fast Shipping</h3>
                <p className="text-gray-600 text-sm">Secure delivery within 7 days worldwide</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#2d5a27] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">⭐</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600 text-sm">Professional framing and presentation ready</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
