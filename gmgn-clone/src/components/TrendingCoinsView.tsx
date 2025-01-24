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
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-gray-500 border-b border-gray-200">
            <th className="py-3 px-4">Token</th>
            <th className="py-3 px-4">Age</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Market Cap</th>
            <th className="py-3 px-4">24h Volume</th>
            <th className="py-3 px-4 text-center">1h</th>
            <th className="py-3 px-4 text-center">24h</th>
            <th className="py-3 px-4 text-center">7d</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr
              key={coin.id}
              className="border-b text-black border-gray-200 hover:bg-gray-50"
            >
              <td className="py-4 px-4">
                <div className="flex items-center space-x-3">
                  <div className="relative w-8 h-8">
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <span className="font-medium">{coin.name}</span>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-600">{coin.age}h</td>
              <td className="py-4 px-4 text-gray-600">
                ${coin.current_price.toLocaleString()}
              </td>
              <td className="py-4 px-4 text-gray-600">
                ${coin.market_cap.toLocaleString()}
              </td>
              <td className="py-4 px-4 text-gray-600">
                ${coin.total_volume.toLocaleString()}
              </td>
              <td className="py-4 px-4">
                <div
                  className={`text-center p-1.5 rounded-md ${
                    coin.price_change_percentage_1h >= 0
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {coin.price_change_percentage_1h.toFixed(2)}%
                </div>
              </td>
              <td className="py-4 px-4">
                <div
                  className={`text-center p-1.5 rounded-md ${
                    coin.price_change_percentage_24h >= 0
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
              </td>
              <td className="py-4 px-4">
                <div
                  className={`text-center p-1.5 rounded-md ${
                    coin.price_change_percentage_7d >= 0
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {coin.price_change_percentage_7d.toFixed(2)}%
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
