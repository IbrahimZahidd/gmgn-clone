export default function TradePage({
  searchParams,
}: {
  searchParams: { chain: string };
}) {
  return (
    <div className="pt-14">
      <h1>Trade Page for {searchParams.chain}</h1>
    </div>
  );
}
