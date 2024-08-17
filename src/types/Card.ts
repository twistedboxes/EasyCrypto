export type TCard = {
  symbol: string;
  name: string;
  high24: number;
  low24: number;
  currentPrice: number;
  image: string;
  ath: number;
  allTimeLow: number;
  ath_date: string;
  marketCap: number;
  current_price: number;
  total_volume?: number | null;
  totalVolume: number;
  id: string
};

export interface TCardProps {
  symbol: string;
  name: string;
  high24: number;
  low24: number;
  totalVolume: number;
  currentPrice: number;
  image: string;
  ath: number;
  current_price: number;
  allTimeLow: number;
  ath_date: string;
  marketCap: number;
  id: string;
}

export interface TData {
  data: TCard[];
}