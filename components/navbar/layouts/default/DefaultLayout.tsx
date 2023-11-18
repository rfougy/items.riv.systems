import { Dispatch, SetStateAction } from "react";

import ThemeToggleButton from "../../../features/theme-toggle/ThemeToggleButton";

import { LogoAndButtonsBox, FeaturesBox } from "./DefaultLayout.styled";
import { NavBox } from "../../Navbar.styled";

const DefaultLayout: React.FC<{
  toggleTheme: () => void;
  setSearchActivated: Dispatch<SetStateAction<boolean>>;
}> = ({ toggleTheme, setSearchActivated }) => (
  <NavBox>
    <LogoAndButtonsBox>
      <FeaturesBox>
        <ThemeToggleButton toggleTheme={toggleTheme} />
      </FeaturesBox>
    </LogoAndButtonsBox>
  </NavBox>
);

export default DefaultLayout;
