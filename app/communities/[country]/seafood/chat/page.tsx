"use client"

import { useParams } from "next/navigation"
import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function SeafoodChatPage() {
  const params = useParams()
  const countryCode = params.country as string

  return (
    <WhatsAppChat
      communityName="Seafood Community"
      communityImage="/placeholder.svg?height=200&width=200"
      roomId={`seafood_${countryCode}`}
    />
  )
}
