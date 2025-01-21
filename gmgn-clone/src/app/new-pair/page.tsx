export default function NewPairPage({
  searchParams,
}: {
  searchParams: { chain: string };
}) {
  return (
    <div>
      <h1>New Pair Page for {searchParams.chain}</h1>
    </div>
  );
}
