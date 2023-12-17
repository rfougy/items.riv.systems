import styled from "@emotion/styled";

export const ArrowIcon = styled.div`
  border: solid
    ${(props: any) => (props.color ? props.color : props.theme.primary)};
  border-width: ${(props: any) =>
    props.forModal ? "0 0.1rem 0.1rem 0" : "0 0.075rem 0.075rem 0"};

  padding: ${(props: any) => (props.forModal ? "0.5rem" : "0.125rem")};

  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);

  transform: ${({
    right,
    left,
    top,
    bottom,
  }: {
    right?: boolean;
    left?: boolean;
    top?: boolean;
    bottom?: boolean;
  }) => {
    if (right) return "rotate(-45deg);";
    if (left) return "rotate(135deg);";
    if (top) return "rotate(45deg);";
    if (bottom) return "rotate(-135deg);";
  }};

  -webkit-transform: ${({
    right,
    left,
    top,
    bottom,
  }: {
    right?: boolean;
    left?: boolean;
    top?: boolean;
    bottom?: boolean;
  }) => {
    if (right) return "rotate(-45deg);";
    if (left) return "rotate(135deg);";
    if (top) return "rotate(45deg);";
    if (bottom) return "rotate(-135deg);";
  }};
`;
