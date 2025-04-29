"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"
import { ReactCountryFlag } from "react-country-flag"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Updated and sorted countries list
const countries = [
  { code: "AE", name: "United Arab Emirates" },
  { code: "AR", name: "Argentina" },
  { code: "AU", name: "Australia" },
  { code: "BD", name: "Bangladesh" },
  { code: "BR", name: "Brazil" },
  { code: "CA", name: "Canada" },
  { code: "CD", name: "Democratic Republic of Congo" },
  { code: "CI", name: "Côte d'Ivoire" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CO", name: "Colombia" },
  { code: "DE", name: "Germany" },
  { code: "DZ", name: "Algeria" },
  { code: "EG", name: "Egypt" },
  { code: "ES", name: "Spain" },
  { code: "ET", name: "Ethiopia" },
  { code: "FR", name: "France" },
  { code: "GB", name: "United Kingdom" },
  { code: "GH", name: "Ghana" },
  { code: "ID", name: "Indonesia" },
  { code: "IN", name: "India" },
  { code: "IT", name: "Italy" },
  { code: "KE", name: "Kenya" },
  { code: "MA", name: "Morocco" },
  { code: "MX", name: "Mexico" },
  { code: "MY", name: "Malaysia" },
  { code: "NG", name: "Nigeria" },
  { code: "NL", name: "Netherlands" },
  { code: "NZ", name: "New Zealand" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Philippines" },
  { code: "PK", name: "Pakistan" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "RW", name: "Rwanda" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SN", name: "Senegal" },
  { code: "TH", name: "Thailand" },
  { code: "TR", name: "Turkey" },
  { code: "TZ", name: "Tanzania" },
  { code: "UG", name: "Uganda" },
  { code: "US", name: "United States" },
  { code: "VN", name: "Vietnam" },
  { code: "ZA", name: "South Africa" },
  { code: "ZM", name: "Zambia" },
]

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<any>({
    full_name: "",
    company_name: "",
    phone: "",
    country: "",
  })
  const [updating, setUpdating] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })
  const router = useRouter()
  const isMobile = useMobile()

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

      // Fetch user profile
      const { data, error } = await supabase.from("profiles").select("*").eq("id", session.user.id).single()

      if (data) {
        setProfile({
          full_name: data.full_name || "",
          company_name: data.company_name || "",
          phone: data.phone || "",
          country: data.country || "",
        })
      }

      setLoading(false)
    }

    checkUser()
  }, [router])

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setUpdating(true)
    setMessage({ type: "", text: "" })

    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: profile.full_name,
          company_name: profile.company_name,
          phone: profile.phone,
          country: profile.country,
          updated_at: new Date(),
        })
        .eq("id", user.id)

      if (error) throw error

      setMessage({ type: "success", text: "Profile updated successfully!" })
    } catch (error: any) {
      console.error("Error updating profile:", error)
      setMessage({ type: "error", text: error.message || "Failed to update profile" })
    } finally {
      setUpdating(false)
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient">
        <Navigation />
        <main className="container py-20 md:py-32">
          <div className="flex justify-center items-center h-64">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Find country name from code
  const getCountryName = (code: string) => {
    const country = countries.find((c) => c.code === code)
    return country ? country.name : code
  }

  return (
    <div className="min-h-screen bg-gradient">
      <Navigation />
      <main className={`container ${isMobile ? "py-20" : "py-32"}`}>
        <div className="max-w-2xl mx-auto px-4">
          <h1 className={`${isMobile ? "text-2xl" : "text-3xl"} font-bold mb-8`}>Your Profile</h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className={isMobile ? "text-lg" : "text-xl"}>Account Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> {user?.email}
                </p>
                <p>
                  <strong>Member since:</strong> {new Date(user?.created_at).toLocaleDateString()}
                </p>
                {profile.country && (
                  <p className="flex items-center gap-2">
                    <strong>Country:</strong>
                    <span className="flex items-center gap-2">
                      <ReactCountryFlag
                        countryCode={profile.country}
                        svg
                        style={{
                          width: "1.2em",
                          height: "1.2em",
                        }}
                      />
                      {getCountryName(profile.country)}
                    </span>
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className={isMobile ? "text-lg" : "text-xl"}>Edit Profile</CardTitle>
            </CardHeader>
            <CardContent>
              {message.text && (
                <div
                  className={`p-3 mb-4 rounded-md ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                >
                  {message.text}
                </div>
              )}

              <form onSubmit={handleUpdateProfile} className="space-y-4">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="full_name"
                    value={profile.full_name}
                    onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <Input
                    id="company_name"
                    value={profile.company_name}
                    onChange={(e) => setProfile({ ...profile, company_name: e.target.value })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <Select value={profile.country} onValueChange={(value) => setProfile({ ...profile, country: value })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code} className="flex items-center gap-2">
                          <div className="flex items-center gap-2">
                            <ReactCountryFlag
                              countryCode={country.code}
                              svg
                              style={{
                                width: "1.2em",
                                height: "1.2em",
                              }}
                            />
                            <span>{country.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className={`${isMobile ? "flex flex-col gap-3" : "flex justify-between"} pt-4`}>
                  <Button type="submit" disabled={updating} className={isMobile ? "w-full" : ""}>
                    {updating ? "Updating..." : "Update Profile"}
                  </Button>

                  <Button type="button" variant="outline" onClick={handleSignOut} className={isMobile ? "w-full" : ""}>
                    Sign Out
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
