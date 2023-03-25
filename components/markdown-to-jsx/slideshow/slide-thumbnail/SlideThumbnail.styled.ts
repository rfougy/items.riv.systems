import { breakpoints } from './../../../../styles/theme';
import styled from "@emotion/styled";

export const Thumbnail = styled.button`
  all: unset;
  opacity: ${({ isCurrSlide }: { isCurrSlide: boolean }) =>
    isCurrSlide ? 1 : 0.4};
  width: 3rem;

  &:hover {
    opacity: 1;
  }

  @media (max-width: ${breakpoints.xxs}) {
    width: 2.5rem;
  }
`;

export const ListItem = styled.li`
  all: unset;
`;
