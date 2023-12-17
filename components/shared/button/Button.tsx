import Link from "next/link";
import React from "react";
import { Button as ButtonStyled } from "./Button.styled";

const Button: React.FC<{
  forModal?: boolean;
  href: string;
  children: React.ReactNode;
}> = ({ forModal, href, children }) => (
  <Link href={href}>
    {/* @ts-ignore */}
    <ButtonStyled forModal={forModal}>{children}</ButtonStyled>
  </Link>
);

export default Button;
