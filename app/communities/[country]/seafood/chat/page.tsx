"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { CommunityChat } from "@/components/community-chat"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function SeafoodChatPage() {
  const params = useParams()
  const countryCode = params.country as string
  const [userCountry, setUserCountry] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkUserCountry = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()

        if (!session) {
          router.push("/login")
          return
        }

        // Get user's country from their profile
        const { data: profile } = await supabase.from("profiles").select("country").eq("id", session.user.id).single()

        if (profile && profile.country) {
          setUserCountry(profile.country)

          // If the URL country doesn't match the user's country, redirect
          if (countryCode !== profile.country) {
            router.push(`/communities/${profile.country}/seafood/chat`)
          }
        } else {
          // If user doesn't have a country set, redirect to profile
          router.push("/profile?message=Please set your country in your profile")
        }
      } catch (error) {
        console.error("Error checking user country:", error)
      } finally {
        setLoading(false)
      }
    }

    checkUserCountry()
  }, [countryCode, router])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!userCountry) {
    return null // Will redirect in useEffect
  }

  return <CommunityChat communityId="seafood" countryCode={countryCode} />
}
