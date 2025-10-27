import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function Confirmation() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order has been confirmed and will be dispatched within 7 days. You will
            receive a confirmation email shortly with your Certificate of Authenticity.
          </p>
          <div className="space-x-4">
            <Link href="/shop" className="btn-primary">
              Continue Shopping
            </Link>
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
