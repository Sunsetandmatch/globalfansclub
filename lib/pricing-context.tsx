"use client"

import type React from "react"
import { createContext, useState, useContext, type ReactNode } from "react"

type Currency = "USD" | "AED" | "GBP" | "EUR" | "THB"

interface PricingContextProps {
  currency: Currency
  setCurrency: (currency: Currency) => void
  convertPrice: (price: number, productId?: string) => number
}

const PricingContext = createContext<PricingContextProps | undefined>(undefined)

interface PricingProviderProps {
  children: ReactNode
}

export const PricingProvider: React.FC<PricingProviderProps> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>("USD")

  const convertPrice = (price: number, productId?: string) => {
    // Special pricing for Luis Díaz shirt
    if (productId === "6") {
      switch (currency) {
        case "USD":
          return 199
        case "AED":
          return 745
        case "GBP":
          return 145
        case "EUR":
          return 169
        case "THB":
          return 7200
        default:
          return 199
      }
    }

    // Regular conversion for other products
    switch (currency) {
      case "USD":
        return price
      case "AED":
        return price * 3.67
      case "GBP":
        return price * 0.79
      case "EUR":
        return price * 0.92
      case "THB":
        return price * 36.2 // 1 USD = ~36.2 THB
      default:
        return price
    }
  }

  return <PricingContext.Provider value={{ currency, setCurrency, convertPrice }}>{children}</PricingContext.Provider>
}

export const usePricing = (): PricingContextProps => {
  const context = useContext(PricingContext)
  if (!context) {
    throw new Error("usePricing must be used within a PricingProvider")
  }
  return context
}
