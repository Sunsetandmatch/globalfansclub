"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { usePricing } from "@/lib/pricing-context"

const CURRENCIES = [
  { code: "AED" as const, flag: "🇦🇪", name: "UAE Dirham" },
  { code: "GBP" as const, flag: "🇬🇧", name: "British Pound" },
  { code: "USD" as const, flag: "🇺🇸", name: "US Dollar" },
  { code: "EUR" as const, flag: "🇪🇺", name: "Euro" },
]

export default function CurrencySelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { currency, setCurrency } = usePricing()

  const currentCurrency = CURRENCIES.find((c) => c.code === currency) || CURRENCIES[0]

  const handleCurrencyChange = (newCurrency: "AED" | "GBP" | "USD" | "EUR") => {
    setCurrency(newCurrency)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg">{currentCurrency.flag}</span>
        <span className="font-medium text-sm">{currentCurrency.code}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 min-w-[160px]">
          {CURRENCIES.map((curr) => (
            <button
              key={curr.code}
              onClick={() => handleCurrencyChange(curr.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                curr.code === currency ? "bg-[#2d5a27] text-white hover:bg-[#2d5a27]" : ""
              }`}
            >
              <span className="text-lg">{curr.flag}</span>
              <div>
                <div className="font-medium text-sm">{curr.code}</div>
                <div className={`text-xs ${curr.code === currency ? "text-gray-200" : "text-gray-500"}`}>
                  {curr.name}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
