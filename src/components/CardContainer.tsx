import { useEffect, useState } from "react";
import Card from "./Card";

const CoinData = {
  id: "bitcoin",
  symbol: "btc",
  name: "Bitcoin",
  image:
    "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
  current_price: 57850,
  market_cap: 1142990632780,
  market_cap_rank: 1,
  fully_diluted_valuation: 1215900730482,
  total_volume: 21854847694,
  high_24h: 59834,
  low_24h: 56647,
  price_change_24h: -1612.55041756557,
  price_change_percentage_24h: -2.71186,
  market_cap_change_24h: -32329063912.9214,
  market_cap_change_percentage_24h: -2.75066,
  circulating_supply: 19740759,
  total_supply: 21000000,
  max_supply: 21000000,
  ath: 73738,
  ath_change_percentage: -21.23738,
  ath_date: "2024-03-14T07:10:36.635Z",
  atl: 67.81,
  atl_change_percentage: 85549.29254,
  atl_date: "2013-07-06T00:00:00.000Z",
  roi: null,
  last_updated: "2024-08-16T15:36:45.050Z",
};

let CardProps = {
  marketCap: CoinData.market_cap,
  allTimeHighDate: CoinData.ath_date,
  low24: CoinData.low_24h,
  totalVolume: CoinData.total_volume,
  currentPrice: CoinData.current_price,
  allTimeHigh: CoinData.ath,
  allTimeLow: CoinData.atl,
  symbol: CoinData.symbol,
  image: CoinData.image,
  name: CoinData.name,
  high24: CoinData.high_24h,
};

interface CardProps {
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

const CardContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(import.meta.env.VITE_API_PUBLIC_URL, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
      });
      const res = await data.json();
      setData(res);
      console.log(res);
      return res;
    };
    fetchData();
    console.log("This is data fetched from CG", data);
  }, []);

  const allCards = data.map((item: CardProps) => {
    console.log("item", item);
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <h2 className="text-3xl font-bold  text-center">Top 100 Tokens</h2>
      <div className=" viewer my-8 p-2w-screen h-[50vh] flex-wrap  max-w-1/2 justify-around flex gap-8">
        {allCards}
      </div>
    </>
  );
};

export default CardContainer;
