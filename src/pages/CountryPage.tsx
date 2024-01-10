import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";

const CountryPage = () => {
  const { country } = useParams();
  console.log(country);
  const countriesInfo = useContext(AppContext!);

  const selectedCountry = countriesInfo?.countries.find((item) => {
    return item.name === country;
  });

  const navigate = useNavigate();

  return (
    <CountryPageContainer>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <IoIosArrowRoundBack /> Back
      </button>
      <InfoContainer>
        <ImageWrapper>
          <img src={selectedCountry?.flag} alt="flag" />
        </ImageWrapper>
        <h2>{selectedCountry?.name}</h2>
        <FirstInfo>
          <p>
            <b>Native Name: </b>
            {selectedCountry?.nativeName}
          </p>
          <p>
            <b>Population: </b>
            {selectedCountry?.population}
          </p>
          <p>
            <b>Region: </b>
            {selectedCountry?.region}
          </p>
          <p>
            <b>Sub Region: </b>
            {selectedCountry?.subregion}
          </p>
          <p>
            <b>Capital: </b>
            {selectedCountry?.capital}
          </p>
        </FirstInfo>
        <SecondInfo>
          <p>
            <b>Top Level Domain: </b>
            {selectedCountry?.topLevelDomain}
          </p>
          <p>
            <b>Currencies: </b>
            {selectedCountry?.currencies !== undefined &&
              selectedCountry?.currencies[0].name}
          </p>
          <p>
            <b>Languages: </b>
            {selectedCountry?.languages?.map((item) => (
              <span key={item.name}>{item.name}; </span>
            ))}
          </p>
        </SecondInfo>
      </InfoContainer>
    </CountryPageContainer>
  );
};

export default CountryPage;

const CountryPageContainer = styled.div`
  padding: 30px 20px;

  p {
    font-size: 1.5rem;
  }
  b {
    font-weight: 800;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;

    font-size: 1.3rem;

    padding: 7px 12px;
    font-family: inherit;

    border: none;
    border-radius: 6px;

    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.24);
    transition: background-color 1s ease-in-out;

    margin-bottom: 30px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2.6rem;
    padding: 20px 0;
  }
`;

const ImageWrapper = styled.div`
  max-width: 768px;
  img {
    width: 100%;
  }
`;

const FirstInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-bottom: 2rem;
`;

const SecondInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
