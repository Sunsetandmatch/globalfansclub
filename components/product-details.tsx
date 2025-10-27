"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import { getShippingCost } from "@/lib/shipping"
import type { Product } from "@/lib/types"
import { useRouter } from "next/navigation"

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedFraming, setSelectedFraming] = useState("No Framing")
  const { addItem } = useCart()
  const pricingLoading = false
  const { toast } = useToast()
  const router = useRouter()

  // Currency helpers
  const formatPrice = (amount: number) => `AED ${Math.round(amount).toLocaleString()}`
  const formatShipping = (aedAmount: number) => `AED ${Math.round(aedAmount).toLocaleString()}`

  // Products with framing options (loose shirts that can be framed)
  const hasFramingOptions =
    product.id === "1" ||
    product.id === "2" ||
    product.id === "3" ||
    product.id === "4" ||
    product.id === "6" ||
    product.id === "7" ||
    // Chelsea
    product.id === "15" ||
    product.id === "16" ||
    // Arsenal
    product.id === "17" ||
    product.id === "18" ||
    product.id === "19" ||
    // Barcelona
    product.id === "20" ||
    product.id === "21" ||
    product.id === "22" ||
    // AC Milan
    product.id === "23" ||
    product.id === "24" ||
    product.id === "25" ||
    // Real Madrid
    product.id === "26" ||
    product.id === "27" ||
    product.id === "28" ||
    // Manchester United
    product.id === "29" ||
    product.id === "30" ||
    product.id === "31"

  const framingOptions = hasFramingOptions
    ? [
        { label: "No Framing", price: 0 },
        { label: "Professional Framing", price: 750.0 },
      ]
    : [{ label: "Framed Display", price: 0 }]

  // Set default framing option correctly
  useEffect(() => {
    if (hasFramingOptions) {
      setSelectedFraming("No Framing")
    } else {
      setSelectedFraming("Framed Display")
    }
  }, [hasFramingOptions])

  // Base price is salePrice if onSale, otherwise regular price; then add framing
  const getBasePrice = () => {
    const framingPrice = framingOptions.find((option) => option.label === selectedFraming)?.price || 0
    const productPrice = product.onSale && product.salePrice ? product.salePrice : product.price
    return productPrice + framingPrice
  }

  const getShippingInfo = () => {
    const ukShipping = getShippingCost(product.id, selectedFraming, "GB")
    const intlShipping = getShippingCost(product.id, selectedFraming, "US")
    return { ukShipping, intlShipping }
  }

  // Get the appropriate image based on framing selection for products with framing options
  const getProductImage = () => {
    if (product.id === "1" && selectedFraming === "Professional Framing") {
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-12-18-16-47.jpg-0HvuZNKGEs0lQc1QoFNGNBJtti40dA.jpeg"
    }
    return product.image
  }

  // Add to Cart and Buy Now should NEVER apply a discount on the product page.
  const handleAddToCart = () => {
    if (product.soldOut) return

    addItem({
      id: product.id,
      name: product.name,
      price: getBasePrice(), // add at displayed (sale or regular) price; no additional discounts here
      image: getProductImage(),
      size: selectedFraming,
      quantity: 1,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      action: (
        <button
          onClick={() => router.push("/checkout")}
          className="bg-[#2d5a27] text-white px-4 py-2 rounded text-sm hover:bg-[#1f3e1a] transition-colors"
        >
          Proceed to Checkout
        </button>
      ),
    })
  }

  const handleBuyNow = () => {
    if (product.soldOut) return

    addItem({
      id: product.id,
      name: product.name,
      price: getBasePrice(), // add with no discount from product page
      image: getProductImage(),
      size: selectedFraming,
      quantity: 1,
    })

    setTimeout(() => {
      router.push("/checkout")
    }, 300)
  }

  const { ukShipping, intlShipping } = getShippingInfo()

  if (pricingLoading) {
    return (
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">Loading pricing information...</div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
            <Image
              src={getProductImage() || "/placeholder.svg?height=600&width=600&query=memorabilia%20product%20image"}
              alt={product.name}
              width={600}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg transition-all duration-300"
              key={selectedFraming}
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

            {/* Sold Out Badge */}
            {product.soldOut && (
              <div className="mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-lg font-bold bg-red-100 text-red-800 border-2 border-red-300">
                  🚫 SOLD OUT
                </span>
              </div>
            )}

            {/* Sale Badge for limited-time items */}
            {product.onSale && product.limitedTime && !product.soldOut && (
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 animate-pulse">
                  🔥 LIMITED TIME SALE - {product.salePercentage}% OFF!
                </span>
              </div>
            )}

            {/* Price Display - ONLY AED */}
            <div className="mb-6">
              {product.id === "1" ? (
                // Special hardcoded pricing for Istanbul squad shirt - ONLY AED
                <div>
                  <p className="text-2xl font-bold text-[#2d5a27]">AED 4,995</p>
                </div>
              ) : product.id === "6" ? (
                // Special display for Luis Díaz shirt - ONLY AED
                <div>
                  <p className="text-2xl font-bold text-[#2d5a27]">AED 745</p>
                </div>
              ) : product.onSale && product.salePrice ? (
                // Sale pricing display - ONLY AED
                <div>
                  <div className="mb-2">
                    <p className="text-lg text-gray-500 line-through">{formatPrice(product.price)}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-red-600">{formatPrice(getBasePrice())}</p>
                  </div>
                  <p className="text-sm text-green-600 mt-2 font-semibold">
                    💰 Save {formatPrice(product.saleAmount || 0)} ({product.salePercentage}% off)
                  </p>
                </div>
              ) : (
                // Regular pricing - ONLY AED
                <div>
                  <p className="text-2xl font-bold text-[#2d5a27]">{formatPrice(getBasePrice())}</p>
                </div>
              )}
            </div>

            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Framing Selection - for products with framing options */}
            {hasFramingOptions && !product.soldOut && (
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Framing</label>
                <select
                  value={selectedFraming}
                  onChange={(e) => setSelectedFraming(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs"
                >
                  {framingOptions.map((option) => (
                    <option key={option.label} value={option.label}>
                      {option.label} {option.price > 0 && `(+${formatPrice(option.price)})`}
                    </option>
                  ))}
                </select>
                {selectedFraming === "Professional Framing" && (
                  <p className="text-sm text-gray-600 mt-2">
                    Professional framing includes celebration photos and authentication plaque.
                  </p>
                )}
              </div>
            )}

            {/* Shipping Information */}
            {!product.soldOut && (
              <div className="mb-8 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Shipping Costs</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>UK:</strong> {formatShipping(ukShipping.cost)} ({ukShipping.method})
                  </p>
                  <p>
                    <strong>International:</strong> {formatShipping(intlShipping.cost)} ({intlShipping.method})
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2">All items ship from the UK</p>
              </div>
            )}

            {/* Buttons */}
            <div className="space-y-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={product.soldOut}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  product.soldOut ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "btn-secondary hover:bg-gray-100"
                }`}
              >
                {product.soldOut ? "Sold Out" : "Add to Cart"}
              </button>
              <button
                onClick={handleBuyNow}
                disabled={product.soldOut}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  product.soldOut
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#2d5a27] hover:bg-[#1f3e1a] text-white"
                }`}
              >
                {product.soldOut ? "Sold Out" : "Buy Now"}
              </button>
            </div>

            {/* Contact Button */}
            <div className="border-t pt-4">
              <a
                href={`mailto:hello@globalfansclub.com?subject=Question about: ${product.name}`}
                className="btn-secondary w-full text-center block"
              >
                Got a question? Contact us
              </a>
            </div>

            {/* Certificate Notice */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Certificate of Authenticity:</strong> All items come with a Certificate of Authenticity.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Dispatch:</strong> All items will be dispatched within 7 days.
              </p>
              {hasFramingOptions ? (
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Framing Available:</strong> Professional framing option includes celebration photos and
                  authentication plaque for additional {formatPrice(750.0)}.
                </p>
              ) : (
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Ready to Display:</strong> Professionally framed and ready to hang.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
