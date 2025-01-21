"use client";
import { useSearchParams } from "next/navigation"; // Import the useSearchParams hook

// Define type for supported chains
type SupportedChain = "sol" | "tron" | "bsc" | "blast" | "base" | "eth";

// Component for SOL referral View
const SolReferralView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-6">SOL Referral View</h2>
  </div>
);

// Component for ETH referral View
const EthReferralView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Ethereum Referral View</h2>
  </div>
);

// Component for BSC referral View
const BscReferralView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">BSC Referral View</h2>
  </div>
);

// Component for TRON referral View
const TronReferralView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Tron Referral View</h2>
  </div>
);

// Component for BLAST referral View
const BlastReferralView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Blast Referral View</h2>
  </div>
);

// Component for BASE referral View
const BaseReferralView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Base Referral View</h2>
  </div>
);

export default function ReferralPage() {
  // Use the `useSearchParams` hook to get search params
  const searchParams = useSearchParams();
  const chain = searchParams?.get("chain")?.toLowerCase() as
    | SupportedChain
    | undefined;

  return (
    <div className="pt-14">
      {chain === "sol" && <SolReferralView />}
      {chain === "eth" && <EthReferralView />}
      {chain === "bsc" && <BscReferralView />}
      {chain === "tron" && <TronReferralView />}
      {chain === "blast" && <BlastReferralView />}
      {chain === "base" && <BaseReferralView />}
    </div>
  );
}
