import type { Metadata } from "next"
import { CentralizedCommunity } from "@/components/centralized-community"

export const metadata: Metadata = {
  title: "Electronics Community | Moqify",
  description:
    "Join the Electronics trading community on Moqify. Connect with other businesses to share MOQs for various electronic devices and appliances.",
}

const electronicsCategories = [
  "Mobile Devices (Smartphones, Feature Phones, Tablets, Accessories)",
  "Computers & Laptops (Desktops, Gaming PCs, Monitors, Keyboards)",
  "Home Appliances (Refrigerators, Microwaves, Washing Machines, Blenders)",
  "Audio & Entertainment (Speakers, Headphones, Smart TVs, Projectors)",
  "Wearable Tech (Smartwatches, Fitness Trackers, VR Headsets)",
  "Power & Energy (Solar Panels, Power Banks, Inverters, UPS)",
  "Networking & Accessories (Routers, Modems, USB Cables, Chargers)",
  "Office Electronics (Printers, Scanners, Copiers, Cash Registers)",
]

export default function ElectronicsCommunityPage({ params }: { params: { country: string } }) {
  return (
    <CentralizedCommunity
      country={params.country}
      industry="Electronics"
      categories={electronicsCategories}
      description="Join other electronics importers to share MOQs and reduce costs. Select your preferred product category below to get started."
      callToAction="Join now and import electronics affordably!"
    />
  )
}
