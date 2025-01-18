export default function NewPairPage({
  searchParams,
}: {
  searchParams: { chain: string };
}) {
  return (
    <div className="pt-14">
      <h1>New Pair Page for {searchParams.chain}</h1>
    </div>
  );
}
