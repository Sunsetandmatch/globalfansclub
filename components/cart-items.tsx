"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus, Tag, X } from "lucide-react"
import { useCart, DISCOUNT_CODES } from "@/lib/cart-context"
import { calculateTotalShipping } from "@/lib/shipping"
import { useToast } from "@/hooks/use-toast"

export default function CartItems() {
  const {
    items,
    removeItem,
    updateQuantity,
    getSubtotal,
    getTotal,
    discountCode,
    discountAmount,
    applyDiscount,
    removeDiscount,
  } = useCart()
  const { toast } = useToast()
  const [discountInput, setDiscountInput] = useState("")
  const [isApplyingDiscount, setIsApplyingDiscount] = useState(false)

  // Currency conversion functions
  const convertPrice = (aedPrice: number, currency: string) => {
    const rates = {
      GBP: 0.195,
      EUR: 0.235,
      USD: 0.275,
    }
    return Math.round(aedPrice * rates[currency as keyof typeof rates])
  }

  const formatCurrency = (price: number, currency: string) => {
    const symbols = {
      GBP: "£",
      EUR: "€",
      USD: "$",
    }
    const symbol = symbols[currency as keyof typeof symbols]
    return `${symbol}${price.toLocaleString()}`
  }

  const formatPrice = (amount: number) => `AED ${Math.round(amount).toLocaleString()}`
  const formatShipping = (aedAmount: number) => `AED ${Math.round(aedAmount).toLocaleString()}`

  const handleRemoveDiscount = () => {
    removeDiscount()
  }

  const handleApplyDiscount = () => {
    setIsApplyingDiscount(true)
    const code = discountInput.toUpperCase().trim()

    if (DISCOUNT_CODES[code]) {
      applyDiscount(code, DISCOUNT_CODES[code])
      toast({
        title: "Discount Applied",
        description: `Discount code applied successfully.`,
        variant: "default",
      })
      setDiscountInput("")
    } else {
      toast({
        title: "Invalid Discount Code",
        description: "The discount code you entered is invalid.",
        variant: "destructive",
      })
    }
    setIsApplyingDiscount(false)
  }

  if (items.length === 0) {
    return (
      <div className="space-y-8">
        <div className="text-center py-16">
          <p className="text-gray-500 mb-8">Your cart is empty</p>
          <Link href="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>

        {/* Always visible checkout button */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="text-center">
            <p className="text-gray-600 mb-4">Ready to checkout with items you've added elsewhere?</p>
            <Link href="/checkout" className="btn-primary w-full block text-center">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const shippingInfoUK = calculateTotalShipping(items, "GB")
  const shippingInfoIntl = calculateTotalShipping(items, "US")

  return (
    <div className="space-y-8">
      {/* Cart Items */}
      <div className="space-y-4">
        {items.map((item) => (
          <div key={`${item.id}-${item.size}`} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={80}
                height={80}
                className="rounded object-contain"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                {item.size && <p className="text-gray-500 text-sm">Framing: {item.size}</p>}
                <div className="text-[#d71920] font-bold">
                  <div>{formatPrice(item.price)}</div>
                  <div className="text-xs text-gray-500 space-y-0.5">
                    <div>(≈ {formatCurrency(convertPrice(item.price, "GBP"), "GBP")} GBP)</div>
                    <div>(≈ {formatCurrency(convertPrice(item.price, "EUR"), "EUR")} EUR)</div>
                    <div>(≈ {formatCurrency(convertPrice(item.price, "USD"), "USD")} USD)</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.size || "", Math.max(0, item.quantity - 1))}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.size || "", item.quantity + 1)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id, item.size || "")}
                className="p-2 text-red-500 hover:bg-red-50 rounded"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Discount Code Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold mb-4 flex items-center">
          <Tag className="h-5 w-5 mr-2 text-[#d71920]" />
          Discount Code
        </h3>

        {discountCode ? (
          <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
            <div className="flex items-center">
              <span className="text-green-700 font-medium">Discount Applied</span>
              <span className="text-green-600 ml-2">({discountAmount}% off)</span>
            </div>
            <button onClick={handleRemoveDiscount} className="text-red-500 hover:text-red-700">
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Enter discount code"
              value={discountInput}
              onChange={(e) => setDiscountInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
              onKeyPress={(e) => e.key === "Enter" && handleApplyDiscount()}
            />
            <button
              onClick={handleApplyDiscount}
              disabled={!discountInput.trim() || isApplyingDiscount}
              className="btn-secondary px-4 py-2 text-sm disabled:opacity-50"
            >
              {isApplyingDiscount ? "Applying..." : "Apply"}
            </button>
          </div>
        )}
      </div>

      {/* Shipping Information */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-semibold mb-4">Shipping Information</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">
              UK Shipping: {formatShipping(shippingInfoUK.totalShipping)}
            </h4>
            <div className="text-sm text-gray-600 space-y-1">
              {shippingInfoUK.uniqueItems.map((item, index) => (
                <p key={index}>
                  {item.name} {item.size && `(${item.size})`}: {formatShipping(item.shipping.cost)} -{" "}
                  {item.shipping.method}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-700 mb-2">
              International Shipping: {formatShipping(shippingInfoIntl.totalShipping)}
            </h4>
            <div className="text-sm text-gray-600 space-y-1">
              {shippingInfoIntl.uniqueItems.map((item, index) => (
                <p key={index}>
                  {item.name} {item.size && `(${item.size})`}: {formatShipping(item.shipping.cost)} -{" "}
                  {item.shipping.method}
                </p>
              ))}
            </div>
          </div>

          {(shippingInfoUK.hasMultipleUniqueItems || shippingInfoIntl.hasMultipleUniqueItems) && (
            <p className="text-sm text-orange-600 mt-2">
              <strong>Note:</strong> Items are shipped separately as they require different shipping methods.
            </p>
          )}
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p>
            <strong>Questions?</strong>{" "}
            <a href="mailto:hello@globalfansclub.com" className="text-blue-600 hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>

      {/* Cart Summary */}
      <div className="bg-gray-50 p-6 rounded-lg">
        {/* Top Checkout Button */}
        <div className="mb-6">
          <Link href="/checkout" className="btn-secondary w-full block text-center">
            Proceed to Checkout
          </Link>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-lg">Subtotal:</span>
            <div className="text-right">
              <span className="text-lg">{formatPrice(getSubtotal())}</span>
              <div className="text-xs text-gray-500 space-y-0.5">
                <div>(≈ {formatCurrency(convertPrice(getSubtotal(), "GBP"), "GBP")} GBP)</div>
                <div>(≈ {formatCurrency(convertPrice(getSubtotal(), "EUR"), "EUR")} EUR)</div>
                <div>(≈ {formatCurrency(convertPrice(getSubtotal(), "USD"), "USD")} USD)</div>
              </div>
            </div>
          </div>

          {discountCode && (
            <div className="flex justify-between text-green-600">
              <span>Discount ({discountAmount}% off):</span>
              <div className="text-right">
                <span>-{formatPrice((getSubtotal() * discountAmount) / 100)}</span>
                <div className="text-xs text-green-500 space-y-0.5">
                  <div>(-{formatCurrency(convertPrice((getSubtotal() * discountAmount) / 100, "GBP"), "GBP")} GBP)</div>
                  <div>(-{formatCurrency(convertPrice((getSubtotal() * discountAmount) / 100, "EUR"), "EUR")} EUR)</div>
                  <div>(-{formatCurrency(convertPrice((getSubtotal() * discountAmount) / 100, "USD"), "USD")} USD)</div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center border-t pt-2">
            <span className="text-xl font-semibold">Total:</span>
            <div className="text-right">
              <span className="text-2xl font-bold text-[#d71920]">{formatPrice(getTotal())}</span>
              <div className="text-sm text-gray-500 space-y-0.5">
                <div>(≈ {formatCurrency(convertPrice(getTotal(), "GBP"), "GBP")} GBP)</div>
                <div>(≈ {formatCurrency(convertPrice(getTotal(), "EUR"), "EUR")} EUR)</div>
                <div>(≈ {formatCurrency(convertPrice(getTotal(), "USD"), "USD")} USD)</div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4 mb-4">
          Shipping will be calculated at checkout based on your location.
        </p>

        {/* Bottom Checkout Button */}
        <Link href="/checkout" className="btn-primary w-full block text-center">
          Proceed to Checkout
        </Link>
      </div>

      {/* Company Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center space-x-2 text-blue-800">
          <div className="text-2xl">🏢</div>
          <div>
            <p className="font-semibold">Global Fans Club LLC - Dubai, UAE</p>
            <p className="text-sm">You will be charged in AED. Items ship from UK warehouse.</p>
            <p className="text-sm mt-1">
              Questions?{" "}
              <a href="mailto:hello@globalfansclub.com" className="text-blue-600 hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
