"use client";

import { useChain } from "@/context/ChainContext";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "./ui/dropdown-menu";
import { Settings, Globe } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const Header = () => {
  const { selectedChain, setSelectedChain } = useChain();
  const router = useRouter();
  // Use useEffect to handle client-side state initialization
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  // Handle client-side mounting and chain initialization
  useEffect(() => {
    if (typeof window !== "undefined") {
      // First try to get chain from URL
      const urlParams = new URLSearchParams(window.location.search);
      const chainFromUrl = urlParams.get("chain")?.toUpperCase();

      // Then try localStorage
      const savedChain = localStorage.getItem("selectedChain");

      // Set the chain in this priority: URL > localStorage > default "SOL"
      const initialChain = chainFromUrl || savedChain || "SOL";
      setSelectedChain(initialChain);
      setMounted(true);
    }
  }, []);

  // Save chain selection to localStorage and update URL
  const handleChainSelect = (chainId: string) => {
    setSelectedChain(chainId);
    localStorage.setItem("selectedChain", chainId);
    // Navigate to the home page with the selected chain
    router.push(`/?chain=${chainId.toLowerCase()}`);
  };

  const chains = [
    { id: "SOL", name: "Solana", icon: "/sol.png" },
    { id: "TRON", name: "Tron", icon: "/tron.png" },
    { id: "ETH", name: "Ethereum", icon: "/eth.png" },
    { id: "BSC", name: "BSC", icon: "/bsc.png" },
    { id: "BLAST", name: "Blast", icon: "/blast.png" },
    { id: "BASE", name: "Base", icon: "/base.png" },
  ] as const;

  const languages = [
    "English",
    "Español",
    "中文",
    "日本語",
    "한国어",
    "Русский",
  ] as const;

  const getNavLinks = (chain: string): NavLink[] => {
    switch (chain) {
      case "SOL":
        return [
          { label: "Meme", href: `/meme?chain=sol` },
          { label: "New pair", href: `/new-pair?chain=sol` },
          { label: "Trending", href: `/?chain=sol` },
          { label: "CopyTrade", href: `/trade?chain=sol` },
          { label: "Holding", href: `/holding?chain=sol` },
          { label: "Follow", href: `/follow?chain=sol` },
        ];
      case "ETH":
        return [
          { label: "New pair", href: `/new-pair?chain=eth` },
          { label: "Trending", href: `/trend?chain=eth` },
          { label: "Discover", href: `/?chain=eth` },
          { label: "Holding", href: `/holding?chain=eth` },
          { label: "Follow", href: `/follow?chain=eth` },
        ];
      case "BASE":
        return [
          { label: "Meme", href: `/meme?chain=base` },
          { label: "New pair", href: `/new-pair?chain=base` },
          { label: "Trending", href: `/?chain=base` },
          { label: "Discover", href: `/discover?chain=base` },
          { label: "Holding", href: `/holding?chain=base` },
          { label: "Follow", href: `/follow?chain=base` },
        ];
      case "BSC":
        return [
          { label: "New pair", href: `/new-pair?chain=bsc` },
          { label: "Trending", href: `/?chain=bsc` },
          { label: "Holding", href: `/holding?chain=bsc` },
        ];
      case "TRON":
        return [
          { label: "SunPump", href: `/meme?chain=tron` },
          { label: "New pair", href: `new-pair?chain=tron` },
          { label: "Trending", href: `/?chain=tron` },
          { label: "Discover", href: `/discover?chain=tron` },
          { label: "Holding", href: `/holding?chain=tron` },
          { label: "Follow", href: `/follow?chain=tron` },
        ];
      case "BLAST":
        return [
          { label: "New pair", href: `/new-pair?chain=blast` },
          { label: "Trending", href: `/?chain=blast` },
          { label: "Holding", href: `/holding?chain=blast` },
        ];
      default:
        return [];
    }
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 h-14 bg-[#0D0D0D] border-b border-[#1A1B1E] z-50"
      role="banner"
    >
      <div className="h-full px-4 flex items-center justify-between max-w-[1920px] mx-auto">
        {/* Left section */}
        <div className="flex items-center h-full">
          <Link
            href={`/?chain=${selectedChain.toLowerCase()}`}
            className="flex items-center mr-8"
          >
            <Image
              src="/logo.png"
              alt="GMGN Logo"
              width={24}
              height={24}
              className="mr-2"
              priority // Add priority to prevent loading issues
            />
            <span className="text-[#FAFAFA] font-semibold">GMGN</span>
          </Link>

          <nav className="flex h-full">
            {getNavLinks(selectedChain).map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="px-4 h-full flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Search input */}
          <div className="relative w-[320px]">
            <input
              type="text"
              placeholder="Search token/contract/wallet"
              className="w-full h-9 bg-[#18181B] rounded-md px-4 text-sm text-[#A1A1AA] focus:outline-none focus:ring-1 focus:ring-[#27272A]"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#71717A]">
              Ctrl alt k
            </span>
          </div>

          {/* Chain selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-9 bg-[#18181B] text-[#FAFAFA] hover:bg-[#27272A]"
              >
                <Image
                  src={
                    chains.find((chain) => chain.id === selectedChain)?.icon ||
                    "/assets/chains/sol.png"
                  }
                  alt={selectedChain}
                  width={30}
                  height={30}
                  className="mr-2"
                  priority
                />
                <span>{selectedChain}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#18181B] border-[#27272A]"
            >
              {chains.map((chain) => (
                <DropdownMenuItem
                  key={chain.id}
                  onClick={() => handleChainSelect(chain.id)}
                  className="flex items-center text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A]"
                >
                  <Image
                    src={chain.icon}
                    alt={chain.name}
                    width={20}
                    height={20}
                    className="mr-2"
                    priority
                  />
                  <span>{chain.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Settings button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-[#A1A1AA] hover:text-[#FAFAFA]"
              >
                <Settings className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-[#18181B] border-[#27272A] text-[#A1A1AA] hover:text-black hover:bg-[#27272A]"
            >
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="flex items-center">
                  <Globe className="mr-2 h-4 w-4" />
                  <span>Language</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="bg-[#18181B] border-[#27272A] text-[#A1A1AA] hover:text-black">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                    >
                      {lang}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <DropdownMenuItem className="flex items-center justify-between">
                <span>Dark Mode</span>
                <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => {
                  /* Handle alert settings */
                }}
                className="hover:text-[#FAFAFA] hover:bg-[#27272A]"
              >
                Alert settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Connect button */}
          <Button
            variant="default"
            size="sm"
            className="h-9 bg-white text-black hover:bg-gray-100"
          >
            Connect
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
