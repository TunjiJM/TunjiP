import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient flex flex-col">
      <Navigation />

      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/join-community">Explore Communities</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
