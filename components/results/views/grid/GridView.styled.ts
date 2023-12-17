import styled from "@emotion/styled";

export const Grid = styled.section`
  display: grid;
  gap: 0.5rem;
  align-items: start;
  grid-template-columns: repeat(3, 1fr);
`;

export const GridItem = styled.div`
  display: flex;

  a {
    width: 100%;
  }

  &:hover {
    cursor: cell;
  }
`;
