"use client"

import type React from "react"

import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useCart, DISCOUNT_CODES } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import { calculateTotalShipping } from "@/lib/shipping"
import { Tag, X } from "lucide-react"

const stripePromise = loadStripe(
  "pk_live_51R9RkERomroNEBOeK3jp8UFUIEaAOMsW3LQNJw58SF17NBTriTnisEC0iWMcOm5jkmkXDI3UE5Lqo5klFYdCxGsP00uO64NJjN",
)

const countries = [
  { code: "AE", name: "United Arab Emirates" },
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "ES", name: "Spain" },
  { code: "IT", name: "Italy" },
  { code: "NL", name: "Netherlands" },
  { code: "BE", name: "Belgium" },
  { code: "IE", name: "Ireland" },
  { code: "SE", name: "Sweden" },
  { code: "NO", name: "Norway" },
  { code: "DK", name: "Denmark" },
  { code: "FI", name: "Finland" },
  { code: "CH", name: "Switzerland" },
  { code: "AT", name: "Austria" },
  { code: "PT", name: "Portugal" },
  { code: "PL", name: "Poland" },
  { code: "CZ", name: "Czech Republic" },
  { code: "CN", name: "China" },
  { code: "HK", name: "Hong Kong" },
]

function CheckoutFormContent() {
  const stripe = useStripe()
  const elements = useElements()
  const { items, getSubtotal, getTotal, clearCart, discountCode, discountAmount, applyDiscount, removeDiscount } =
    useCart()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [discountInput, setDiscountInput] = useState("")
  const [isApplyingDiscount, setIsApplyingDiscount] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "AE", // Default to UAE
    supportersClub: "",
  })

  const shippingInfo = calculateTotalShipping(items, customerInfo.country)

  // Currency formatting functions
  const formatPrice = (amount: number) => `AED ${Math.round(amount).toLocaleString()}`
  const formatShipping = (aedAmount: number) => `AED ${Math.round(aedAmount).toLocaleString()}`

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

  const getOrderTotal = () => {
    return getTotal() + shippingInfo.totalShipping
  }

  const handleApplyDiscount = () => {
    setIsApplyingDiscount(true)
    const code = discountInput.toUpperCase().trim()

    if (DISCOUNT_CODES[code]) {
      applyDiscount(code, DISCOUNT_CODES[code])
      toast({
        title: "Discount applied!",
        description: `Discount has been applied to your order.`,
      })
      setDiscountInput("")
    } else {
      toast({
        title: "Invalid discount code",
        description: "Please check your discount code and try again.",
        variant: "destructive",
      })
    }
    setIsApplyingDiscount(false)
  }

  const handleRemoveDiscount = () => {
    removeDiscount()
    toast({
      title: "Discount removed",
      description: "The discount has been removed from your order.",
    })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) return

    setLoading(true)

    try {
      // Create payment intent - convert AED to fils (1 AED = 100 fils)
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Math.round(getOrderTotal() * 100), // Convert AED to fils
          items,
          customerInfo,
          shippingTotal: shippingInfo.totalShipping,
          discountCode,
          discountAmount,
          subtotal: getSubtotal(),
        }),
      })

      const { clientSecret } = await response.json()

      // Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            name: customerInfo.name,
            email: customerInfo.email,
            address: {
              line1: customerInfo.address,
              city: customerInfo.city,
              postal_code: customerInfo.postalCode,
              country: customerInfo.country,
            },
          },
        },
      })

      if (error) {
        toast({
          title: "Payment failed",
          description: error.message,
          variant: "destructive",
        })
      } else {
        // Payment successful - send data to Make.com webhook
        try {
          await fetch("https://hook.eu2.make.com/8hxtq2tx3xwc7ldqm6gshxa17bywtf9z", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              paymentIntentId: paymentIntent.id,
              amount: getOrderTotal(),
              currency: "AED",
              customerInfo: {
                name: customerInfo.name,
                email: customerInfo.email,
                address: customerInfo.address,
                city: customerInfo.city,
                postalCode: customerInfo.postalCode,
                country: customerInfo.country,
                supportersClub: customerInfo.supportersClub,
              },
              items: items.map((item) => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                framing: item.size,
              })),
              shipping: {
                uniqueItems: shippingInfo.uniqueItems,
                totalShipping: shippingInfo.totalShipping,
                hasMultipleUniqueItems: shippingInfo.hasMultipleUniqueItems,
              },
              discount: {
                code: discountCode,
                amount: discountAmount,
                value: discountCode ? (getSubtotal() * discountAmount) / 100 : 0,
              },
              orderDate: new Date().toISOString(),
              subtotal: getSubtotal(),
              discountValue: discountCode ? (getSubtotal() * discountAmount) / 100 : 0,
              shippingTotal: shippingInfo.totalShipping,
              totalAmount: getOrderTotal(),
            }),
          })
        } catch (webhookError) {
          console.error("Failed to send data to webhook:", webhookError)
          // Don't show error to user as payment was successful
        }

        toast({
          title: "Payment successful!",
          description: "Your order has been placed successfully.",
        })
        clearCart()
        window.location.href = "/success"
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    }

    setLoading(false)
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Customer Information */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={customerInfo.name}
            onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={customerInfo.email}
            onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={customerInfo.address}
            onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2 md:col-span-2"
            required
          />
          <input
            type="text"
            placeholder="City"
            value={customerInfo.city}
            onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Postal Code"
            value={customerInfo.postalCode}
            onChange={(e) => setCustomerInfo({ ...customerInfo, postalCode: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2"
            required
          />
          <select
            value={customerInfo.country}
            onChange={(e) => setCustomerInfo({ ...customerInfo, country: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2 md:col-span-2"
            required
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
          <div className="md:col-span-2">
            <label htmlFor="supportersClub" className="block text-sm font-medium text-gray-700 mb-1">
              Tell us your local supporters club … they will be rewarded (optional)
            </label>
            <input
              type="text"
              id="supportersClub"
              placeholder="e.g. Liverpool FC Official Supporters Club Dubai"
              value={customerInfo.supportersClub || ""}
              onChange={(e) => setCustomerInfo({ ...customerInfo, supportersClub: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
        </div>
      </div>

      {/* Discount Code Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Tag className="h-5 w-5 mr-2 text-[#d71920]" />
          Discount Code
        </h3>

        {discountCode ? (
          <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
            <div className="flex items-center">
              <span className="text-green-700 font-medium">Discount Applied</span>
              <span className="text-green-600 ml-2">({discountAmount}% off)</span>
            </div>
            <button type="button" onClick={handleRemoveDiscount} className="text-red-500 hover:text-red-700">
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
              onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <button
              type="button"
              onClick={handleApplyDiscount}
              disabled={!discountInput.trim() || isApplyingDiscount}
              className="btn-secondary px-4 py-2 text-sm disabled:opacity-50"
            >
              {isApplyingDiscount ? "Applying..." : "Apply"}
            </button>
          </div>
        )}
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          {items.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex justify-between">
              <span>
                {item.name} {item.size && `(${item.size})`} x {item.quantity}
              </span>
              <div className="text-right">
                <span>{formatPrice(item.price * item.quantity)}</span>
                <div className="text-xs text-gray-500 space-y-0.5">
                  <div>(≈ {formatCurrency(convertPrice(item.price * item.quantity, "GBP"), "GBP")} GBP)</div>
                  <div>(≈ {formatCurrency(convertPrice(item.price * item.quantity, "EUR"), "EUR")} EUR)</div>
                  <div>(≈ {formatCurrency(convertPrice(item.price * item.quantity, "USD"), "USD")} USD)</div>
                </div>
              </div>
            </div>
          ))}

          <div className="border-t pt-2 space-y-1">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <div className="text-right">
                <span>{formatPrice(getSubtotal())}</span>
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
                    <div>
                      (-{formatCurrency(convertPrice((getSubtotal() * discountAmount) / 100, "GBP"), "GBP")} GBP)
                    </div>
                    <div>
                      (-{formatCurrency(convertPrice((getSubtotal() * discountAmount) / 100, "EUR"), "EUR")} EUR)
                    </div>
                    <div>
                      (-{formatCurrency(convertPrice((getSubtotal() * discountAmount) / 100, "USD"), "USD")} USD)
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between">
              <span>After Discount:</span>
              <div className="text-right">
                <span>{formatPrice(getTotal())}</span>
                <div className="text-xs text-gray-500 space-y-0.5">
                  <div>(≈ {formatCurrency(convertPrice(getTotal(), "GBP"), "GBP")} GBP)</div>
                  <div>(≈ {formatCurrency(convertPrice(getTotal(), "EUR"), "EUR")} EUR)</div>
                  <div>(≈ {formatCurrency(convertPrice(getTotal(), "USD"), "USD")} USD)</div>
                </div>
              </div>
            </div>

            {/* Shipping Details */}
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Shipping:</span>
                <div className="text-right">
                  <span>{formatShipping(shippingInfo.totalShipping)}</span>
                  <div className="text-xs text-gray-500 space-y-0.5">
                    <div>(≈ {formatCurrency(convertPrice(shippingInfo.totalShipping, "GBP"), "GBP")} GBP)</div>
                    <div>(≈ {formatCurrency(convertPrice(shippingInfo.totalShipping, "EUR"), "EUR")} EUR)</div>
                    <div>(≈ {formatCurrency(convertPrice(shippingInfo.totalShipping, "USD"), "USD")} USD)</div>
                  </div>
                </div>
              </div>
              {shippingInfo.uniqueItems.map((item, index) => (
                <div key={index} className="flex justify-between text-sm text-gray-600 ml-4">
                  <span>
                    {item.name} {item.size && `(${item.size})`}
                  </span>
                  <div className="text-right">
                    <span>
                      {formatShipping(item.shipping.cost)} - {item.shipping.method}
                    </span>
                    <div className="text-xs text-gray-500 space-y-0.5">
                      <div>(≈ {formatCurrency(convertPrice(item.shipping.cost, "GBP"), "GBP")} GBP)</div>
                      <div>(≈ {formatCurrency(convertPrice(item.shipping.cost, "EUR"), "EUR")} EUR)</div>
                      <div>(≈ {formatCurrency(convertPrice(item.shipping.cost, "USD"), "USD")} USD)</div>
                    </div>
                  </div>
                </div>
              ))}
              {shippingInfo.hasMultipleUniqueItems && (
                <p className="text-sm text-orange-600 mt-2">
                  <strong>Note:</strong> Items are shipped separately as they require different shipping methods.
                </p>
              )}
            </div>

            <div className="flex justify-between font-semibold text-lg border-t pt-2">
              <span>Total:</span>
              <div className="text-right">
                <span>{formatPrice(getOrderTotal())}</span>
                <div className="text-sm text-gray-500 space-y-0.5">
                  <div>(≈ {formatCurrency(convertPrice(getOrderTotal(), "GBP"), "GBP")} GBP)</div>
                  <div>(≈ {formatCurrency(convertPrice(getOrderTotal(), "EUR"), "EUR")} EUR)</div>
                  <div>(≈ {formatCurrency(convertPrice(getOrderTotal(), "USD"), "USD")} USD)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
        <div className="border border-gray-300 rounded-md p-3">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
      >
        {loading
          ? "Processing..."
          : `Pay ${formatPrice(getOrderTotal())} (≈ ${formatCurrency(convertPrice(getOrderTotal(), "GBP"), "GBP")} GBP)`}
      </button>
    </form>
  )
}

export default function CheckoutForm() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutFormContent />
    </Elements>
  )
}
