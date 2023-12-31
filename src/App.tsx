/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, createContext } from "react";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import countriesData from "./data.json";
import CountryCards from "./components/CountryCards/CountryCards";
import useDebounce from "./hooks/useDebounce";
import { AppContextProps } from "./types/types";

export const AppContext = createContext<AppContextProps | undefined>(undefined);

function App() {
  const [countries, setCountries] = useState<any[]>(countriesData);

  const [inputText, setInputText] = useState("");
  const term = useDebounce(inputText, 500) as string;

  const [region, setRegion] = useState("All");

  console.log(term);

  return (
    <>
      <AppContext.Provider
        value={{
          countries,
          setCountries,
          term,
          inputText,
          setInputText,
          region,
          setRegion,
        }}
      >
        <Header />
        <Filters />
        <CountryCards />
      </AppContext.Provider>
    </>
  );
}

export default App;
