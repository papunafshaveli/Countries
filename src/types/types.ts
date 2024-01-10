import { Dispatch, SetStateAction } from "react";

export type CountrieProps = {
  name: string;
  flag: string;
  population: string;
  region: string;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: [
    {
      code: string;
      name: string;
      symbol: string;
    }
  ];
  languages: [
    {
      name: string;
    }
  ];
  borders: string[];
};

export type AppContextProps = {
  countries: CountrieProps[];
  setCountries: Dispatch<SetStateAction<CountrieProps[]>>;
  inputText: string;
  term: string;
  setInputText: Dispatch<SetStateAction<string>>;
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
  changeTheme: boolean;
  setChangeTheme: Dispatch<SetStateAction<boolean>>;
};
