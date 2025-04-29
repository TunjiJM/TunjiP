import type { Metadata } from "next"
import { CentralizedCommunity } from "@/components/centralized-community"

export const metadata: Metadata = {
  title: "Hair Community | Moqify",
  description:
    "Join the Hair trading community on Moqify. Connect with other businesses to share MOQs for various hair products and accessories.",
}

const hairCategories = [
  "Hair Extensions (Human Hair, Synthetic Hair, Clip-ins, Wigs)",
  "Weaves & Braids (Closure Weaves, Curly Weaves, Box Braids, Twist Braids)",
  "Wigs & Frontals (Lace Front Wigs, Full Lace Wigs, 360 Frontals)",
  "Hair Care Products (Shampoos, Conditioners, Hair Oils, Leave-in Treatments)",
  "Styling Products (Edge Control, Gels, Hair Sprays, Mousse)",
  "Hair Accessories (Bonnets, Headbands, Clips, Scrunchies)",
  "Hair Tools & Equipment (Blow Dryers, Curling Irons, Flat Irons, Combs)",
  "Men's Hair & Grooming (Beard Oils, Pomades, Hair Growth Serums)",
]

export default function HairCommunityPage({ params }: { params: { country: string } }) {
  return (
    <CentralizedCommunity
      country={params.country}
      industry="Hair"
      categories={hairCategories}
      description="Join other hair importers to share MOQs and reduce costs. Select your preferred product category below to get started."
      callToAction="Join now and import hair products at the best rates!"
    />
  )
}
