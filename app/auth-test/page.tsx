"use client"

import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AuthTestPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("")
  const [details, setDetails] = useState<any>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const testSupabaseAuth = async () => {
      try {
        // Use hardcoded values to avoid URL construction issues
        const supabaseUrl = "https://tgvkiuqyghfezabpqsqj.supabase.co"
        const supabaseAnonKey =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRndmtpdXF5Z2hmZXphYnBxc3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNjQ5NDEsImV4cCI6MjA1ODc0MDk0MX0.DD_zjhiI3wmwPAMtevKzqn1GqF0lwxK3QmD3fmIDxeo"

        setDetails({
          url: supabaseUrl,
          keyPrefix: supabaseAnonKey ? supabaseAnonKey.substring(0, 10) + "..." : "Not set",
        })

        // Create a fresh Supabase client instance
        const supabase = createClient(supabaseUrl, supabaseAnonKey, {
          auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false, // Set to false to avoid URL parsing issues
          },
        })

        // Test if we can get the auth session
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          throw error
        }

        setStatus("success")
        setMessage(
          data.session
            ? `Authentication working! User is logged in as: ${data.session.user.email}`
            : "Authentication working! No user is currently logged in.",
        )
      } catch (error: any) {
        console.error("Auth test error:", error)
        setStatus("error")
        setMessage(`Authentication error: ${error.message || "Unknown error"}`)
      }
    }

    testSupabaseAuth()
  }, [isMounted])

  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <Navigation />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Supabase Authentication Test</CardTitle>
            </CardHeader>
            <CardContent>
              {status === "loading" && <p>Testing authentication...</p>}

              {status === "success" && (
                <div className="space-y-4">
                  <div className="p-3 bg-green-100 text-green-700 rounded-md">{message}</div>
                  {details && (
                    <div className="text-sm">
                      <p>
                        <strong>Supabase URL:</strong> {details.url}
                      </p>
                      <p>
                        <strong>Anon Key:</strong> {details.keyPrefix}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {status === "error" && (
                <div className="space-y-4">
                  <div className="p-3 bg-red-100 text-red-700 rounded-md">{message}</div>
                  {details && (
                    <div className="text-sm">
                      <p>
                        <strong>Supabase URL:</strong> {details.url}
                      </p>
                      <p>
                        <strong>Anon Key:</strong> {details.keyPrefix}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-6">
                <Button onClick={() => window.location.reload()} className="w-full">
                  Test Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
