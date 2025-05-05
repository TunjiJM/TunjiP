"use client"

import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function DirectCosmeticsChatPage() {
  return (
    <WhatsAppChat
      communityName="Cosmetics Community"
      communityImage="/placeholder.svg?height=200&width=200"
      roomId="cosmetics_global"
      industryId="cosmetics"
    />
  )
}
