"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export function AuthButtons({ mobile = false }: { mobile?: boolean }) {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [configured, setConfigured] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const checkUser = async () => {
      // Check if Supabase is configured
      if (!isSupabaseConfigured()) {
        setConfigured(false)
        setLoading(false)
        return
      }

      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()
        setUser(session?.user || null)

        // Set up auth state listener
        const {
          data: { subscription },
        } = await supabase.auth.onAuthStateChange((_event, session) => {
          setUser(session?.user || null)
        })

        return () => {
          subscription.unsubscribe()
        }
      } catch (error) {
        console.error("Error checking auth status:", error)
      } finally {
        setLoading(false)
      }
    }

    checkUser()
  }, [isMounted])

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
      router.push("/")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  // Don't render anything during SSR
  if (!isMounted) {
    return null
  }

  if (loading) {
    return null
  }

  if (!configured) {
    if (mobile) {
      return (
        <Link href="/supabase-config" className="text-lg font-medium text-red-600 hover:text-red-800 transition-colors">
          Setup Supabase
        </Link>
      )
    }

    return (
      <Button asChild variant="destructive">
        <Link href="/supabase-config">Setup Supabase</Link>
      </Button>
    )
  }

  if (user) {
    if (mobile) {
      return (
        <>
          <Link href="/profile" className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors">
            My Profile
          </Link>
          <button
            onClick={handleSignOut}
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Sign Out
          </button>
        </>
      )
    }

    return (
      <div className="flex items-center gap-4">
        <Button asChild variant="outline">
          <Link href="/profile">My Profile</Link>
        </Button>
        <Button onClick={handleSignOut} variant="ghost">
          Sign Out
        </Button>
      </div>
    )
  }

  if (mobile) {
    return (
      <>
        <Link href="/login" className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors">
          Log In
        </Link>
        <Link href="/signup" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
          Sign Up
        </Link>
      </>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <Button asChild variant="outline">
        <Link href="/login">Log In</Link>
      </Button>
      <Button asChild>
        <Link href="/signup">Sign Up</Link>
      </Button>
    </div>
  )
}
