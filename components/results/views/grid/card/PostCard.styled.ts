import { breakpoints } from "../../../../../styles/theme";
import styled from "@emotion/styled";

export const Box = styled.div`
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 18.75rem;

  margin: auto;
  border: solid transparent;
  border-radius: 2vh;
  border-width: 0 0.075rem 0.075rem 0.075rem;

  background: padding-box,
    linear-gradient(
        180deg,
        ${(props: any) => props.theme.secondary} 20%,
        ${(props: any) => props.theme.primary} 100%
      )
      border-box;

  &:hover {
    opacity: 0.75;

    div {
      background: ${(props: any) => props.theme.highlight};
    }
  }

  @media (max-width: ${breakpoints.xs}) {
    // border: none;
    border-width: 0 0.075rem 0.075rem 0.075rem;

    max-width: none;
    background: padding-box,
      linear-gradient(
          180deg,
          ${(props: any) => props.theme.secondary} 20%,
          ${(props: any) => props.theme.primary} 100%
        )
        border-box;
  }
`;
