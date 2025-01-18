export default function AppPage({
  searchParams,
}: {
  searchParams: { chain: string };
}) {
  return (
    <div className="pt-14">
      <h1>App Page for {searchParams.chain}</h1>
    </div>
  );
}
