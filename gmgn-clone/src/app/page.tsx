"use client";

import { useSearchParams } from "next/navigation"; // Import the useSearchParams hook

// Define type for supported chains
type SupportedChain = "sol" | "tron" | "bsc" | "blast" | "base" | "eth";

import { TrendingCoinsView } from "@/components/TrendingCoinsView";

// Component for SOL trending view
const SolTrendingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-6">SOL Trending Pairs</h2>
    <TrendingCoinsView />
  </div>
);

// Component for ETH discover view
const EthDiscoverView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Ethereum Discovery Pairs</h2>
  </div>
);

// Component for BSC trending view
const BscTrendingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">BSC Trending Pairs</h2>
  </div>
);

// Component for TRON trending view
const TronTrendingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Tron Trending Pairs</h2>
  </div>
);

// Component for BLAST trending view
const BlastTrendingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Blast Trending Pairs</h2>
  </div>
);

// Component for BASE trending view
const BaseTrendingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Base Trending Pairs</h2>
  </div>
);

export default function HomeTrendPage() {
  // Use the `useSearchParams` hook to get search params
  const searchParams = useSearchParams();
  const chain = searchParams?.get("chain")?.toLowerCase() as
    | SupportedChain
    | undefined;

  // Render the appropriate trending view based on the chain
  return (
    <div className="pt-14">
      {chain === "sol" && <SolTrendingView />}
      {chain === "eth" && <EthDiscoverView />}
      {chain === "bsc" && <BscTrendingView />}
      {chain === "tron" && <TronTrendingView />}
      {chain === "blast" && <BlastTrendingView />}
      {chain === "base" && <BaseTrendingView />}
    </div>
  );
}
