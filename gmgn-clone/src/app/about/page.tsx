"use client";

import { useSearchParams } from "next/navigation"; // Import the useSearchParams hook

// Define type for supported chains
type SupportedChain = "sol" | "tron" | "bsc" | "blast" | "base" | "eth";

// Component for SOL about view
const SolAboutView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-6">SOL About View</h2>
  </div>
);

// Component for ETH about view
const EthAboutView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Ethereum About View</h2>
  </div>
);

// Component for BSC about view
const BscAboutView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">BSC About View</h2>
  </div>
);

// Component for TRON about view
const TronAboutView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Tron About View</h2>
  </div>
);

// Component for BLAST about view
const BlastAboutView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Blast About View</h2>
  </div>
);

// Component for BASE about view
const BaseAboutView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Base About View</h2>
  </div>
);

export default function AboutPage() {
  // Use the `useSearchParams` hook to get search params
  const searchParams = useSearchParams();
  const chain = searchParams?.get("chain")?.toLowerCase() as
    | SupportedChain
    | undefined;

  return (
    <div className="pt-14">
      {chain === "sol" && <SolAboutView />}
      {chain === "eth" && <EthAboutView />}
      {chain === "bsc" && <BscAboutView />}
      {chain === "tron" && <TronAboutView />}
      {chain === "blast" && <BlastAboutView />}
      {chain === "base" && <BaseAboutView />}
    </div>
  );
}
