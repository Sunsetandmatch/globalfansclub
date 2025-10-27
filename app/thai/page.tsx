import Header from "@/components/header"
import Footer from "@/components/footer"
import ThaiProductDetails from "@/components/thai-product-details"
import { products } from "@/lib/products"

export default function ThaiProductPage() {
  // Get the Liverpool Squad Back Signed 2005 Istanbul Football Shirt (product ID "1")
  const product = products.find((p) => p.id === "1")

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
              <p className="text-gray-600 mt-2">ไม่พบสินค้า</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <ThaiProductDetails product={product} />
      <Footer />
    </div>
  )
}
