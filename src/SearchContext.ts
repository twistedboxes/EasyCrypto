import { createContext, useContext } from "react";
import { TCard } from "./types/Card";

export const DataContext = createContext<TCard[] | undefined>(undefined);


export function useDataContext() {
  const TData = useContext(DataContext);
  if (TData === undefined) {
    throw new Error("No data provided in DataContext");
  }
  return TData;
}


