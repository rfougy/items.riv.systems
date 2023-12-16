import styled from "@emotion/styled";
import { breakpoints } from "../../../../styles/theme";

export const Dot = styled.div`
  background: ${(props: any) => props.theme.primary};
  border-radius: 50%;
  display: inline-block;
  height: 0.175rem;
  width: 0.175rem;
  margin: 0.025rem;
  opacity: ${({ isDeactivated }: { isDeactivated: boolean }) =>
    isDeactivated ? 0 : 1};
`;
