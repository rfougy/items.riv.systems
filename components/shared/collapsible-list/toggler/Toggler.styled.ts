import styled from "@emotion/styled";

export const Box = styled.button`
  all: unset;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;
`;

export const Title = styled.h3`
  font-size: 0.75rem;
  font-weight: 500;

  width: 100%;

  margin: 0;
`;

export const Button = styled.button`
  all: unset;

  color: ${(props: any) => props.theme.primary};
  font-size: 0.75rem;
  text-decoration: underline;
`;

export const Inline = styled.div`
  display: inline-block;
  margin-top: auto;
  margin-bottom: auto;
`;
