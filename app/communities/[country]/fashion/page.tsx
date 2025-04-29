import type { Metadata } from "next"
import { CentralizedCommunity } from "@/components/centralized-community"

export const metadata: Metadata = {
  title: "Fashion Community | Moqify",
  description:
    "Join the Fashion trading community on Moqify. Connect with other businesses to share MOQs for various fashion products.",
}

const fashionCategories = [
  "Men's Clothing (T-shirts, Jeans, Suits, Jackets)",
  "Women's Clothing (Dresses, Blouses, Skirts, Trousers)",
  "Children's Wear (Baby Clothes, School Uniforms, Playwear)",
  "Shoes & Footwear (Sneakers, Sandals, Formal Shoes, Boots)",
  "Bags & Accessories (Handbags, Backpacks, Belts, Hats)",
  "Jewelry & Watches (Gold, Silver, Bracelets, Smartwatches)",
  "Fabrics & Textiles (Cotton, Silk, Lace, Ankara, Denim)",
  "Undergarments & Loungewear (Lingerie, Sleepwear, Boxers)",
]

export default function FashionCommunityPage({ params }: { params: { country: string } }) {
  return (
    <CentralizedCommunity
      country={params.country}
      industry="Fashion"
      categories={fashionCategories}
      description="Join other fashion importers to share MOQs and reduce costs. Select your preferred product category below to get started."
      callToAction="Join now and import fashion affordably!"
    />
  )
}
