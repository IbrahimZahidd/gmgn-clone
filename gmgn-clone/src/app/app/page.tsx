"use client";

import { useSearchParams } from "next/navigation"; // Import the useSearchParams hook

// Define type for supported chains
type SupportedChain = "sol" | "tron" | "bsc" | "blast" | "base" | "eth";

// Component for SOL app view
const SolAppView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-6">SOL App View</h2>
  </div>
);

// Component for ETH app view
const EthAppView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Ethereum App View</h2>
  </div>
);

// Component for BSC app view
const BscAppView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">BSC App View</h2>
  </div>
);

// Component for TRON app view
const TronAppView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Tron App View</h2>
  </div>
);

// Component for BLAST app view
const BlastAppView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Blast App View</h2>
  </div>
);

// Component for BASE app view
const BaseAppView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Base App View</h2>
  </div>
);

export default function AppPage() {
  // Use the `useSearchParams` hook to get search params
  const searchParams = useSearchParams();
  const chain = searchParams?.get("chain")?.toLowerCase() as
    | SupportedChain
    | undefined;

  return (
    <div className="pt-14">
      {chain === "sol" && <SolAppView />}
      {chain === "eth" && <EthAppView />}
      {chain === "bsc" && <BscAppView />}
      {chain === "tron" && <TronAppView />}
      {chain === "blast" && <BlastAppView />}
      {chain === "base" && <BaseAppView />}
    </div>
  );
}
