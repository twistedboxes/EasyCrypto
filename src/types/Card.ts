export type TCard = {
  symbol: string;
  name: string;
  high_24h: number;
  low_24h: number;
  currentPrice: number;
  image: string;
  ath: number;
  allTimeLow: number;
  ath_date: string;
  market_cap: number;
  current_price: number;
  total_volume?: number | null;
  totalVolume: number;
  id: string
};

export interface TCardProps {
  symbol: string;
  name: string;
  high_24h: number;
  low_24h: number;
  totalVolume: number;
  currentPrice: number;
  image: string;
  ath: number;
  current_price: number;
  allTimeLow: number;
  ath_date: string;
  market_cap: number;
  id: string;
}

export interface TData {
  data: TCard[];
}