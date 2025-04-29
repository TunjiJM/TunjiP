import type { Metadata } from "next"
import { CentralizedCommunity } from "@/components/centralized-community"

export const metadata: Metadata = {
  title: "Kitchenware Community | Moqify",
  description:
    "Join the Kitchenware trading community on Moqify. Connect with other businesses to share MOQs for various kitchen products and appliances.",
}

const kitchenwareCategories = [
  "Cookware (Pots, Pans, Woks, Pressure Cookers)",
  "Tableware (Plates, Bowls, Cutlery, Serving Trays)",
  "Kitchen Appliances (Blenders, Air Fryers, Coffee Makers, Rice Cookers)",
  "Bakeware (Oven Trays, Cake Pans, Muffin Molds, Rolling Pins)",
  "Food Storage (Plastic Containers, Glass Jars, Vacuum Seal Bags)",
  "Utensils & Gadgets (Spatulas, Whisks, Peelers, Measuring Cups)",
  "Drinkware (Mugs, Glasses, Kettles, Water Bottles)",
  "Disposable Kitchenware (Paper Plates, Foil Wraps, Plastic Cutlery)",
]

export default function KitchenwareCommunityPage({ params }: { params: { country: string } }) {
  return (
    <CentralizedCommunity
      country={params.country}
      industry="Kitchenware"
      categories={kitchenwareCategories}
      description="Join other kitchenware importers to share MOQs and reduce costs. Select your preferred product category below to get started."
      callToAction="Join now and import kitchenware at the best rates!"
    />
  )
}
