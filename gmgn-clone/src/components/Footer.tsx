"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useChain } from "@/context/ChainContext";

// Dialog component for popups
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

  // Dummy price data - will be replaced with API calls later
  const chainPrices = {
    ETH: "$3,267.23",
    SOL: "$146.82",
    BSC: "$432.15",
    TRON: "$0.12",
    BASE: "$45.23",
    BLAST: "$1.82",
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getChainBasedUrl = (path: string) => {
    return `${path}?chain=${selectedChain.toLowerCase()}`;
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full h-14 bg-[#0D0D0D] border-t border-[#1A1B1E] z-50">
      <div className="w-full h-full px-4">
        <div className="flex items-center justify-between h-full">
          {/* Left section */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setSniperDialogOpen(true)}
              className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA]"
            >
              <Image
                src="/sniper new.png"
                alt="Sniper New"
                width={20}
                height={20}
                className="mr-2"
              />
              Sniper New
            </button>

            <button
              onClick={() => setFollowingDialogOpen(true)}
              className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA]"
            >
              <Image
                src="/following.png"
                alt="Following"
                width={20}
                height={20}
                className="mr-2"
              />
              Following
            </button>

            <Link
              href={getChainBasedUrl("/referral")}
              className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA]"
            >
              <Image
                src="/refex.png"
                alt="Refer"
                width={20}
                height={20}
                className="mr-2"
              />
              Refer 0
            </Link>
          </div>

          {/* Center section */}
          <div className="flex items-center space-x-6">
            <Link
              href={getChainBasedUrl("/app")}
              className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA]"
            >
              <Image
                src="/app.png"
                alt="Mobile APP"
                width={20}
                height={20}
                className="mr-2"
              />
              Mobile APP
            </Link>

            <Link
              href="/index"
              className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA]"
            >
              <Image
                src="/academy.png"
                alt="Academy"
                width={20}
                height={20}
                className="mr-2"
              />
              Academy
            </Link>

            <Link
              href={getChainBasedUrl("/about")}
              className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA]"
            >
              <Image
                src="/about.png"
                alt="About"
                width={20}
                height={20}
                className="mr-2"
              />
              About
            </Link>

            <Link
              href={getChainBasedUrl("/bot")}
              className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA]"
            >
              <Image
                src="/bot.png"
                alt="Bot"
                width={20}
                height={20}
                className="mr-2"
              />
              Bot
            </Link>

            <Link
              href="/index/cooperation-api-integrate-gmgn-eth-base-trading-api"
              className="flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA]"
            >
              <Image
                src="/api.png"
                alt="API"
                width={20}
                height={20}
                className="mr-2"
              />
              API
            </Link>

            <button
              onClick={() => handleExternalLink("https://twitter.com/gmgnai")}
              className="text-[#A1A1AA] hover:text-[#FAFAFA]"
            >
              <Image src="/x.png" alt="Twitter" width={20} height={20} />
            </button>

            <button
              onClick={() => handleExternalLink("https://t.me/gmgnai")}
              className="text-[#A1A1AA] hover:text-[#FAFAFA]"
            >
              <Image
                src="/telegram.png"
                alt="Telegram"
                width={20}
                height={20}
              />
            </button>

            <div className="flex items-center text-sm text-[#A1A1AA]">
              <Image
                src={`/${selectedChain.toLowerCase()}.png`}
                alt={selectedChain}
                width={20}
                height={20}
                className="mr-2"
              />
              {selectedChain}:{" "}
              {chainPrices[selectedChain as keyof typeof chainPrices]}
            </div>
          </div>
        </div>
      </div>

      {/* Sniper Dialog */}
      <Dialog open={isSniperDialogOpen} onOpenChange={setSniperDialogOpen}>
        <DialogContent className="bg-[#18181B] border-[#27272A] text-[#FAFAFA]">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">
              Alert new tokens in 1-min trending
            </h2>
            {/* Add your sniper content here */}
            <p>Check Honeypot when Swap!!</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Following Dialog */}
      <Dialog
        open={isFollowingDialogOpen}
        onOpenChange={setFollowingDialogOpen}
      >
        <DialogContent className="bg-[#18181B] border-[#27272A] text-[#FAFAFA]">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Following</h2>
            <div className="text-center py-8">
              <p>You haven't connected your wallet yet</p>
              <button className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-100">
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
