"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { useRouter } from "next/navigation"
import { ReactCountryFlag } from "react-country-flag"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Updated and sorted countries list
const countries = [
  { code: "AE", name: "United Arab Emirates" },
  { code: "AR", name: "Argentina" },
  { code: "AU", name: "Australia" },
  { code: "BD", name: "Bangladesh" },
  { code: "BR", name: "Brazil" },
  { code: "CA", name: "Canada" },
  { code: "CD", name: "Democratic Republic of Congo" },
  { code: "CI", name: "Côte d'Ivoire" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CO", name: "Colombia" },
  { code: "DE", name: "Germany" },
  { code: "DZ", name: "Algeria" },
  { code: "EG", name: "Egypt" },
  { code: "ES", name: "Spain" },
  { code: "ET", name: "Ethiopia" },
  { code: "FR", name: "France" },
  { code: "GB", name: "United Kingdom" },
  { code: "GH", name: "Ghana" },
  { code: "ID", name: "Indonesia" },
  { code: "IN", name: "India" },
  { code: "IT", name: "Italy" },
  { code: "KE", name: "Kenya" },
  { code: "MA", name: "Morocco" },
  { code: "MX", name: "Mexico" },
  { code: "MY", name: "Malaysia" },
  { code: "NG", name: "Nigeria" },
  { code: "NL", name: "Netherlands" },
  { code: "NZ", name: "New Zealand" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Philippines" },
  { code: "PK", name: "Pakistan" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "RW", name: "Rwanda" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SN", name: "Senegal" },
  { code: "TH", name: "Thailand" },
  { code: "TR", name: "Turkey" },
  { code: "TZ", name: "Tanzania" },
  { code: "UG", name: "Uganda" },
  { code: "US", name: "United States" },
  { code: "VN", name: "Vietnam" },
  { code: "ZA", name: "South Africa" },
  { code: "ZM", name: "Zambia" },
]

const industries = [
  {
    name: "Seafood",
    slug: "seafood",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(46)-rJk7d33sfxF8ig7D89RwVK6pIYQHBv.jpeg",
    description: "Fresh seafood and marine products",
  },
  {
    name: "Fashion",
    slug: "fashion",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-18-RmxhWvjmSD8ya8pM1XVTRAsfW57c1e.jpeg",
    description: "Clothing, footwear, and accessories",
  },
  {
    name: "Cosmetics",
    slug: "cosmetics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-10-pfLZ7a3AAzIauhtpEBUDchuAor4329.jpeg",
    description: "Makeup, skincare, and beauty products",
  },
  {
    name: "Vehicle Parts",
    slug: "vehicle-parts",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-23-giBjtHPMI1txLebLHdBHrQq1JoK1vH.jpeg",
    description: "Automotive parts and accessories",
  },
  {
    name: "Packaging Materials",
    slug: "packaging-materials",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-17-9XEOQ1BSYHPBJhJNpMIovK0FjTXRFz.jpeg",
    description: "Industrial and consumer packaging solutions",
  },
  {
    name: "Electronics",
    slug: "electronics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-8-N1KpBmfqDgjaP7w90mXD8zaHwQTvpg.jpeg",
    description: "Mobile devices, computers, appliances, and more",
  },
  {
    name: "Kitchenware",
    slug: "kitchenware",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-11-Wh02EawIYSbVk59dk0t8Nz079m7tj8.jpeg",
    description: "Cookware, tableware, appliances, and kitchen accessories",
  },
  {
    name: "Chemical",
    slug: "chemical",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-13-RmdzM8q4JjOm8NLtrjlm0HVQxJMSld.jpeg",
    description: "Industrial, laboratory, and specialty chemicals",
  },
  {
    name: "Personal Care",
    slug: "personal-care",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-19-74lMtsfG1R1sqHGIz9EfmFtLLMBuhb.jpeg",
    description: "Beauty, skincare, and personal hygiene products",
  },
  {
    name: "Farm Input",
    slug: "farm-input",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(49)-G0Lp41Xhnj94pKG2btwShMwU1Z3Hac.jpeg",
    description: "Agricultural supplies, equipment, and farming materials",
  },
  {
    name: "Hair",
    slug: "hair",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(47)-9ztszyyxKhtlyQBdHWwRmtfn28Mupr.jpeg",
    description: "Hair extensions, wigs, care products, and accessories",
  },
  {
    name: "Baby Products",
    slug: "baby-products",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-16-zCHWKhFH6vzh6aEBD5rSKDijLbQV8L.jpeg",
    description: "Essential products and gear for infants and toddlers",
  },
  {
    name: "Pharmaceutical",
    slug: "pharmaceutical",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-4-1o8xRmAZJZGdiePTpY8pj6jhmYejNo.jpeg",
    description: "Medicines, medical supplies, and healthcare products",
  },
]

export function IndustryCommunities() {
  const router = useRouter()
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Ensure component only runs on client-side
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleJoinCommunity = (industrySlug: string) => {
    // Direct to the industry-specific chat page
    router.push(`/${industrySlug}-chat`)
  }

  const handleCountrySelect = (country: string) => {
    if (selectedIndustry) {
      router.push(`/${selectedIndustry}-chat`)
    }
    setIsDialogOpen(false)
    setSelectedIndustry(null)
  }

  // Don't render anything during SSR
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="pt-20 pb-20 bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="container mx-auto px-4">
            <div className="h-40"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="font-sans">
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/small-business-entrepreneur-sme-freelance-african-woman-working-home-office-boxtablet-laptop-online-marketing-packaging-delivery-ecommerce-concept_1300982-3009.jpg-NWDcgwZmV7I52xJhsWnOy8T1zCLbUg.jpeg"
            alt="Diverse SMEs collaborating"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins leading-tight">
              Join Your Industry Community and Share MOQ with Others
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-inter max-w-3xl mx-auto">
              Connect with businesses in your industry to share Minimum Order Quantities, cut costs, and grow together.
              Start collaborating today!
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => router.push("/seafood-chat")}
              >
                Join Seafood Community
              </Button>
              <Button
                size="lg"
                className="bg-blue-800 text-white hover:bg-blue-900"
                onClick={() => router.push("/fashion-chat")}
              >
                Join Fashion Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Community Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Choose Your Industry Community
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="relative h-48 md:h-56">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={`${industry.name} industry`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-poppins text-gray-900">{industry.name}</h3>
                  <p className="text-gray-600 mb-4 font-inter">{industry.description}</p>
                  <Button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-full shadow transition-all duration-300"
                    onClick={() => handleJoinCommunity(industry.slug)}
                  >
                    Join Community
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Selection Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">Select Your Country</DialogTitle>
          </DialogHeader>
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Search for a country..." className="py-3" />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup className="max-h-[300px] overflow-y-auto">
                {countries.map((country) => (
                  <CommandItem
                    key={country.code}
                    onSelect={() => handleCountrySelect(country.code)}
                    className="cursor-pointer py-2 px-3 hover:bg-blue-50"
                  >
                    <div className="flex items-center">
                      <ReactCountryFlag
                        countryCode={country.code}
                        svg
                        style={{
                          width: "1.5em",
                          height: "1.5em",
                          marginRight: "0.75em",
                        }}
                      />
                      <span className="text-sm md:text-base">{country.name}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>

      {/* Footer Section */}
      <section className="py-16 md:py-24 bg-navy-blue text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-poppins">
            Don't see your industry? Reach out to us to create a new community!
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <Input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800"
              />
              <Input
                type="text"
                placeholder="Your Industry"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800"
              />
              <Textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800"
                rows={4}
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-full shadow transition-all duration-300"
              >
                Send Request
              </Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
