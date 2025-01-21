export interface Coin {
  age: number;
  current_price: number;
  id: string;
  image: string;
  market_cap: number;
  name: string;
  price_change_percentage_1h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  total_volume: number;
}

export type TrendingCoins = Coin[];
