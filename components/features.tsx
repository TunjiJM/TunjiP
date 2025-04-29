import { ShieldCheck, Users, Truck, CreditCard } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "Share MOQs with ease",
    description: "Connect with other buyers to meet minimum order quantities and reduce costs.",
    icon: Users,
    gradient: "from-indigo-400 via-purple-400 to-pink-400",
  },
  {
    title: "Partner with leading manufacturers",
    description: "Access a curated network of verified global manufacturers.",
    icon: ShieldCheck,
    gradient: "from-blue-400 via-cyan-400 to-teal-400",
  },
  {
    title: "Simplify logistics",
    description: "Streamlined shipping and customs processes for hassle-free importing.",
    icon: Truck,
    gradient: "from-rose-400 via-red-400 to-orange-400",
  },
  {
    title: "Secure transactions",
    description: "Safe and transparent payment processing for all parties involved.",
    icon: CreditCard,
    gradient: "from-emerald-400 via-green-400 to-lime-400",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20241209-WA0002.jpg-rhs5nR45ynsMDg1TTVDHd0Xctqd3oF.jpeg"
          alt="Background Pattern"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-indigo-900/30 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white drop-shadow-lg">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              import smarter
            </span>
          </h2>
          <p className="mt-4 text-lg text-blue-100 font-medium">
            Streamline your importing process with our comprehensive platform
          </p>
        </div>
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative p-4 sm:p-6 rounded-lg bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-4">
                <div
                  className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-lg inline-block group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-gray-700 font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
