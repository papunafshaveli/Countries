/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import countriesData from "./data.json";
import CountryCards from "./components/CountryCards/CountryCards";

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <>
      <Header />
      <Filters />
      <CountryCards countries={countries} />
    </>
  );
}

export default App;
