"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useChain } from "@/context/ChainContext";
import { Dialog, DialogContent } from "./ui/dialog";

interface FooterProps {
  selectedChain?: string;
}

const Footer = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isSniperDialogOpen, setSniperDialogOpen] = useState(false);
  const [isFollowingDialogOpen, setFollowingDialogOpen] = useState(false);
  const { selectedChain } = useChain();

  // Memoize chain prices to prevent unnecessary re-renders
  const chainPrices = React.useMemo(
    () => ({
      ETH: "$3,267.23",
      SOL: "$146.82",
      BSC: "$432.15",
      TRON: "$0.12",
      BASE: "$45.23",
      BLAST: "$1.82",
    }),
    []
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleExternalLink = (url: string, title: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getChainBasedUrl = (path: string) => {
    return `${path}?chain=${selectedChain.toLowerCase()}`;
  };

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 w-full h-14 bg-[#0D0D0D] border-t border-[#1A1B1E] z-50"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <nav
        className="h-full px-4 flex items-center justify-between max-w-[1920px] mx-auto"
        aria-label="Footer Navigation"
      >
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setSniperDialogOpen(true)}
            className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FAFAFA]"
            aria-label="Open Sniper Dialog"
          >
            <Image
              src="/sniper new.png"
              alt=""
              width={20}
              height={20}
              className="mr-2"
              aria-hidden="true"
            />
            <span>Sniper New</span>
          </button>

          <button
            onClick={() => setFollowingDialogOpen(true)}
            className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FAFAFA]"
            aria-label="Open Following Dialog"
          >
            <Image
              src="/following.png"
              alt=""
              width={20}
              height={20}
              className="mr-2"
              aria-hidden="true"
            />
            <span>Following</span>
          </button>

          <Link
            href={getChainBasedUrl("/referral")}
            className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FAFAFA]"
            aria-label="Go to Referral Page"
          >
            <Image
              src="/refex.png"
              alt=""
              width={20}
              height={20}
              className="mr-2"
              aria-hidden="true"
            />
            <span>Refer 0</span>
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link
            href={getChainBasedUrl("/app")}
            className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FAFAFA]"
            aria-label="Download Mobile App"
          >
            <Image
              src="/app.png"
              alt=""
              width={20}
              height={20}
              className="mr-2"
              aria-hidden="true"
            />
            <span>Mobile APP</span>
          </Link>

          <Link
            href="/index"
            className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FAFAFA]"
            aria-label="Go to Academy"
          >
            <Image
              src="/academy.png"
              alt=""
              width={20}
              height={20}
              className="mr-2"
              aria-hidden="true"
            />
            <span>Academy</span>
          </Link>

          <Link
            href={getChainBasedUrl("/about")}
            className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FAFAFA]"
            aria-label="About Us"
          >
            <Image
              src="/about.png"
              alt=""
              width={20}
              height={20}
              className="mr-2"
              aria-hidden="true"
            />
            <span>About</span>
          </Link>

          <Link
            href={getChainBasedUrl("/bot")}
            className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FAFAFA]"
            aria-label="Trading Bot"
          >
            <Image
              src="/bot.png"
              alt=""
              width={20}
              height={20}
              className="mr-2"
              aria-hidden="true"
            />
            <span>Bot</span>
          </Link>

          <Link
            href="/index/cooperation-api-integrate-gmgn-eth-base-trading-api"
            className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FAFAFA]"
            aria-label="API Documentation"
          >
            <Image
              src="/api.png"
              alt=""
              width={20}
              height={20}
              className="mr-2"
              aria-hidden="true"
            />
            <span>API</span>
          </Link>

          <button
            onClick={() =>
              handleExternalLink("https://twitter.com/gmgnai", "Twitter")
            }
            className="text-[#A1A1AA] hover:text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FAFAFA]"
            aria-label="Visit our Twitter"
          >
            <Image src="/x.png" alt="Twitter" width={20} height={20} />
          </button>

          <button
            onClick={() =>
              handleExternalLink("https://t.me/gmgnai", "Telegram")
            }
            className="text-[#A1A1AA] hover:text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FAFAFA]"
            aria-label="Join our Telegram"
          >
            <Image src="/telegram.png" alt="Telegram" width={20} height={20} />
          </button>

          <div
            className="flex items-center text-sm text-[#A1A1AA]"
            aria-live="polite"
          >
            <Image
              src={`/${selectedChain.toLowerCase()}.png`}
              alt={`${selectedChain} icon`}
              width={20}
              height={20}
              className="mr-2"
            />
            <span>
              {selectedChain}:{" "}
              {chainPrices[selectedChain as keyof typeof chainPrices]}
            </span>
          </div>
        </div>
      </nav>

      <Dialog
        open={isSniperDialogOpen}
        onOpenChange={setSniperDialogOpen}
        aria-labelledby="sniper-dialog-title"
      >
        <DialogContent className="bg-[#18181B] border-[#27272A] text-[#FAFAFA]">
          <div className="p-4">
            <h2 id="sniper-dialog-title" className="text-lg font-semibold mb-4">
              Alert new tokens in 1-min trending
            </h2>
            <p role="alert">Check Honeypot when Swap!!</p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isFollowingDialogOpen}
        onOpenChange={setFollowingDialogOpen}
        aria-labelledby="following-dialog-title"
      >
        <DialogContent className="bg-[#18181B] border-[#27272A] text-[#FAFAFA]">
          <div className="p-4">
            <h2
              id="following-dialog-title"
              className="text-lg font-semibold mb-4"
            >
              Following
            </h2>
            <div className="text-center py-8">
              <p>You haven't connected your wallet yet</p>
              <button
                className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FAFAFA]"
                aria-label="Connect Wallet"
              >
                Connect wallet
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
