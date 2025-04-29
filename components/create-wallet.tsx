import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Shield, ArrowRight, LockKeyhole } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Collaborate Easily",
    description: "Share MOQ costs with others in your industry, all in one secure wallet.",
  },
  {
    icon: Shield,
    title: "Transparency Guaranteed",
    description: "Track contributions and costs clearly at every stage.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Payments",
    description: "Funds are safely held until your product is fulfilled.",
  },
]

export function CreateWallet() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Your Wallet, Coming Soon!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A secure, seamless wallet feature is on the way to help you share MOQ costs effortlessly and manage your
              payments with ease.
            </p>
            <div className="relative w-full h-[600px] max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1738408059078.jpg-pWabKAQSusbp4DTjyoOrxIWT0I9MA9.jpeg"
                alt="Moqify shared wallet interface showing product details, contributors, and shipping costs"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Be Able to Do with Moqify Wallets</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-teal-100">
                    <feature.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">We're Building the Future of Trade Finance</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our team is working with leading fintech experts to create a wallet solution tailored to the needs of SMEs.
            Stay tuned for updates!
          </p>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full" />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Development Started</span>
              <span>Testing Phase</span>
              <span>Launch</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated!</h2>
          <p className="text-xl text-gray-600 mb-8">Be the first to know when the Moqify Wallet feature launches.</p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-4 mb-6">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <Button variant="outline" asChild className="w-full">
              <Link href="/">Explore Other Features</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
