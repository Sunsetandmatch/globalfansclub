import ProductGrid from "@/components/product-grid"
import { products } from "@/lib/products"

export default function AllProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ProductGrid products={products} title="All Products" />
    </main>
  )
}
