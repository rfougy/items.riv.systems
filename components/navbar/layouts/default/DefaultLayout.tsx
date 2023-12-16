import { Dispatch, SetStateAction } from "react";

import ThemeToggleButton from "../../../features/theme-toggle/ThemeToggleButton";

import { LogoAndButtonsBox, FeaturesBox } from "./DefaultLayout.styled";
import { NavBox } from "../../Navbar.styled";
import DisplayDotsCoordsProvider from "../../../../context/DisplayDotsCoordsContext";
import DisplayDotsAnime from "../../../features/display-dots-anime/DisplayDotsAnime";
import Link from "next/link";

const DefaultLayout: React.FC<{
  toggleTheme: () => void;
  setSearchActivated: Dispatch<SetStateAction<boolean>>;
}> = ({ toggleTheme, setSearchActivated }) => (
  <DisplayDotsCoordsProvider>
    <NavBox>
      <LogoAndButtonsBox>
        <Link href="/">
          <DisplayDotsAnime text={"RIV.THINGS"} />
        </Link>
        <FeaturesBox>
          <ThemeToggleButton toggleTheme={toggleTheme} />
        </FeaturesBox>
      </LogoAndButtonsBox>
    </NavBox>
  </DisplayDotsCoordsProvider>
);

export default DefaultLayout;
