"use client"

import { X } from "lucide-react"

interface TeamShopInfoPopupProps {
  teamName: string
  onClose: () => void
}

export default function TeamShopInfoPopup({ teamName, onClose }: TeamShopInfoPopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative animate-in fade-in-0 zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to {teamName} Collection</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
              <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Global Fans Club LLC</h3>
              <p className="text-sm text-gray-600">Based in Dubai, UAE</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
              <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Currency & Pricing</h3>
              <p className="text-sm text-gray-600">
                You will be charged in AED. All other currencies shown are for reference only.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
              <div className="w-3 h-3 bg-orange-600 rounded-sm"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Shipping</h3>
              <p className="text-sm text-gray-600">Items are Currently Shipped from the UK</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
              <div className="w-3 h-3 bg-red-600 rounded-sm"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Authenticity Guarantee</h3>
              <p className="text-sm text-gray-600">All items come with a Certificate of Authenticity (COA).</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Questions?{" "}
            <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">
              Contact us
            </a>
          </p>
          <button
            onClick={onClose}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors font-medium"
          >
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  )
}
