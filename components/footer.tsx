"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    // Check if we're on the homepage
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Navigate to homepage with hash
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="relative">
            <div className="absolute top-0 right-0">
              <div className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-red-500 text-xs">★</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-500 text-lg">★</span>
              </div>
              <span className="font-bold text-xl">Global Fans Club</span>
            </div>
            <p className="text-gray-400">Where fans belong — connecting communities through passion for the game.</p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm mr-2">
                <span className="text-red-500 text-xs">★</span>
              </div>
              <h3 className="font-semibold text-lg">Quick Links</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-white text-left bg-transparent p-0 border-none cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("guest-speakers")}
                  className="text-gray-400 hover:text-white text-left bg-transparent p-0 border-none cursor-pointer"
                >
                  Speakers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("mailing-list")}
                  className="text-gray-400 hover:text-white text-left bg-transparent p-0 border-none cursor-pointer"
                >
                  Newsletter
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white text-left bg-transparent p-0 border-none cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm mr-2">
                <span className="text-red-500 text-xs">★</span>
              </div>
              <h3 className="font-semibold text-lg">Contact</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                hello@globalfansclub.com
              </p>
              <div className="flex space-x-4 mt-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center relative">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-red-500 text-xs">★</span>
            </div>
          </div>
          <p className="text-gray-400 mt-4">© 2025 Global Fans Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
