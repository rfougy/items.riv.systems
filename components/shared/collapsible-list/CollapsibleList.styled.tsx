import styled from "@emotion/styled";

export const Box = styled.section`
  padding: 1.25rem;

  border-radius: 1vh;
  background-color: ${(props: any) => props.theme.highlight};
`;

export const Divider = styled.div`
  height: 1px;
  background: ${(props: any) => props.theme.primary};
  margin: 1.25rem 0 0.5rem 0;
  opacity: 0.25;
`;
