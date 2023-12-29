import styled from "styled-components";
import { device } from "../../device";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 25px;

  box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);

  background-color: white;

  @media ${device.tabletS} {
    padding: 20px 80px;
  }
`;

export const ThemeChanger = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 1.2rem;
  }
`;
