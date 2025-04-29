"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { CentralizedCommunity } from "@/components/centralized-community"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const seafoodCategories = [
  "Tilapia",
  "Pollock",
  "Atlantic Mackerel",
  "Pacific Mackerel",
  "Shrimps",
  "Croaker",
  "Horse Mackerel",
  "Sardines",
  "Lobster",
  "Crab",
  "Squid",
  "Octopus",
]

export default function SeafoodCommunityPage() {
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
            router.push(`/communities/${profile.country}/seafood`)
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

  return (
    <div className="min-h-screen bg-white">
      <CentralizedCommunity
        country={countryCode}
        industry="Seafood"
        categories={seafoodCategories}
        description="Join other seafood importers to share MOQs and reduce costs. Select your preferred seafood category below to get started."
        callToAction="Stay ahead in the seafood trade—buy smarter, import better!"
      />

      <div className="fixed bottom-6 right-6">
        <Button
          onClick={() => router.push(`/communities/${countryCode}/seafood/chat`)}
          className="rounded-full h-16 w-16 bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </div>
  )
}
