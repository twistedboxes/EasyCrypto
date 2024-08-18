import { TCard } from "../types/Card";

const Card = ({ ...props }: TCard) => {
  return (
    <div className=" p-2 flex gap-2 flex-col w-[400px] rounded-md shadow-lg justify-around bg-slate-100">
      <span className="flex items-center gap-1 h-8">
        <img src={props.image} alt={props.name} className="h-full " />
        <span className="font-bold">{props.name}</span>
        <small className="text-xs">({props.symbol.toUpperCase()})</small>
      </span>
      <p>Price: <span className="font-bold">${props.current_price.toLocaleString()}</span></p>
      <span>
        <span>Total volume: </span><span className="font-bold">${props.total_volume?.toLocaleString()}</span>
      </span>
    </div>
  );
};

export default Card;
