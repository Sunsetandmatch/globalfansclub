"use client"

import { useState, useEffect } from "react"

interface PriceDisplayProps {
  price: number
  originalPrice?: number
  onSale?: boolean
  saleAmount?: number
  salePercentage?: string
  limitedTime?: boolean
  saleEndDate?: string
  showAllCurrencies?: boolean
  className?: string
  productId?: string
}

export default function PriceDisplay({
  price,
  originalPrice,
  onSale = false,
  saleAmount,
  salePercentage,
  limitedTime = false,
  saleEndDate,
  showAllCurrencies = true,
  className = "",
  productId,
}: PriceDisplayProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
  } | null>(null)

  // Countdown timer for limited time sales
  useEffect(() => {
    if (!limitedTime || !saleEndDate) return

    const updateTimer = () => {
      const now = new Date().getTime()
      const endTime = new Date(saleEndDate).getTime()
      const difference = endTime - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        setTimeLeft({ days, hours, minutes })
      } else {
        setTimeLeft(null)
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [limitedTime, saleEndDate])

  // Currency conversion rates (AED base)
  const convertPrice = (aedPrice: number, currency: string) => {
    const rates = {
      USD: 0.275,
      GBP: 0.195,
      EUR: 0.235,
    }
    return Math.round(aedPrice * rates[currency as keyof typeof rates])
  }

  const formatCurrency = (price: number, currency: string) => {
    const symbols = {
      USD: "$",
      GBP: "£",
      EUR: "€",
      AED: "AED ",
    }
    const symbol = symbols[currency as keyof typeof symbols]
    return `${symbol}${price.toLocaleString()}`
  }

  const formatAED = (amount: number) => `AED ${Math.round(amount).toLocaleString()}`

  // Special hardcoded pricing for Istanbul squad shirt (product ID "1")
  if (productId === "1") {
    return (
      <div className={className}>
        <div className="font-bold text-[#2d5a27]">
          <div className="text-lg">AED 4,995</div>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      {onSale ? (
        <div className="space-y-1">
          {/* Original Price - Strikethrough */}
          <div className="text-gray-500 line-through text-sm">
            <div>{formatAED(originalPrice || price)}</div>
          </div>

          {/* Sale Price */}
          <div className="font-bold text-red-600">
            <div className="text-lg">{formatAED(price)}</div>
          </div>

          {/* Savings */}
          {saleAmount && (
            <div className="text-green-600 text-sm font-medium">
              💰 Save {formatAED(saleAmount)}
              {salePercentage && ` (${salePercentage}% off)`}
            </div>
          )}

          {/* Countdown Timer */}
          {limitedTime && timeLeft && (
            <div className="text-orange-600 text-xs font-medium">
              ⏰ Sale ends in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
            </div>
          )}
        </div>
      ) : (
        /* Regular Price */
        <div className="font-bold text-[#2d5a27]">
          <div className="text-lg">{formatAED(price)}</div>
        </div>
      )}
    </div>
  )
}
