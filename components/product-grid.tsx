"use client"

import Image from "next/image"
import Link from "next/link"
import PriceDisplay from "./price-display"
import type { Product } from "@/lib/types"

interface ProductGridProps {
  products?: Product[]
  title?: string
}

export default function ProductGrid({ products = [], title }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No products found.</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {title && <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className={product.soldOut ? "pointer-events-none" : ""}>
            <Link href={product.soldOut ? "#" : `/product/${product.id}`}>
              <div className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative aspect-square bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Sold Out Overlay */}
                  {product.soldOut && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="bg-red-400 text-white px-6 py-3 rounded-full font-bold text-lg">SOLD OUT</div>
                    </div>
                  )}

                  {/* Sale Badges */}
                  {product.onSale && !product.soldOut && (
                    <div className="absolute top-2 left-2 space-y-1">
                      <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
                        🔥 SALE
                      </span>
                      {product.salePercentage && (
                        <span className="block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                          {product.salePercentage}% OFF
                        </span>
                      )}
                      {product.limitedTime && (
                        <span className="block bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                          ⏰ LIMITED
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-[#2d5a27] transition-colors">
                    {product.name}
                  </h3>

                  <PriceDisplay
                    price={product.onSale && product.salePrice ? product.salePrice : product.price}
                    originalPrice={product.onSale ? product.price : undefined}
                    onSale={product.onSale}
                    saleAmount={product.saleAmount}
                    salePercentage={product.salePercentage}
                    limitedTime={product.limitedTime}
                    saleEndDate={product.saleEndDate}
                    showAllCurrencies={false}
                    className="text-sm"
                    productId={product.id}
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
