"use client"

import { useState } from "react"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { ShoppingCart, Home, Calendar, Users, Mail, Phone } from "lucide-react"

export default function CantoneseProductPage() {
  const [selectedFraming, setSelectedFraming] = useState("無裝裱")
  const { addItem } = useCart()
  const { toast } = useToast()
  const router = useRouter()

  // Product data - ORIGINAL PRICES ONLY
  const product = {
    id: "1",
    name: "利物浦隊全體簽名2005年伊斯坦堡足球衫",
    priceHKD: 10450, // Changed from 10420.59 to 10450
    priceAED: 4995, // ORIGINAL AED price - NEVER DISCOUNTED
    description:
      "官方利物浦2005年歐洲冠軍聯賽球衣，由全隊簽名，包括謝拉特、阿朗素和杜迪克。這是來自伊斯坦堡奇蹟般逆轉的傳奇球衣 - 足球史上最偉大的夜晚之一。包含真品證書。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/liverpool-2005-squad-signed-istanbul-football-shirt.jpg-X9djeNtaAduRFnMfDHbqIpK2cq5Df1.jpeg",
    category: "簽名紀念品",
    team: "liverpool",
  }

  // Currency formatting for HKD
  const formatPrice = (amount: number) =>
    `HK$${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  const formatShipping = (hkdAmount: number) => `HK$${Math.round(hkdAmount).toLocaleString()}`

  // Framing options - ORIGINAL PRICES ONLY
  const framingOptions = [
    { label: "無裝裱", priceHKD: 0, priceAED: 0 },
    { label: "專業裝裱", priceHKD: 1565.44, priceAED: 750 },
  ]

  // Get ORIGINAL prices for display
  const getBasePriceHKD = () => {
    const framingPrice = framingOptions.find((option) => option.label === selectedFraming)?.priceHKD || 0
    return product.priceHKD + framingPrice
  }

  // Get ORIGINAL prices for cart - NO DISCOUNT EVER APPLIED HERE
  const getOriginalPriceAED = () => {
    const framingPrice = framingOptions.find((option) => option.label === selectedFraming)?.priceAED || 0
    return product.priceAED + framingPrice // ALWAYS ORIGINAL PRICE: 4995 + framing
  }

  const getProductImage = () => {
    if (selectedFraming === "專業裝裱") {
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-06-12-18-16-47.jpg-0HvuZNKGEs0lQc1QoFNGNBJtti40dA.jpeg"
    }
    return product.image
  }

  const handleAddToCart = () => {
    // Add item at ORIGINAL FULL PRICE - NO DISCOUNT CALCULATION AT ALL
    addItem({
      id: product.id,
      name: product.name,
      price: getOriginalPriceAED(), // ALWAYS 4995 + framing (NO DISCOUNT)
      image: getProductImage(),
      size: selectedFraming,
      quantity: 1,
    })

    toast({
      title: "已加入購物車",
      description: `${product.name} 已加入您的購物車。`,
      action: (
        <button
          onClick={() => router.push("/cart")}
          className="bg-[#2d5a27] text-white px-4 py-2 rounded text-sm hover:bg-[#1f3e1a] transition-colors"
        >
          查看購物車
        </button>
      ),
    })
  }

  const handleBuyNow = () => {
    // Add item at ORIGINAL FULL PRICE - NO DISCOUNT CALCULATION AT ALL
    addItem({
      id: product.id,
      name: product.name,
      price: getOriginalPriceAED(), // ALWAYS 4995 + framing (NO DISCOUNT)
      image: getProductImage(),
      size: selectedFraming,
      quantity: 1,
    })

    setTimeout(() => {
      router.push("/checkout")
    }, 500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-[#2d5a27]">全球球迷會</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-[#2d5a27] flex items-center">
                <Home className="h-4 w-4 mr-1" />
                主頁
              </a>
              <a href="/about" className="text-gray-700 hover:text-[#2d5a27]">
                關於我們
              </a>
              <a href="/shop" className="text-gray-700 hover:text-[#2d5a27]">
                商店
              </a>
              <a href="/events" className="text-gray-700 hover:text-[#2d5a27] flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                活動
              </a>
              <a href="/speakers" className="text-gray-700 hover:text-[#2d5a27] flex items-center">
                <Users className="h-4 w-4 mr-1" />
                演講嘉賓
              </a>
              <a href="/newsletter" className="text-gray-700 hover:text-[#2d5a27]">
                通訊
              </a>
              <a href="/contact" className="text-gray-700 hover:text-[#2d5a27]">
                聯絡我們
              </a>
            </nav>
            <div className="flex items-center">
              <button className="text-gray-700 hover:text-[#2d5a27]">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
              <Image
                src={getProductImage() || "/placeholder.svg"}
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

              {/* Price Display - Show HKD prices */}
              <div className="mb-6">
                <p className="text-2xl font-bold text-[#2d5a27]">{formatPrice(getBasePriceHKD())}</p>
              </div>

              <p className="text-gray-600 mb-8">{product.description}</p>

              {/* Framing Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">裝裱</label>
                <select
                  value={selectedFraming}
                  onChange={(e) => setSelectedFraming(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs"
                >
                  {framingOptions.map((option) => (
                    <option key={option.label} value={option.label}>
                      {option.label} {option.priceHKD > 0 && `(+${formatPrice(option.priceHKD)})`}
                    </option>
                  ))}
                </select>
                {selectedFraming === "專業裝裱" && (
                  <p className="text-sm text-gray-600 mt-2">專業裝裱包括慶祝照片和認證牌匾。</p>
                )}
              </div>

              {/* Shipping Information */}
              <div className="mb-8 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">運費</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>英國：</strong> {formatShipping(129)} (英國特快專遞)
                  </p>
                  <p>
                    <strong>國際：</strong> {formatShipping(250)} (國際專遞)
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2">所有商品均從英國發貨</p>
              </div>

              {/* Buttons */}
              <div className="space-y-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold transition-colors border border-gray-300"
                >
                  加入購物車
                </button>
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-[#2d5a27] hover:bg-[#1f3e1a] text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  立即購買
                </button>
              </div>

              {/* Contact Button */}
              <div className="border-t pt-4">
                <a
                  href={`mailto:hello@globalfansclub.com?subject=關於產品的問題: ${product.name}`}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 w-full text-center block py-3 px-6 rounded-lg font-semibold transition-colors border border-gray-300"
                >
                  有問題？聯絡我們
                </a>
              </div>

              {/* Certificate Notice */}
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>真品證書：</strong> 所有商品均附有真品證書。
                </p>
                <p className="text-sm text-gray-600">
                  <strong>發貨：</strong> 所有商品將在7天內發貨。
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>可選裝裱：</strong> 專業裝裱選項包括慶祝照片和認證牌匾，額外收費 {formatPrice(1565.44)}。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">全球球迷會</h3>
              <p className="text-gray-400">為全球足球愛好者提供獨家簽名紀念品和難忘體驗。</p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">快速連結</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/" className="hover:text-white">
                    主頁
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white">
                    關於我們
                  </a>
                </li>
                <li>
                  <a href="/shop" className="hover:text-white">
                    商店
                  </a>
                </li>
                <li>
                  <a href="/events" className="hover:text-white">
                    活動
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">客戶服務</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/contact" className="hover:text-white">
                    聯絡我們
                  </a>
                </li>
                <li>
                  <a href="/shipping" className="hover:text-white">
                    運送資訊
                  </a>
                </li>
                <li>
                  <a href="/returns" className="hover:text-white">
                    退貨政策
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">聯絡資訊</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>hello@globalfansclub.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+44 20 1234 5678</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 全球球迷會。版權所有。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
