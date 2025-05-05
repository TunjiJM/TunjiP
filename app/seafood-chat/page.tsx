import { Suspense } from "react"
import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function SeafoodChatPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading chat...</div>}>
      <WhatsAppChat
        communityName="Seafood Industry"
        communityImage="/placeholder.svg?height=80&width=80"
        roomId="seafood-global"
        industryId="seafood"
      />
    </Suspense>
  )
}
