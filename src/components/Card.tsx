type TCard = {
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
};
const Card = ({ ...props }: TCard) => {
  return (
    <div className=" p-2 flex gap-2 flex-col w-[400px] rounded-md shadow-lg justify-around bg-slate-100">
      <span className="flex items-center gap-1 h-8">
        <img src={props.image} alt={props.name} className="h-full " />
        <span className="font-bold">{props.name}</span>
        <small className="text-xs">({props.symbol})</small>
      </span>
      <p>Price: ${props.current_price}</p>

      <span>
        <span>Total volume: </span>${props.total_volume?.toLocaleString()}
      </span>
    </div>
  );
};

export default Card;
