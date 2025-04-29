"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

const sectionInfo = {
  "industry-communities": {
    title: "Industry-Based Communities",
    description: "Connect with businesses in your field and leverage collective buying power.",
    details:
      "Our industry-based communities bring together businesses with similar needs, allowing for more effective MOQ sharing and knowledge exchange. Join a community tailored to your specific industry to find partners, share insights, and unlock new opportunities for growth.",
  },
  "community-wallet": {
    title: "Community Wallet for MOQ Sharing",
    description: "Pool resources seamlessly with other businesses.",
    details:
      "Our innovative Community Wallet feature allows multiple businesses to contribute funds towards a shared order. This transparent system ensures fair participation and distribution, making it easier than ever to meet minimum order quantities without overextending your resources.",
  },
  "global-manufacturers": {
    title: "Verified Global Manufacturers",
    description: "Access trusted partners worldwide for your sourcing needs.",
    details:
      "We've partnered with a curated network of verified global manufacturers to ensure quality and reliability. Our rigorous vetting process means you can confidently source products from around the world, knowing that each manufacturer meets our high standards for quality, ethics, and reliability.",
  },
  "logistics-partners": {
    title: "Reputable Logistics Partners",
    description: "Ensure reliable delivery and smooth customs handling.",
    details:
      "Our network of reputable logistics partners takes the hassle out of international shipping and customs clearance. With expertise in handling shared orders and navigating complex regulations, our logistics solutions ensure your goods arrive safely and on time, no matter where they're coming from or going to.",
  },
}

export function SectionDetails() {
  const searchParams = useSearchParams()
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const section = searchParams.get("section")
    setActiveSection(section)
  }, [searchParams])

  if (!activeSection || !sectionInfo[activeSection as keyof typeof sectionInfo]) {
    return null
  }

  const { title, description, details } = sectionInfo[activeSection as keyof typeof sectionInfo]

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8 animate-fadeIn">
      <h3 className="text-2xl font-bold mb-2 text-blue-600">{title}</h3>
      <p className="text-lg mb-4 text-gray-600">{description}</p>
      <p className="text-gray-700">{details}</p>
    </div>
  )
}
