"use client";
import { useSearchParams } from "next/navigation"; // Import the useSearchParams hook

// Define type for supported chains
type SupportedChain = "sol" | "tron" | "bsc" | "blast" | "base" | "eth";

// Component for SOL holding View
const SolHoldingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-6">SOL Holding View</h2>
  </div>
);

// Component for ETH holding View
const EthHoldingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Ethereum Holding View</h2>
  </div>
);

// Component for BSC holding View
const BscHoldingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">BSC Holding View</h2>
  </div>
);

// Component for TRON holding View
const TronHoldingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Tron Holding View</h2>
  </div>
);

// Component for BLAST holding View
const BlastHoldingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Blast Holding View</h2>
  </div>
);

// Component for BASE holding View
const BaseHoldingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Base Holding View</h2>
  </div>
);

export default function HoldingPage() {
  // Use the `useSearchParams` hook to get search params
  const searchParams = useSearchParams();
  const chain = searchParams?.get("chain")?.toLowerCase() as
    | SupportedChain
    | undefined;

  return (
    <div className="pt-14">
      {chain === "sol" && <SolHoldingView />}
      {chain === "eth" && <EthHoldingView />}
      {chain === "bsc" && <BscHoldingView />}
      {chain === "tron" && <TronHoldingView />}
      {chain === "blast" && <BlastHoldingView />}
      {chain === "base" && <BaseHoldingView />}
    </div>
  );
}
