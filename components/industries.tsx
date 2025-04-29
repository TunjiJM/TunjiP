"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingBag, Mountain, Factory, Hammer, Stethoscope, Wheat, Cpu, Shirt } from "lucide-react"

const industries = [
  {
    name: "Consumer Goods",
    icon: ShoppingBag,
    description: "FMCG, beverages, and retail products",
  },
  {
    name: "Raw Materials",
    icon: Mountain,
    description: "Basic materials and resources",
  },
  {
    name: "Industrial Products",
    icon: Factory,
    description: "Manufacturing and machinery",
  },
  {
    name: "Metals & Minerals",
    icon: Hammer,
    description: "Mining and mineral processing",
  },
  {
    name: "Healthcare",
    icon: Stethoscope,
    description: "Medical supplies and equipment",
  },
  {
    name: "Agriculture",
    icon: Wheat,
    description: "Farming and agricultural products",
  },
  {
    name: "Electronics",
    icon: Cpu,
    description: "Technology and electronic goods",
  },
  {
    name: "Textiles",
    icon: Shirt,
    description: "Fabrics and clothing",
  },
]

export function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="industries" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gradient">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-gray-700">Specialized solutions for diverse sectors</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 h-24 w-24 relative flex items-center justify-center">
                  <industry.icon className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 0.6 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
