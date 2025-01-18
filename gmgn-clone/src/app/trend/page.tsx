type SupportedChain = "eth";

// Component for ETH trending view
const EthTrendingView = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Ethereum Trending Pairs</h2>
    {/* Add ETH-specific trending content here */}
  </div>
);

export default function TrendPage({
  searchParams,
}: {
  searchParams: { chain?: string };
}) {
  const chain = searchParams.chain?.toLowerCase() as SupportedChain;

  // Render the appropriate trending view based on the chain
  return <div className="pt-14">{chain === "eth" && <EthTrendingView />}</div>;
}
