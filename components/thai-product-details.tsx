"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import { getShippingCost } from "@/lib/shipping"
import type { Product } from "@/lib/types"
import { useRouter } from "next/navigation"

interface ThaiProductDetailsProps {
  product: Product
}

export default function ThaiProductDetails({ product }: ThaiProductDetailsProps) {
  const [selectedFraming, setSelectedFraming] = useState("No Framing")
  const { addItem } = useCart()
  const pricingLoading = false
  const { toast } = useToast()
  const router = useRouter()

  // Currency helpers
  const formatPriceUSD = (amount: number) => `$${Math.round(amount).toLocaleString()}`
  const formatPriceTHB = (amount: number) => `฿${Math.round(amount * 36.2).toLocaleString()}`
  const formatShipping = (aedAmount: number) => `AED ${Math.round(aedAmount).toLocaleString()}`
  const formatShippingTHB = (aedAmount: number) => `฿${Math.round(aedAmount * 9.86).toLocaleString()}`

  const convertPrice = (aedPrice: number, currency: string) => {
    const rates = {
      GBP: 0.195,
      EUR: 0.235,
      USD: 0.275,
      THB: 9.96, // AED to THB
    }
    return Math.round(aedPrice * rates[currency as keyof typeof rates])
  }

  const formatCurrency = (price: number, currency: string) => {
    const symbols = {
      GBP: "£",
      EUR: "€",
      USD: "$",
      THB: "฿",
    }
    const symbol = symbols[currency as keyof typeof symbols]
    return `${symbol}${price.toLocaleString()}`
  }

  // Products with framing options (loose shirts that can be framed)
  const hasFramingOptions = product.id === "1"

  const framingOptions = hasFramingOptions
    ? [
        { label: "No Framing", labelThai: "ไม่มีกรอบ", price: 0 },
        { label: "Professional Framing", labelThai: "กรอบระดับมืออาชีพ", price: 750.0 },
      ]
    : [{ label: "Framed Display", labelThai: "จัดแสดงในกรอบ", price: 0 }]

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
      title: "Added to cart / เพิ่มในตะกร้าแล้ว",
      description: `${product.name} has been added to your cart. / ${product.name} ได้ถูกเพิ่มในตะกร้าของคุณแล้ว`,
      action: (
        <button
          onClick={() => router.push("/checkout")}
          className="bg-[#2d5a27] text-white px-4 py-2 rounded text-sm hover:bg-[#1f3e1a] transition-colors"
        >
          Proceed to Checkout / ดำเนินการชำระเงิน
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
            <div className="animate-pulse">Loading pricing information... / กำลังโหลดข้อมูลราคา...</div>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">เสื้อฟุตบอลลิเวอร์พูล 2005 อิสตันบูล ลายเซ็นทีมเต็ม</h2>

            {/* Sold Out Badge */}
            {product.soldOut && (
              <div className="mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-lg font-bold bg-red-100 text-red-800 border-2 border-red-300">
                  🚫 SOLD OUT / ขายหมดแล้ว
                </span>
              </div>
            )}

            {/* Sale Badge for limited-time items */}
            {product.onSale && product.limitedTime && !product.soldOut && (
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 animate-pulse">
                  🔥 LIMITED TIME SALE - {product.salePercentage}% OFF! / เซลพิเศษ - ลด {product.salePercentage}%!
                </span>
              </div>
            )}

            {/* Price Display */}
            <div className="mb-6">
              <div>
                <p className="text-3xl font-bold text-[#2d5a27]">$1,299</p>
                <p className="text-2xl font-semibold text-orange-600">AED 4,995</p>
                <p className="text-2xl font-semibold text-blue-600">฿43,500</p>
                <div className="text-sm text-gray-500 space-y-0.5 mt-2">
                  <div>(≈ £995 GBP)</div>
                  <div>(≈ €1,150 EUR)</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-gray-600">
                เสื้อฟุตบอลลิเวอร์พูลปี 2005 จากการแข่งขันแชมเปียนส์ลีก พร้อมลายเซ็นของทีมเต็ม รวมถึง เจอร์ราร์ด อลอนโซ่ และ ดูเด็ก
                นี่คือเสื้อในตำนานจากการพลิกแพ้เป็นชนะที่อิสตันบูล หนึ่งในคืนที่ยิ่งใหญ่ที่สุดในประวัติศาสตร์ฟุตบอล มาพร้อมใบรับรองความแท้
              </p>
            </div>

            {/* Framing Selection - for products with framing options */}
            {hasFramingOptions && !product.soldOut && (
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Framing / การใส่กรอบ</label>
                <select
                  value={selectedFraming}
                  onChange={(e) => setSelectedFraming(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs"
                >
                  {framingOptions.map((option) => (
                    <option key={option.label} value={option.label}>
                      {option.label} / {option.labelThai}{" "}
                      {option.price > 0 &&
                        `(+${formatPriceUSD(convertPrice(option.price, "USD"))} / +${formatPriceTHB(convertPrice(option.price, "USD"))})`}
                    </option>
                  ))}
                </select>
                {selectedFraming === "Professional Framing" && (
                  <p className="text-sm text-gray-600 mt-2">
                    Professional framing includes celebration photos and authentication plaque. /
                    การใส่กรอบระดับมืออาชีพรวมถึงภาพการเฉลิมฉลองและแผ่นรับรองความแท้
                  </p>
                )}
              </div>
            )}

            {/* Shipping Information */}
            {!product.soldOut && (
              <div className="mb-8 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Shipping Costs / ค่าจัดส่ง</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>UK / สหราชอาณาจักร:</strong> {formatShipping(ukShipping.cost)} /{" "}
                    {formatShippingTHB(ukShipping.cost)} ({ukShipping.method})
                  </p>
                  <p>
                    <strong>International / ต่างประเทศ:</strong> {formatShipping(intlShipping.cost)} /{" "}
                    {formatShippingTHB(intlShipping.cost)} ({intlShipping.method})
                  </p>
                  <p>
                    <strong>Thailand / ประเทศไทย:</strong> ฿1,800 (Standard / มาตรฐาน) | ฿3,600 (Express / ด่วน)
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2">All items ship from the UK / สินค้าทั้งหมดจัดส่งจากสหราชอาณาจักร</p>
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
                {product.soldOut ? "Sold Out / ขายหมดแล้ว" : "Add to Cart / เพิ่มในตะกร้า"}
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
                {product.soldOut ? "Sold Out / ขายหมดแล้ว" : "Buy Now / ซื้อเลย"}
              </button>
            </div>

            {/* Contact Button */}
            <div className="border-t pt-4">
              <a
                href={`mailto:hello@globalfansclub.com?subject=Question about: ${product.name}`}
                className="btn-secondary w-full text-center block"
              >
                Got a question? Contact us / มีคำถาม? ติดต่อเรา
              </a>
            </div>

            {/* Certificate Notice */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Certificate of Authenticity / ใบรับรองความแท้:</strong> All items come with a Certificate of
                Authenticity. / สินค้าทุกชิ้นมาพร้อมใบรับรองความแท้
              </p>
              <p className="text-sm text-gray-600">
                <strong>Dispatch / การจัดส่ง:</strong> All items will be dispatched within 7 days. /
                สินค้าทั้งหมดจะถูกจัดส่งภายใน 7 วัน
              </p>
              {hasFramingOptions ? (
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Framing Available / มีบริการใส่กรอบ:</strong> Professional framing option includes celebration
                  photos and authentication plaque for additional {formatPriceUSD(convertPrice(750.0, "USD"))} /{" "}
                  {formatPriceTHB(convertPrice(750.0, "USD"))}. /
                  ตัวเลือกการใส่กรอบระดับมืออาชีพรวมถึงภาพการเฉลิมฉลองและแผ่นรับรองความแท้ในราคาเพิ่มเติม
                </p>
              ) : (
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Ready to Display / พร้อมจัดแสดง:</strong> Professionally framed and ready to hang. /
                  ใส่กรอบระดับมืออาชีพและพร้อมแขวน
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
