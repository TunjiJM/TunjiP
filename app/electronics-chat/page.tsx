"use client"

import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function DirectElectronicsChatPage() {
  return (
    <WhatsAppChat
      communityName="Electronics Community"
      communityImage="/placeholder.svg?height=200&width=200"
      roomId="electronics_global"
      industryId="electronics"
    />
  )
}
