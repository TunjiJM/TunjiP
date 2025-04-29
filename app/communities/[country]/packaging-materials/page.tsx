import type { Metadata } from "next"
import { CentralizedCommunity } from "@/components/centralized-community"

export const metadata: Metadata = {
  title: "Packaging Materials Community | Moqify",
  description:
    "Join the Packaging Materials trading community on Moqify. Connect with other businesses to share MOQs for various packaging solutions and materials.",
}

const packagingMaterialsCategories = [
  "Plastic Packaging (Bottles, Jars, Containers, Shrink Wraps)",
  "Paper & Cardboard Packaging (Cartons, Kraft Paper Bags, Pizza Boxes)",
  "Glass Packaging (Jars, Bottles, Vials, Perfume Containers)",
  "Metal Packaging (Aluminum Cans, Tin Containers, Foil Wraps)",
  "Flexible Packaging (Stand-up Pouches, Vacuum Bags, Ziplock Bags)",
  "Food Packaging (Clamshell Containers, Paper Straws, Biodegradable Trays)",
  "Industrial Packaging (Pallet Wraps, Corrugated Boxes, Bulk Sacks)",
  "Custom Branded Packaging (Printed Boxes, Labels, Stickers, Ribbons)",
]

export default function PackagingMaterialsCommunityPage({ params }: { params: { country: string } }) {
  return (
    <CentralizedCommunity
      country={params.country}
      industry="Packaging Materials"
      categories={packagingMaterialsCategories}
      description="Join other packaging materials importers to share MOQs and reduce costs. Select your preferred product category below to get started."
      callToAction="Join now and import packaging materials at the best rates!"
    />
  )
}
