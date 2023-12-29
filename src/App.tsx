/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, createContext } from "react";
import "./App.css";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import countriesData from "./data.json";
import CountryCards from "./components/CountryCards/CountryCards";

type CountryCardsProps = {
  countries: any[];
  setCountries: React.Dispatch<React.SetStateAction<CountrieProps[]>>;
};

type CountrieProps = {
  name: string;
  flag: string;
  population: string;
  region: string;
  capital: string;
};

export const AppContext = createContext<CountryCardsProps | undefined>(
  undefined
);

function App() {
  const [countries, setCountries] = useState<any[]>(countriesData);

  return (
    <>
      <AppContext.Provider value={{ countries, setCountries }}>
        <Header />
        <Filters />
        <CountryCards />
      </AppContext.Provider>
    </>
  );
}

export default App;
