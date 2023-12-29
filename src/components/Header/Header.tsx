import { IoMdSunny } from "react-icons/io";
import { HeaderContainer, ThemeChanger } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Where in the World?</h1>
      <ThemeChanger>
        <IoMdSunny size={24} />
        <p>Dark Mode</p>
      </ThemeChanger>
    </HeaderContainer>
  );
};

export default Header;
