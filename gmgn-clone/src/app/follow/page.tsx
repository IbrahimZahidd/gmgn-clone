"use client";
import { useSearchParams } from "next/navigation"; // Import the useSearchParams hook

// Define type for supported chains
type SupportedChain = "sol" | "tron" | "base" | "eth";

// Component for SOL follow View
const SolFollowView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-6">SOL Follow View</h2>
  </div>
);

// Component for ETH follow View
const EthFollowView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Ethereum Follow View</h2>
  </div>
);

// Component for BSC follow View
const BscFollowView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">BSC Follow View</h2>
  </div>
);

// Component for TRON follow View
const TronFollowView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Tron Follow View</h2>
  </div>
);

// Component for BLAST follow View
const BlastFollowView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Blast Follow View</h2>
  </div>
);

// Component for BASE follow View
const BaseFollowView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Base Follow View</h2>
  </div>
);

export default function FollowPage() {
  // Use the `useSearchParams` hook to get search params
  const searchParams = useSearchParams();
  const chain = searchParams?.get("chain")?.toLowerCase() as
    | SupportedChain
    | undefined;

  return (
    <div className="pt-14">
      {chain === "sol" && <SolFollowView />}
      {chain === "eth" && <EthFollowView />}
      {chain === "tron" && <TronFollowView />}
      {chain === "base" && <BaseFollowView />}
    </div>
  );
}
