"use client"

import { useState, useEffect } from "react"
import { usePricing } from "@/lib/pricing-context"

const CURRENCIES = [
  { code: "AED" as const, flag: "🇦🇪", name: "UAE Dirham", description: "Default currency" },
  { code: "GBP" as const, flag: "🇬🇧", name: "British Pound", description: "Great Britain" },
  { code: "USD" as const, flag: "🇺🇸", name: "US Dollar", description: "United States" },
  { code: "EUR" as const, flag: "🇪🇺", name: "Euro", description: "European Union" },
]

export default function CurrencyPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const { currency, setCurrency } = usePricing()

  useEffect(() => {
    // Check if user has already selected a currency in this session
    const hasSelectedCurrency = sessionStorage.getItem("currency-selected")
    if (!hasSelectedCurrency) {
      setIsOpen(true)
    }
  }, [])

  const handleCurrencySelect = (selectedCurrency: "AED" | "GBP" | "USD" | "EUR") => {
    setCurrency(selectedCurrency)
    sessionStorage.setItem("currency-selected", "true")
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-[#2d5a27] rounded-full flex items-center justify-center">
              <span className="text-white text-xl">💰</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Choose Your Currency</h2>
          <p className="text-gray-600 text-center text-sm">
            Select your preferred currency for shopping. You can change this anytime.
          </p>
        </div>

        {/* Currency Options */}
        <div className="p-6">
          <div className="space-y-3">
            {CURRENCIES.map((curr) => (
              <button
                key={curr.code}
                onClick={() => handleCurrencySelect(curr.code)}
                className="w-full flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-[#2d5a27] hover:bg-green-50 transition-all duration-200 group"
              >
                <span className="text-2xl">{curr.flag}</span>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-gray-900 group-hover:text-[#2d5a27]">
                    {curr.code} - {curr.name}
                  </div>
                  <div className="text-sm text-gray-500">{curr.description}</div>
                </div>
                <div className="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-[#2d5a27] flex items-center justify-center">
                  <div className="w-2 h-2 bg-transparent group-hover:bg-[#2d5a27] rounded-full"></div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              All prices are converted from AED at current exchange rates. You can change your currency preference
              anytime using the currency selector.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
