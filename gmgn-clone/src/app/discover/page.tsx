export default function DiscoverPage({
  searchParams,
}: {
  searchParams: { chain: string };
}) {
  return (
    <div className="pt-14">
      <h1>Discover Page for {searchParams.chain}</h1>
    </div>
  );
}
