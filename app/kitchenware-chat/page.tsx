"use client"

import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function DirectKitchenwareChatPage() {
  return (
    <WhatsAppChat
      communityName="Kitchenware Community"
      communityImage="/placeholder.svg?height=200&width=200"
      roomId="kitchenware_global"
      industryId="kitchenware"
    />
  )
}
