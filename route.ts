import { type NextRequest, NextResponse } from "next/server"
import { getStripeServer } from "@/lib/stripe/server"
import { createServerClient } from "@/lib/supabase/server"
import { headers } from "next/headers"

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = (await headers()).get("stripe-signature")

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 })
  }

  const stripe = getStripeServer()
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    console.error("Stripe webhook secret is not configured")
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 })
  }

  try {
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret)

    const supabase = await createServerClient()

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object
        const { courseId, userId, instructorId } = session.metadata as {
          courseId: string
          userId: string
          instructorId: string
        }

        // Create enrollment
        await supabase.from("enrollments").insert({
          user_id: userId,
          course_id: courseId,
          enrolled_at: new Date().toISOString(),
        })

        // Create payment record
        await supabase.from("payments").insert({
          user_id: userId,
          course_id: courseId,
          instructor_id: instructorId,
          amount: (session.amount_total || 0) / 100,
          currency: session.currency || "eur",
          stripe_session_id: session.id,
          status: "completed",
          paid_at: new Date().toISOString(),
        })

        break
      }

      case "payment_intent.succeeded": {
        console.log("Payment succeeded:", event.data.object.id)
        break
      }

      case "payment_intent.payment_failed": {
        console.log("Payment failed:", event.data.object.id)
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 400 })
  }
}
