import SocialsList from "../socials/socials-list/SocialsList";
import { socialsList } from "../../constants/socialsList";
import sourceCodeIcon from "../../public/assets/icons/source-code-icon.svg";

import { Footer as Foot } from "./Footer.styled";
import ISocials from "../../interfaces/ISocials";
import SocialsIcon from "../socials/socials-icon/SocialsIcon";

const Footer: React.FC = () => {
  const sourceCodeData: ISocials = {
    title: "RIV.THINGS Source Code",
    url: "https://github.com/rfougy/items.riv.systems",
    icon: sourceCodeIcon,
  };

  return (
    <Foot>
      <SocialsList socials={socialsList} />
    </Foot>
  );
};

export default Footer;
