import { Search, Users, Wallet, CreditCard, Package } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse Products",
    description:
      "Discover top-quality products from globally verified manufacturers, with detailed descriptions and transparent pricing.",
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    icon: Users,
    title: "Join a Group",
    description:
      "Join other buyers in your industry to share the Minimum Order Quantity (MOQ) cost for a product and reduce expenses.",
    gradient: "from-indigo-400 to-violet-600",
  },
  {
    icon: Wallet,
    title: "Create or Join a Wallet",
    description:
      "Moqify creates a wallet for every product, allowing interested buyers to pool funds and meet the MOQ. Users can also request a wallet for specific products they want to share. Wallets last for 7 days. If the MOQ isn't met, all contributors are refunded.",
    gradient: "from-violet-400 to-purple-600",
  },
  {
    icon: CreditCard,
    title: "Make Payment",
    description:
      "Deposit your share into the wallet. The total cost includes product price, shipping, and customs charges, shared among contributors. Funds remain in escrow until the manufacturer or supplier fulfills the order.",
    gradient: "from-purple-400 to-pink-600",
  },
  {
    icon: Package,
    title: "Track and Receive Goods",
    description:
      "Track your shipment at every stage. Once the goods arrive, they are distributed to contributors based on their orders, ensuring a seamless delivery process.",
    gradient: "from-pink-400 to-red-600",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gradient">How Moqify Works</h2>
          <p className="mt-4 text-lg text-gray-700">Four simple steps to start importing with shared MOQs</p>
        </div>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative p-4 sm:p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.gradient} rounded-t-xl`} />
              <div
                className={`text-4xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent mb-4`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className={`mb-4 p-3 rounded-full bg-gradient-to-r ${step.gradient} inline-block`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
