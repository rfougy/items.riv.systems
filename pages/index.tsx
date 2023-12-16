import type { GetStaticProps, NextPage } from "next";

import DisplayDotsCoordsProvider from "../context/DisplayDotsCoordsContext";
import DisplayDotsAnime from "../components/features/display-dots-anime/DisplayDotsAnime";
import Button from "../components/shared/button/Button";

import {
  Box,
  Description,
  Margin,
} from "../styles/pages/DisplayDotsPage.styled";
import { getContentByDynamicPage } from "../lib/dynamic-pages/getContentByDynamicPage";
import IPost from "../interfaces/IPost";
import { includePlaceholderImage } from "../lib/dynamic-pages/includePlaceholderImage";

const Home: NextPage = () => (
  <>
    <DisplayDotsCoordsProvider>
      <Box>
        <Description isIntroText>Sorry, this site is currently...</Description>
        <Margin>
          <DisplayDotsAnime text={"IN PROGRESS."} />
        </Margin>
        <Description>Come back again soon!</Description>
        <Button href="https://riv.systems/">TO RIV.SYSTEMS</Button>
      </Box>
    </DisplayDotsCoordsProvider>
  </>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const content: IPost[][] = getContentByDynamicPage();

  const contentWithPlaceholderImage = await includePlaceholderImage(content);

  return {
    props: {
      content: contentWithPlaceholderImage,
      metaTagInputs: {
        page: "home",
        title: "THINGS.RIV.SYSTEMS: Clothing, Film, Misc. Objects",
        description:
          "Welcome to THINGS.RIV.SYSTEMS, a personal website featuring personal possessions from clothing to film and more.",
        isHomePage: true,
      },
      isDisplayDotsPage: true,
    },
  };
};
