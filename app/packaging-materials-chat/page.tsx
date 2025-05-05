"use client"

import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function DirectPackagingMaterialsChatPage() {
  return (
    <WhatsAppChat
      communityName="Packaging Materials Community"
      communityImage="/placeholder.svg?height=200&width=200"
      roomId="packaging_materials_global"
      industryId="packaging-materials"
    />
  )
}
