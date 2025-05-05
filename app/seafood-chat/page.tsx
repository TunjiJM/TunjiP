"use client"

import { WhatsAppChat } from "@/components/whatsapp-chat"
import { useEffect, useState } from "react"

export default function DirectSeafoodChatPage() {
  // Use client-side rendering to avoid hydration issues
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading chat...</p>
        </div>
      </div>
    )
  }

  return (
    <WhatsAppChat
      communityName="Seafood Community"
      communityImage="/placeholder.svg?height=200&width=200"
      roomId="seafood_global"
      industryId="seafood"
    />
  )
}
