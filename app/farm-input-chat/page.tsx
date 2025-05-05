"use client"

import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function DirectFarmInputChatPage() {
  return (
    <WhatsAppChat
      communityName="Farm Input Community"
      communityImage="/placeholder.svg?height=200&width=200"
      roomId="farm_input_global"
      industryId="farm-input"
    />
  )
}
