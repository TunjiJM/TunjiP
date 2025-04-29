"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

const products = [
  {
    name: "Seafood",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-3-B3x1owhdkBmPHyuZTo9WzhkTaTrSPv.jpeg",
    alt: "Fresh seafood including fish and shrimp on ice",
  },
  {
    name: "Pharmaceutical Products",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-4-gKZpjj4ezyQ7LHsrOq9nnYt4uOseoZ.jpeg",
    alt: "Various pharmaceutical products and medicine boxes",
  },
  {
    name: "Fabrics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-6-C6waDaxO7a2fWpjwOz7LvgDSCqSm7r.jpeg",
    alt: "Stacked colorful fabrics with polka dot patterns",
  },
  {
    name: "Building Materials",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-7-sDS0gPKpU7MbM9hMSpHAbbhweHpxA4.jpeg",
    alt: "Various building and construction materials",
  },
  {
    name: "Electronics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-8-N1KpBmfqDgjaP7w90mXD8zaHwQTvpg.jpeg",
    alt: "Collection of electronic devices and appliances",
  },
  {
    name: "Furniture Products",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-9-ADhlfzdSXyiEkfzgiY9YXrQQkHElsK.jpeg",
    alt: "Elegant wooden furniture with blue upholstery",
  },
  {
    name: "Cosmetics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-10-pfLZ7a3AAzIauhtpEBUDchuAor4329.jpeg",
    alt: "Collection of makeup and beauty products",
  },
  {
    name: "Fashion",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-18-3Sc7EC4LHyh2OZz7DRNI9NoCDjcT54.jpeg",
    alt: "Fashion retail display with clothing and shoes",
  },
  {
    name: "Baby Products",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-16-AVoMgxfvrF1ItNOPmpt93QlV3xqMbG.jpeg",
    alt: "Baby care products and accessories",
  },
  {
    name: "Medical Devices",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-26-o1ofGCPOxQJBWW0eFcvu4qn0yGugAh.jpeg",
    alt: "Medical and diagnostic equipment",
  },
  {
    name: "Vehicle Parts",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-23-rmuIOocBuB9s5ez9LyxptuzCopVmj8.jpeg",
    alt: "Car parts and components",
  },
  {
    name: "Packaging Materials",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-17-750aXgxHEOZWft8Qu9TUImDv5nrkH4.jpeg",
    alt: "Packaging supplies and materials",
  },
  {
    name: "Kitchenware",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-11-NfkPrSRwjdlTDaGDuDIDFHfVbuLSCX.jpeg",
    alt: "Kitchen cookware set",
  },
  {
    name: "Chemical",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-13-kSCqTLC7AYmGhWjQ91oOswaaTOIoos.jpeg",
    alt: "Laboratory chemicals in glassware",
  },
]

export function ProductCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let animationId: number
    const speed = 1.5 // Pixels per frame

    const animate = () => {
      if (isDragging) {
        animationId = requestAnimationFrame(animate)
        return
      }

      carousel.scrollLeft += speed
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current!.offsetLeft)
    setScrollLeft(carouselRef.current!.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current!.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current!.scrollLeft = scrollLeft - walk
  }

  return (
    <div className="w-full overflow-hidden bg-white/30 backdrop-blur-sm py-4 sm:py-8">
      <div
        ref={carouselRef}
        className="flex overflow-x-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {[...products, ...products].map((product, index) => (
          <div key={`${product.name}-${index}`} className="flex-none w-[160px] sm:w-[200px] mx-2">
            <div className="group relative aspect-square rounded-xl bg-white/90 p-2 sm:p-3 transition-all hover:shadow-lg hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                  sizes="200px"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-xl">
                <p className="text-sm font-medium text-center text-white">{product.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
