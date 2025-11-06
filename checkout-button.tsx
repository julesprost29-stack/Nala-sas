"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface CheckoutButtonProps {
  courseId: string
  price: number
  enrolled?: boolean
}

export function CheckoutButton({ courseId, price, enrolled }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    try {
      setLoading(true)

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId,
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        console.error("No checkout URL returned")
      }
    } catch (error) {
      console.error("Checkout error:", error)
    } finally {
      setLoading(false)
    }
  }

  if (enrolled) {
    return (
      <Button size="lg" className="w-full" asChild>
        <a href={`/courses/${courseId}/learn`}>Continuer le cours</a>
      </Button>
    )
  }

  return (
    <Button size="lg" className="w-full" onClick={handleCheckout} disabled={loading}>
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Chargement...
        </>
      ) : (
        <>Acheter maintenant - {price.toFixed(2)} €</>
      )}
    </Button>
  )
}
