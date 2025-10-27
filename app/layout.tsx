import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { PricingProvider } from "@/lib/pricing-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Global Fans Club - Bringing You Closer",
  description: "Official Global Fans Club merchandise store. Bringing fans closer to the heart of the game.",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PricingProvider>
          <CartProvider>
            {children}
            <Toaster />
          </CartProvider>
        </PricingProvider>
      </body>
    </html>
  )
}
