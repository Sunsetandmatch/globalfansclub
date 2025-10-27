interface LocationData {
  country_code: string
  country_name: string
  currency: string
  currency_symbol: string
}

const IPAPI_KEY = "dbd01e8f0ee3c9d1662a951bfa7f70d5"

export async function getUserLocation(): Promise<LocationData | null> {
  try {
    const response = await fetch(`https://api.ipapi.com/api/check?access_key=${IPAPI_KEY}`)

    if (!response.ok) {
      throw new Error("Failed to fetch location data")
    }

    const data = await response.json()

    return {
      country_code: data.country_code,
      country_name: data.country_name,
      currency: data.currency,
      currency_symbol: data.currency_symbol || "£",
    }
  } catch (error) {
    console.error("Error fetching location:", error)
    return null
  }
}

export function getPriceMultiplier(countryCode: string): number {
  // Price multipliers based on country
  const priceMultipliers: Record<string, number> = {
    GB: 1.0, // UK - base price
    US: 1.25, // USA - 25% higher
    CA: 1.2, // Canada - 20% higher
    AU: 1.3, // Australia - 30% higher
    AE: 1.35, // UAE - 35% higher
    DE: 1.15, // Germany - 15% higher
    FR: 1.15, // France - 15% higher
    ES: 1.1, // Spain - 10% higher
    IT: 1.1, // Italy - 10% higher
    NL: 1.15, // Netherlands - 15% higher
    BE: 1.15, // Belgium - 15% higher
    IE: 1.05, // Ireland - 5% higher
    SE: 1.2, // Sweden - 20% higher
    NO: 1.25, // Norway - 25% higher
    DK: 1.2, // Denmark - 20% higher
    FI: 1.2, // Finland - 20% higher
    CH: 1.3, // Switzerland - 30% higher
    AT: 1.15, // Austria - 15% higher
    PT: 1.05, // Portugal - 5% higher
    PL: 0.9, // Poland - 10% lower
    CZ: 0.85, // Czech Republic - 15% lower
  }

  return priceMultipliers[countryCode] || 1.0 // Default to base price
}

export function getCurrencySymbol(countryCode: string): string {
  const currencySymbols: Record<string, string> = {
    GB: "£",
    US: "$",
    CA: "C$",
    AU: "A$",
    AE: "AED",
    DE: "€",
    FR: "€",
    ES: "€",
    IT: "€",
    NL: "€",
    BE: "€",
    IE: "€",
    AT: "€",
    PT: "€",
    FI: "€",
    SE: "kr",
    NO: "kr",
    DK: "kr",
    CH: "CHF",
    PL: "zł",
    CZ: "Kč",
  }

  return currencySymbols[countryCode] || "£"
}
