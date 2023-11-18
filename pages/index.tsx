import type { GetStaticProps, NextPage } from "next";

import DisplayDotsCoordsProvider from "../context/DisplayDotsCoordsContext";
import DisplayDotsAnime from "../components/features/display-dots-anime/DisplayDotsAnime";
import Button from "../components/shared/button/Button";

import {
  Box,
  Description,
  Margin,
} from "../styles/pages/DisplayDotsPage.styled";

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
  return {
    props: {
      metaTagInputs: {
        page: "home",
        title: "ITEMS.RIV.SYSTEMS: Clothing, Film, Misc. Objects",
        description:
          "Welcome to ITEMS.RIV.SYSTEMS, a personal website featuring personal possessions from clothing to film and more.",
        isHomePage: true,
      },
      isDisplayDotsPage: true,
    },
  };
};
