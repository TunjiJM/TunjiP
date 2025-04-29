"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  Menu,
  Plus,
  Settings,
  List,
  Users,
  Star,
  BarChart3,
  Home,
  CreditCard,
  Download,
  PieChart,
  Clock,
  WalletIcon,
  DollarSign,
  Target,
  Building,
} from "lucide-react"
import { supabase } from "@/lib/supabase"
import { FundWalletModal } from "@/components/fund-wallet-modal"

export function WalletDashboard() {
  const [activeTab, setActiveTab] = useState("accounts")
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [fundWalletModalOpen, setFundWalletModalOpen] = useState(false)

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    const checkUser = async () => {
      try {
        console.log("Checking user authentication status...")
        const {
          data: { session },
        } = await supabase.auth.getSession()

        console.log("Auth session result:", session ? "User is logged in" : "No active session")

        // Set user if logged in, but don't redirect if not logged in
        if (session) {
          setUser(session.user)
          console.log("User authenticated:", session.user.email)
        } else {
          console.log("No user session, but continuing to show dashboard")
        }
      } catch (error) {
        console.error("Error checking auth status:", error)
      } finally {
        setLoading(false)
      }
    }

    checkUser()
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [menuOpen])

  const handleFundWallet = () => {
    setFundWalletModalOpen(true)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient">
        <Navigation />
        <main className="container py-20 md:py-32">
          <div className="flex justify-center items-center h-64">
            <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Sidebar Menu Component
  const SidebarMenu = () => (
    <div className={`fixed inset-0 z-50 ${menuOpen ? "block" : "hidden"}`}>
      <div className="flex h-full">
        {/* Menu Panel */}
        <div className="w-[85%] max-w-sm bg-white h-full flex flex-col">
          {/* Header */}
          <div className="bg-green-500 p-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <Users className="w-8 h-8 text-gray-400" />
              </div>
              <h2 className="text-2xl font-medium text-white">My Wallet</h2>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto">
            <div className="py-2">
              <MenuItem icon={<Star className="text-amber-500" />} label="Get Premium" />
              <MenuItem icon={<Building className="text-blue-500" />} label="Bank Sync" />
              <MenuItem icon={<Download className="text-blue-500" />} label="Imports" />
              <MenuItem
                icon={<Home className="text-blue-500" />}
                label="Home"
                active={true}
                onClick={() => setMenuOpen(false)}
              />
              <MenuItem
                icon={<List className="text-orange-500" />}
                label="Records"
                onClick={() => setMenuOpen(false)}
              />
              <MenuItem
                icon={<CreditCard className="text-green-500" />}
                label="Manufacturers and Suppliers partners"
                onClick={() => setMenuOpen(false)}
              />
              <MenuItem
                icon={<Users className="text-teal-500" />}
                label="Shared wallet"
                onClick={() => setMenuOpen(false)}
              />
              <MenuItem
                icon={<DollarSign className="text-blue-500" />}
                label="Currency rates"
                onClick={() => setMenuOpen(false)}
              />
              <MenuItem
                icon={<Users className="text-purple-500" />}
                label="Join your community industry"
                onClick={() => setMenuOpen(false)}
              />
              <MenuItem
                icon={<PieChart className="text-cyan-500" />}
                label="Statistics"
                onClick={() => setMenuOpen(false)}
              />
              <MenuItem
                icon={<Clock className="text-amber-500" />}
                label="Planned payments"
                onClick={() => setMenuOpen(false)}
              />
              <MenuItem
                icon={<WalletIcon className="text-red-500" />}
                label="Budgets"
                onClick={() => setMenuOpen(false)}
              />
              <MenuItem
                icon={<DollarSign className="text-red-500" />}
                label="Debts"
                onClick={() => setMenuOpen(false)}
              />
              <MenuItem icon={<Target className="text-teal-500" />} label="Goals" onClick={() => setMenuOpen(false)} />
              <MenuItem
                icon={<WalletIcon className="text-blue-500" />}
                label="Wallet for your business"
                badge="New"
                onClick={() => setMenuOpen(false)}
              />
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div className="flex-1 bg-black bg-opacity-50" onClick={() => setMenuOpen(false)} />
      </div>
    </div>
  )

  // Menu Item Component
  const MenuItem = ({
    icon,
    label,
    badge,
    active = false,
    onClick,
  }: {
    icon: React.ReactNode
    label: string
    badge?: string
    active?: boolean
    onClick?: () => void
  }) => (
    <div
      className={`flex items-center px-6 py-4 cursor-pointer ${active ? "bg-blue-100" : "hover:bg-gray-100"}`}
      onClick={onClick}
    >
      <div className="w-8 h-8 flex items-center justify-center mr-4">{icon}</div>
      <span className="text-gray-800 flex-1">{label}</span>
      {badge && <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">{badge}</span>}
    </div>
  )

  // Function to get user's first name
  const getUserFirstName = () => {
    if (!user) return "there"

    // Try to get name from user metadata if available
    if (user.user_metadata && user.user_metadata.full_name) {
      return user.user_metadata.full_name.split(" ")[0]
    }

    // Fallback to email
    if (user.email) {
      return user.email.split("@")[0]
    }

    return "there"
  }

  // Mobile wallet dashboard UI
  if (isMobile) {
    return (
      <div className="min-h-screen bg-white">
        {/* Sidebar Menu */}
        <SidebarMenu />

        {/* Fund Wallet Modal */}
        <FundWalletModal isOpen={fundWalletModalOpen} onClose={() => setFundWalletModalOpen(false)} />

        {/* Header */}
        <header className="bg-green-500 text-white p-4 sticky top-0 z-40">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={() => setMenuOpen(true)} className="mr-4">
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-semibold">Home</h1>
            </div>
            <div className="flex items-center gap-4">
              <Bell className="h-6 w-6" />
            </div>
          </div>
        </header>

        {/* User Greeting */}
        <div className="bg-white p-4 shadow-sm">
          <h2 className="text-xl font-semibold">Hi {getUserFirstName()}!</h2>
          <p className="text-sm text-gray-500">Welcome to your wallet dashboard</p>
        </div>

        {/* Tabs */}
        <div className="bg-green-500 text-white">
          <div className="flex">
            <button
              className={`flex-1 py-4 text-center font-medium ${
                activeTab === "accounts" ? "border-b-4 border-white" : ""
              }`}
              onClick={() => setActiveTab("accounts")}
            >
              ACCOUNTS
            </button>
            <button
              className={`flex-1 py-4 text-center font-medium ${
                activeTab === "budgets" ? "border-b-4 border-white" : ""
              }`}
              onClick={() => setActiveTab("budgets")}
            >
              BUDGETS & GOALS
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="p-4">
          {activeTab === "accounts" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">List of accounts</h2>

              <div className="grid grid-cols-1 gap-4 mb-4">
                <Card className="bg-blue-500 text-white">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold">Cash</h3>
                    <p className="text-2xl font-bold">USD 0</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-500 cursor-pointer" onClick={handleFundWallet}>
                  <CardContent className="p-4 flex items-center justify-center">
                    <Plus className="h-6 w-6 text-blue-500 mr-2" />
                    <span className="text-blue-500 font-semibold text-lg">FUND WALLET</span>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4 flex items-center justify-center">
                    <span className="text-gray-800 font-semibold">ACCOUNT DETAIL</span>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center justify-center">
                    <List className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-gray-800 font-semibold">RECORDS</span>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4 flex flex-col items-center justify-center">
                    <div className="bg-pink-100 p-2 rounded-full mb-2">
                      <Users className="h-5 w-5 text-pink-500" />
                    </div>
                    <span className="text-sm text-gray-800">Manufacturers and Suppliers partners</span>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex flex-col items-center justify-center">
                    <div className="bg-teal-100 p-2 rounded-full mb-2">
                      <Users className="h-5 w-5 text-teal-500" />
                    </div>
                    <span className="text-sm text-gray-800">Shared wallet</span>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4 flex flex-col items-center justify-center">
                    <div className="bg-blue-100 p-2 rounded-full mb-2">
                      <Users className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="text-sm text-gray-800">Currency rates</span>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex flex-col items-center justify-center">
                    <div className="bg-purple-100 p-2 rounded-full mb-2">
                      <Users className="h-5 w-5 text-purple-500" />
                    </div>
                    <span className="text-sm text-gray-800">Join your community industry</span>
                  </CardContent>
                </Card>
              </div>

              {/* Premium club */}
              <Card className="mb-6 border-2 border-pink-300">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                      <Star className="h-6 w-6 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Join our Premium club!</h3>
                      <p className="text-gray-600">
                        Maximize your financial potential. Wallet will do the heavy lifting. Cancel anytime.
                      </p>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">GET WALLET PREMIUM</Button>
                </CardContent>
              </Card>

              {/* Expenses structure */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Expenses structure</h2>
                <p className="text-gray-600">LAST 30 DAYS</p>
              </div>
            </div>
          )}

          {activeTab === "budgets" && (
            <div className="py-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Budgets & Goals</h2>
              <p className="text-gray-600 mb-6">Track your spending and save for your goals</p>
              <Button className="bg-green-600 hover:bg-green-700">Create New Budget</Button>
            </div>
          )}
        </main>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 right-6">
          <Button className="h-16 w-16 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg flex items-center justify-center">
            <Plus className="h-8 w-8" />
          </Button>
        </div>
      </div>
    )
  }

  // Desktop wallet dashboard UI
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container py-20 md:py-32">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Sidebar Menu for Desktop */}
          <SidebarMenu />

          {/* Fund Wallet Modal */}
          <FundWalletModal isOpen={fundWalletModalOpen} onClose={() => setFundWalletModalOpen(false)} />

          <div className="bg-green-500 text-white p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <button onClick={() => setMenuOpen(true)} className="mr-4">
                  <Menu className="h-6 w-6" />
                </button>
                <h1 className="text-3xl font-bold">Moqify Wallet Dashboard</h1>
              </div>
              <div className="flex items-center gap-4">
                <Bell className="h-6 w-6 cursor-pointer hover:text-green-200" />
                <Settings className="h-6 w-6 cursor-pointer hover:text-green-200" />
              </div>
            </div>
          </div>

          {/* User Greeting */}
          <div className="bg-white p-6 border-b">
            <h2 className="text-2xl font-bold">Hi {getUserFirstName()}!</h2>
            <p className="text-gray-500">Welcome to your wallet dashboard</p>
          </div>

          <Tabs defaultValue="accounts" className="w-full">
            <TabsList className="w-full bg-green-500 text-white rounded-none h-14">
              <TabsTrigger
                value="accounts"
                className="flex-1 h-full data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:border-white data-[state=active]:shadow-none text-white"
              >
                ACCOUNTS
              </TabsTrigger>
              <TabsTrigger
                value="budgets"
                className="flex-1 h-full data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:border-white data-[state=active]:shadow-none text-white"
              >
                BUDGETS & GOALS
              </TabsTrigger>
            </TabsList>

            <TabsContent value="accounts" className="p-6">
              <h2 className="text-2xl font-bold mb-6">List of accounts</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-blue-500 text-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">Cash</h3>
                    <p className="text-3xl font-bold mt-2">USD 0</p>
                  </CardContent>
                </Card>

                <Card
                  className="border-2 border-blue-500 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={handleFundWallet}
                >
                  <CardContent className="p-6 flex items-center justify-center h-full">
                    <Plus className="h-6 w-6 text-blue-500 mr-2" />
                    <span className="text-blue-500 font-semibold text-lg">FUND WALLET</span>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 flex items-center justify-center">
                    <span className="text-gray-800 font-semibold text-lg">ACCOUNT DETAIL</span>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 flex items-center justify-center">
                    <List className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-gray-800 font-semibold text-lg">RECORDS</span>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 flex items-center">
                    <div className="bg-pink-100 p-3 rounded-full mr-4">
                      <Users className="h-5 w-5 text-pink-500" />
                    </div>
                    <span className="text-gray-800 font-medium">Manufacturers and Suppliers partners</span>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 flex items-center">
                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                      <Users className="h-5 w-5 text-teal-500" />
                    </div>
                    <span className="text-gray-800 font-medium">Shared wallet</span>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Users className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="text-gray-800 font-medium">Currency rates</span>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 flex items-center">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Users className="h-5 w-5 text-purple-500" />
                    </div>
                    <span className="text-gray-800 font-medium">Join your community industry</span>
                  </CardContent>
                </Card>
              </div>

              {/* Premium club */}
              <Card className="mb-8 border-2 border-pink-300 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-yellow-100 p-4 rounded-full mr-6">
                      <Star className="h-8 w-8 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Join our Premium club!</h3>
                      <p className="text-gray-600 text-lg">
                        Maximize your financial potential. Wallet will do the heavy lifting. Cancel anytime.
                      </p>
                    </div>
                  </div>
                  <Button className="mt-6 bg-purple-600 hover:bg-purple-700 py-3 px-6 text-lg">
                    GET WALLET PREMIUM
                  </Button>
                </CardContent>
              </Card>

              {/* Expenses structure */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="text-2xl font-bold">Expenses structure</h2>
                    <p className="text-gray-600">LAST 30 DAYS</p>
                  </div>
                  <Button className="bg-blue-500 hover:bg-blue-600 rounded-full h-12 w-12 p-0">
                    <Plus className="h-6 w-6" />
                  </Button>
                </div>

                <Card>
                  <CardContent className="p-6 flex justify-center items-center h-64">
                    <div className="text-center">
                      <BarChart3 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg">No expense data available yet</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="budgets" className="p-6">
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Budgets & Goals</h2>
                <p className="text-gray-600 mb-8 text-lg">Track your spending and save for your goals</p>
                <Button className="bg-green-600 hover:bg-green-700 py-3 px-6 text-lg">Create New Budget</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
