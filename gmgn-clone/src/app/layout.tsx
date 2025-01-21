import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { ChainProvider } from "@/context/ChainContext";

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
    <html lang="en">
      <body className={`${inter.className} bg-[#0D0D0D] text-white`}>
        <ChainProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <div className="w-full px-4 pt-14 pb-14">{children}</div>
            </main>
            <Footer />
          </div>
        </ChainProvider>
      </body>
    </html>
  );
}
