export default function MemePage({
  searchParams,
}: {
  searchParams: { chain: string };
}) {
  return (
    <div className="pt-14">
      <h1>Meme Page for {searchParams.chain}</h1>
    </div>
  );
}
