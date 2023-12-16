import styled from "@emotion/styled";
import { breakpoints } from "../../styles/theme";

export const ViewportWrapper = styled.div`
  cursor: crosshair;

  position: fixed;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;

  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  padding: 2rem;

  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(7.5px);

  @media (max-width: ${breakpoints.xs}) {
    padding: 0 0 1rem 0;
  
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: fit-content;
  max-height: 70vh;
  width: 100%;
  max-width: 1000px;

  margin: auto;
`;

export const NavButton = styled.button`
  all: unset;
  display: flex;
  flex-wrap: no-wrap;
  margin: 0 0.35rem;
  padding: 0.4rem 0.7rem;
  opacity: ${(props: any) => (props.disabled ? "0.5" : "1")};

  &:hover {
    cursor: cell;
  }
`;

export const ImageBox = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 3 / 4;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: 100%;
  height: 100%;
`;

export const Text = styled.caption`
  color: #ffffff;
  font-size: 0.75rem;
`;
