"use client"

import { type ReactNode, useState, useEffect } from "react"

interface ClientSideWrapperProps {
  children: ReactNode
  fallback?: ReactNode
}

export function ClientSideWrapper({ children, fallback = <div>Loading...</div> }: ClientSideWrapperProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return fallback
  }

  return <>{children}</>
}
