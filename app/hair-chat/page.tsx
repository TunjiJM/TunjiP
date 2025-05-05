"use client"

import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function DirectHairChatPage() {
  return (
    <WhatsAppChat
      communityName="Hair Products Community"
      communityImage="/placeholder.svg?height=200&width=200"
      roomId="hair_global"
      industryId="hair"
    />
  )
}
