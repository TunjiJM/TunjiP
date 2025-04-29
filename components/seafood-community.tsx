import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, ArrowRight } from "lucide-react"

const seafoodProducts = [
  {
    name: "Tilapia",
    description: "Fresh and frozen tilapia products for retail and wholesale",
    image: "/placeholder.svg?height=400&width=600",
    members: 234,
    moqRange: "1,000 - 5,000 kg",
  },
  {
    name: "Pollock",
    description: "High-quality pollock fish for commercial distribution",
    image: "/placeholder.svg?height=400&width=600",
    members: 156,
    moqRange: "2,000 - 8,000 kg",
  },
  {
    name: "Mackerel",
    description: "Fresh and processed mackerel for various market segments",
    image: "/placeholder.svg?height=400&width=600",
    members: 312,
    moqRange: "1,500 - 6,000 kg",
  },
  {
    name: "Mullet",
    description: "Premium mullet fish for restaurants and retailers",
    image: "/placeholder.svg?height=400&width=600",
    members: 178,
    moqRange: "1,000 - 4,000 kg",
  },
  {
    name: "Shrimps",
    description: "Various sizes of shrimp for commercial use",
    image: "/placeholder.svg?height=400&width=600",
    members: 289,
    moqRange: "500 - 2,000 kg",
  },
]

interface SeafoodCommunityProps {
  country: string
}

export function SeafoodCommunity({ country }: SeafoodCommunityProps) {
  const countryName = decodeURIComponent(country)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1200" alt="Seafood market" fill className="object-cover" />
          <div className="absolute inset-0 bg-blue-600/75 backdrop-blur-sm" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Seafood Community - {countryName}</h1>
            <p className="text-xl mb-6">
              Join other seafood importers to share MOQs and reduce costs. Select your preferred product category below
              to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {seafoodProducts.map((product) => (
              <Card key={product.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative h-[200px] md:h-auto">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                        <p className="text-gray-600">{product.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {product.members} members
                          </div>
                          <div>MOQ Range: {product.moqRange}</div>
                        </div>
                      </div>
                      <Button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600">
                        Join Group
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
