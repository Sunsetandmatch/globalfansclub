import Header from "@/components/header"
import Footer from "@/components/footer"
import CartItems from "@/components/cart-items"

export default function Cart() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
          <CartItems />
        </div>
      </main>
      <Footer />
    </div>
  )
}
