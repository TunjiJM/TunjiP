import type { Metadata } from "next"
import { CentralizedCommunity } from "@/components/centralized-community"

export const metadata: Metadata = {
  title: "Chemical Community | Moqify",
  description:
    "Join the Chemical trading community on Moqify. Connect with other businesses to share MOQs for various chemical products.",
}

const chemicalCategories = [
  "Industrial Chemicals (Acids, Solvents, Dyes, Surfactants)",
  "Laboratory Chemicals (Reagents, Buffers, Indicators, Culture Media)",
  "Water Treatment Chemicals (Chlorine, Alum, Activated Carbon, Flocculants)",
  "Agrochemicals (Fertilizers, Pesticides, Herbicides, Fungicides)",
  "Petrochemicals (Lubricants, Resins, Plasticizers, Polymers)",
  "Food & Pharmaceutical Chemicals (Preservatives, Sweeteners, Emulsifiers, APIs)",
  "Cleaning & Detergent Chemicals (Surfactants, Sodium Hydroxide, Bleaching Agents)",
  "Textile & Leather Chemicals (Dyes, Tanning Agents, Finishing Chemicals)",
]

export default function ChemicalCommunityPage({ params }: { params: { country: string } }) {
  return (
    <CentralizedCommunity
      country={params.country}
      industry="Chemical"
      categories={chemicalCategories}
      description="Join other chemical importers to share MOQs and reduce costs. Select your preferred product category below to get started."
      callToAction="Join now and import chemicals at competitive prices!"
    />
  )
}
