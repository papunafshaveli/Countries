import styled from "styled-components";
import { device } from "../../device";

/* eslint-disable @typescript-eslint/no-explicit-any */
type CountryCardsProps = {
  countries: any[];
};

type CountrieProps = {
  name: string;
  flag: string;
  population: string;
  region: string;
  capital: string;
};

const CountryCards: React.FC<CountryCardsProps> = ({ countries }) => {
  console.log(countries);
  return (
    <CountryCardsContainer>
      {countries.map((item: CountrieProps) => {
        return (
          <Card key={item.name}>
            <img src={item.flag} alt="" />
            <h2>{item.name}</h2>
            <p>Population: {item.population}</p>
            <p>Region: {item.region}</p>
            <p>Capital: {item.capital}</p>
          </Card>
        );
      })}
    </CountryCardsContainer>
  );
};

export default CountryCards;

const CountryCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding: 25px;

  @media ${device.tabletS} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 80px;
  }
`;

const Card = styled.div`
  width: 270px;
  height: 300px;

  padding: 25px;

  box-shadow: 0 7px 29px 0 rgba(100, 100, 111, 0.2);

  img {
    width: 100%;
  }
`;
