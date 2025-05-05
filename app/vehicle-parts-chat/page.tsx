"use client"

import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function DirectVehiclePartsChatPage() {
  return (
    <WhatsAppChat
      communityName="Vehicle Parts Community"
      communityImage="/placeholder.svg?height=200&width=200"
      roomId="vehicle_parts_global"
      industryId="vehicle-parts"
    />
  )
}
