import { Dispatch, SetStateAction } from "react";
import { Box, Button, Inline, Title } from "./Toggler.styled";
import ArrowIcon from "../../../icons/ArrowIcon";

const Toggler: React.FC<{
  title: string;
  button?: {
    title: string;
    handleOnClick: (e?: React.MouseEvent<HTMLElement>) => any;
  };
  expanded: boolean | undefined;
  setExpanded: Dispatch<SetStateAction<boolean | undefined>>;
}> = ({ title, button, expanded, setExpanded }) => {
  return (
    <Box>
      <Box>
        <Title onClick={() => setExpanded((prev) => !prev)}>{title}</Title>
        {button && (
          <Button onClick={() => button.handleOnClick()}>{button.title}</Button>
        )}
      </Box>
      <Inline onClick={() => setExpanded((prev) => !prev)}>
        <ArrowIcon aria-label="Arrow Icon" top={!expanded} bottom={expanded} />
      </Inline>
    </Box>
  );
};

export default Toggler;
