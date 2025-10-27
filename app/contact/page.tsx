"use client"

import type React from "react"

import { useState } from "react"
import { Star, Mail, MapPin, Instagram, CheckCircle, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    preferredSpeaker: "",
    eventType: "",
    eventDate: "",
    eventLocation: "",
    expectedAttendees: "",
    message:
      "Hi, I would like to book a speaker for my upcoming event. Please provide availability and pricing information.\n\nEvent details:\n- Type: [Please specify]\n- Date: [Please specify]\n- Location: [Please specify]\n- Expected attendees: [Please specify]",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send data to webhook
      const webhookData = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: "speaker_contact_form",
      }

      await fetch("https://hook.eu2.make.com/qheswplxkg62gwchfp2niaap1efvgxww", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData),
      })

      // Show success message
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error sending webhook:", error)
      // Still show success message to user
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSendAnother = () => {
    setIsSubmitted(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "",
      preferredSpeaker: "",
      eventType: "",
      eventDate: "",
      eventLocation: "",
      expectedAttendees: "",
      message:
        "Hi, I would like to book a speaker for my upcoming event. Please provide availability and pricing information.\n\nEvent details:\n- Type: [Please specify]\n- Date: [Please specify]\n- Location: [Please specify]\n- Expected attendees: [Please specify]",
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for your speaker inquiry. One of our team members will be back to you shortly with
                availability and pricing information.
              </p>
              <button
                onClick={handleSendAnother}
                className="bg-[#2d5a27] hover:bg-[#1e3d1a] text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Star className="h-8 w-8 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to create an unforgettable experience? Contact us to discuss your event requirements and let us help
            you bring football legends to your audience.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">hello@globalfansclub.com</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">United Arab Emirates</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Instagram className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow Us</h3>
            <p className="text-gray-600">@global_fans_club</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            {/* Phone and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                  placeholder="+971 50 123 4567"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
            </div>

            {/* Inquiry Type */}
            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                Inquiry Type *
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                value={formData.inquiryType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
              >
                <option value="">Select inquiry type</option>
                <option value="speaker-booking">Speaker Booking</option>
                <option value="event-planning">Event Planning</option>
                <option value="corporate-event">Corporate Event</option>
                <option value="private-event">Private Event</option>
                <option value="media-appearance">Media Appearance</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Preferred Speaker */}
            <div>
              <label htmlFor="preferredSpeaker" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Speaker
              </label>
              <input
                type="text"
                id="preferredSpeaker"
                name="preferredSpeaker"
                value={formData.preferredSpeaker}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                placeholder="Speaker name (if you have a preference)"
              />
            </div>

            {/* Event Type and Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type
                </label>
                <input
                  type="text"
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                  placeholder="Conference, dinner, etc."
                />
              </div>
              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                />
              </div>
            </div>

            {/* Event Location and Attendees */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Location
                </label>
                <input
                  type="text"
                  id="eventLocation"
                  name="eventLocation"
                  value={formData.eventLocation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                  placeholder="City, Country"
                />
              </div>
              <div>
                <label htmlFor="expectedAttendees" className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Attendees
                </label>
                <input
                  type="number"
                  id="expectedAttendees"
                  name="expectedAttendees"
                  value={formData.expectedAttendees}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                  placeholder="Number of attendees"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={8}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#2d5a27] hover:bg-[#1e3d1a] text-white font-bold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Send className="h-5 w-5 mr-2" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
