"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

export default function SupabaseDebugPage() {
  const [supabaseInfo, setSupabaseInfo] = useState({
    url: "",
    anonKey: "",
    clientInitialized: false,
  })

  useEffect(() => {
    // Get Supabase configuration info for debugging
    const supabaseUrl = "https://tgvkiuqyghfezabpqsqj.supabase.co"
    const supabaseAnonKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRndmtpdXF5Z2hmZXphYnBxc3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNjQ5NDEsImV4cCI6MjA1ODc0MDk0MX0.DD_zjhiI3wmwPAMtevKzqn1GqF0lwxK3QmD3fmIDxeo"

    setSupabaseInfo({
      url: supabaseUrl || "Not set",
      anonKey: supabaseAnonKey ? `${supabaseAnonKey.substring(0, 10)}...` : "Not set",
      clientInitialized: !!supabase,
    })
  }, [])

  const testConnection = async () => {
    if (!supabase) {
      alert("Supabase client is not initialized")
      return
    }

    try {
      const { error } = await supabase.from("profiles").select("count", { count: "exact", head: true })

      if (error) {
        alert(`Error connecting to Supabase: ${error.message}`)
      } else {
        alert("Successfully connected to Supabase!")
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient">
      <Navigation />
      <main className="container py-20 md:py-32">
        <h1 className="text-3xl font-bold mb-8 text-center">Supabase Debug Information</h1>

        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle>Supabase Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium">Supabase URL:</p>
              <p className="text-sm bg-gray-100 p-2 rounded">{supabaseInfo.url}</p>
            </div>

            <div>
              <p className="font-medium">Supabase Anon Key (partial):</p>
              <p className="text-sm bg-gray-100 p-2 rounded">{supabaseInfo.anonKey}</p>
            </div>

            <div>
              <p className="font-medium">Client Initialized:</p>
              <p
                className={`text-sm font-medium ${supabaseInfo.clientInitialized ? "text-green-600" : "text-red-600"}`}
              >
                {supabaseInfo.clientInitialized ? "Yes" : "No"}
              </p>
            </div>

            <Button onClick={testConnection} disabled={!supabaseInfo.clientInitialized}>
              Test Connection
            </Button>
          </CardContent>
        </Card>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Troubleshooting Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <p className="font-medium">Check Supabase URL format</p>
                <p className="text-sm text-gray-600">
                  Make sure the URL starts with https:// and has no trailing slash
                </p>
              </li>

              <li>
                <p className="font-medium">Verify Anon Key</p>
                <p className="text-sm text-gray-600">Ensure the anon key is correctly copied from Supabase dashboard</p>
              </li>

              <li>
                <p className="font-medium">Check browser console for errors</p>
                <p className="text-sm text-gray-600">Open developer tools (F12) and look for any error messages</p>
              </li>

              <li>
                <p className="font-medium">Restart development server</p>
                <p className="text-sm text-gray-600">Stop and restart your Next.js development server</p>
              </li>
            </ol>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
