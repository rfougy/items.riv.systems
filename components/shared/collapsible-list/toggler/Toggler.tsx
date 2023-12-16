import { Dispatch, SetStateAction } from "react";
import { Box, Inline, Title } from "./Toggler.styled";
import ArrowIcon from "../../../icons/ArrowIcon";

const Toggler: React.FC<{
  title: string;
  expanded: boolean | undefined;
  setExpanded: Dispatch<SetStateAction<boolean | undefined>>;
}> = ({ title, expanded, setExpanded }) => {
  const dynamicTitle = expanded ? title : "VIEW " + title;

  return (
    <Box onClick={() => setExpanded((prev) => !prev)}>
      <Title>{dynamicTitle}</Title>
      <Inline>
        <ArrowIcon aria-label="Arrow Icon" top={!expanded} bottom={expanded} />
      </Inline>
    </Box>
  );
};

export default Toggler;
