"use client";

import { useTrendingCoins } from "@/hooks/useTrendingCoins";
import Image from "next/image";

export const TrendingCoinsView = () => {
  const { coins, loading, error } = useTrendingCoins();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 text-center">
        Error loading trending coins: {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src={coin.image}
                alt={coin.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">{coin.name}</h3>
              <p className="text-sm text-gray-500">Age: {coin.age}h</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Price:</span>
              <span className="font-medium">
                ${coin.current_price.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Market Cap:</span>
              <span className="font-medium">
                ${coin.market_cap.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">24h Volume:</span>
              <span className="font-medium">
                ${coin.total_volume.toLocaleString()}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-3">
              <div
                className={`text-center p-1 rounded ${
                  coin.price_change_percentage_1h >= 0
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                <div className="text-xs">1h</div>
                <div className="font-medium">
                  {coin.price_change_percentage_1h.toFixed(2)}%
                </div>
              </div>
              <div
                className={`text-center p-1 rounded ${
                  coin.price_change_percentage_24h >= 0
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                <div className="text-xs">24h</div>
                <div className="font-medium">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
              </div>
              <div
                className={`text-center p-1 rounded ${
                  coin.price_change_percentage_7d >= 0
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                <div className="text-xs">7d</div>
                <div className="font-medium">
                  {coin.price_change_percentage_7d.toFixed(2)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
