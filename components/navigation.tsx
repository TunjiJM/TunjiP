"use client"

import { Suspense } from "react"
import Link from "next/link"
import { NavigationClient } from "./navigation-client"

export function Navigation() {
  return (
    <Suspense
      fallback={
        <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex h-16 md:h-20 items-center justify-between">
              <Link
                href="/"
                className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              >
                Moqify
              </Link>
              <div className="w-10 h-10"></div> {/* Placeholder for menu button */}
            </div>
          </div>
        </header>
      }
    >
      <NavigationClient />
    </Suspense>
  )
}
