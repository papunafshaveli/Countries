import styled from "styled-components";
import { device } from "../../device";
import { useContext } from "react";
import { AppContext } from "../../App";

const CountryCards = () => {
  const countriesInfo = useContext(AppContext!);
  const { term } = useContext(AppContext!);
  console.log(term);

  return (
    <CountryCardsContainer>
      {countriesInfo?.countries
        .filter((item) => {
          if (term === "") {
            return item;
          } else if (
            item.name.toLowerCase().includes(term.toLocaleLowerCase())
          ) {
            return item;
          }
        })
        .map((item) => {
          return (
            <Card key={item.name}>
              <img src={item.flag} alt="" />
              <h2>{item.name}</h2>
              <p>
                <b>Population: </b>
                {item.population}
              </p>
              <p>
                <b> Region:</b> {item.region}
              </p>
              <p>
                <b>Capital: </b>
                {item.capital}
              </p>
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
    justify-content: space-around;
    padding: 20px 80px;
  }
`;

const Card = styled.div`
  width: 200px;
  height: 290px;

  padding: 25px;

  box-shadow: 0 7px 29px 0 rgba(100, 100, 111, 0.2);

  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    padding-bottom: 15px;
  }
  h2 {
    padding-bottom: 10px;
    font-size: 1.6rem;
  }
  p {
    font-size: 1.4rem;
    padding-bottom: 7px;
  }
`;
