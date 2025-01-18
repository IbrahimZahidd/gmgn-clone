"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ChainContextType {
  selectedChain: string;
  setSelectedChain: (chain: string) => void;
}

const ChainContext = createContext<ChainContextType | undefined>(undefined);

export function ChainProvider({ children }: { children: React.ReactNode }) {
  const [selectedChain, setSelectedChain] = useState("SOL");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const chainFromUrl = urlParams.get("chain")?.toUpperCase();
      const savedChain = localStorage.getItem("selectedChain");
      const initialChain = chainFromUrl || savedChain || "SOL";
      setSelectedChain(initialChain);
      setMounted(true);
    }
  }, []);

  if (!mounted) return null;

  return (
    <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
      {children}
    </ChainContext.Provider>
  );
}

export function useChain() {
  const context = useContext(ChainContext);
  if (context === undefined) {
    throw new Error("useChain must be used within a ChainProvider");
  }
  return context;
}
