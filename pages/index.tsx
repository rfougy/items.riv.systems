import type { GetStaticProps, NextPage } from "next";

import DisplayDotsCoordsProvider from "../context/DisplayDotsCoordsContext";
import DisplayDotsAnime from "../components/features/display-dots-anime/DisplayDotsAnime";
import Button from "../components/shared/button/Button";

import {
  Box,
  Description,
  Margin,
} from "../styles/pages/DisplayDotsPage.styled";

const Home: NextPage = () => {
  return (
    <>
      <DisplayDotsCoordsProvider>
        <Box>
          <Description isIntroText>
            Hi, my name is Riviere, welcome to:
          </Description>
          <Margin>
            <DisplayDotsAnime
              text={"ITEMS.RIV.SYSTEMS"}
              includeRestartButton={true}
            />
          </Margin>
          <Description>
            I created this website to share
            <br />
            my works, projects and experiences.
          </Description>
          <Button href={`/content`}>EXPLORE SYSTEMS</Button>
        </Box>
      </DisplayDotsCoordsProvider>
    </>
  );
};

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
