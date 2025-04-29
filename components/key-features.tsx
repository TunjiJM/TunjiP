import { Shield, Scale, Timer, PieChart } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Security",
    description:
      "Moqify ensures that all transactions are secure, using advanced encryption technology to protect your data. The transparency of our platform allows buyers and sellers to track every stage of their shared MOQ orders in real time, fostering trust and reliability.",
    gradient: "from-purple-400 via-fuchsia-400 to-pink-400",
    borderGradient: "before:from-purple-400 before:to-pink-600",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description:
      "Our processes comply with all relevant international trade and customs regulations. With experienced local agents in each country, Moqify ensures smooth navigation of customs and regulatory requirements for seamless delivery.",
    gradient: "from-emerald-400 via-teal-400 to-cyan-400",
    borderGradient: "before:from-emerald-400 before:to-cyan-600",
  },
  {
    icon: Timer,
    title: "Speed & Convenience",
    description:
      "Moqify empowers businesses to join industry-specific MOQ-sharing groups and streamline the ordering process from anywhere. Benefit from swift wallet creation, efficient shipping, and seamless goods distribution—ensuring your business runs smoothly without unnecessary delays.",
    gradient: "from-red-400 via-rose-400 to-pink-400",
    borderGradient: "before:from-red-400 before:to-pink-600",
  },
  {
    icon: PieChart,
    title: "Competitive Price",
    description:
      "Our platform connects buyers to multiple manufacturers offering discounted rates on shared MOQs. By splitting shipping and customs costs, businesses can enjoy the best prices, improving profitability and reducing risk.",
    gradient: "from-blue-400 via-indigo-400 to-violet-400",
    borderGradient: "before:from-blue-400 before:to-violet-600",
  },
]

export function KeyFeatures() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <div className="mb-6">
            <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              FOR GLOBAL SMEs
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              We Empower Your Business
            </h2>
            <p className="text-lg text-muted-foreground">
              Your business shouldn't be constrained by manufacturers' large MOQs, limited cash flow, and delayed
              payments. Moqify accelerates your trade operations to overcome bulk order hurdles with community-driven
              MOQ-sharing, transparent wallets, and efficient payment solutions.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Key Features
          </h3>
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`
                  relative rounded-2xl p-6 
                  bg-gradient-to-br from-white to-gray-50
                  before:absolute before:inset-0 
                  before:rounded-2xl before:-z-10 
                  before:p-[2px] 
                  before:bg-gradient-to-r ${feature.borderGradient}
                  before:content-['']
                  after:absolute after:inset-[2px] 
                  after:rounded-2xl after:-z-10 
                  after:bg-white
                  after:content-['']
                  hover:transform hover:scale-[1.02] 
                  transition-transform duration-300
                  shadow-lg
                `}
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-xl shadow-sm`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
