"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function ManualVerifyPage() {
  const [token, setToken] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })
  const router = useRouter()

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: "", text: "" })

    if (!token) {
      setMessage({ type: "error", text: "Please enter a verification token" })
      setLoading(false)
      return
    }

    try {
      // Extract the token from the URL if it's a full URL
      let cleanToken = token
      if (token.includes("token=")) {
        const url = new URL(token)
        cleanToken = url.searchParams.get("token") || token
      }

      const { error } = await supabase.auth.verifyOtp({
        token_hash: cleanToken,
        type: "email",
      })

      if (error) throw error

      setMessage({
        type: "success",
        text: "Email verified successfully! You can now log in with your credentials.",
      })

      // Redirect to login after 3 seconds
      setTimeout(() => {
        router.push("/login")
      }, 3000)
    } catch (error: any) {
      console.error("Verification error:", error)
      setMessage({ type: "error", text: error.message || "Failed to verify email" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient">
      <Navigation />
      <main className="container py-20 md:py-32">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Manual Email Verification</h1>

          <Card>
            <CardHeader>
              <CardTitle>Verify Your Email</CardTitle>
            </CardHeader>
            <CardContent>
              {message.text && (
                <div
                  className={`p-3 mb-4 rounded-md ${
                    message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <form onSubmit={handleVerify} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="token" className="text-sm font-medium">
                    Verification Token
                  </label>
                  <Input
                    id="token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    placeholder="Paste your verification token or full URL here"
                    className="w-full"
                    disabled={loading}
                  />
                  <p className="text-xs text-gray-500">
                    Copy the token from your email verification link or paste the entire URL
                  </p>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Verifying..." : "Verify Email"}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-md">
                <h3 className="text-sm font-medium text-blue-700 mb-2">How to get your verification token:</h3>
                <ol className="list-decimal pl-5 text-xs text-gray-600 space-y-1">
                  <li>Check your email for the verification link from Supabase</li>
                  <li>Copy the entire URL or just the token parameter</li>
                  <li>Paste it in the field above and click "Verify Email"</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
