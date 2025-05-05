import type { Metadata } from "next"
import { Products } from "@/components/products"

export const metadata: Metadata = {
  title: "Products | Moqify",
  description:
    "Explore our range of products and services designed to help businesses share MOQs and connect with manufacturers.",
}

export default function ProductsPage() {
  return <Products />
}
