import { TCard } from "../types/Card";

const Card = ({ ...props }: TCard) => {
  return (
    <div className=" p-4 flex gap-2 flex-col lg:w-1/4 min-w-[300px] rounded-md shadow-lg justify-around bg-slate-100">
      <span className="flex items-center just gap-1 h-8 mb-4">
        <img src={props.image} alt={props.name} className="h-full " />
        <span className="font-bold text-xl">{props.name}</span>
        <small className="text-xs">({props.symbol.toUpperCase()})</small>
      </span>
      <p>
        Price:{" "}
        <span className="font-bold">
          ${props.current_price.toLocaleString()}
        </span>
      </p>

      <p>
        High 24h:
        <span className="font-bold"> ${props.high_24h?.toLocaleString()}</span>
      </p>
      <p>
        Low 24h:
        <span className="font-bold"> ${props.low_24h?.toLocaleString()}</span>
      </p>
      <span>
        <span>Total volume: </span>
        <span className="font-bold">
          ${props.total_volume?.toLocaleString()}
        </span>
      </span>
      <p>
        Market Cap:
        <span className="font-bold">
          {" "}
          ${props.market_cap?.toLocaleString()}
        </span>
      </p>
    </div>
  );
};

export default Card;
