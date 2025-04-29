"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SupabaseConnectionTest() {
  const [status, setStatus] = useState<"loading" | "connected" | "error">("loading")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    async function checkConnection() {
      try {
        // A simple query to check if we can connect to Supabase
        const { data, error } = await supabase.from("_dummy_query").select("*").limit(1)

        if (error && error.code !== "PGRST116") {
          // If it's not the expected "relation does not exist" error, it's a connection issue
          throw error
        }

        // If we get here, we're connected (even if the table doesn't exist)
        setStatus("connected")
      } catch (error) {
        console.error("Supabase connection error:", error)
        setStatus("error")
        setErrorMessage(error instanceof Error ? error.message : "Unknown error")
      }
    }

    checkConnection()
  }, [])

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Supabase Connection Status</CardTitle>
      </CardHeader>
      <CardContent>
        {status === "loading" && <p className="text-amber-500">Checking connection...</p>}

        {status === "connected" && (
          <div className="space-y-2">
            <p className="text-green-600 font-medium">✅ Connected to Supabase successfully!</p>
            <p className="text-sm text-gray-600">
              Your environment variables are correctly set up and the Supabase client can communicate with your project.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="space-y-2">
            <p className="text-red-600 font-medium">❌ Failed to connect to Supabase</p>
            {errorMessage && (
              <p className="text-sm text-gray-600 p-2 bg-gray-100 rounded overflow-auto">{errorMessage}</p>
            )}
            <p className="text-sm text-gray-600">
              Please check your environment variables and make sure your Supabase project is running.
            </p>
          </div>
        )}

        <Button
          onClick={() => window.location.reload()}
          className="mt-4 w-full"
          variant={status === "error" ? "destructive" : "default"}
        >
          Test Again
        </Button>
      </CardContent>
    </Card>
  )
}
