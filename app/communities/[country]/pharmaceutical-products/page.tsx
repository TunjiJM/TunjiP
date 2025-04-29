import type { Metadata } from "next"
import { IndustryCommunity } from "@/components/industry-community"

export const metadata: Metadata = {
  title: "Pharmaceutical Products Community | Moqify",
  description:
    "Join the Pharmaceutical Products trading community on Moqify. Connect with other businesses to share MOQs for medications, medical devices, supplements, and more.",
}

const pharmaceuticalProductsCategories = [
  {
    name: "Prescription Medications",
    description: "Various prescription drugs for different medical conditions",
    image: "/placeholder.svg?height=400&width=600",
    members: 580,
    moqRange: "5,000 - 20,000 units",
  },
  {
    name: "Over-the-Counter (OTC) Drugs",
    description: "Common medications available without a prescription",
    image: "/placeholder.svg?height=400&width=600",
    members: 720,
    moqRange: "10,000 - 50,000 units",
  },
  {
    name: "Medical Devices & Equipment",
    description: "Diagnostic and therapeutic medical devices",
    image: "/placeholder.svg?height=400&width=600",
    members: 490,
    moqRange: "100 - 1,000 units",
  },
  {
    name: "Supplements & Vitamins",
    description: "Dietary supplements and vitamin products",
    image: "/placeholder.svg?height=400&width=600",
    members: 650,
    moqRange: "5,000 - 20,000 bottles",
  },
  {
    name: "First Aid & Health Care Supplies",
    description: "Essential first aid items and general health care products",
    image: "/placeholder.svg?height=400&width=600",
    members: 560,
    moqRange: "1,000 - 10,000 units",
  },
]

export default function PharmaceuticalProductsCommunityPage({ params }: { params: { country: string } }) {
  return (
    <IndustryCommunity
      country={params.country}
      industry="Pharmaceutical Products"
      categories={pharmaceuticalProductsCategories}
    />
  )
}
