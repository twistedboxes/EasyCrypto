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
      <h2 className="text-3xl font-bold  text-center">
        Top {`${data.length}`} Tokens
      </h2>
      <div className="viewer my-8 p-2 w-screen h-[50vh] flex-wrap  max-w-1/2 justify-evenly flex gap-8">
        {allCards.length === 0 ? (
          <p className="text-center font-bold text-red-500 text-xl">
            No tokens found
          </p>
        ) : (
          allCards
        )}
      </div>
    </>
  );
};

export default CardContainer;
