"use client";
import { useSearchParams } from "next/navigation"; // Import the useSearchParams hook

// Define type for supported chains
type SupportedChain = "sol" | "tron" | "bsc" | "blast" | "base" | "eth";

// Component for SOL new pair View
const SolNewPairView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-6">SOL New Pair View</h2>
  </div>
);

// Component for ETH new pair View
const EthNewPairView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Ethereum New Pair View</h2>
  </div>
);

// Component for BSC new pair View
const BscNewPairView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">BSC New Pair View</h2>
  </div>
);

// Component for TRON new pair View
const TronNewPairView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Tron New Pair View</h2>
  </div>
);

// Component for BLAST new pair View
const BlastNewPairView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Blast New Pair View</h2>
  </div>
);

// Component for BASE new pair View
const BaseNewPairView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Base New Pair View</h2>
  </div>
);

export default function NewPairPage() {
  // Use the `useSearchParams` hook to get search params
  const searchParams = useSearchParams();
  const chain = searchParams?.get("chain")?.toLowerCase() as
    | SupportedChain
    | undefined;

  return (
    <div className="pt-14">
      {chain === "sol" && <SolNewPairView />}
      {chain === "eth" && <EthNewPairView />}
      {chain === "bsc" && <BscNewPairView />}
      {chain === "tron" && <TronNewPairView />}
      {chain === "blast" && <BlastNewPairView />}
      {chain === "base" && <BaseNewPairView />}
    </div>
  );
}
