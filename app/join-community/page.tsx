"use client"

import { useState, useEffect } from "react"
import { IndustryCommunities } from "@/components/industry-communities"

export default function JoinCommunityPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="pt-20 pb-20 bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="container mx-auto px-4">
            <div className="h-40"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <IndustryCommunities />
    </div>
  )
}
