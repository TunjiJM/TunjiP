import type { Metadata } from "next"
import { TrackOrder } from "@/components/track-order"

export const metadata: Metadata = {
  title: "Track Your Order | Moqify - Coming Soon",
  description:
    "Stay updated on your Moqify orders with our upcoming real-time tracking feature. Monitor your shipments from production to delivery.",
}

export default function TrackOrderPage() {
  return <TrackOrder />
}
