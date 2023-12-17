import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";

export const Button = styled.button`
  all: unset;
  width: ${(props: any) => (props.width ? props.width : "0.75rem")};
  height: ${(props: any) => (props.height ? props.height : "0.75rem")};
  position: relative;

  &:hover {
    cursor: cell;
  }

  img {
    ${(props: any) =>
      props.rotate === "true" &&
      `animation: rotation 3s infinite linear; 
      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(-359deg);
        }
      }`}


    -webkit-filter: ${({
      forModal,
      isActive = true,
      isDisabled = false,
      theme,
    }: {
      forModal?: boolean;
      isActive?: boolean;
      isDisabled?: boolean;
      height?: string;
      width?: string;
      rotate?: "true" | "false";
      theme: ITheme;
    }) =>
      isDisabled
        ? "invert(0.5)"
        : isActive
        ? forModal
          ? "invert(1)"
          : theme.id === "light"
          ? "invert(0)"
          : "invert(1)"
        : "invert(0.5)"};

    filter: ${({
      forModal,
      isActive = true,
      isDisabled = false,
      theme,
    }: {
      forModal?: boolean;
      isActive?: boolean;
      isDisabled?: boolean;
      rotate?: "true" | "false";
      theme: ITheme;
    }) =>
      isDisabled
        ? "invert(0.5)"
        : isActive
        ? forModal
          ? "invert(1)"
          : theme.id === "light"
          ? "invert(0)"
          : "invert(1)"
        : "invert(0.5)"};

      &:hover {
        "-webkit-filter": ${(props: any) =>
          props.forModal
            ? "invert(1)"
            : props.isDisabled
            ? "invert(0.5)"
            : props.theme.id === "light"
            ? "invert(0)"
            : "invert(1)"};
        filter: ${(props: any) =>
          props.forModal
            ? "invert(1)"
            : props.isDisabled
            ? "invert(0.5)"
            : props.theme.id === "light"
            ? "invert(0)"
            : "invert(1)"};
      }
  }
`;
