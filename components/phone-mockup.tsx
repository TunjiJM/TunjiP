'use client'

import { Bell, Signal, Wifi, Battery } from 'lucide-react'

export function PhoneMockup() {
  return (
    <div className="relative w-[280px] h-[580px]">
      {/* Phone Frame with Side Buttons */}
      <div className="absolute inset-0 bg-black rounded-[45px] shadow-2xl">
        {/* Side Buttons */}
        <div className="absolute -left-[1px] top-[100px] w-[1px] h-12 bg-gray-800 rounded-l" /> {/* Volume Up */}
        <div className="absolute -left-[1px] top-[150px] w-[1px] h-12 bg-gray-800 rounded-l" /> {/* Volume Down */}
        <div className="absolute -right-[1px] top-[120px] w-[1px] h-14 bg-gray-800 rounded-r" /> {/* Power */}
        
        {/* Screen Container */}
        <div className="absolute inset-[3px] bg-white overflow-hidden rounded-[42px]">
          {/* Status Bar Background */}
          <div className="absolute top-0 left-0 right-0 h-7 bg-white z-10">
            <div className="flex justify-between items-center px-5 h-full text-[12px] font-medium">
              <span>10:30</span>
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium mr-1">4G</span>
                <Signal className="h-3.5 w-3.5" />
                <Wifi className="h-3.5 w-3.5" />
                <Battery className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>

          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-40 bg-black rounded-b-3xl z-20" />

          {/* Main Content */}
          <div className="px-5 pt-12">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Welcome Tunji,</h2>
                <p className="text-[13px] font-medium text-gray-600">Share MOQ, finance your invoices</p>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-sm font-semibold text-blue-600">Track Order</span>
                <Bell className="h-5 w-5" />
              </div>
            </div>

            {/* Account Balance Card */}
            <div className="bg-blue-600 text-white rounded-2xl p-5 mb-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium opacity-90">Account Balance</span>
              </div>
              <h3 className="text-[26px] font-bold">₦50,000,000</h3>
            </div>

            {/* Features Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold">Features</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-b from-blue-50 to-blue-100/50 rounded-2xl p-4">
                  <h4 className="text-[15px] font-bold mb-1">Share MOQ</h4>
                  <p className="text-xs text-gray-600 mb-3">View available products</p>
                  <button className="text-sm font-bold text-blue-600">View</button>
                </div>
                <div className="bg-gradient-to-b from-gray-50 to-gray-100/50 rounded-2xl p-4">
                  <h4 className="text-[15px] font-bold mb-1">Convert invoices to cash</h4>
                  <p className="text-xs text-gray-600 mb-3">Quick financing</p>
                  <button className="text-sm font-bold text-blue-600">Open</button>
                </div>
                <div className="bg-gradient-to-b from-green-50 to-green-100/50 rounded-2xl p-4">
                  <h4 className="text-[15px] font-bold mb-1">Live Invoices</h4>
                  <p className="text-xs text-gray-600 mb-3">View active invoices</p>
                  <button className="text-sm font-bold text-green-600">Open</button>
                </div>
                <div className="bg-gradient-to-b from-pink-50 to-pink-100/50 rounded-2xl p-4">
                  <h4 className="text-[15px] font-bold mb-1">Pending Invoices</h4>
                  <p className="text-xs text-gray-600 mb-3">View pending invoices</p>
                  <button className="text-sm font-bold text-pink-600">Open</button>
                </div>
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1 left-0 right-0 flex justify-center">
            <div className="w-32 h-1 bg-black rounded-full opacity-20" />
          </div>
        </div>
      </div>
    </div>
  )
}
