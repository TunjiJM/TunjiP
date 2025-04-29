import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, BarChart, ArrowRight, MapPin, Package, Truck } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Know exactly where your order is, every step of the way.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "Monitor the production, shipping, and delivery stages seamlessly.",
  },
  {
    icon: BarChart,
    title: "Peace of Mind",
    description: "Stay informed so you can focus on growing your business.",
  },
]

const trackingStages = [
  { icon: Package, label: "Order Confirmed" },
  { icon: Truck, label: "In Transit" },
  { icon: MapPin, label: "Delivered" },
]

export function TrackOrder() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Track Your Order, Anytime, Anywhere!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Real-time order tracking will soon make it easier for you to monitor every step of your shipment, from
              production to delivery.
            </p>
            <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%2895%29-SDiyPyNJhUxAHg9bh8Vs9fXKxfAkEK.jpeg"
                alt="Aerial view of airplane flying over cargo ship in ocean"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What to Expect with Moqify's Order Tracking</h2>
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
          <h2 className="text-3xl font-bold mb-6">We're Bringing Your Trade Into View</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our team is developing a tracking system that integrates with our logistics partners to ensure you never
            miss a step in your order's journey.
          </p>
          <div className="max-w-3xl mx-auto mb-8 bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              {trackingStages.map((stage, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                    <stage.icon className="w-6 h-6 text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-400">{stage.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 h-2 bg-gray-200 rounded-full">
              <div className="h-full w-1/3 bg-teal-500 rounded-full" />
            </div>
            <p className="mt-4 text-teal-600 font-semibold">Coming Soon</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Tuned!</h2>
          <p className="text-xl text-gray-600 mb-8">Get notified when our real-time tracking feature goes live.</p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-4 mb-6">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <Button variant="outline" asChild className="w-full">
              <Link href="/">Discover More Features</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
