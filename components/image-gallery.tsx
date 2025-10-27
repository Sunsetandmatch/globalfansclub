import Image from "next/image"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/366a76c7-b7a6-43f4-8b5a-6530e5fe9596.JPG-cGDqacGTtLtaBvQS4PcXBLnAst2fZS.jpeg",
    alt: "Player signing Argentina jersey",
    caption: "Exclusive Memorabilia Signings",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a5610f8e-8a71-4258-a529-1cf03e45ca7b.JPG-OpkOI4dJuqcWJjzTLFFgfkUKG9msts.jpeg",
    alt: "Outdoor event with stage and crowd",
    caption: "Live Events & Entertainment",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b7ec2889-870a-435b-b833-397a54994b92.JPG-5sEoN1DiX48AjblpmhzMdr10vRA75o.jpeg",
    alt: "Nighttime crowd viewing event",
    caption: "Community Gatherings",
  },
  {
    src: "/placeholder.svg?height=300&width=400&text=Premier League Match",
    alt: "Premier League stadium experience",
    caption: "Premier League Experiences",
  },
  {
    src: "/placeholder.svg?height=300&width=400&text=Champions League Final",
    alt: "Champions League final viewing",
    caption: "Champions League Events",
  },
  {
    src: "/placeholder.svg?height=300&width=400&text=F1 Abu Dhabi GP",
    alt: "F1 Abu Dhabi Grand Prix experience",
    caption: "F1 Grand Prix Experiences",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-19-09-53-11.jpg-bAWggP99r1zUC7uIe4cRQm6fpQk56h.jpeg",
    alt: "Luis Garcia professional headshot",
    caption: "Expert Speakers",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-19-09-50-18.jpg-DuicAGVNfcum2d8hBOx7rMHNvIwyLT.jpeg",
    alt: "Jamie Carragher professional headshot",
    caption: "Football Legends",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-19-09-52-04.jpg-Yk3orAxgYvmCzuPuT5cpcBcNlrYWkh.jpeg",
    alt: "Football personality headshot",
    caption: "Industry Experts",
  },
]

export default function ImageGallery() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-9 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 16vw, 11vw"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-gray-900 text-center">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
