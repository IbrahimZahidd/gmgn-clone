"use client";
import { useSearchParams } from "next/navigation"; // Import the useSearchParams hook

// Define type for supported chains
type SupportedChain = "sol" | "tron" | "bsc" | "blast" | "base" | "eth";

// Component for ETH trending view
const SolCopyTradingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Sol CopyTrading View</h2>
  </div>
);

export default function TradePage() {
  // Use the `useSearchParams` hook to get search params
  const searchParams = useSearchParams();
  const chain = searchParams?.get("chain")?.toLowerCase() as
    | SupportedChain
    | undefined;

  return (
    <div className="pt-14">{chain === "sol" && <SolCopyTradingView />}</div>
  );
}
