"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown } from "lucide-react";
import { NAV_LINKS, CHAIN_OPTIONS } from "@/config/nav";
import { Chain } from "@/types/nav";
import { WalletModal } from "./wallet-modal";
import { SettingsDropdown } from "./settings-dropdown";

export function Nav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedChain, setSelectedChain] = useState<Chain>("sol");
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const chain = searchParams.get("chain") as Chain;
    if (chain && CHAIN_OPTIONS.some((option) => option.value === chain)) {
      setSelectedChain(chain);
    }
  }, [searchParams]);

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1A1A1A] bg-black">
      <div className="max-w-[1920px] mx-auto">
        <nav className="flex h-14 items-center justify-between px-4">
          {/* Logo and Navigation Links */}
          <div className="flex items-center gap-4">
            <Link
              href={`/?chain=${selectedChain}`}
              className="flex items-center gap-2"
            >
              <Image
                src="/logo.png"
                alt="GMGN Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="text-white text-sm font-medium">GMGN</span>
            </Link>

            <div className="flex items-center gap-1">
              {NAV_LINKS.map(({ name, href }) => (
                <Link key={name} href={`${href}?chain=${selectedChain}`}>
                  <Button
                    variant="ghost"
                    className={`h-7 px-3 text-xs font-normal hover:bg-[#1A1A1A] ${
                      pathname === href ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search token/contract/wallet"
                className="w-full h-7 pl-9 pr-3 bg-[#1A1A1A] border-[#1A1A1A] text-xs text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <div className="text-xs text-gray-400 px-2">Ctrl alt K</div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-7 px-2 text-gray-400 hover:bg-[#1A1A1A] text-xs font-normal flex items-center gap-1"
                >
                  <div className="w-4 h-4 rounded-full bg-purple-600"></div>
                  SOL
                  <ChevronDown className="h-3.5 w-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-[#1A1A1A] border-[#1A1A1A]"
              >
                {CHAIN_OPTIONS.map(({ value, label }) => (
                  <DropdownMenuItem
                    key={value}
                    onClick={() => setSelectedChain(value)}
                    className="text-xs text-gray-400 hover:bg-[#262626] focus:bg-[#262626]"
                  >
                    {label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <SettingsDropdown
              darkMode={darkMode}
              onDarkModeChange={setDarkMode}
            />

            <Button
              onClick={() => setIsWalletOpen(true)}
              className="h-7 px-3 bg-[#1A1A1A] hover:bg-[#262626] text-white text-xs font-normal border-0 flex items-center gap-2"
            >
              Connect
              <div className="flex items-center gap-1 text-gray-400">
                <span>0</span>
                <span>BMQSG...5aS</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </div>
            </Button>
          </div>
        </nav>
      </div>

      <WalletModal
        isOpen={isWalletOpen}
        onClose={() => setIsWalletOpen(false)}
      />
    </header>
  );
}
