export default function FollowPage({
  searchParams,
}: {
  searchParams: { chain: string };
}) {
  return (
    <div className="pt-14">
      <h1>Follow Page for {searchParams.chain}</h1>
    </div>
  );
}
