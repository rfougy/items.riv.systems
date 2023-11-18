import ISocials from "../interfaces/ISocials";

import instagramIcon from "../public/assets/icons/socials/instagram-icon.svg";
import emailIcon from "../public/assets/icons/socials/send-icon.svg";

export const socialsList: ISocials[] = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/riv.ig/",
    icon: instagramIcon,
  },
  {
    title: "Email",
    url: "mailto:hi@riv.systems",
    icon: emailIcon,
  },
];
