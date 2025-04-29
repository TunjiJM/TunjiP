import type { Metadata } from "next"
import { AboutUs } from "@/components/about-us"

export const metadata: Metadata = {
  title: "About Moqify | Revolutionizing MOQ Sharing for Businesses Worldwide",
  description:
    "Moqify connects small and medium enterprises (SMEs) with verified manufacturers, enabling them to share MOQs, save costs, and scale their businesses seamlessly.",
}

export default function AboutPage() {
  return <AboutUs />
}
