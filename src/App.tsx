/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, createContext } from "react";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import countriesData from "./data.json";
import CountryCards from "./components/CountryCards/CountryCards";
import useDebounce from "./hooks/useDebounce";
import { AppContextProps } from "./types/types";
import styled from "styled-components";

export const AppContext = createContext<AppContextProps | undefined>(undefined);

function App() {
  const [countries, setCountries] = useState<any[]>(countriesData);

  const [inputText, setInputText] = useState("");
  const term = useDebounce(inputText, 500) as string;

  const [region, setRegion] = useState("All");

  const [changeTheme, setChangeTheme] = useState(false);

  console.log(changeTheme);

  return (
    <AppContainer changeTheme={changeTheme}>
      <AppContext.Provider
        value={{
          countries,
          setCountries,
          term,
          inputText,
          setInputText,
          region,
          setRegion,
          changeTheme,
          setChangeTheme,
        }}
      >
        <Header />
        <Filters />
        <CountryCards />
      </AppContext.Provider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div<{ changeTheme: boolean }>`
  min-height: 100vh;
  background-color: ${({ changeTheme }) =>
    changeTheme ? "hsl(209, 23%, 22%);" : "white"};

  color: ${({ changeTheme }) => (changeTheme ? "white" : "hsl(209, 23%, 22%)")};
`;
