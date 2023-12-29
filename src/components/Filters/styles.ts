import styled from "styled-components";
import { device } from "../../device";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 25px;

  @media ${device.tabletS} {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 80px;
  }

  input {
    padding: 20px 60px;

    background: url("./search-icon.svg");
    background-repeat: no-repeat;
    background-position: 15px 50%;

    border: none;
    border-radius: 4px;
    box-shadow: 0 7px 29px 0 rgba(100, 100, 111, 0.2);

    font-size: 1.4rem;

    width: 100%;

    @media ${device.tabletS} {
      width: 400px;
    }
  }

  select {
    padding: 20px;

    border: none;
    border-radius: 4px;

    width: 190px;

    box-shadow: 0 7px 29px 0 rgba(100, 100, 111, 0.2);

    appearance: none;

    cursor: pointer;
  }
`;
