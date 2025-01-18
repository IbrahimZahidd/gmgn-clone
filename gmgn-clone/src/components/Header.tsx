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
import { Settings, Globe, Search } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  description?: string;
}

const Header = () => {
  const { selectedChain, setSelectedChain } = useChain();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Memoize chains data to prevent unnecessary re-renders
  const chains = React.useMemo(
    () => [
      {
        id: "SOL",
        name: "Solana",
        icon: "/sol.png",
        description: "Solana Chain",
      },
      {
        id: "TRON",
        name: "Tron",
        icon: "/tron.png",
        description: "Tron Chain",
      },
      {
        id: "ETH",
        name: "Ethereum",
        icon: "/eth.png",
        description: "Ethereum Chain",
      },
      {
        id: "BSC",
        name: "BSC",
        icon: "/bsc.png",
        description: "Binance Smart Chain",
      },
      {
        id: "BLAST",
        name: "Blast",
        icon: "/blast.png",
        description: "Blast Chain",
      },
      {
        id: "BASE",
        name: "Base",
        icon: "/base.png",
        description: "Base Chain",
      },
    ],
    []
  );

  // Memoize languages data
  const languages = React.useMemo(
    () => ["English", "Español", "中文", "日本語", "한국어", "Русский"],
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const chainFromUrl = urlParams.get("chain")?.toUpperCase();
      const savedChain = localStorage.getItem("selectedChain");
      const initialChain = chainFromUrl || savedChain || "SOL";
      setSelectedChain(initialChain);
      setMounted(true);

      // Add keyboard shortcut for search
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "k") {
          e.preventDefault();
          document.getElementById("search-input")?.focus();
        }
      };
      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
    }
  }, [setSelectedChain]);

  const handleChainSelect = (chainId: string) => {
    setSelectedChain(chainId);
    localStorage.setItem("selectedChain", chainId);
    router.push(`/?chain=${chainId.toLowerCase()}`);
  };

  const getNavLinks = React.useCallback((chain: string): NavLink[] => {
    const baseLinks: Record<string, NavLink[]> = {
      SOL: [
        {
          label: "Meme",
          href: `/meme?chain=sol`,
          description: "Solana Meme Tokens",
        },
        {
          label: "New pair",
          href: `/new-pair?chain=sol`,
          description: "New Token Pairs on Solana",
        },
        {
          label: "Trending",
          href: `/?chain=sol`,
          description: "Trending Tokens on Solana",
        },
        {
          label: "CopyTrade",
          href: `/trade?chain=sol`,
          description: "Copy Trading on Solana",
        },
        {
          label: "Holding",
          href: `/holding?chain=sol`,
          description: "Your Holdings on Solana",
        },
        {
          label: "Follow",
          href: `/follow?chain=sol`,
          description: "Follow Traders on Solana",
        },
      ],
      // ... (similar pattern for other chains)
    };
    return baseLinks[chain] || [];
  }, []);

  if (!mounted) return null;

  return (
    <header
      className="fixed top-0 left-0 right-0 h-14 bg-[#0D0D0D] border-b border-[#1A1B1E] z-50"
      role="banner"
      aria-label="Main Header"
    >
      <div className="h-full px-4 flex items-center justify-between max-w-[1920px] mx-auto">
        <div className="flex items-center h-full">
          <Link
            href={`/?chain=${selectedChain.toLowerCase()}`}
            className="flex items-center mr-8 focus:outline-none focus:ring-1 focus:ring-[#27272A]"
            aria-label="GMGN Home"
          >
            <Image
              src="/logo.png"
              alt="GMGN Logo"
              width={24}
              height={24}
              className="mr-2"
              priority
            />
            <span className="text-[#FAFAFA] font-semibold">GMGN</span>
          </Link>

          <nav aria-label="Main Navigation" className="flex h-full">
            {getNavLinks(selectedChain).map(({ label, href, description }) => (
              <Link
                key={href}
                href={href}
                className="px-4 h-full flex items-center text-sm text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A] transition-colors focus:outline-none focus:ring-1 focus:ring-[#27272A]"
                aria-label={description || label}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative w-[320px]">
            <label htmlFor="search-input" className="sr-only">
              Search token, contract, or wallet
            </label>
            <input
              id="search-input"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search token/contract/wallet"
              className="w-full h-9 bg-[#18181B] rounded-md pl-10 pr-16 text-sm text-[#A1A1AA] focus:outline-none focus:ring-1 focus:ring-[#27272A]"
              aria-label="Search"
            />
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#71717A]"
              aria-hidden="true"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#71717A]"
              aria-hidden="true"
            >
              Ctrl alt k
            </span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-9 bg-[#18181B] text-[#FAFAFA] hover:bg-[#27272A] focus:outline-none focus:ring-1 focus:ring-[#27272A]"
                aria-label={`Selected Chain: ${selectedChain}`}
              >
                <Image
                  src={
                    chains.find((chain) => chain.id === selectedChain)?.icon ||
                    "/sol.png"
                  }
                  alt=""
                  width={30}
                  height={30}
                  className="mr-2"
                  aria-hidden="true"
                  priority
                />
                <span>{selectedChain}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#18181B] border-[#27272A]"
              aria-label="Select Chain"
            >
              {chains.map((chain) => (
                <DropdownMenuItem
                  key={chain.id}
                  onClick={() => handleChainSelect(chain.id)}
                  className="flex items-center text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A]"
                  aria-label={chain.description}
                >
                  <Image
                    src={chain.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="mr-2"
                    aria-hidden="true"
                    priority
                  />
                  <span>{chain.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-[#A1A1AA] hover:text-[#FAFAFA] focus:outline-none focus:ring-1 focus:ring-[#27272A]"
                aria-label="Settings"
              >
                <Settings className="h-5 w-5" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-[#18181B] border-[#27272A]"
              aria-label="Settings Menu"
            >
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="flex items-center text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A]">
                  <Globe className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>Language</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="bg-[#18181B] border-[#27272A]">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className="text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A]"
                      aria-label={`Select ${lang}`}
                    >
                      {lang}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <DropdownMenuItem className="flex items-center justify-between text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A]">
                <span>Dark Mode</span>
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                  aria-label="Toggle Dark Mode"
                />
              </DropdownMenuItem>

              <DropdownMenuItem className="text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A]">
                Alert settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="default"
            size="sm"
            className="h-9 bg-white text-black hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-[#27272A]"
            aria-label="Connect Wallet"
          >
            Connect
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
