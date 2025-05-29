"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Import createClient directly in the component to ensure fresh instance
import { createClient } from "@supabase/supabase-js"

export function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [debugInfo, setDebugInfo] = useState<any>(null)
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [supabaseInstance, setSupabaseInstance] = useState<any>(null)

  useEffect(() => {
    // Ensure component only runs on client-side
    setIsMounted(true)
  }, [])

  // Initialize Supabase client directly in the component
  useEffect(() => {
    if (!isMounted) return

    try {
      // Use a hardcoded URL for development to avoid URL construction issues
      const supabaseUrl = "https://tgvkiuqyghfezabpqsqj.supabase.co"
      const supabaseAnonKey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRndmtpdXF5Z2hmZXphYnBxc3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNjQ5NDEsImV4cCI6MjA1ODc0MDk0MX0.DD_zjhiI3wmwPAMtevKzqn1GqF0lwxK3QmD3fmIDxeo"

      // Validate URL before creating client
      if (!supabaseUrl || !supabaseUrl.startsWith("https://")) {
        throw new Error("Invalid Supabase URL. Must be a valid HTTPS URL.")
      }

      // Create a fresh Supabase client instance
      const supabase = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: false, // Set to false to avoid URL parsing issues
        },
      })

      setSupabaseInstance(supabase)

      // Debug info
      setDebugInfo({
        url: supabaseUrl,
        anonKey: supabaseAnonKey ? `${supabaseAnonKey.substring(0, 10)}...` : "Not set",
        clientInitialized: !!supabase,
      })
    } catch (error: any) {
      console.error("Error initializing Supabase client:", error)
      setError(`Authentication initialization error: ${error.message}`)
    }
  }, [isMounted])

  useEffect(() => {
    if (!isMounted) return

    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMounted])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Check if Supabase client is available
    if (!supabaseInstance) {
      setError("Authentication client is not properly initialized. Please refresh the page and try again.")
      setLoading(false)
      return
    }

    try {
      // Validate inputs
      if (!email || !password) {
        throw new Error("Email and password are required")
      }

      console.log("Attempting to sign in with:", { email, passwordLength: password.length })

      // Try to sign in with a try/catch block to catch any unexpected errors
      try {
        // Use email sign-in with magic link as a fallback if password auth fails
        const { data, error: signInError } = await supabaseInstance.auth.signInWithPassword({
          email,
          password,
        })

        if (signInError) {
          console.error("Sign in error:", signInError)
          throw signInError
        }

        if (!data || !data.session) {
          throw new Error("No session returned from sign in")
        }

        // Successful login
        console.log("Logged in successfully", data)
        router.push("/create-wallet") // Redirect to wallet dashboard instead of home page
      } catch (signInError: any) {
        console.error("Sign in with password error:", signInError)

        // Try alternative sign-in method if password auth fails
        if (signInError.message?.includes("Invalid login credentials")) {
          setError("Invalid email or password. Please check your credentials and try again.")
        } else {
          throw signInError
        }
      }
    } catch (error: any) {
      console.error("Login error:", error)

      // Provide more detailed error messages
      if (error.message?.includes("Email not confirmed")) {
        setError("Your email has not been confirmed. Please check your inbox for a confirmation email.")
      } else if (error.message?.includes("rate limit")) {
        setError("Too many login attempts. Please try again later.")
      } else {
        setError(error.message || "Failed to login. Please try again later.")
      }
    } finally {
      setLoading(false)
    }
  }

  // Alternative login method using magic link
  const handleMagicLinkLogin = async () => {
    if (!email) {
      setError("Please enter your email address to receive a magic link")
      return
    }

    setLoading(true)
    setError("")

    try {
      if (!supabaseInstance) {
        throw new Error("Authentication client is not properly initialized")
      }

      const { error } = await supabaseInstance.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: typeof window !== "undefined" ? window.location.origin : undefined,
        },
      })

      if (error) throw error

      setError("")
      alert("Check your email for the login link!")
    } catch (error: any) {
      console.error("Magic link error:", error)
      setError(error.message || "Failed to send magic link. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // Don't render anything during SSR
  if (!isMounted) {
    return null
  }

  // Mobile-specific login UI
  if (isMobile) {
    return (
      <div className="min-h-screen bg-blue-600">
        {/* Logo Section */}
        <div className="w-full flex justify-center pt-16 pb-8">
          <div className="w-48 h-12 relative">
            <h1 className="text-white text-3xl font-bold text-center">Moqify</h1>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-t-[2.5rem] min-h-[calc(100vh-9rem)] p-8">
          <div className="max-w-md mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-gray-900">
                Welcome back to <span className="text-blue-600">Moqify</span>
              </h1>
            </div>

            {!supabaseInstance && (
              <div className="p-4 bg-red-100 border border-red-200 text-red-600 rounded-md">
                <p className="font-medium mb-2">Authentication Initializing</p>
                <p className="text-sm">Please wait while we initialize the authentication system...</p>
                {debugInfo && (
                  <div className="mt-2 text-xs bg-red-50 p-2 rounded">
                    <p>URL: {debugInfo.url}</p>
                    <p>Anon Key: {debugInfo.anonKey}</p>
                    <p>Client Initialized: {debugInfo.clientInitialized ? "Yes" : "No"}</p>
                  </div>
                )}
              </div>
            )}

            {error && <div className="p-3 bg-red-100 border border-red-200 text-red-600 rounded-md">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  disabled={!supabaseInstance || loading}
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
                    disabled={!supabaseInstance || loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    disabled={!supabaseInstance || loading}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <div className="flex justify-end">
                  <Link href="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700"
                disabled={!supabaseInstance || loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full h-12 text-base"
                onClick={handleMagicLinkLogin}
                disabled={!supabaseInstance || loading || !email}
              >
                Sign in with Magic Link
              </Button>
            </form>

            <div className="text-center">
              <p className="text-base text-gray-900">
                New to Moqify?{" "}
                <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-700">
                  Sign Up for free
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Desktop login UI
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <Navigation />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back to <span className="text-blue-600">Moqify</span>
              </h1>
              <p className="text-gray-600 mt-2">Sign in to your account</p>
            </div>

            {!supabaseInstance && (
              <div className="p-4 bg-red-100 border border-red-200 text-red-600 rounded-md mb-6">
                <p className="font-medium mb-2">Authentication Initializing</p>
                <p className="text-sm">Please wait while we initialize the authentication system...</p>
                {debugInfo && (
                  <div className="mt-2 text-xs bg-red-50 p-2 rounded">
                    <p>URL: {debugInfo.url}</p>
                    <p>Anon Key: {debugInfo.anonKey}</p>
                    <p>Client Initialized: {debugInfo.clientInitialized ? "Yes" : "No"}</p>
                  </div>
                )}
              </div>
            )}

            {error && <div className="p-3 bg-red-100 border border-red-200 text-red-600 rounded-md mb-6">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  disabled={!supabaseInstance || loading}
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
                    disabled={!supabaseInstance || loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    disabled={!supabaseInstance || loading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <div className="flex justify-end">
                  <Link href="/forgot-password" className="text-xs font-medium text-blue-600 hover:text-blue-700">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={!supabaseInstance || loading}>
                {loading ? "Signing In..." : "Sign In"}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleMagicLinkLogin}
                disabled={!supabaseInstance || loading || !email}
              >
                Sign in with Magic Link
              </Button>
            </form>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                New to Moqify?{" "}
                <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-700">
                  Sign Up for free
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
