import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const token = requestUrl.searchParams.get("token")
  const type = requestUrl.searchParams.get("type")

  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  // Handle code exchange (OAuth or magic link)
  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  // Handle email verification token
  if ((token && type === "email_change") || type === "signup") {
    try {
      await supabase.auth.verifyOtp({
        token_hash: token,
        type: "email",
      })
    } catch (error) {
      console.error("Error verifying email:", error)
      // Continue anyway, as we'll redirect the user
    }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(new URL("/", requestUrl.origin))
}
