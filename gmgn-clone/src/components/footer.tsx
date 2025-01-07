"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Gift,
  Trophy,
  Smartphone,
  GraduationCap,
  Info,
  Bot,
  Code,
  Twitter,
  MessageCircle,
  Target,
  Users,
} from "lucide-react";

export function Footer() {
  const searchParams = useSearchParams();
  const chain = searchParams.get("chain") || "sol";

  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t border-[#1A1A1A] bg-[#0D0D0D]">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex h-12 items-center justify-between px-4">
          {/* Left section */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              className="h-7 px-3 text-gray-400 hover:bg-[#1A1A1A] text-xs font-normal flex items-center gap-2"
            >
              <Target className="h-3.5 w-3.5" />
              Sniper New
              <Badge
                variant="destructive"
                className="h-4 w-4 rounded-full p-0 text-[10px] bg-[#FF3B3B] hover:bg-[#FF3B3B]"
              >
                8
              </Badge>
            </Button>

            <Button
              variant="ghost"
              className="h-7 px-3 text-gray-400 hover:bg-[#1A1A1A] text-xs font-normal flex items-center gap-2"
            >
              <Users className="h-3.5 w-3.5" />
              Following
            </Button>

            <Button
              variant="ghost"
              className="h-7 px-3 text-gray-400 hover:bg-[#1A1A1A] text-xs font-normal flex items-center gap-2"
            >
              <Gift className="h-3.5 w-3.5" />
              Refer
              <span>0</span>
            </Button>

            <Button
              variant="ghost"
              className="h-7 px-3 text-gray-400 hover:bg-[#1A1A1A] text-xs font-normal flex items-center gap-2"
            >
              <Trophy className="h-3.5 w-3.5" />
              Contest
            </Button>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              className="h-7 px-3 text-gray-400 hover:bg-[#1A1A1A] text-xs font-normal flex items-center gap-2"
            >
              <Smartphone className="h-3.5 w-3.5" />
              Mobile APP
            </Button>

            <Button
              variant="ghost"
              className="h-7 px-3 text-gray-400 hover:bg-[#1A1A1A] text-xs font-normal flex items-center gap-2"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              Academy
            </Button>

            <Button
              variant="ghost"
              className="h-7 px-3 text-gray-400 hover:bg-[#1A1A1A] text-xs font-normal flex items-center gap-2"
            >
              <Info className="h-3.5 w-3.5" />
              About
            </Button>

            <Button
              variant="ghost"
              className="h-7 px-3 text-gray-400 hover:bg-[#1A1A1A] text-xs font-normal flex items-center gap-2"
            >
              <Bot className="h-3.5 w-3.5" />
              Bot
            </Button>

            <Button
              variant="ghost"
              className="h-7 px-3 text-gray-400 hover:bg-[#1A1A1A] text-xs font-normal flex items-center gap-2"
            >
              <Code className="h-3.5 w-3.5" />
              API
            </Button>

            <div className="flex items-center space-x-2 border-l border-[#1A1A1A] ml-2 pl-2">
              <Button
                variant="ghost"
                className="h-7 w-7 p-0 text-gray-400 hover:bg-[#1A1A1A]"
              >
                <Twitter className="h-3.5 w-3.5" />
              </Button>

              <Button
                variant="ghost"
                className="h-7 w-7 p-0 text-gray-400 hover:bg-[#1A1A1A]"
              >
                <MessageCircle className="h-3.5 w-3.5" />
              </Button>

              <div className="border-l border-[#1A1A1A] pl-2 text-xs text-gray-400">
                SOL: $206.73
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
