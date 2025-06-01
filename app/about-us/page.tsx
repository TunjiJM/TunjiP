import { Users, Globe, Wallet, Truck, Lock, Search, Package } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white border-b">
        <a href="/" className="text-xl font-bold text-blue-600">
          Moqify
        </a>
        <a href="/" className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </a>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-12 bg-blue-500 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About Moqify: Revolutionizing MOQ Sharing for Businesses Worldwide
          </h1>
          <p className="text-lg md:text-xl">
            Moqify connects small and medium enterprises (SMEs) with verified manufacturers, enabling them to share
            MOQs, save costs, and scale their businesses seamlessly.
          </p>
        </div>
      </section>

      {/* Empowering SMEs Section */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Empowering Global Trade for SMEs</h2>
              <p className="text-gray-600 mb-4">
                Moqify is a community-driven platform designed to break down the barriers of Minimum Order Quantities
                (MOQs) for businesses. We believe no business should be limited by bulk order requirements, insufficient
                capital, or logistical hurdles. By enabling SMEs to share MOQs and pool resources, Moqify fosters
                collaboration and creates new opportunities for global trade.
              </p>
              <p className="text-gray-600">
                Our vision is to reshape commerce by enabling SMEs to unlock the power of collective purchasing. Moqify
                empowers your business with the tools to trade smarter, faster, and more collaboratively.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Network visualization representing global trade connections"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlining Trade Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Streamlining Trade with Innovative Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">MOQ Sharing</h3>
              </div>
              <p className="text-gray-600">Connect with other businesses to meet manufacturer MOQs and share costs.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">Verified Manufacturers</h3>
              </div>
              <p className="text-gray-600">Access products from trusted manufacturers globally.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">Industry Communities</h3>
              </div>
              <p className="text-gray-600">Join industry-specific groups for seamless collaboration.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">Efficient Logistics</h3>
              </div>
              <p className="text-gray-600">
                Enjoy reliable shipping and customs support through our reputable logistics partners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">Secure Payments</h3>
              </div>
              <p className="text-gray-600">Funds are held in escrow until all supplier obligations are met.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Moqify Section */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Why Businesses Choose Moqify</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <Badge className="bg-green-100 text-green-600 mr-3 mt-1">✓</Badge>
              <div>
                <h3 className="font-semibold mb-2">Cost-Effective</h3>
                <p className="text-gray-600 text-sm">Share costs, reduce individual financial pressure.</p>
              </div>
            </div>

            <div className="flex items-start">
              <Badge className="bg-green-100 text-green-600 mr-3 mt-1">✓</Badge>
              <div>
                <h3 className="font-semibold mb-2">Trusted Access</h3>
                <p className="text-gray-600 text-sm">Partner only with vetted manufacturers.</p>
              </div>
            </div>

            <div className="flex items-start">
              <Badge className="bg-green-100 text-green-600 mr-3 mt-1">✓</Badge>
              <div>
                <h3 className="font-semibold mb-2">Transparent Process</h3>
                <p className="text-gray-600 text-sm">Every step, from wallet to delivery, is trackable.</p>
              </div>
            </div>

            <div className="flex items-start">
              <Badge className="bg-green-100 text-green-600 mr-3 mt-1">✓</Badge>
              <div>
                <h3 className="font-semibold mb-2">Secure Payments</h3>
                <p className="text-gray-600 text-sm">Your funds are protected in escrow.</p>
              </div>
            </div>

            <div className="flex items-start md:col-span-2">
              <Badge className="bg-green-100 text-green-600 mr-3 mt-1">✓</Badge>
              <div>
                <h3 className="font-semibold mb-2">Total Convenience</h3>
                <p className="text-gray-600 text-sm">Manage orders from your device—anytime, anywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Driving Trade Efficiency for SMEs
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Moqify simplifies the complexities of cross-border trade with an intuitive process:
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 text-white p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Browse Products</h3>
              <p className="text-gray-600 text-sm">Explore high-quality products from trusted manufacturers.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 text-white p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                <Wallet className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Join or Create a Wallet</h3>
              <p className="text-gray-600 text-sm">Share MOQs with other businesses.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 text-white p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                <Package className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Contribute and Track</h3>
              <p className="text-gray-600 text-sm">Pay your share and track your shipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="px-4 py-12 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Moqify Movement</h2>
          <p className="text-lg mb-8">
            Be part of a growing network of businesses transforming how trade happens—through community, technology, and
            shared opportunity.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Get Started Today
          </button>
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
              <div className="flex space-x-4 justify-start">
                <a
                  href="https://x.com/MoqifyHQ?t=YKMpR-rM4N0WpJ5pcj3o8w&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/bookmarks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="mailto:hello@moqify.com" className="text-blue-100 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
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
