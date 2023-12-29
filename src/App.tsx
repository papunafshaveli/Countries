/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, createContext, Dispatch, SetStateAction } from "react";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import countriesData from "./data.json";
import CountryCards from "./components/CountryCards/CountryCards";

type CountrieProps = {
  name: string;
  flag: string;
  population: string;
  region: string;
  capital: string;
};

export type AppContextProps = {
  countries: CountrieProps[];
  setCountries: Dispatch<SetStateAction<CountrieProps[]>>;
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);

function App() {
  const [countries, setCountries] = useState<any[]>(countriesData);

  const [inputText, setInputText] = useState("");

  return (
    <>
      <AppContext.Provider
        value={{ countries, setCountries, inputText, setInputText }}
      >
        <Header />
        <Filters />
        <CountryCards />
      </AppContext.Provider>
    </>
  );
}

export default App;
