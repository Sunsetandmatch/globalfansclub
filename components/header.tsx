"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { items } = useCart()

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

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
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm border-b fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/shop" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90915215-AD23-400E-A679-7825CBDD4031.jpg-2OQSJPZ7rLWxjm35Y4erKFKUNUtRTO.jpeg"
              alt="Global Fans Club"
              width={200}
              height={40}
              className="h-6 sm:h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link
              href="/shop"
              className="text-black hover:text-[#2d5a27] font-medium bg-transparent text-sm xl:text-base"
            >
              Shop
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="text-black hover:text-[#2d5a27] font-medium bg-transparent text-sm xl:text-base"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-black hover:text-[#2d5a27] font-medium bg-transparent text-sm xl:text-base"
            >
              Contact
            </button>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-black hover:text-[#2d5a27]" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#2d5a27] text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button className="lg:hidden p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-[#2d5a27]" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-[#2d5a27]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/shop"
                className="text-black hover:text-[#2d5a27] font-medium text-left bg-transparent py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <button
                onClick={() => scrollToSection("about")}
                className="text-black hover:text-[#2d5a27] font-medium text-left bg-transparent py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-black hover:text-[#2d5a27] font-medium text-left bg-transparent py-2"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
