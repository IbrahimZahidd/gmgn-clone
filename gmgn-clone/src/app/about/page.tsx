export default function AboutPage({
  searchParams,
}: {
  searchParams: { chain: string };
}) {
  return (
    <div className="pt-14">
      <h1>About Page for {searchParams.chain}</h1>
    </div>
  );
}
