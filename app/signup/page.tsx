import { Suspense } from "react"
import { Signup } from "@/components/signup"

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <Signup />
    </Suspense>
  )
}
