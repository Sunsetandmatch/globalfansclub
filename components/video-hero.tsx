"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-vL4lnt1cms3bzS3dEiFREVWH6YbJSD.png",
    alt: "Passionate Liverpool fans celebrating in red jerseys",
    caption: "Football Passion & Community",
    category: "Sports",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-xVpu8hSQLdjiIAcZ49nCLXI8HxeKx6.png",
    alt: "DJ performing at sunset event with crowd",
    caption: "Live Music & Entertainment",
    category: "Music",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-jtXxVRxLgZzMFgwTEpjGxIPb6qs186.png",
    alt: "Golf course with Dubai Marina skyline",
    caption: "Exclusive Golf Experiences",
    category: "Sports",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-0K7rPge4AbO3oGu3PBMV7PCpENa1ML.png",
    alt: "People toasting on luxury yacht at sunset",
    caption: "VIP Social Events",
    category: "Parties",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yas-marina-circuit-abu-dhabi-unsplash.jpg-MI5V8mNR5jJ0qKdVVMIpcF4pchFtOR.jpeg",
    alt: "Yas Marina Circuit Abu Dhabi F1 track at sunset",
    caption: "Abu Dhabi Grand Prix Experiences",
    category: "Events",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-7GpxPsbQsY7aCgIl5TDeOVQk762wKf.jpeg",
    alt: "Liverpool FC players celebrating with Premier League trophy",
    caption: "Championship Celebrations",
    category: "Sports",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lions-HOZ.jpg-KPxMKdinMPc8OziYC55VAzupUbMsww.jpeg",
    alt: "British & Irish Lions rugby players in action against South Africa",
    caption: "Elite Rugby Experiences",
    category: "Sports",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lando%20Norris-j78rjkUJNg9PL3leU0ljsxTBrXwMwg.jpeg",
    alt: "Formula 1 driver Lando Norris celebrating on podium with champagne",
    caption: "Formula 1 Victory Celebrations",
    category: "Sports",
  },
]

const categories = ["Sports", "Events", "VIP Access", "Travel", "Music", "Parties", "Memorabilia"]

export default function VideoHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const currentCategory = galleryImages[currentImageIndex]?.category

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Rotating Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Centered Logo Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-15 px-4">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DUBAI%20CON%202024%20%28A4%20%28Landscape%29%29%20%282%29-Lwp8xMuEVaMwPF82NwPGo9P0O3hUPz.png"
          alt="Global Fans Club"
          width={1200}
          height={400}
          className="max-w-full h-auto opacity-50 w-full max-w-4xl"
          priority
        />
      </div>

      {/* Category Text Overlay - Bottom on desktop, above About section on mobile */}
      <div className="absolute bottom-8 md:bottom-16 left-0 right-0 z-10 px-4 hidden sm:block">
        <div className="text-center text-white">
          <div className="bg-black bg-opacity-40 backdrop-blur-sm px-8 py-4 rounded-lg mx-auto inline-block max-w-full">
            <div className="flex flex-wrap justify-center items-center gap-8 text-lg md:text-xl font-light tracking-wider">
              {categories.map((category, index) => (
                <div key={category} className="flex items-center">
                  <span
                    className={`transition-all duration-500 cursor-pointer ${
                      category === currentCategory
                        ? "text-green-400 font-semibold scale-110 drop-shadow-lg"
                        : "hover:text-gray-300"
                    }`}
                  >
                    {category}
                  </span>
                  {index < categories.length - 1 && <span className="text-gray-400 ml-8">/</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Auto-play Control */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={toggleAutoPlay}
          className="bg-black bg-opacity-50 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-opacity-70 transition-all text-xs sm:text-sm"
        >
          {isAutoPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </section>
  )
}
