import type { Metadata } from "next"
import { CentralizedCommunity } from "@/components/centralized-community"

export const metadata: Metadata = {
  title: "Baby Products Community | Moqify",
  description:
    "Join the Baby Products trading community on Moqify. Connect with other businesses to share MOQs for various baby care items and accessories.",
}

const babyProductsCategories = [
  "Diapers & Wipes (Disposable Diapers, Cloth Diapers, Baby Wipes)",
  "Baby Skincare (Lotions, Oils, Powders, Sunscreen)",
  "Feeding Essentials (Baby Bottles, Formula, Bibs, Sterilizers)",
  "Clothing & Accessories (Onesies, Socks, Hats, Mittens)",
  "Baby Gear (Strollers, Car Seats, Baby Carriers, High Chairs)",
  "Nursery & Bedding (Cribs, Mattresses, Blankets, Mosquito Nets)",
  "Toys & Learning (Rattles, Teething Toys, Activity Gyms, Storybooks)",
  "Health & Safety (Thermometers, Nasal Aspirators, Baby Monitors)",
]

export default function BabyProductsCommunityPage({ params }: { params: { country: string } }) {
  return (
    <CentralizedCommunity
      country={params.country}
      industry="Baby Products"
      categories={babyProductsCategories}
      description="Join other baby product importers to share MOQs and reduce costs. Select your preferred product category below to get started."
      callToAction="Join now and import baby products at the best rates!"
    />
  )
}
