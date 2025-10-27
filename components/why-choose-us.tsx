import { Users, MessageCircle, Heart } from "react-feather"

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Guest Speakers",
      description:
        "Transform your event with inspiring speakers who've competed at the pinnacle of professional sport.",
    },
    {
      icon: MessageCircle,
      title: "Live Q&A Sessions",
      description: "Get up close and personal with your sporting heroes in our interactive Q&A sessions.",
    },
    {
      icon: Heart,
      title: "Fan Meet-Ups",
      description: "Exclusive opportunities to meet your idols, get autographs, and create lasting memories.",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <feature.icon className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
