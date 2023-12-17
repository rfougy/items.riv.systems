import styled from "@emotion/styled";

export const Box = styled.section`
  border-radius: 1vh;

  border-bottom: 1rem;
`;

export const Divider = styled.div`
  height: 1px;
  background: ${(props: any) => props.theme.primary};
  margin: 1rem 0 0 0;
  opacity: 0.25;
`;
