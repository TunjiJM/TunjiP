"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "About us", href: "/about-us" },
    { label: "How to use Moqify", href: "#how-to-use" },
    { label: "Join Your Industry Community", href: "#join-community" },
    { label: "Create a Wallet", href: "#create-wallet" },
    { label: "Log in", href: "#login" },
    { label: "Sign up", href: "#signup" },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleMenuItemClick = (href: string, label: string) => {
    console.log(`Clicked: ${label} - ${href}`)
    // Navigate to the page if it's a full URL path
    if (href.startsWith("/")) {
      window.location.href = href
    }
    setIsOpen(false)
  }

  return (
    <>
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </Button>

      {/* Full-screen overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h1 className="text-xl font-bold text-blue-600">Moqify</h1>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Menu Content - Left Aligned */}
          <div className="p-6">
            <nav className="w-full">
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleMenuItemClick(item.href, item.label)}
                      className="w-full text-left py-4 px-2 text-lg font-medium text-gray-900 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg border-b border-gray-100 hover:border-blue-600"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
