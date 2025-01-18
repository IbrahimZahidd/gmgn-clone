import { redirect } from "next/navigation";

// Type safety for supported chains
type SupportedChain = "sol" | "tron" | "bsc" | "blast" | "base" | "eth";

// Component for SOL trending view
const SolTrendingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Solana Trending Pairs</h2>
    {/* Add SOL-specific trending content here */}
  </div>
);

// Component for ETH trending view
const EthTrendingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Ethereum Discovery Pairs</h2>
    {/* Add ETH-specific trending content here */}
  </div>
);

// Component for BSC trending view
const BscTrendingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">BSC Trending Pairs</h2>
    {/* Add BSC-specific trending content here */}
  </div>
);

// Component for TRON trending view
const TronTrendingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Tron Trending Pairs</h2>
    {/* Add TRON-specific trending content here */}
  </div>
);

// Component for BLAST trending view
const BlastTrendingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Blast Trending Pairs</h2>
    {/* Add Blast-specific trending content here */}
  </div>
);

// Component for BASE trending view
const BaseTrendingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Base Trending Pairs</h2>
    {/* Add Base-specific trending content here */}
  </div>
);

export default function HomeTrendPage({
  searchParams,
}: {
  searchParams: { chain?: string };
}) {
  const chain = searchParams.chain?.toLowerCase() as SupportedChain;

  // Render the appropriate trending view based on the chain
  return (
    <div className="pt-14">
      {chain === "sol" && <SolTrendingView />}
      {chain === "eth" && <EthTrendingView />}
      {chain === "bsc" && <BscTrendingView />}
      {chain === "tron" && <TronTrendingView />}
      {chain === "blast" && <BlastTrendingView />}
      {chain === "base" && <BaseTrendingView />}
    </div>
  );
}
