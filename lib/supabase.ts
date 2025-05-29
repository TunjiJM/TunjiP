import { createClient } from "@supabase/supabase-js"

// Get environment variables with fallbacks for development
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Function to safely create the Supabase client
function createSupabaseClient() {
  // Check if we're running on the client side
  if (typeof window === "undefined") {
    // Return a minimal mock client for SSR
    return {
      auth: {
        getSession: () => Promise.resolve({ data: { session: null } }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        signOut: () => Promise.resolve({ error: null }),
        signInWithPassword: () => Promise.resolve({ data: null, error: { message: "SSR not supported" } }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: null }),
          }),
        }),
      }),
    }
  }

  try {
    // Check if required environment variables are set
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Missing Supabase URL or Anon Key. Using development values.")

      // For development/demo purposes only
      const devUrl = "https://tgvkiuqyghfezabpqsqj.supabase.co"
      const devKey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRndmtpdXF5Z2hmZXphYnBxc3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNjQ5NDEsImV4cCI6MjA1ODc0MDk0MX0.DD_zjhiI3wmwPAMtevKzqn1GqF0lwxK3QmD3fmIDxeo"

      // Create client with development values
      return createClient(devUrl, devKey, {
        auth: {
          autoRefreshToken: true,
          persistSession: true,
        },
      })
    }

    // Ensure URL is properly formatted
    let formattedUrl = supabaseUrl
    if (!formattedUrl.startsWith("https://")) {
      // If it doesn't have any protocol, add https://
      if (!formattedUrl.startsWith("http://")) {
        formattedUrl = `https://${formattedUrl}`
      } else {
        // If it has http://, replace with https://
        formattedUrl = formattedUrl.replace("http://", "https://")
      }
    }

    // Create client with proper configuration
    return createClient(formattedUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
      },
    })
  } catch (error) {
    console.error("Error creating Supabase client:", error)
    return null
  }
}

// Create the client
export const supabase = createSupabaseClient()

// Check if Supabase is properly configured
export function isSupabaseConfigured() {
  return !!supabase
}
