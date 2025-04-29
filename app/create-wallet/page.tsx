import { WalletDashboard } from "@/components/wallet-dashboard"
import type { Metadata } from "next"
import { ClientSideWrapper } from "@/components/client-side-wrapper"

export const metadata: Metadata = {
  title: "Wallet Dashboard | Moqify",
  description:
    "Manage your shared MOQ wallets, track contributions, and monitor your business finances with Moqify's wallet system.",
}

export default function CreateWalletPage() {
  // Render the wallet dashboard directly without any authentication checks
  return (
    <ClientSideWrapper>
      <WalletDashboard />
    </ClientSideWrapper>
  )
}
