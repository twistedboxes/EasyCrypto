import { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import { DataContext } from "./SearchContext";
import { TCard } from "./types/Card";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [data, setData] = useState([]); // This will hold the filtered data to display
  const [originalData, setOriginalData] = useState([]); // This will hold the original data from the API

  const [error, setError] = useState(false); // This will be used to show an error message

  useEffect(() => {
    const fetchData = async (): Promise<TCard[]> => {
      const data: Response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://easycriptoviewer.netlify.app/",
        },
      }).catch((error) => {
        setError(true);
        console.error("Error fetching data", error);
        return data;
      });

      if (data.ok) {
        const res = await data.json();
        setData(res);
        setOriginalData(res); // Store the original data here
        return res;
      } else {
        console.error("Error fetching data", data);
        setError(true);
      }
      return []; // Return an empty array in case of error or if data is not ok
    };

    fetchData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm === "") {
      setData(originalData); // Reset to original data if search field is empty
    } else {
      const filteredData = originalData.filter((item: TCard) =>
        item.name.toLowerCase().includes(searchTerm) || item.symbol.toLowerCase().includes(searchTerm)
      );
      setData(filteredData);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <DataContext.Provider value={data}>
        <Header />
        <label className="text-3xl mb-2" htmlFor="search"></label>
        <div className="bg-slate-200 w-full flex justify-center gap-3 p-6 mb-20">
          <input
            onChange={handleSearch}
            className="rounded-md text-xl placeholder:text-slate-400  px-4 py-2 bg-slate-100"
            type="text"
            name="search"
            id="search"
            placeholder="Search your token"
          />
        </div>
        {error == true ? <ErrorMessage /> : <CardContainer />}
      </DataContext.Provider>
    </div>
  );
};

export default App;
