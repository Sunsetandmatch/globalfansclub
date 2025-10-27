export interface ShippingRate {
  uk: number
  international: number
  method: string
}

export function getShippingCost(
  productId: string,
  framingOption: string,
  country: string,
): { cost: number; method: string } {
  const isUK = country === "GB"

  // Determine if item is framed or loose based on product type and framing option
  const isFramedItem = isFramedProduct(productId, framingOption)

  if (isFramedItem) {
    return {
      cost: isUK ? 118.0 : 508.0, // Converted to AED: £22.99 = AED 118, £99 = AED 508
      method: isUK ? "Special Delivery UK" : "International Delivery",
    }
  } else {
    return {
      cost: isUK ? 61.5 : 118.0, // Converted to AED: £11.99 = AED 61.5, £22.99 = AED 118
      method: isUK ? "Special Delivery UK" : "International Delivery",
    }
  }
}

function isFramedProduct(productId: string, framingOption: string): boolean {
  // Products that are always framed (framed displays, prints, photos)
  const alwaysFramedProducts = ["5", "8", "9", "10", "11", "12", "13"]

  if (alwaysFramedProducts.includes(productId)) {
    return true
  }

  // Products with framing options - check if professional framing is selected
  const framingOptionProducts = [
    "1",
    "2",
    "3",
    "4",
    "6",
    "7",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ]
  if (framingOptionProducts.includes(productId) && framingOption === "Professional Framing") {
    return true
  }

  return false
}

export function calculateTotalShipping(items: any[], country: string) {
  // Group items by unique product + framing combination
  const uniqueItems = new Map()

  items.forEach((item) => {
    const key = `${item.id}-${item.size || ""}`
    if (!uniqueItems.has(key)) {
      uniqueItems.set(key, {
        ...item,
        shipping: getShippingCost(item.id, item.size || "", country),
      })
    }
  })

  const totalShipping = Array.from(uniqueItems.values()).reduce((total, item) => {
    return total + item.shipping.cost
  }, 0)

  const hasMultipleUniqueItems = uniqueItems.size > 1

  return {
    totalShipping,
    hasMultipleUniqueItems,
    uniqueItems: Array.from(uniqueItems.values()),
  }
}
