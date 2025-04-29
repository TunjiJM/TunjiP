import type { Metadata } from "next"
import { HowToUse } from "@/components/how-to-use"

export const metadata: Metadata = {
  title: "How to Use Moqify | Simplifying MOQ Sharing",
  description:
    "Learn how Moqify connects you with manufacturers, streamlines order sharing, and ensures smooth delivery—all in just a few simple steps.",
}

export default function HowToUsePage() {
  return <HowToUse />
}
