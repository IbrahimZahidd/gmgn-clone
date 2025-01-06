import { Chain, ChainOption, NavLink } from "@/types/nav";

export const NAV_LINKS: NavLink[] = [
  { name: "Meme", href: "/meme" },
  { name: "New pair", href: "/new-pair" },
  { name: "Trending", href: "/" },
  { name: "CopyTrade", href: "/trade" },
  { name: "Holding", href: "/holding" },
  { name: "Follow", href: "/follow" },
];

export const CHAIN_OPTIONS: ChainOption[] = [
  { value: "sol", label: "SOL" },
  { value: "eth", label: "ETH" },
  { value: "base", label: "Base" },
  { value: "bsc", label: "BSC" },
  { value: "tron", label: "Tron" },
  { value: "blast", label: "Blast" },
];
