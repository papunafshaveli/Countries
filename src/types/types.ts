import { Dispatch, SetStateAction } from "react";

export type CountrieProps = {
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
  term: string;
  setInputText: Dispatch<SetStateAction<string>>;
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
};
