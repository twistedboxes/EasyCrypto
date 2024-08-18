import { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { DataContext } from "./SearchContext";

const App = () => {
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
      return res;
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <DataContext.Provider value={data}>
        <Header />
          <SearchBar />
          <CardContainer />
      </DataContext.Provider>
      {/* <CardContainer data={data} /> */}
    </div>
  );
};

export default App;
