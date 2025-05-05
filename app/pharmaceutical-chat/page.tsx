"use client"

import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function DirectPharmaceuticalChatPage() {
  return (
    <WhatsAppChat
      communityName="Pharmaceutical Community"
      communityImage="/placeholder.svg?height=200&width=200"
      roomId="pharmaceutical_global"
      industryId="pharmaceutical"
    />
  )
}
