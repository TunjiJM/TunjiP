"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ReactCountryFlag } from "react-country-flag"

interface CentralizedCommunityProps {
  country: string
  industry: string
  categories: string[]
  description: string
  callToAction: string
}

export function CentralizedCommunity({
  country,
  industry,
  categories,
  description,
  callToAction,
}: CentralizedCommunityProps) {
  const countryName = decodeURIComponent(country)
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [userCountry, setUserCountry] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  // Get country name from code
  const getCountryName = (code: string) => {
    const countries: Record<string, string> = {
      US: "United States",
      GB: "United Kingdom",
      NG: "Nigeria",
      GH: "Ghana",
      KE: "Kenya",
      ZA: "South Africa",
      IN: "India",
      CN: "China",
      // Add more as needed
    }
    return countries[code] || code
  }

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        router.push("/login")
        return
      }

      setUser(session.user)

      // Get user's country from their profile
      const { data: profile } = await supabase.from("profiles").select("country").eq("id", session.user.id).single()

      if (profile && profile.country) {
        setUserCountry(profile.country)
      }

      setLoading(false)
    }

    checkUser()
  }, [router])

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-blue-600 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt={`${industry} market`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-600/75 backdrop-blur-sm" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl flex items-center gap-4">
              <ReactCountryFlag
                countryCode={country}
                svg
                style={{
                  width: "3em",
                  height: "3em",
                }}
                className="rounded shadow-md"
              />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {industry} Community - {getCountryName(country)}
                </h1>
                <p className="text-xl mb-6">{description}</p>
              </div>
            </div>

            {userCountry && userCountry !== country && (
              <div className="mt-6 p-4 bg-yellow-100 text-yellow-800 rounded-lg max-w-3xl">
                <p className="font-medium">
                  You're viewing the {getCountryName(country)} community, but your profile is set to{" "}
                  {getCountryName(userCountry)}.
                </p>
                <Button
                  onClick={() => router.push(`/communities/${userCountry}/${industry.toLowerCase()}`)}
                  className="mt-2 bg-yellow-200 text-yellow-800 hover:bg-yellow-300"
                >
                  Switch to {getCountryName(userCountry)} Community
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Product Categories</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <div key={category} className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-lg font-semibold">🔹 {category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-blue-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{callToAction}</h2>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => router.push(`/communities/${country}/${industry.toLowerCase()}/chat`)}
            >
              Join the Community Chat
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
