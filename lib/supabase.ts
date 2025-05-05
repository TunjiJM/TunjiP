import { createClient } from "@supabase/supabase-js"

// Get environment variables with fallbacks for development
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Function to safely create the Supabase client
function createSupabaseClient() {
  // Check if we're running on the client side
  if (typeof window === "undefined") {
    // Return a minimal mock client for SSR
    return createMockClient()
  }

  try {
    // Check if required environment variables are set
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Missing Supabase URL or Anon Key. Using development values.")
      return createMockClient()
    }

    // Ensure URL is properly formatted
    let formattedUrl = supabaseUrl
    if (!formattedUrl.startsWith("https://") && !formattedUrl.startsWith("http://")) {
      formattedUrl = `https://${formattedUrl}`
    }

    // Validate URL before creating client
    try {
      new URL(formattedUrl)
    } catch (error) {
      console.error("Invalid Supabase URL:", error)
      return createMockClient()
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
    return createMockClient()
  }
}

// Create a mock client that won't throw errors
function createMockClient() {
  const mockData = {
    messages: [],
    profiles: {},
    communities: {},
  }

  return {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      onAuthStateChange: (callback) => {
        // Return an unsubscribe function
        return { data: { subscription: { unsubscribe: () => {} } } }
      },
      signOut: () => Promise.resolve({ error: null }),
      signInWithPassword: () => Promise.resolve({ data: null, error: { message: "Not available" } }),
    },
    from: (table) => {
      const mockQueryBuilder = {
        select: (columns) => mockQueryBuilder,
        eq: (column, value) => mockQueryBuilder,
        neq: (column, value) => mockQueryBuilder,
        gt: (column, value) => mockQueryBuilder,
        lt: (column, value) => mockQueryBuilder,
        gte: (column, value) => mockQueryBuilder,
        lte: (column, value) => mockQueryBuilder,
        like: (column, value) => mockQueryBuilder,
        ilike: (column, value) => mockQueryBuilder,
        is: (column, value) => mockQueryBuilder,
        in: (column, values) => mockQueryBuilder,
        contains: (column, value) => mockQueryBuilder,
        containedBy: (column, value) => mockQueryBuilder,
        range: (column, range) => mockQueryBuilder,
        textSearch: (column, query, options) => mockQueryBuilder,
        filter: (column, operator, value) => mockQueryBuilder,
        not: (column, operator, value) => mockQueryBuilder,
        or: (filters, options) => mockQueryBuilder,
        and: (filters, options) => mockQueryBuilder,
        order: (column, options) => mockQueryBuilder,
        limit: (count) => mockQueryBuilder,
        offset: (count) => mockQueryBuilder,
        single: () => Promise.resolve({ data: null, error: null }),
        maybeSingle: () => Promise.resolve({ data: null, error: null }),
        csv: () => Promise.resolve({ data: null, error: null }),
        then: (callback) => Promise.resolve(callback({ data: [], error: null })),
        match: (query) => mockQueryBuilder,
        update: (values, options) => Promise.resolve({ data: null, error: null }),
        upsert: (values, options) => Promise.resolve({ data: null, error: null }),
        delete: (options) => Promise.resolve({ data: null, error: null }),
        insert: (values, options) => Promise.resolve({ data: null, error: null }),
      }
      return mockQueryBuilder
    },
    channel: (name) => ({
      on: (event, filter, callback) => ({
        subscribe: (statusCallback) => {
          if (statusCallback) statusCallback("SUBSCRIBED")
          return {}
        },
      }),
    }),
    removeChannel: (channel) => {},
  }
}

// Create the client
export const supabase = createSupabaseClient()

// Check if Supabase is properly configured
export function isSupabaseConfigured() {
  return !!supabase && !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
}
