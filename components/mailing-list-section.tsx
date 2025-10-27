"use client"

import type React from "react"

import { useState } from "react"
import { Mail, CheckCircle, Gift, Calendar, Star, Users } from "lucide-react"

const benefits = [
  {
    icon: Calendar,
    title: "Exclusive Event Access",
    description: "Be the first to know about VIP experiences and limited events",
  },
  {
    icon: Gift,
    title: "Special Offers",
    description: "Receive member-only discounts on memorabilia and experiences",
  },
  {
    icon: Star,
    title: "Behind the Scenes",
    description: "Get insider content and stories from football legends",
  },
  {
    icon: Users,
    title: "Community Updates",
    description: "Stay connected with the global fan community",
  },
  {
    icon: Gift,
    title: "Monthly Prize Giveaways",
    description: "Enter exclusive monthly contests to win signed memorabilia and VIP experiences",
  },
]

export default function MailingListSection() {
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !fullName) return

    setIsSubmitting(true)

    try {
      const response = await fetch("https://hook.eu2.make.com/kbckkwhre6grd9dxyr90nhnqepyq8par", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          timestamp: new Date().toISOString(),
          source: "Global Fans Club Newsletter",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setEmail("")
        setFullName("")
      } else {
        throw new Error("Failed to submit")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      // You could add error state handling here
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-[#2d5a27] to-[#1f3e1a] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-16 h-16 sm:w-20 sm:h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-12 h-12 sm:w-16 sm:h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 sm:w-12 sm:h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 sm:w-24 sm:h-24 border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full mb-4 sm:mb-6">
            <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Join Our Exclusive Community</h2>
          <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto px-4">
            Get VIP access to events, exclusive offers, and behind-the-scenes content from the world of football
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full mb-3 sm:mb-4">
                  <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-200 text-sm">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* Signup Form */}
        <div className="max-w-2xl mx-auto px-4">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex-1 space-y-4">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  required
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#2d5a27] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#1f3e1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-full"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Joining...
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5 mr-2" />
                    Sign Up
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center bg-white bg-opacity-20 rounded-lg p-6 sm:p-8">
              <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Welcome to the Club!</h3>
              <p className="text-gray-200">
                Thank you for joining our mailing list. You'll receive your first exclusive update soon!
              </p>
            </div>
          )}

          <p className="text-center text-gray-300 text-xs sm:text-sm mt-4 sm:mt-6">
            Join over 10,000+ passionate fans worldwide. Unsubscribe anytime.
          </p>
        </div>

        {/* Social Proof */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-gray-200">
            <div className="flex items-center">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-xs sm:text-sm">10,000+ Members</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-xs sm:text-sm">Exclusive Content</span>
            </div>
            <div className="flex items-center">
              <Gift className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-xs sm:text-sm">Member Discounts</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-xs sm:text-sm">VIP Event Access</span>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-8 sm:mt-12 max-w-3xl mx-auto px-4">
          <div className="bg-white bg-opacity-10 rounded-lg p-4 sm:p-6 text-center">
            <p className="text-base sm:text-lg italic mb-4">
              "Being part of the Global Fans Club mailing list has given me access to incredible experiences I never
              would have known about. The exclusive events are absolutely worth it!"
            </p>
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                <span className="text-xs sm:text-sm font-bold">MH</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm sm:text-base">Mohammed Hassan</p>
                <p className="text-gray-300 text-xs sm:text-sm">Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
