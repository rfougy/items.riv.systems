import { ArrowIcon as Icon } from "./ArrowIcon.styled";

const ArrowIcon: React.FC<{
  forModal?: boolean;
  right?: boolean;
  left?: boolean;
  top?: boolean;
  bottom?: boolean;
  color?: string;
}> = ({ right, left, top, bottom, color, forModal }) => (
  <Icon
    right={right}
    left={left}
    top={top}
    bottom={bottom}
    color={color}
    //@ts-ignore
    forModal={forModal}
  />
);

export default ArrowIcon;
