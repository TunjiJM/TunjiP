import { SupabaseConnectionTest } from "@/components/supabase-connection-test"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SupabaseTestPage() {
  return (
    <div className="min-h-screen bg-gradient">
      <Navigation />
      <main className="container py-20 md:py-32">
        <h1 className="text-3xl font-bold text-center mb-8">Supabase Connection Test</h1>
        <SupabaseConnectionTest />
      </main>
      <Footer />
    </div>
  )
}
