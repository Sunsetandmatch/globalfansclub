import Image from "next/image"
import Link from "next/link"
import { Calendar, Mic, ShoppingBag } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GLOBAL_FANs_CLUB_-_1-qiFWLNuey888ptOjTKalz3k8wu2Ul6.png"
        alt="Global Fans Club"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Where Fans Belong</h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-100">
            Global Fans Club is more than memorabilia — it's a hub for connection, inspiration, and community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/shop" className="btn-primary px-8 py-4 text-lg flex items-center">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Browse Shop
            </Link>
            <Link href="/events" className="btn-secondary px-8 py-4 text-lg flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              View Events
            </Link>
            <Link
              href="/guest-speakers"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2d5a27] hover:border-[#2d5a27] flex items-center"
            >
              <Mic className="h-5 w-5 mr-2" />
              Book a Speaker
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
