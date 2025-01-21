"use client";
import { useSearchParams } from "next/navigation"; // Import the useSearchParams hook

// Define type for supported chains
type SupportedChain = "sol" | "base";

// Component for Base Meme View
const BaseMemeView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-6">Base Meme View</h2>
  </div>
);

// Component for Sol Meme View
const SolMemeView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Sol Meme View</h2>
  </div>
);

export default function MemePage() {
  // Use the `useSearchParams` hook to get search params
  const searchParams = useSearchParams();
  const chain = searchParams?.get("chain")?.toLowerCase() as
    | SupportedChain
    | undefined;

  return (
    <div className="pt-14">
      {chain === "sol" && <SolMemeView />}
      {chain === "base" && <BaseMemeView />}
    </div>
  );
}
