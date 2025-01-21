"use client";
import { useSearchParams } from "next/navigation"; // Import the useSearchParams hook

// Define type for supported chains
type SupportedChain = "tron" | "base";

// Component for TRON discover View
const TronDiscoverView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Tron Discover View</h2>
  </div>
);

// Component for BASE holding View
const BaseDiscoverView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Base Discover View</h2>
  </div>
);

export default function DiscoverPage() {
  // Use the `useSearchParams` hook to get search params
  const searchParams = useSearchParams();
  const chain = searchParams?.get("chain")?.toLowerCase() as
    | SupportedChain
    | undefined;

  return (
    <div className="pt-14">
      {chain === "tron" && <TronDiscoverView />}
      {chain === "base" && <BaseDiscoverView />}
    </div>
  );
}
