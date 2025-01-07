"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Settings, Filter, ArrowUpDown, Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Token {
  id: string;
  name: string;
  symbol: string;
  age: string;
  liquidity: number;
  marketCap: number;
  blueChip: number;
  holders: {
    total: number;
    change: number;
  };
  transactions: {
    count: number;
    change: number;
  };
  volume: number;
  price: number;
  percentChange: {
    "1m": number;
    "5m": number;
    "1h": number;
  };
  degenAudit: {
    noMint: boolean;
    blocklist: boolean;
    burnt: boolean;
    top10: number;
    insiders: number;
  };
  dev: {
    add: boolean;
    sellAll: boolean;
    hodl: boolean;
  };
}

// Dummy data
const tokens: Token[] = [
  {
    id: "1",
    name: "FRGB",
    symbol: "9RMGC_GBP",
    age: "11d",
    liquidity: 352000,
    marketCap: 18000000,
    blueChip: 0.1,
    holders: { total: 27000, change: 9 },
    transactions: { count: 22, change: 13 },
    volume: 3100,
    price: 0.002037,
    percentChange: { "1m": -0.1, "5m": -0.4, "1h": -1.7 },
    degenAudit: {
      noMint: true,
      blocklist: false,
      burnt: true,
      top10: 43.6,
      insiders: 0,
    },
    dev: { add: true, sellAll: false, hodl: false },
  },
  // Add more dummy data here...
];

type TimePeriod = "1m" | "5m" | "1h" | "6h" | "24h";

export function TokenTable() {
  const [selectedTime, setSelectedTime] = useState<TimePeriod>("1m");
  const [linkedBuy, setLinkedBuy] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const timePeriods: TimePeriod[] = ["1m", "5m", "1h", "6h", "24h"];

  const handleTimeChange = (time: TimePeriod) => {
    setSelectedTime(time);
  };

  const handleLinkedBuyChange = (checked: boolean) => {
    setLinkedBuy(checked);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(1)}K`;
    return `$${num.toFixed(2)}`;
  };

  const formatPercent = (num: number) => {
    const formatted = num.toFixed(1);
    const color =
      num > 0 ? "text-[#00FF94]" : num < 0 ? "text-[#FF3B3B]" : "text-gray-400";
    return <span className={color}>{formatted}%</span>;
  };

  return (
    <div className="w-full bg-black">
      {/* Filter Bar */}
      <div className="w-full border-b border-[#1A1A1A]">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex items-center h-10 px-4 gap-4">
            {/* Trending and NextBC buttons */}
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                className="h-7 px-3 text-white hover:bg-[#1A1A1A] font-medium text-xs"
              >
                Trending
              </Button>
              <Button
                variant="ghost"
                className="h-7 px-3 text-gray-400 hover:bg-[#1A1A1A] text-xs"
              >
                NextBC
              </Button>
            </div>

            {/* Time period selector */}
            <div className="flex items-center border border-[#1A1A1A] rounded bg-black h-7">
              {timePeriods.map((time) => (
                <Button
                  key={time}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleTimeChange(time)}
                  className={`h-6 px-2.5 text-xs rounded-none ${
                    selectedTime === time
                      ? "bg-[#1A1A1A] text-white"
                      : "text-gray-400 hover:bg-[#1A1A1A] hover:text-white"
                  }`}
                >
                  {time}
                </Button>
              ))}
            </div>

            {/* Filter Token button */}
            <Button
              variant="outline"
              size="sm"
              className="h-7 px-3 border-[#1A1A1A] hover:bg-[#1A1A1A] text-gray-400 text-xs"
            >
              <Filter className="h-3.5 w-3.5 mr-2" />
              Filter Token
            </Button>

            {/* Filter Risks button */}
            <Button
              variant="outline"
              size="sm"
              className="h-7 px-3 border-[#1A1A1A] hover:bg-[#1A1A1A] text-gray-400 text-xs"
            >
              <Filter className="h-3.5 w-3.5 mr-2" />
              Filter Risks
            </Button>

            {/* Linked Buy toggle */}
            <div className="flex items-center gap-2">
              <Switch
                id="linked-buy"
                checked={linkedBuy}
                onCheckedChange={handleLinkedBuyChange}
                className="h-5 w-9 data-[state=checked]:bg-blue-600"
              />
              <label htmlFor="linked-buy" className="text-xs text-gray-400">
                Linked Buy
              </label>
            </div>

            {/* Filter input */}
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Filter..."
                className="h-7 bg-[#1A1A1A] border-[#1A1A1A] text-xs text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            {/* Settings button */}
            <Button
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0 hover:bg-[#1A1A1A]"
            >
              <Settings className="h-3.5 w-3.5 text-gray-400" />
            </Button>
          </div>
        </div>
      </div>

      {/* Token Table */}
      <div className="max-w-[1920px] mx-auto">
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-[#1A1A1A] hover:bg-transparent">
                <TableHead className="w-[30px] h-8 text-[11px] font-medium text-gray-400"></TableHead>
                <TableHead className="h-8 text-[11px] font-medium text-gray-400">
                  Token <Filter className="h-3 w-3 inline-block ml-1" />
                </TableHead>
                <TableHead className="h-8 text-[11px] font-medium text-gray-400">
                  Age <ArrowUpDown className="h-3 w-3 inline-block ml-1" />
                  <Filter className="h-3 w-3 inline-block ml-1" />
                </TableHead>
                <TableHead className="h-8 text-[11px] font-medium text-gray-400">
                  Liq/MC <ArrowUpDown className="h-3 w-3 inline-block ml-1" />
                  <Filter className="h-3 w-3 inline-block ml-1" />
                </TableHead>
                <TableHead className="h-8 text-[11px] font-medium text-gray-400">
                  BlueChip <ArrowUpDown className="h-3 w-3 inline-block ml-1" />
                </TableHead>
                <TableHead className="h-8 text-[11px] font-medium text-gray-400">
                  Holders <ArrowUpDown className="h-3 w-3 inline-block ml-1" />
                  <Filter className="h-3 w-3 inline-block ml-1" />
                </TableHead>
                <TableHead className="h-8 text-[11px] font-medium text-gray-400">
                  5m TXs <ArrowUpDown className="h-3 w-3 inline-block ml-1" />
                  <Filter className="h-3 w-3 inline-block ml-1" />
                </TableHead>
                <TableHead className="h-8 text-[11px] font-medium text-gray-400">
                  5m Vol <ArrowUpDown className="h-3 w-3 inline-block ml-1" />
                  <Filter className="h-3 w-3 inline-block ml-1" />
                </TableHead>
                <TableHead className="h-8 text-[11px] font-medium text-gray-400">
                  Price <ArrowUpDown className="h-3 w-3 inline-block ml-1" />
                </TableHead>
                <TableHead className="h-8 text-[11px] font-medium text-gray-400">
                  1m% <ArrowUpDown className="h-3 w-3 inline-block ml-1" />
                </TableHead>
                <TableHead className="h-8 text-[11px] font-medium text-gray-400">
                  5m% <ArrowUpDown className="h-3 w-3 inline-block ml-1" />
                </TableHead>
                <TableHead className="h-8 text-[11px] font-medium text-gray-400">
                  1h% <ArrowUpDown className="h-3 w-3 inline-block ml-1" />
                </TableHead>
                <TableHead className="h-8 text-[11px] font-medium text-gray-400">
                  Degen Audit <Filter className="h-3 w-3 inline-block ml-1" />
                </TableHead>
                <TableHead className="h-8 text-[11px] font-medium text-gray-400">
                  DEV <Filter className="h-3 w-3 inline-block ml-1" />
                </TableHead>
                <TableHead className="w-[80px] h-8 text-[11px] font-medium text-gray-400"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tokens.map((token) => (
                <TableRow
                  key={token.id}
                  className="border-b border-[#1A1A1A] hover:bg-[#1A1A1A]"
                >
                  <TableCell className="h-10 py-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(token.id)}
                      className="h-6 w-6 p-0 hover:bg-[#262626]"
                    >
                      <Star
                        className={`h-3 w-3 ${
                          favorites.has(token.id)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-400"
                        }`}
                      />
                    </Button>
                  </TableCell>
                  <TableCell className="font-medium text-xs py-0">
                    {token.name}{" "}
                    <span className="text-gray-400">({token.symbol})</span>
                  </TableCell>
                  <TableCell className="text-xs text-gray-400 py-0">
                    {token.age}
                  </TableCell>
                  <TableCell className="text-xs text-gray-400 py-0">
                    {formatNumber(token.liquidity)} /{" "}
                    {formatNumber(token.marketCap)}
                  </TableCell>
                  <TableCell className="text-xs text-gray-400 py-0">
                    {token.blueChip}%
                  </TableCell>
                  <TableCell className="text-xs py-0">
                    <span className="text-gray-400">
                      {token.holders.total.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-[#00FF94] ml-1">
                      +{token.holders.change}
                    </span>
                  </TableCell>
                  <TableCell className="text-xs py-0">
                    <span className="text-gray-400">
                      {token.transactions.count}
                    </span>
                    <span className="text-[10px] text-[#00FF94] ml-1">
                      +{token.transactions.change}
                    </span>
                  </TableCell>
                  <TableCell className="text-xs text-gray-400 py-0">
                    {formatNumber(token.volume)}
                  </TableCell>
                  <TableCell className="text-xs text-gray-400 py-0">
                    ${token.price.toFixed(6)}
                  </TableCell>
                  <TableCell className="text-xs py-0">
                    {formatPercent(token.percentChange["1m"])}
                  </TableCell>
                  <TableCell className="text-xs py-0">
                    {formatPercent(token.percentChange["5m"])}
                  </TableCell>
                  <TableCell className="text-xs py-0">
                    {formatPercent(token.percentChange["1h"])}
                  </TableCell>
                  <TableCell className="py-0">
                    <div className="flex space-x-1 text-[10px]">
                      <span
                        className={
                          token.degenAudit.noMint
                            ? "text-[#00FF94]"
                            : "text-[#FF3B3B]"
                        }
                      >
                        {token.degenAudit.noMint ? "Yes" : "No"}
                      </span>
                      <span
                        className={
                          token.degenAudit.blocklist
                            ? "text-[#00FF94]"
                            : "text-[#FF3B3B]"
                        }
                      >
                        {token.degenAudit.blocklist ? "Yes" : "No"}
                      </span>
                      <span
                        className={
                          token.degenAudit.burnt
                            ? "text-[#00FF94]"
                            : "text-[#FF3B3B]"
                        }
                      >
                        {token.degenAudit.burnt ? "Yes" : "No"}
                      </span>
                      <span className="text-gray-400">
                        {token.degenAudit.top10}%
                      </span>
                      <span className="text-gray-400">
                        {token.degenAudit.insiders}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-0">
                    <div className="flex space-x-1 text-[10px]">
                      {token.dev.add && (
                        <span className="text-[#00FF94]">Add</span>
                      )}
                      {token.dev.sellAll && (
                        <span className="text-[#FF3B3B]">Sell All</span>
                      )}
                      {token.dev.hodl && (
                        <span className="text-blue-500">HODL</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="py-0">
                    <Button
                      size="sm"
                      className="h-6 px-3 bg-[#1A1A1A] hover:bg-[#262626] text-white text-xs font-normal border-0"
                    >
                      Buy
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
