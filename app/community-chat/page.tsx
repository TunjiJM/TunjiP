import { CommunityRooms } from "@/components/community-rooms"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient">
      <Navigation />
      <main className="container py-8 md:py-12">
        <CommunityRooms />
      </main>
      <Footer />
    </div>
  )
}
