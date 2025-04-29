import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "./animated-text"
import { ProductCarousel } from "./product-carousel"
import { SectionDetails } from "./section-details"
import { Wallet, Users, Factory, Truck } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Industry-Based Communities",
    description: "Connect with businesses in your field.",
    id: "industry-communities",
  },
  {
    icon: Wallet,
    title: "Shared Wallet for MOQ Sharing",
    description: "Pool resources seamlessly.",
    id: "community-wallet",
  },
  {
    icon: Factory,
    title: "Verified Global Manufacturers and Suppliers",
    description: "Trusted partners worldwide.",
    id: "global-manufacturers",
  },
  {
    icon: Truck,
    title: "Reputable Logistics Partners",
    description: "Reliable delivery and customs handling.",
    id: "logistics-partners",
  },
]

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container-responsive flex flex-col items-center text-center gap-8">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-responsive-3xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              Redefining Global Trade:
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient-x">
              A Community-Driven MOQ-Sharing Platform
            </span>
          </h1>
          <p className="text-responsive-lg max-w-3xl mx-auto leading-relaxed text-gray-700 font-medium">
            Save Big with Moqify! Share Minimum Order Quantities, Cut Costs, and Access Global Manufacturers with Ease.
          </p>
        </div>

        <AnimatedText />

        <ProductCarousel />

        <div className="w-full max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/small-business-entrepreneur-sme-freelance-african-woman-working-home-office-boxtablet-laptop-online-marketing-packaging-delivery-ecommerce-concept_1300982-3009.jpg-NWDcgwZmV7I52xJhsWnOy8T1zCLbUg.jpeg"
              alt="African woman entrepreneur managing packages and working with laptop"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-16 w-full">
          <h2 className="text-responsive-2xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What You Can Find on Moqify
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={`?section=${feature.id}`}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 inline-block group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-responsive-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-responsive text-gray-600">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <SectionDetails />

        <div className="mt-12 space-y-6 w-full">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="w-full sm:w-auto px-6 py-4 text-responsive-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/join-community">Join Your Industry Community</Link>
            </Button>
            <Button
              asChild
              className="w-full sm:w-auto px-6 py-4 text-responsive-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/create-wallet">Create a Wallet</Link>
            </Button>
          </div>
          <p className="text-responsive-lg text-gray-700 font-medium max-w-2xl mx-auto text-center">
            Have a product that you can meet supplier's MOQ? Create a wallet and start sharing the MOQ today!
          </p>
        </div>

        <div className="text-responsive-2xl sm:text-responsive-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
          Launching Soon
        </div>
      </div>
    </section>
  )
}
