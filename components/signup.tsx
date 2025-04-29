"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ReactCountryFlag } from "react-country-flag"

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

export function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [country, setCountry] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [confirmationInstructions, setConfirmationInstructions] = useState(false)
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (!country) {
      setError("Please select your country")
      setLoading(false)
      return
    }

    // Check if Supabase client is available
    if (!supabase || !isSupabaseConfigured()) {
      setError("Supabase client is not properly configured. Please check your configuration.")
      setLoading(false)
      return
    }

    try {
      // For development, we'll use a special redirect approach
      // In production, you would use your actual domain
      const redirectTo =
        process.env.NODE_ENV === "production"
          ? `${window.location.origin}/auth/callback`
          : "https://tgvkiuqyghfezabpqsqj.supabase.co/auth/v1/verify"

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            company_name: companyName,
            country: country,
          },
          // In development, we'll skip the redirect
          emailRedirectTo: process.env.NODE_ENV === "production" ? redirectTo : undefined,
        },
      })

      if (error) throw error

      // Successful signup
      console.log("Signed up successfully", data)
      setSuccess(true)

      // In development, show special instructions
      if (process.env.NODE_ENV !== "production") {
        setConfirmationInstructions(true)
      }
    } catch (error: any) {
      console.error("Signup error:", error)
      setError(error.message || "Failed to sign up")
    } finally {
      setLoading(false)
    }
  }

  // Mobile-specific signup UI
  if (isMobile) {
    return (
      <div className="min-h-screen bg-blue-600">
        {/* Logo Section */}
        <div className="w-full flex justify-center pt-16 pb-8">
          <div className="w-48 h-12 relative">
            <h1 className="text-white text-3xl font-bold text-center">Moqify</h1>
          </div>
        </div>

        {/* Signup Card */}
        <div className="bg-white rounded-t-[2.5rem] min-h-[calc(100vh-9rem)] p-8">
          <div className="max-w-md mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-gray-900">
                Join <span className="text-blue-600">Moqify</span> today
              </h1>
              <p className="text-gray-600">Create an account to start sharing MOQs with other businesses</p>
            </div>

            {!supabase && (
              <div className="p-4 bg-red-100 border border-red-200 text-red-600 rounded-md">
                <p className="font-medium mb-2">Supabase Connection Error</p>
                <p className="text-sm">
                  Unable to initialize Supabase client. Please check your configuration and try again.
                </p>
              </div>
            )}

            {error && <div className="p-3 bg-red-100 border border-red-200 text-red-600 rounded-md">{error}</div>}

            {success ? (
              <div className="p-6 bg-green-50 border border-green-100 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Registration Successful!</h3>
                <p className="text-gray-600 mb-4">
                  Please check your email for a confirmation link to complete your registration.
                </p>

                {confirmationInstructions && (
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-md text-left">
                    <h4 className="font-medium text-blue-700 mb-2">Development Environment Instructions:</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Since you're in development mode, the confirmation link in your email might point to localhost,
                      which won't work on mobile devices.
                    </p>
                    <p className="text-sm text-gray-700 mb-2">To confirm your account, please:</p>
                    <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-1">
                      <li>Open the Supabase dashboard</li>
                      <li>Go to Authentication → Users</li>
                      <li>Find your user and confirm it manually</li>
                    </ol>
                    <p className="text-sm text-gray-700 mt-2">
                      Alternatively, you can copy the token from the email link and use it with the Supabase API
                      directly.
                    </p>
                  </div>
                )}

                <Button asChild className="mt-4">
                  <Link href="/login">Go to Login</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-base font-medium text-gray-900">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="h-12 px-4 bg-gray-50"
                    required
                    disabled={!supabase || loading}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="companyName" className="text-base font-medium text-gray-900">
                    Company Name
                  </label>
                  <Input
                    id="companyName"
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Your Company Ltd."
                    className="h-12 px-4 bg-gray-50"
                    required
                    disabled={!supabase || loading}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="country" className="text-base font-medium text-gray-900">
                    Country
                  </label>
                  <Select value={country} onValueChange={setCountry} disabled={!supabase || loading}>
                    <SelectTrigger className="h-12 px-4 bg-gray-50">
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

                <div className="space-y-2">
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="h-12 px-4 bg-gray-50"
                    required
                    disabled={!supabase || loading}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12 px-4 bg-gray-50 pr-12"
                      required
                      minLength={6}
                      disabled={!supabase || loading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      disabled={!supabase || loading}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">Password must be at least 6 characters</p>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700"
                  disabled={!supabase || loading}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
            )}

            <div className="text-center">
              <p className="text-base text-gray-900">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-blue-600 hover:text-blue-700">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Desktop signup UI
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <Navigation />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Join <span className="text-blue-600">Moqify</span> today
              </h1>
              <p className="text-gray-600 mt-2">Create an account to start sharing MOQs with other businesses</p>
            </div>

            {!supabase && (
              <div className="p-4 bg-red-100 border border-red-200 text-red-600 rounded-md mb-6">
                <p className="font-medium mb-2">Supabase Connection Error</p>
                <p className="text-sm">
                  Unable to initialize Supabase client. Please check your configuration and try again.
                </p>
              </div>
            )}

            {error && <div className="p-3 bg-red-100 border border-red-200 text-red-600 rounded-md mb-6">{error}</div>}

            {success ? (
              <div className="p-6 bg-green-50 border border-green-100 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Registration Successful!</h3>
                <p className="text-gray-600 mb-4">
                  Please check your email for a confirmation link to complete your registration.
                </p>

                {confirmationInstructions && (
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-md text-left">
                    <h4 className="font-medium text-blue-700 mb-2">Development Environment Instructions:</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Since you're in development mode, the confirmation link in your email might point to localhost,
                      which won't work on mobile devices.
                    </p>
                    <p className="text-sm text-gray-700 mb-2">To confirm your account, please:</p>
                    <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-1">
                      <li>Open the Supabase dashboard</li>
                      <li>Go to Authentication → Users</li>
                      <li>Find your user and confirm it manually</li>
                    </ol>
                    <p className="text-sm text-gray-700 mt-2">
                      Alternatively, you can copy the token from the email link and use it with the Supabase API
                      directly.
                    </p>
                  </div>
                )}

                <Button asChild className="mt-4">
                  <Link href="/login">Go to Login</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="desktop-fullName" className="text-sm font-medium text-gray-900">
                    Full Name
                  </label>
                  <Input
                    id="desktop-fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="h-10"
                    required
                    disabled={!supabase || loading}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="desktop-companyName" className="text-sm font-medium text-gray-900">
                    Company Name
                  </label>
                  <Input
                    id="desktop-companyName"
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Your Company Ltd."
                    className="h-10"
                    required
                    disabled={!supabase || loading}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="desktop-country" className="text-sm font-medium text-gray-900">
                    Country
                  </label>
                  <Select value={country} onValueChange={setCountry} disabled={!supabase || loading}>
                    <SelectTrigger className="h-10">
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

                <div className="space-y-2">
                  <label htmlFor="desktop-email" className="text-sm font-medium text-gray-900">
                    Email Address
                  </label>
                  <Input
                    id="desktop-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="h-10"
                    required
                    disabled={!supabase || loading}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="desktop-password" className="text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="desktop-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-10 pr-12"
                      required
                      minLength={6}
                      disabled={!supabase || loading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      disabled={!supabase || loading}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">Password must be at least 6 characters</p>
                </div>

                <Button type="submit" className="w-full" disabled={!supabase || loading}>
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
            )}

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-blue-600 hover:text-blue-700">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
