"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface BannerProduct {
  id: string
  name: string
  price: number
  image: string
}

interface TeamBanner {
  team: string
  slug: string
  title: string
  subtitle: string
  backgroundColor: string
  textColor: string
  accentColor: string
  logo: string
  products: BannerProduct[]
}

const teamBanners: TeamBanner[] = [
  {
    team: "Liverpool",
    slug: "liverpool",
    title: "Liverpool FC Collection",
    subtitle: "Istanbul 2005 Memorabilia & Current Stars",
    backgroundColor: "from-red-700 via-red-600 to-red-700",
    textColor: "text-white",
    accentColor: "bg-yellow-400",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-24-17-08-25%202.jpg-6mVwDzcgUphqe0jNHwCtxZKriP8WAl.jpeg",
    products: [
      {
        id: "1",
        name: "Istanbul 2005 Squad Signed Shirt",
        price: 4995,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/liverpool-2005-squad-signed-istanbul-football-shirt.jpg-X9djeNtaAduRFnMfDHbqIpK2cq5Df1.jpeg",
      },
      {
        id: "5",
        name: "Gerrard Framed Display",
        price: 1750,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-11-18-43.jpg-WOjzX9ZHsJaqxhVKAufo5wG1rPtc3d.jpeg",
      },
      {
        id: "6",
        name: "Luis Díaz Signed Shirt",
        price: 745,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-23-14-43-17.jpg-Va4CtwsTI4SFhF4ZvPILRN1YV2Uafw.jpeg",
      },
    ],
  },
  {
    team: "Manchester United",
    slug: "manchester-united",
    title: "Manchester United Legends",
    subtitle: "Signed memorabilia from Old Trafford",
    backgroundColor: "from-red-800 via-red-700 to-red-800",
    textColor: "text-white",
    accentColor: "bg-yellow-500",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-27-44%203.jpg-3L1kXasYyyxnZW3hUgE2FPQGEgnTmQ.jpeg",
    products: [
      {
        id: "30",
        name: "Eric Cantona Signed Shirt",
        price: 1250,
        image: "/images/manchester-united/cantona-signed-shirt.jpg",
      },
      {
        id: "29",
        name: "Paul Scholes Signed Shirt",
        price: 995,
        image: "/images/manchester-united/scholes-signed-shirt.jpg",
      },
      {
        id: "31",
        name: "Bruno Fernandes Signed Shirt",
        price: 1250,
        image: "/images/manchester-united/fernandes-signed-shirt.jpg",
      },
    ],
  },
  {
    team: "Real Madrid",
    slug: "real-madrid",
    title: "Real Madrid Galácticos",
    subtitle: "Legendary signed shirts",
    backgroundColor: "from-white via-gray-50 to-white",
    textColor: "text-gray-900",
    accentColor: "bg-purple-600",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-20-53.jpg-v1albwva4nZ5jMsx5bT45Fpd4TPIlw.jpeg",
    products: [
      {
        id: "28",
        name: "Zidane Signed Shirt",
        price: 3785,
        image: "/images/real-madrid/zidane-signed-shirt.jpg",
      },
      {
        id: "27",
        name: "Kaká Signed Shirt",
        price: 3000,
        image: "/images/real-madrid/kaka-signed-shirt.jpg",
      },
      {
        id: "26",
        name: "Modrić Signed Shirt",
        price: 1450,
        image: "/images/real-madrid/modric-signed-shirt.jpg",
      },
    ],
  },
  {
    team: "Chelsea",
    slug: "chelsea",
    title: "Chelsea FC Collection",
    subtitle: "The Blues Legend - Gianfranco Zola",
    backgroundColor: "from-blue-700 via-blue-600 to-blue-700",
    textColor: "text-white",
    accentColor: "bg-yellow-400",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-34-36.jpg-6UFhOwyJO3WaMAKyAjkvykFa1Kb1VX.jpeg",
    products: [
      {
        id: "15",
        name: "Zola 1998 Signed Shirt",
        price: 995,
        image: "/images/chelsea/zola-1998-signed-shirt.jpg",
      },
      {
        id: "16",
        name: "Zola 2000 Signed Shirt",
        price: 995,
        image: "/images/chelsea/zola-2000-signed-shirt.jpg",
      },
    ],
  },
  {
    team: "Arsenal",
    slug: "arsenal",
    title: "Arsenal FC Collection",
    subtitle: "Gunners Icons - Bergkamp, Adams & Van Persie",
    backgroundColor: "from-red-600 via-red-500 to-red-600",
    textColor: "text-white",
    accentColor: "bg-yellow-400",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19243.jpg-8BlZypchPQgNJ10aOxt6oiTdjlbfy1.jpeg",
    products: [
      {
        id: "18",
        name: "Dennis Bergkamp Signed Shirt",
        price: 995,
        image: "/images/arsenal/bergkamp-signed-shirt.jpg",
      },
      {
        id: "19",
        name: "Tony Adams Signed Shirt",
        price: 995,
        image: "/images/arsenal/adams-signed-shirt.jpg",
      },
      {
        id: "17",
        name: "Robin van Persie Signed Shirt",
        price: 995,
        image: "/images/arsenal/van-persie-signed-shirt.jpg",
      },
    ],
  },
  {
    team: "AC Milan",
    slug: "ac-milan",
    title: "AC Milan Collection",
    subtitle: "Rossoneri Legends - Maldini, Baresi & Cafu",
    backgroundColor: "from-red-700 via-black to-red-700",
    textColor: "text-white",
    accentColor: "bg-red-500",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-25-10-27-44.jpg-5bo3Lp7j69JAzTF2lx86JFH1d8RDjo.jpeg",
    products: [
      {
        id: "23",
        name: "Paolo Maldini Signed Shirt",
        price: 995,
        image: "/images/ac-milan/maldini-signed-shirt.jpg",
      },
      {
        id: "24",
        name: "Franco Baresi Signed Shirt",
        price: 995,
        image: "/images/ac-milan/baresi-signed-shirt.jpg",
      },
      {
        id: "25",
        name: "Cafu Signed Shirt",
        price: 995,
        image: "/images/ac-milan/cafu-signed-shirt.jpg",
      },
    ],
  },
]

const teams = [
  {
    name: "Liverpool",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-16-09-08-49.jpg-YOc04qmk6UfDJCCw0UNLv7RWslGzCE.jpeg",
    slug: "liverpool",
  },
  {
    name: "Manchester United",
    image: "/placeholder.svg?height=400&width=800&text=Manchester+United",
    slug: "manchester-united",
  },
  {
    name: "Real Madrid",
    image: "/placeholder.svg?height=400&width=800&text=Real+Madrid",
    slug: "real-madrid",
  },
  {
    name: "AC Milan",
    image: "/placeholder.svg?height=400&width=800&text=AC+Milan",
    slug: "ac-milan",
  },
  {
    name: "Arsenal",
    image: "/placeholder.svg?height=400&width=800&text=Arsenal",
    slug: "arsenal",
  },
  {
    name: "Chelsea",
    image: "/placeholder.svg?height=400&width=800&text=Chelsea",
    slug: "chelsea",
  },
]

export default function TeamBannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isPaused && isClient) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % teams.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused, isClient])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + teams.length) % teams.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teams.length)
  }

  if (!isClient) {
    return (
      <div className="relative w-full bg-gray-900 h-96 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  const currentBanner = teamBanners[currentIndex]

  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {teams.map((team, index) => (
        <Link
          key={team.slug}
          href={`/shop/${team.slug}`}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={team.image || "/placeholder.svg"}
              alt={team.name}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">{team.name}</h2>
              <p className="text-lg md:text-xl">Shop Official Memorabilia</p>
            </div>
          </div>
        </Link>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {teams.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-white w-8" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
