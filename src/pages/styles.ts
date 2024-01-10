import styled from "styled-components";
import { device } from "../device";

export const CountryPageContainer = styled.div`
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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-around;
  }

  h2 {
    font-size: 2.6rem;
    padding: 20px 0;

    @media ${device.tablet} {
      padding: 0;
    }
  }
`;

export const ImageWrapper = styled.div`
  max-width: 425px;
  img {
    width: 100%;
  }
`;
export const InfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FirstInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-bottom: 2rem;
`;

export const SecondInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
