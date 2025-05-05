"use client"

import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function DirectFashionChatPage() {
  return (
    <WhatsAppChat
      communityName="Fashion Community"
      communityImage="/placeholder.svg?height=200&width=200"
      roomId="fashion_global"
      industryId="fashion"
    />
  )
}
