import type { Metadata } from "next"
import { CentralizedCommunity } from "@/components/centralized-community"

export const metadata: Metadata = {
  title: "Pharmaceutical Community | Moqify",
  description:
    "Join the Pharmaceutical trading community on Moqify. Connect with other businesses to share MOQs for various pharmaceutical products and medical supplies.",
}

const pharmaceuticalCategories = [
  "Prescription Medicines (Antibiotics, Pain Relievers, Cardiovascular Drugs)",
  "Over-the-Counter (OTC) Drugs (Cold & Flu Medications, Antacids, Vitamins)",
  "Medical Equipment & Devices (Syringes, Stethoscopes, Blood Pressure Monitors)",
  "Vaccines & Biologics (Flu Vaccines, Hepatitis Vaccines, Insulin)",
  "Herbal & Alternative Medicine (Supplements, Essential Oils, Traditional Remedies)",
  "Hospital & Laboratory Supplies (Gloves, Masks, Test Kits, IV Fluids)",
  "Personal Protective Equipment (PPE) (Face Shields, Gowns, Sanitizers)",
  "Nutraceuticals & Health Supplements (Multivitamins, Probiotics, Protein Powders)",
]

export default function PharmaceuticalCommunityPage({ params }: { params: { country: string } }) {
  return (
    <CentralizedCommunity
      country={params.country}
      industry="Pharmaceutical"
      categories={pharmaceuticalCategories}
      description="Join other pharmaceutical importers to share MOQs and reduce costs. Select your preferred product category below to get started."
      callToAction="Join now and import pharmaceutical products at competitive rates!"
    />
  )
}
