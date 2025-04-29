"use client"

import { useState } from "react"
import { ArrowLeft, Building } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// List of Nigerian banks
const NIGERIAN_BANKS = [
  "Access Bank",
  "Citibank Nigeria",
  "Ecobank Nigeria",
  "Fidelity Bank",
  "First Bank of Nigeria",
  "First City Monument Bank",
  "Guaranty Trust Bank",
  "Heritage Bank",
  "Keystone Bank",
  "Polaris Bank",
  "Stanbic IBTC Bank",
  "Standard Chartered Bank",
  "Sterling Bank",
  "Union Bank of Nigeria",
  "United Bank for Africa",
  "Unity Bank",
  "Wema Bank",
  "Zenith Bank",
]

interface FundWalletModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FundWalletModal({ isOpen, onClose }: FundWalletModalProps) {
  const [country, setCountry] = useState("Nigeria")
  const [bank, setBank] = useState("")
  const [step, setStep] = useState(1)

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      onClose()
    }
  }

  const handleConnect = () => {
    // Here you would implement the actual bank connection logic
    console.log("Connecting to bank:", bank)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 max-w-md w-full rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-green-500 text-white p-4 flex items-center">
          <button onClick={handleBack} className="mr-4">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h2 className="text-xl font-semibold">Find your bank</h2>
        </div>

        <div className="p-6">
          {/* Bank Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-blue-500 rounded-full p-6 w-24 h-24 flex items-center justify-center">
              <Building className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Country Selection */}
          <div className="mb-6">
            <label htmlFor="country" className="block text-sm font-medium text-gray-500 mb-2">
              Country
            </label>
            <Select value={country} onValueChange={setCountry} disabled>
              <SelectTrigger id="country" className="w-full border-gray-300 rounded-md">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Nigeria">
                  <div className="flex items-center">
                    <span className="mr-2">🇳🇬</span>
                    Nigeria
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bank Selection */}
          <div className="mb-8">
            <label htmlFor="bank" className="block text-sm font-medium text-gray-500 mb-2">
              Bank name
            </label>
            <Select value={bank} onValueChange={setBank}>
              <SelectTrigger id="bank" className="w-full border-gray-300 rounded-md">
                <SelectValue placeholder="SELECT BANK" />
              </SelectTrigger>
              <SelectContent>
                {NIGERIAN_BANKS.map((bankName) => (
                  <SelectItem key={bankName} value={bankName}>
                    {bankName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Connect Button */}
          <Button
            onClick={handleConnect}
            disabled={!bank}
            className="w-full py-6 text-lg font-medium bg-gray-300 hover:bg-green-500 text-white"
            style={{ backgroundColor: bank ? "#10b981" : undefined }}
          >
            CONNECT
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
