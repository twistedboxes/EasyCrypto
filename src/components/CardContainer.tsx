import Card from "./Card";
import { TCardProps } from "../types/Card";
import { useDataContext } from "../SearchContext";

const CardContainer = () => {
  const data = useDataContext();

  const allCards = data.map((item: TCardProps) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <h2 className="text-3xl font-bold  text-center">Top 100 Tokens</h2>
      <div className=" viewer my-8 p-2 w-screen h-[50vh] flex-wrap  max-w-1/2 justify-around flex gap-8">
        {allCards}
      </div>
    </>
  );
};

export default CardContainer;
