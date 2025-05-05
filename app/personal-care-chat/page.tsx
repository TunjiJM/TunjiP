"use client"

import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function DirectPersonalCareChatPage() {
  return (
    <WhatsAppChat
      communityName="Personal Care Community"
      communityImage="/placeholder.svg?height=200&width=200"
      roomId="personal_care_global"
      industryId="personal-care"
    />
  )
}
