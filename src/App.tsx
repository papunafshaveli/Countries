/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, createContext } from "react";
import Header from "./components/Header/Header";
import countriesData from "./data.json";
import useDebounce from "./hooks/useDebounce";
import { AppContextProps } from "./types/types";
import styled from "styled-components";
import { Route, Routes } from "react-router";
import CountryPage from "./pages/CountryPage";
import Home from "./pages/Home";

export const AppContext = createContext<AppContextProps | undefined>(undefined);

function App() {
  const [countries, setCountries] = useState<any[]>(countriesData);

  const [inputText, setInputText] = useState("");
  const term = useDebounce(inputText, 500) as string;

  const [region, setRegion] = useState("All");

  const [changeTheme, setChangeTheme] = useState(false);

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="countryPage/:country" element={<CountryPage />} />
        </Routes>
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
