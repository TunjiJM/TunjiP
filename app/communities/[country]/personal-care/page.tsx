import type { Metadata } from "next"
import { CentralizedCommunity } from "@/components/centralized-community"

export const metadata: Metadata = {
  title: "Personal Care Community | Moqify",
  description:
    "Join the Personal Care trading community on Moqify. Connect with other businesses to share MOQs for various beauty and personal care products.",
}

const personalCareCategories = [
  "Skincare (Moisturizers, Serums, Face Wash, Sunscreen)",
  "Haircare (Shampoos, Conditioners, Hair Oils, Styling Gels)",
  "Body Care (Lotions, Body Wash, Deodorants, Scrubs)",
  "Oral Care (Toothpaste, Mouthwash, Toothbrushes, Whitening Kits)",
  "Fragrances (Perfumes, Body Mists, Roll-ons, Cologne)",
  "Men's Grooming (Shaving Creams, Aftershave, Beard Oils, Pomades)",
  "Feminine Care (Sanitary Pads, Tampons, Intimate Wash, Panty Liners)",
  "Baby Care (Baby Lotions, Wipes, Diaper Creams, Baby Shampoo)",
]

export default function PersonalCareCommunityPage({ params }: { params: { country: string } }) {
  return (
    <CentralizedCommunity
      country={params.country}
      industry="Personal Care"
      categories={personalCareCategories}
      description="Join other beauty and personal care importers to share MOQs and reduce costs. Select your preferred product category below to get started."
      callToAction="Join now and import personal care products affordably!"
    />
  )
}
