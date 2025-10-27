import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function POST(request: NextRequest) {
  try {
    const { amount, items, customerInfo, shippingTotal, discountCode, discountAmount, subtotal } = await request.json()

    // Create payment intent with AED currency
    // Amount should be in fils (AED's smallest unit - 1 AED = 100 fils)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // Amount already converted to fils in frontend
      currency: "aed",
      payment_method_types: ["card"],
      metadata: {
        customer_name: customerInfo.name,
        customer_email: customerInfo.email,
        customer_address: customerInfo.address,
        customer_city: customerInfo.city,
        customer_postal_code: customerInfo.postalCode,
        customer_country: customerInfo.country,
        items: JSON.stringify(
          items.map((item: any) => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            size: item.size || "",
          })),
        ),
        shipping_total: shippingTotal.toString(),
        discount_code: discountCode || "",
        discount_amount: discountAmount?.toString() || "0",
        subtotal: subtotal.toString(),
        total_amount_aed: (amount / 100).toString(), // Convert back to AED for metadata
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.error("Error creating payment intent:", error)
    return NextResponse.json({ error: "Failed to create payment intent" }, { status: 500 })
  }
}
