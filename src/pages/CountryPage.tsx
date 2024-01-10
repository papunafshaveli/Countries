import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate, useParams } from "react-router";
import { IoIosArrowRoundBack } from "react-icons/io";

import {
  CountryPageContainer,
  FirstInfo,
  ImageWrapper,
  InfoContainer,
  InfosWrapper,
  SecondInfo,
} from "./styles";

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
        <InfosWrapper>
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
        </InfosWrapper>
      </InfoContainer>
    </CountryPageContainer>
  );
};

export default CountryPage;
