import styled from "styled-components";
import { device } from "../../device";

export const HeaderContainer = styled.div<{ changeTheme: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 25px;

  box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);

  @media ${device.tabletS} {
    padding: 20px 80px;
  }

  background-color: ${({ changeTheme }) =>
    changeTheme ? "hsl(209, 23%, 22%);" : "white"};

  color: ${({ changeTheme }) => (changeTheme ? "white" : "hsl(209, 23%, 22%)")};
`;

export const ThemeChanger = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 1.2rem;
  }
`;
