import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { KeyFeatures } from "@/components/key-features"
import { HowItWorks } from "@/components/how-it-works"
import { Industries } from "@/components/industries"
import { Footer } from "@/components/footer"
import { ClientSideWrapper } from "@/components/client-side-wrapper"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient">
      <Navigation />
      <main className="flex min-h-screen flex-col">
        <Suspense
          fallback={<div className="pt-24 h-[60vh] flex items-center justify-center">Loading hero section...</div>}
        >
          <ClientSideWrapper
            fallback={<div className="pt-24 h-[60vh] flex items-center justify-center">Loading hero section...</div>}
          >
            <Hero />
          </ClientSideWrapper>
        </Suspense>
        <Features />
        <KeyFeatures />
        <HowItWorks />
        <Industries />
      </main>
      <Footer />
    </div>
  )
}
