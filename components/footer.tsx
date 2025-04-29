import Link from "next/link"
import { Twitter, Facebook, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-violet-900 text-white">
      <div className="container mx-auto py-12 px-4 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <Link href="/about" className="text-lg font-semibold text-blue-300 hover:text-white transition-colors">
              About Us
            </Link>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-300 mb-2">Contact Us</h3>
            <a
              href="mailto:hello@moqify.com"
              className="flex items-center justify-center md:justify-start gap-2 text-blue-300 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              hello@moqify.com
            </a>
          </div>
          <div className="flex justify-center md:justify-end gap-6">
            <Link
              href="https://x.com/MoqifyHQ?t=YKMpR-rM4N0WpJ5pcj3o8w&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.facebook.com/bookmarks/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-blue-300 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-800">
        <div className="container mx-auto py-6 px-4 text-center">
          <div className="text-sm text-blue-300">© {new Date().getFullYear()} Moqify. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
