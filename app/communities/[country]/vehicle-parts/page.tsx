import type { Metadata } from "next"
import { CentralizedCommunity } from "@/components/centralized-community"

export const metadata: Metadata = {
  title: "Vehicle Parts Community | Moqify",
  description:
    "Join the Vehicle Parts trading community on Moqify. Connect with other businesses to share MOQs for various automotive components and accessories.",
}

const vehiclePartsCategories = [
  "Engine Parts (Pistons, Camshafts, Oil Filters, Spark Plugs)",
  "Brake System (Brake Pads, Discs, Calipers, Brake Fluids)",
  "Suspension & Steering (Shock Absorbers, Control Arms, Tie Rods)",
  "Electrical Components (Batteries, Alternators, Starters, Sensors)",
  "Transmission & Drivetrain (Gearboxes, Clutch Kits, Drive Shafts)",
  "Body & Exterior Parts (Bumpers, Headlights, Side Mirrors, Fenders)",
  "Tires & Wheels (Alloy Rims, Tubeless Tires, Wheel Bearings)",
  "Lubricants & Fluids (Engine Oil, Coolants, Transmission Fluids)",
]

export default function VehiclePartsCommunityPage({ params }: { params: { country: string } }) {
  return (
    <CentralizedCommunity
      country={params.country}
      industry="Vehicle Parts"
      categories={vehiclePartsCategories}
      description="Join other vehicle parts importers to share MOQs and reduce costs. Select your preferred product category below to get started."
      callToAction="Join now and import vehicle parts affordably!"
    />
  )
}
