import type { Metadata } from "next"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact Us | Moqify",
  description: "Get in touch with the Moqify team for inquiries, support, or partnership opportunities.",
}

export default function ContactPage() {
  return <Contact />
}
