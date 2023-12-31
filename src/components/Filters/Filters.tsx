import { useContext } from "react";
import { FiltersContainer } from "./styles";
import { AppContext } from "../../App";

const Filters = () => {
  const context = useContext(AppContext);
  if (!context) {
    return null;
  }

  const { inputText, setInputText, region, setRegion } = context;

  console.log(region);

  return (
    <FiltersContainer>
      <input
        type="search"
        placeholder="Search for a country"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="none" hidden>
          Filter by Region
        </option>
        <option defaultValue="All">All</option>
        <option value="Africa">Africa </option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </FiltersContainer>
  );
};

export default Filters;
