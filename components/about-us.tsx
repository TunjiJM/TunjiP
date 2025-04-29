import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Users, Truck, Lock, Search } from "lucide-react"

export function AboutUs() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Webhero-Policybrief03_darken-scaled.jpg-DvP1JGOAlbiF1qmQjQ5Jkyv0BIooKb.jpeg"
            alt="Network visualization showing interconnected business nodes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-600/75 backdrop-blur-sm" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
            About Moqify: Revolutionizing MOQ Sharing for Businesses Worldwide
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-inter max-w-3xl">
            Moqify connects small and medium enterprises (SMEs) with verified manufacturers, enabling them to share
            MOQs, save costs, and scale their businesses seamlessly.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Empowering Global Trade for SMEs</h2>
              <p className="text-lg text-gray-600 mb-4">
                Moqify is a community-driven platform designed to break down the barriers of Minimum Order Quantities
                (MOQs) for businesses. We believe no business should be limited by bulk order requirements, insufficient
                capital, or logistical hurdles. By enabling SMEs to share MOQs and pool resources, Moqify fosters
                collaboration and creates new opportunities for global trade.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Webhero-Policybrief03_darken-scaled.jpg-HOqrWRpQo8JZlRJFG8j5H4OWHv1cbi.jpeg"
                alt="Network visualization showing interconnected business relationships"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Streamlining Trade with Innovative Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "MOQ Sharing",
                description: "Connect with other businesses to meet manufacturer MOQs and share costs.",
                icon: Users,
              },
              {
                title: "Verified Manufacturers",
                description: "Access products from trusted manufacturers globally.",
                icon: Globe,
              },
              {
                title: "Industry Communities",
                description: "Join industry-specific groups for seamless collaboration.",
                icon: Users,
              },
              {
                title: "Efficient Logistics",
                description: "Enjoy reliable shipping and customs support through our reputable logistics partners.",
                icon: Truck,
              },
              {
                title: "Secure Payments",
                description: "Funds are held in escrow until all supplier obligations are met.",
                icon: Lock,
              },
            ].map((item, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
                    <item.icon className="w-6 h-6 mr-2 text-blue-600" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Moqify Works for You Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Driving Trade Efficiency for SMEs</h2>
          <p className="text-xl text-center mb-8 text-gray-600">
            Moqify simplifies the complexities of cross-border trade with an intuitive process:
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {[
              {
                step: 1,
                title: "Browse Products",
                description: "Explore high-quality products from trusted manufacturers.",
                icon: Search,
              },
              {
                step: 2,
                title: "Join or Create a Wallet",
                description: "Share MOQs with other businesses.",
                icon: Users,
              },
              {
                step: 3,
                title: "Contribute and Track",
                description: "Pay your share and track your shipment.",
                icon: Truck,
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Moqify Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Unique Value to Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Cost Savings: Share costs with other buyers to reduce financial strain.",
              "Global Reach: Access verified manufacturers worldwide.",
              "Transparency: Track every stage of your order from wallet creation to delivery.",
              "Secure Transactions: Funds are protected through escrow until orders are fulfilled.",
              "Convenience: Manage everything from the comfort of your home or office.",
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision and Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Building a Future of Shared Opportunities
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-600 mb-4">
                Our vision is to empower SMEs to thrive in global trade by making bulk orders more accessible. We're on
                a mission to redefine cross-border trade through community-driven solutions, innovative technology, and
                transparent processes.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(51)-Y3RMx4wRQd4Kn2cpAkuO7uTltXSQxa.jpeg"
                alt="Digital globe showing international trade connections across Africa and Middle East"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Moqify Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a growing network of businesses transforming global trade through collaboration and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/how-to-use">Learn More About Moqify</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/join-community">Join an Industry Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
