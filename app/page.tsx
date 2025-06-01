"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/image-carousel"
import { TypingAnimation } from "@/components/typing-animation"
import { MobileMenu } from "@/components/mobile-menu"
import {
  Users,
  Wallet,
  CreditCard,
  Package,
  Shield,
  Clock,
  DollarSign,
  CheckCircle,
  ShoppingCart,
  Globe,
  Truck,
  Lock,
  Factory,
  Stethoscope,
  Wheat,
  Cpu,
  Shirt,
  Twitter,
  Facebook,
  Mail,
} from "lucide-react"

export default function MoqifyLanding() {
  const carouselImages = [
    // Auto parts image removed as requested
    {
      src: "/images/textiles.jpeg",
      name: "Textiles & Fabrics",
      alt: "Colorful textile fabrics and materials",
    },
    {
      src: "/images/glass-bottles.jpeg",
      name: "Glass Packaging",
      alt: "Glass bottles and containers",
    },
    {
      src: "/images/plastic-containers.jpeg",
      name: "Plastic Containers",
      alt: "Plastic food containers and packaging",
    },
    {
      src: "/images/seafood.jpeg",
      name: "Fresh Seafood",
      alt: "Fresh seafood and marine products",
    },
    {
      src: "/images/canned-goods.jpeg",
      name: "Canned Goods",
      alt: "Metal cans and food packaging",
    },
    {
      src: "/images/cosmetic-sprays.jpeg",
      name: "Cosmetic Products",
      alt: "Perfumes and cosmetic sprays",
    },
    {
      src: "/images/personal-care.jpeg",
      name: "Personal Care",
      alt: "Personal hygiene and care products",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white border-b">
        <h1 className="text-xl font-bold text-blue-600">Moqify</h1>
        <MobileMenu />
      </header>

      {/* Hero Section */}
      <section className="px-4 py-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Redefining Trade, Locally and Globally
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
            A Community-Driven MOQ-Sharing Platform
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Save Big with Moqify! Share Minimum Order Quantities, Cut Costs, and Access Local and Global Manufacturers
            with Ease.
          </p>

          <div className="mb-8">
            <div className="mb-6">
              <TypingAnimation
                text="At the heart of Moqify is MOQ"
                className="text-lg font-medium text-purple-600 text-center"
                speed={80}
              />
            </div>

            {/* Product Categories Carousel */}
            <div className="mb-8">
              <ImageCarousel images={carouselImages} />
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-lg overflow-hidden mb-8">
            <img
              src="/images/entrepreneur-packaging.jpeg"
              alt="Entrepreneur packaging orders for delivery"
              className="w-full h-auto object-contain md:object-cover md:h-80"
              style={{ objectPosition: "center 30%" }}
            />
          </div>
        </div>
      </section>

      {/* What You Can Find Section */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-8">What You Can Find on Moqify</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Industry-Based Communities</h3>
                  <p className="text-gray-600 text-sm">Connect with businesses in your field.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Wallet className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Shared Wallet for MOQ Sharing</h3>
                  <p className="text-gray-600 text-sm">Pool resources seamlessly.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Factory className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Verified Manufacturers and Suppliers</h3>
                  <p className="text-gray-600 text-sm">Trusted partners worldwide.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Trusted Logistics Partners</h3>
                  <p className="text-gray-600 text-sm">
                    Reliable and efficient delivery through our reputable local logistics network.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Join Your Industry Community</Button>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3">Create a Wallet</Button>
          </div>

          <p className="text-center text-gray-600 mt-4">
            Have a product that you can meet supplier's MOQ? Create a wallet and start sharing the MOQ today!
          </p>

          <div className="text-center mt-6">
            <Badge variant="secondary" className="text-purple-600 bg-purple-100 px-4 py-2 text-lg">
              Launching Soon
            </Badge>
          </div>
        </div>
      </section>

      {/* Everything You Need Section */}
      <section className="px-4 py-8 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Everything You Need to Trade Smarter</h2>
          <p className="text-center text-purple-100 mb-8">
            Streamline your local and international sourcing with Moqify's all-in-one MOQ-sharing platform.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-white text-gray-900 p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Share MOQs with ease</h3>
                  <p className="text-gray-600 text-sm">
                    Connect with other buyers to meet minimum order quantities and reduce costs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-white text-gray-900 p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Partner with leading manufacturers</h3>
                  <p className="text-gray-600 text-sm">Access a curated network of verified global manufacturers.</p>
                </div>
              </div>
            </Card>

            <Card className="bg-white text-gray-900 p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Truck className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Simplified Logistics</h3>
                  <p className="text-gray-600 text-sm">
                    Efficient logistics and distribution to ensure timely and reliable delivery.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-white text-gray-900 p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Secure transactions</h3>
                  <p className="text-gray-600 text-sm">
                    Safe and transparent payment processing for all parties involved.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* We Empower Your Business Section */}
      <section className="px-4 py-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-blue-100 text-blue-600 mb-4">FOR GLOBAL SMEs</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">We Empower Your Business</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Your business shouldn't be constrained by manufacturers' large MOQs, limited cash flow, and delayed
            payments. Moqify accelerates your trade operations to overcome bulk order hurdles with community-driven
            MOQ-sharing, transparent wallets, and efficient payment solutions.
          </p>

          <h3 className="text-xl font-bold text-purple-600 text-center mb-8">Key Features</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
                <p className="text-gray-600 text-sm">
                  Moqify ensures that all transactions are secure, using advanced encryption technology to protect your
                  data. The transparency of our platform allows buyers and sellers to track every stage of their shared
                  MOQ orders in real time, fostering trust and reliability.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Regulatory Compliance</h4>
                <p className="text-gray-600 text-sm">
                  Moqify is committed to operating in full compliance with local trade laws and regulations. Our systems
                  are designed to ensure that every transaction meets the necessary legal requirements, enabling smooth
                  and dependable delivery to businesses.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Speed & Convenience</h4>
                <p className="text-gray-600 text-sm">
                  Moqify empowers businesses to join industry-specific MOQ-sharing groups and streamline the ordering
                  process from anywhere. Benefit from swift wallet creation, efficient shipping, and seamless goods
                  distribution—ensuring your business runs smoothly without unnecessary delays.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Competitive Price</h4>
                <p className="text-gray-600 text-sm">
                  Our platform connects buyers to multiple manufacturers offering discounted prices on shared MOQs. By
                  splitting shipping and customs costs, businesses can enjoy the best prices, improving profitability
                  and reducing risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Moqify Works Section - UPDATED */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-4">How Moqify Works</h2>
          <p className="text-center text-gray-600 mb-8">Four Simple Steps to Share and Save on Bulk Orders</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 border-t-4 border-blue-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Wallet className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <Badge className="bg-blue-100 text-blue-600">01</Badge>
                  <h3 className="font-semibold text-gray-900 mt-1">Shared Wallet Creation</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Moqify creates shared wallets for each product offered by its partnered manufacturers. These wallets are
                made available on a weekly, biweekly, or monthly basis.
              </p>
            </Card>

            <Card className="p-6 border-t-4 border-purple-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <Badge className="bg-purple-100 text-purple-600">02</Badge>
                  <h3 className="font-semibold text-gray-900 mt-1">SME Contributions</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Small and medium-sized enterprises (SMEs) contribute their respective shares—pre-divided based on the
                total MOQ—directly from their personal Moqify wallets into the shared wallet.
              </p>
            </Card>

            <Card className="p-6 border-t-4 border-indigo-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <CreditCard className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <Badge className="bg-indigo-100 text-indigo-600">03</Badge>
                  <h3 className="font-semibold text-gray-900 mt-1">Completion or Refund</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Once the required MOQ is fully met, Moqify processes the payment to the manufacturer. If the MOQ is not
                met within the active period, all contributors are automatically refunded in full, without any
                deductions or charges.
              </p>
            </Card>

            <Card className="p-6 border-t-4 border-pink-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Package className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <Badge className="bg-pink-100 text-pink-600">04</Badge>
                  <h3 className="font-semibold text-gray-900 mt-1">Product Distribution</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Upon successful payment and fulfillment of the MOQ, Moqify coordinates the distribution of goods to all
                contributors based on their respective shares.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="px-4 py-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-4">Industries We Serve</h2>
          <p className="text-center text-gray-600 mb-8">Specialized solutions for diverse sectors</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consumer Goods</h3>
              <p className="text-gray-600 text-sm">FMCG, beverages, and retail products</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Factory className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Raw Materials</h3>
              <p className="text-gray-600 text-sm">Basic materials and resources</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Factory className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Industrial Products</h3>
              <p className="text-gray-600 text-sm">Manufacturing and machinery</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Factory className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Metals & Minerals</h3>
              <p className="text-gray-600 text-sm">Mining and mineral processing</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">Medical supplies and equipment</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Wheat className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Agriculture</h3>
              <p className="text-gray-600 text-sm">Farming and agricultural products</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Cpu className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Electronics</h3>
              <p className="text-gray-600 text-sm">Technology and electronic goods</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shirt className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Textiles</h3>
              <p className="text-gray-600 text-sm">Fabrics and clothing</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <p className="text-blue-100 text-sm">
                Moqify is revolutionizing global trade by making MOQ sharing accessible to businesses of all sizes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <a href="mailto:hello@moqify.com" className="text-blue-100 hover:text-white text-sm">
                hello@moqify.com
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/MoqifyHQ?t=YKMpR-rM4N0WpJ5pcj3o8w&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors"
                  aria-label="Follow us on X (Twitter)"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/bookmarks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="mailto:hello@moqify.com"
                  className="text-blue-100 hover:text-white transition-colors"
                  aria-label="Send us an email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-100 text-sm">© 2025 Moqify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
