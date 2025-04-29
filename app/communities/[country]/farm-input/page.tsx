import type { Metadata } from "next"
import { CentralizedCommunity } from "@/components/centralized-community"

export const metadata: Metadata = {
  title: "Farm Input Community | Moqify",
  description:
    "Join the Farm Input trading community on Moqify. Connect with other businesses to share MOQs for various agricultural products and equipment.",
}

const farmInputCategories = [
  "Seeds & Seedlings (Hybrid Seeds, Fruit Seedlings, Vegetable Seeds)",
  "Fertilizers (Organic, NPK, Urea, Compost, Micronutrients)",
  "Agrochemicals (Herbicides, Pesticides, Fungicides, Growth Regulators)",
  "Farm Machinery & Equipment (Tractors, Sprayers, Irrigation Systems)",
  "Animal Feed & Supplements (Poultry Feed, Cattle Feed, Aqua Feed, Premixes)",
  "Livestock & Poultry Supplies (Vaccines, Medications, Incubators, Feeders)",
  "Greenhouse & Hydroponic Supplies (Grow Lights, Netting, Nutrient Solutions)",
  "Packaging & Storage (Sacks, Silos, Crates, Moisture Control Bags)",
]

export default function FarmInputCommunityPage({ params }: { params: { country: string } }) {
  return (
    <CentralizedCommunity
      country={params.country}
      industry="Farm Input"
      categories={farmInputCategories}
      description="Join other agricultural importers to share MOQs and reduce costs. Select your preferred product category below to get started."
      callToAction="Join now and import farm inputs at the best rates!"
    />
  )
}
