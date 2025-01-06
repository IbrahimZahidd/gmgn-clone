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
import { Search } from "lucide-react";
import { NAV_LINKS, CHAIN_OPTIONS } from "@/config/nav";
import { Chain } from "@/types/nav";
import { WalletModal } from "./wallet-modal";
import { SettingsDropdown } from "./settings-dropdown";

export function Nav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedChain, setSelectedChain] = useState<Chain>("sol");
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Check system dark mode preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  // Update chain from URL
  useEffect(() => {
    const chain = searchParams.get("chain") as Chain;
    if (chain && CHAIN_OPTIONS.some((option) => option.value === chain)) {
      setSelectedChain(chain);
    }
  }, [searchParams]);

  // Handle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo and Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              href={`/?chain=${selectedChain}`}
              className="flex items-center gap-2 font-bold"
            >
              <Image
                src="/logo.png"
                alt="GMGN Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span>GMGN</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map(({ name, href }) => (
                <Link
                  key={name}
                  href={`${href}?chain=${selectedChain}`}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search token/contract/wallet"
                className="w-full pl-10 bg-muted/50"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-20">
                  {selectedChain.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {CHAIN_OPTIONS.map(({ value, label }) => (
                  <DropdownMenuItem
                    key={value}
                    onClick={() => setSelectedChain(value)}
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
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Connect
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
