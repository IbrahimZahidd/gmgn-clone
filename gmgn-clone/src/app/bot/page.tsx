export default function BotPage({
  searchParams,
}: {
  searchParams: { chain: string };
}) {
  return (
    <div className="pt-14">
      <h1>Bot Page for {searchParams.chain}</h1>
    </div>
  );
}
