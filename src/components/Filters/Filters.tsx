import { useContext } from "react";
import { FiltersContainer } from "./styles";
import { AppContext } from "../../App";

const Filters = () => {
  const { inputText, setInputText } = useContext(AppContext!);

  return (
    <FiltersContainer>
      <form>
        <input
          type="search"
          placeholder="Search for a country"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </form>
      <select>
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
