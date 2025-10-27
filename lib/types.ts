export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  salePrice?: number
  onSale?: boolean
  saleAmount?: number
  salePercentage?: string
  limitedTime?: boolean
  saleEndDate?: string
  description: string
  image: string
  category: string
  team?: string
  featured?: boolean
  inStock?: boolean
  soldOut?: boolean
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
  size?: string
}

export interface Speaker {
  id: string
  name: string
  title: string
  image: string
  bio: string
  category?: string
  featured?: boolean
}

export interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  image: string
  price?: number
  category?: string
  featured?: boolean
}
