import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { CheckCircle, Package, Mail, Phone } from "lucide-react"

export default function Success() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You for Your Purchase!</h1>
            <p className="text-xl text-gray-600 mb-8">Your order has been successfully processed and confirmed.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Happens Next?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mail className="h-12 w-12 text-[#d71920] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Confirmation Email</h3>
                <p className="text-gray-600">
                  You'll receive a detailed order confirmation email within the next few minutes with your receipt and
                  order details.
                </p>
              </div>

              <div className="text-center">
                <Package className="h-12 w-12 text-[#d71920] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Processing & Dispatch</h3>
                <p className="text-gray-600">
                  Your order will be carefully processed and dispatched within 7 business days. You'll receive tracking
                  information once shipped.
                </p>
              </div>

              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-[#d71920] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Certificate of Authenticity</h3>
                <p className="text-gray-600">
                  All memorabilia comes with an official Certificate of Authenticity to guarantee the legitimacy of your
                  purchase.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about your order or need assistance, our customer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#d71920] mr-2" />
                <span className="text-gray-700">support@globalfansclub.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#d71920] mr-2" />
                <span className="text-gray-700">+44 20 1234 5678</span>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="space-x-4">
              <Link href="/shop" className="btn-primary">
                Continue Shopping
              </Link>
              <Link href="/" className="btn-secondary">
                Back to Home
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              Thank you for choosing Global Fans Club. We're bringing you closer to the game you love!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
