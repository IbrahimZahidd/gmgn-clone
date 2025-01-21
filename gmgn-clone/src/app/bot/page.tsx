"use client";

import { useSearchParams } from "next/navigation"; // Import the useSearchParams hook

// Define type for supported chains
type SupportedChain = "sol" | "tron" | "bsc" | "blast" | "base" | "eth";

// Component for SOL bot view
const SolBotView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-6">SOL Bot View</h2>
  </div>
);

// Component for ETH bot view
const EthBotView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Ethereum Bot View</h2>
  </div>
);

// Component for BSC bot view
const BscBotView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">BSC Bot View</h2>
  </div>
);

// Component for TRON bot view
const TronBotView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Tron Bot View</h2>
  </div>
);

// Component for BLAST bot view
const BlastBotView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Blast Bot View</h2>
  </div>
);

// Component for BASE bot view
const BaseBotView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Base Bot View</h2>
  </div>
);

export default function BotPage() {
  // Use the `useSearchParams` hook to get search params
  const searchParams = useSearchParams();
  const chain = searchParams?.get("chain")?.toLowerCase() as
    | SupportedChain
    | undefined;

  // Render the appropriate trending view based on the chain
  return (
    <div className="pt-14">
      {chain === "sol" && <SolBotView />}
      {chain === "eth" && <EthBotView />}
      {chain === "bsc" && <BscBotView />}
      {chain === "tron" && <TronBotView />}
      {chain === "blast" && <BlastBotView />}
      {chain === "base" && <BaseBotView />}
    </div>
  );
}
