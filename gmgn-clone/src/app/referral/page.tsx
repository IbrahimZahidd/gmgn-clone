export default function ReferralPage({
  searchParams,
}: {
  searchParams: { chain: string };
}) {
  return (
    <div className="pt-14">
      <h1>Referral Page for {searchParams.chain}</h1>
    </div>
  );
}
