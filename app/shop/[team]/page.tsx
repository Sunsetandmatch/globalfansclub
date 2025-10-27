"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import { getProductsByTeam } from "@/lib/products"
import ProductGrid from "@/components/product-grid"
import TeamShopInfoPopup from "@/components/team-shop-info-popup"
import Header from "@/components/header"

const teamNames: { [key: string]: string } = {
  liverpool: "Liverpool FC",
  england: "England National Team",
  chelsea: "Chelsea FC",
  arsenal: "Arsenal FC",
  barcelona: "FC Barcelona",
  "ac-milan": "AC Milan",
  "real-madrid": "Real Madrid",
  "manchester-united": "Manchester United",
}

interface TeamPageProps {
  params: {
    team: string
  }
}

export default function TeamPage({ params }: TeamPageProps) {
  const [showPopup, setShowPopup] = useState(false)
  const teamProducts = getProductsByTeam(params.team)
  const teamName = teamNames[params.team]

  useEffect(() => {
    // Check if popup has been shown for this team in this session
    const popupShown = sessionStorage.getItem(`popup-shown-${params.team}`)

    if (!popupShown && teamProducts.length > 0) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setShowPopup(true)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [params.team, teamProducts.length])

  const handleClosePopup = () => {
    setShowPopup(false)
    // Mark popup as shown for this team in this session
    sessionStorage.setItem(`popup-shown-${params.team}`, "true")
  }

  if (!teamName || teamProducts.length === 0) {
    notFound()
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{teamName} Collection</h1>
            <p className="text-gray-600">
              Authentic signed memorabilia from {teamName}. All items come with Certificate of Authenticity.
            </p>
          </div>

          <ProductGrid products={teamProducts} />
        </div>

        {showPopup && <TeamShopInfoPopup teamName={teamName} onClose={handleClosePopup} />}
      </div>
    </>
  )
}
