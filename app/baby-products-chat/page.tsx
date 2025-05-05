"use client"

import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function DirectBabyProductsChatPage() {
  return (
    <WhatsAppChat
      communityName="Baby Products Community"
      communityImage="/placeholder.svg?height=200&width=200"
      roomId="baby_products_global"
      industryId="baby-products"
    />
  )
}
