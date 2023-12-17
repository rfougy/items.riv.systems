import { useEffect, useState } from "react";

import {
  Title,
  Excerpt,
  Margin,
  Box,
  TitleAndLink,
} from "./Header.styled";

import LinkButton from "../link-button/LinkButton";
import WorksGrid from "../works-grid/WorksGrid";

import { IPostFrontMatter } from "../../../interfaces/IPostFrontMatter";

const Header: React.FC<{
  frontmatter: IPostFrontMatter;
}> = ({ frontmatter }) => {
  const [isWorksPage, setIsWorksPage] = useState<boolean>();

  const {
    title,
    excerpt,
    link,
    worksTeamSize,
    worksRoles,
    worksDuration,
    worksTools,
    section,
  } = frontmatter;

  useEffect(() => setIsWorksPage(section === "works"), [section]);

  return (
    <Box>
      <TitleAndLink>
        <Title>{title}</Title>
        {link && <LinkButton url={link} title={title} />}
      </TitleAndLink>
      <Excerpt>{excerpt}</Excerpt>
      {isWorksPage && (
        <WorksGrid
          teamSize={worksTeamSize as number}
          roles={worksRoles as string[]}
          duration={worksDuration as string[]}
          tools={worksTools as string[]}
        />
      )}
      <Margin />
    </Box>
  );
};

export default Header;
