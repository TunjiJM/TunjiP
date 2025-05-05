"use client"

import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function DirectChemicalChatPage() {
  return (
    <WhatsAppChat
      communityName="Chemical Industry Community"
      communityImage="/placeholder.svg?height=200&width=200"
      roomId="chemical_global"
      industryId="chemical"
    />
  )
}
