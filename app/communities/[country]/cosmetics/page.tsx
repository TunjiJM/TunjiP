import type { Metadata } from "next"
import { CentralizedCommunity } from "@/components/centralized-community"

export const metadata: Metadata = {
  title: "Cosmetics Community | Moqify",
  description:
    "Join the Cosmetics trading community on Moqify. Connect with other businesses to share MOQs for various beauty and personal care products.",
}

const cosmeticsCategories = [
  "Skincare (Moisturizers, Serums, Face Masks, Sunscreen)",
  "Makeup (Foundation, Lipstick, Eyeshadow, Mascara)",
  "Fragrances (Perfumes, Body Mists, Deodorants)",
  "Haircare (Shampoos, Conditioners, Hair Oils, Wigs)",
  "Nail Products (Nail Polish, Acrylics, Manicure Sets)",
  "Men's Grooming (Beard Oil, Aftershave, Pomade)",
  "Organic & Natural Beauty (Shea Butter, Essential Oils, Herbal Soaps)",
  "Beauty Tools & Accessories (Brushes, Sponges, Makeup Organizers)",
]

export default function CosmeticsCommunityPage({ params }: { params: { country: string } }) {
  return (
    <CentralizedCommunity
      country={params.country}
      industry="Cosmetics"
      categories={cosmeticsCategories}
      description="Join other cosmetics importers to share MOQs and reduce costs. Select your preferred product category below to get started."
      callToAction="Join now and import beauty products at the best rates!"
    />
  )
}
