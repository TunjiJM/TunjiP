"use client"

import type { ReactNode } from "react"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export function ClientSideWrapper({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()
  const [isMounted, setIsMounted] = useState(false)

  // Ensure component only renders on client-side
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Return nothing during SSR
  }

  return <>{children}</>
}
