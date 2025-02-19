import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GMGN - Your Web3 Trading Platform",
  description: "Trade, track, and analyze crypto assets across multiple chains",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`}>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-grow bg-[#0D0D0D]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
