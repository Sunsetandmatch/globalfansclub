"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  size?: string
}

interface CartState {
  items: CartItem[]
  discountCode: string
  discountAmount: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "APPLY_DISCOUNT"; payload: { code: string; amount: number } }
  | { type: "REMOVE_DISCOUNT" }
  | { type: "LOAD_CART"; payload: CartState }

export const DISCOUNT_CODES: Record<string, number> = {
  // Legacy/private codes
  ISTANBUL20: 20, // 20% off - Main coupon code
  GERRARD15: 15, // 15% off
  LIVERPOOL10: 10, // 10% off
  WELCOME5: 5, // 5% off
  JOHNCONNORS: 25, // 25% off - Private discount code
  LINGLING: 30, // 30% off - Private discount code for Cantonese customers
  LFCGIRLFRIENDS: 30, // 30% off - Private discount code
  REDMENTV: 30, // 30% off - Private discount code
  MANNY30: 30, // 30% off - Private discount code

  // GFC tiered codes (every 5% up to 100%)
  GFC5: 5,
  GFC10: 10,
  GFC15: 15,
  GFC20: 20,
  GFC25: 25,
  GFC30: 30,
  GFC35: 35,
  GFC40: 40,
  GFC45: 45,
  GFC50: 50,
  GFC55: 55,
  GFC60: 60,
  GFC65: 65,
  GFC70: 70,
  GFC75: 75,
  GFC80: 80,
  GFC85: 85,
  GFC90: 90,
  GFC95: 95,
  GFC100: 100,
}

const initialState: CartState = {
  items: [],
  discountCode: "",
  discountAmount: 0,
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id && item.size === action.payload.size,
      )

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.size === action.payload.size
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item,
          ),
        }
      }

      return {
        ...state,
        items: [...state.items, action.payload],
      }
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item,
        ),
      }

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      }

    case "APPLY_DISCOUNT":
      return {
        ...state,
        discountCode: action.payload.code,
        discountAmount: action.payload.amount,
      }

    case "REMOVE_DISCOUNT":
      return {
        ...state,
        discountCode: "",
        discountAmount: 0,
      }

    case "LOAD_CART":
      return action.payload

    default:
      return state
  }
}

interface CartContextType {
  items: CartItem[]
  discountCode: string
  discountAmount: number
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  applyDiscount: (code: string, amount: number) => void
  removeDiscount: () => void
  getSubtotal: () => number
  getDiscountValue: () => number
  getTotal: () => number
  getTotalItems: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        dispatch({ type: "LOAD_CART", payload: parsedCart })
      } catch (error) {
        console.error("Error loading cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state))
  }, [state])

  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
    }
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const applyDiscount = (code: string, amount: number) => {
    dispatch({ type: "APPLY_DISCOUNT", payload: { code, amount } })
  }

  const removeDiscount = () => {
    dispatch({ type: "REMOVE_DISCOUNT" })
  }

  const getSubtotal = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getDiscountValue = () => {
    if (state.discountAmount > 0) {
      const subtotal = getSubtotal()
      return (subtotal * state.discountAmount) / 100
    }
    return 0
  }

  const getTotal = () => {
    const subtotal = getSubtotal()
    const discount = getDiscountValue()
    return subtotal - discount
  }

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }

  const value: CartContextType = {
    items: state.items,
    discountCode: state.discountCode,
    discountAmount: state.discountAmount,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    applyDiscount,
    removeDiscount,
    getSubtotal,
    getDiscountValue,
    getTotal,
    getTotalItems,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
