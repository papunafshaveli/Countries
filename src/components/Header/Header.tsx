import { IoMdSunny } from "react-icons/io";
import { HeaderContainer, ThemeChanger } from "./styles";
import { AppContext } from "../../App";
import { useContext } from "react";
import { MdOutlineNightlightRound } from "react-icons/md";

const Header = () => {
  const context = useContext(AppContext);

  const handleThemeChange = () => {
    context?.setChangeTheme(!context.changeTheme);
  };

  return (
    <HeaderContainer changeTheme={context?.changeTheme}>
      <h1>Where in the World?</h1>
      <ThemeChanger>
        {context?.changeTheme ? (
          <ThemeChanger onClick={handleThemeChange}>
            <IoMdSunny size={24} />
            <p>Light Mode</p>
          </ThemeChanger>
        ) : (
          <ThemeChanger onClick={handleThemeChange}>
            <MdOutlineNightlightRound size={24} />
            <p>Dark Mode</p>
          </ThemeChanger>
        )}
      </ThemeChanger>
    </HeaderContainer>
  );
};

export default Header;
