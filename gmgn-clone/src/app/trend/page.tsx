export default function TrendPage({
  searchParams,
}: {
  searchParams: { chain: string };
}) {
  return (
    <div className="pt-14">
      <h1>Trend Page for {searchParams.chain}</h1>
    </div>
  );
}
