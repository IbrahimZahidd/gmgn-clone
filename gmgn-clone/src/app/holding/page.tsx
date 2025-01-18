export default function HoldingPage({
  searchParams,
}: {
  searchParams: { chain: string };
}) {
  return (
    <div className="pt-14">
      <h1>Holding Page for {searchParams.chain}</h1>
    </div>
  );
}
