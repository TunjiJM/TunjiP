import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Package, Wallet, FileQuestion, Clock, Ship, Lock, TruckIcon as TruckDelivery, Map, Box } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Discover Verified Products",
    description:
      "When Moqify posts a quality product from a verified manufacturer, you'll find detailed pricing and product descriptions. Interested users can indicate their interest.",
    icon: Package,
  },
  {
    number: 2,
    title: "Shared Wallets for Group Purchases",
    description:
      "Once enough interest is shown, Moqify creates a wallet for the product. Users contribute to the wallet to share the MOQ cost and secure their order.",
    icon: Wallet,
  },
  {
    number: 3,
    title: "Need a Custom Wallet?",
    description:
      "Can't meet your manufacturer's MOQ? Request a wallet for the product, and Moqify will help you share it with others in your industry.",
    icon: FileQuestion,
  },
  {
    number: 4,
    title: "Wallets That Last 7 Days",
    description:
      "Wallets remain active for 7 days. If the MOQ isn't completed within this time, the wallet is canceled, and all contributors are fully refunded.",
    icon: Clock,
  },
  {
    number: 5,
    title: "Fast Shipping Once Funded",
    description:
      "When the wallet is fully funded before the 7-day limit, the shipping process begins immediately, ensuring prompt delivery.",
    icon: Ship,
  },
  {
    number: 6,
    title: "Safe Funds with Escrow",
    description:
      "Funds in the wallet are held in escrow until the manufacturer or supplier fulfills all necessary obligations, ensuring your money is secure.",
    icon: Lock,
  },
  {
    number: 7,
    title: "Transparent Cost Sharing",
    description:
      "Delivery and customs charges are added to the total cost and shared among all contributors to the wallet.",
    icon: TruckDelivery,
  },
  {
    number: 8,
    title: "Real-Time Order Tracking",
    description:
      "Parties involved can track the progress of their orders in real time, from manufacturing to delivery.",
    icon: Map,
  },
  {
    number: 9,
    title: "Receive and Share Your Goods",
    description:
      "When the products arrive, Moqify notifies all parties. The goods are distributed according to each user's contribution.",
    icon: Box,
  },
]

export function HowToUse() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-sans">
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
            How to Use Moqify: Simplifying MOQ Sharing, Step by Step
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-inter max-w-3xl mx-auto">
            Learn how Moqify connects you with manufacturers, streamlines order sharing, and ensures smooth delivery—all
            in just a few simple steps.
          </p>
        </div>
      </section>

      {/* Step-by-Step Guide Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex mb-12 md:mb-16 items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center font-poppins">
                    <step.icon className="w-6 h-6 mr-2 text-blue-600" />
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-inter">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section: Call to Action */}
      <section className="py-16 bg-navy-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Ready to Share and Save?</h2>
          <p className="text-xl mb-8 font-inter max-w-2xl mx-auto">
            Start using Moqify today and experience hassle-free MOQ sharing and trade efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white text-navy-blue hover:bg-gray-100">
              <Link href="/join-community">Join an Industry Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
