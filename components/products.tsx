"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const productCategories = [
  {
    name: "Seafood",
    image: "/placeholder.svg?height=300&width=300",
    description: "Fresh and frozen seafood products from global suppliers",
    popular: true,
  },
  {
    name: "Fashion",
    image: "/placeholder.svg?height=300&width=300",
    description: "Clothing, textiles, and fashion accessories",
    popular: false,
  },
  {
    name: "Electronics",
    image: "/placeholder.svg?height=300&width=300",
    description: "Consumer electronics and components",
    popular: true,
  },
  {
    name: "Cosmetics",
    image: "/placeholder.svg?height=300&width=300",
    description: "Beauty and personal care products",
    popular: false,
  },
  {
    name: "Kitchenware",
    image: "/placeholder.svg?height=300&width=300",
    description: "Kitchen appliances and utensils",
    popular: false,
  },
  {
    name: "Packaging",
    image: "/placeholder.svg?height=300&width=300",
    description: "Packaging materials and solutions",
    popular: true,
  },
]

const faqs = [
  {
    question: "What is MOQ sharing?",
    answer:
      "MOQ sharing allows multiple businesses to combine their orders to meet a manufacturer's minimum order quantity requirement, reducing costs and inventory risks for each participant.",
  },
  {
    question: "How does Moqify ensure product quality?",
    answer:
      "Moqify works with verified manufacturers and suppliers who meet our quality standards. We also facilitate sample orders and quality inspections before full production.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Moqify supports various payment methods including bank transfers, credit cards, and secure online payment platforms to accommodate businesses worldwide.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on product type, quantity, and destination. Typical timeframes range from 2-4 weeks for sea freight and 3-7 days for air freight after production is complete.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, Moqify provides real-time order tracking through our platform. Once your order is shipped, you'll receive tracking information to monitor its progress.",
  },
]

export function Products() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-violet-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Products & Services</h1>
              <p className="text-xl text-blue-200 mb-8">
                Discover how Moqify can help your business access quality products at competitive prices through our MOQ
                sharing platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-blue-50 transition-colors">
                  Explore Products
                </button>
                <button className="px-6 py-3 bg-transparent text-white border border-white font-medium rounded-md hover:bg-white/10 transition-colors">
                  How It Works
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Product Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our wide range of product categories from verified global manufacturers and suppliers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                    {category.popular && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                      View Products →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Moqify</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our platform offers unique advantages for businesses looking to source products efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Cost Savings</h3>
                <p className="text-gray-600">
                  Share MOQs with other businesses to reduce your costs and access better pricing from manufacturers.
                </p>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Verified Suppliers</h3>
                <p className="text-gray-600">
                  All manufacturers and suppliers on our platform are thoroughly vetted to ensure quality and
                  reliability.
                </p>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Community Support</h3>
                <p className="text-gray-600">
                  Connect with other businesses in your industry to share knowledge, resources, and opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our products and services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-left">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${openFaq === index ? "transform rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="p-4 bg-white border-t border-gray-100 rounded-b-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-violet-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-200 mb-8">
                Join thousands of businesses already using Moqify to source products and share MOQs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-blue-50 transition-colors">
                  Create an Account
                </button>
                <button className="px-6 py-3 bg-transparent text-white border border-white font-medium rounded-md hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
