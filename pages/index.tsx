import type { GetStaticProps, NextPage } from "next";

import { getContentByDynamicPage } from "../lib/dynamic-pages/getContentByDynamicPage";
import IPost from "../interfaces/IPost";
import { includePlaceholderImage } from "../lib/dynamic-pages/includePlaceholderImage";
import { ContentResults } from "../components/results";

const Home: NextPage<{ content: IPost[][] }> = ({ content }) => (
  <ContentResults content={content} />
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
        title: "RIV.THINGS: Clothing, Film, Misc. Objects",
        description:
          "Welcome to RIV.THINGS, a personal website featuring personal possessions from clothing to film and more.",
        isHomePage: true,
      },
    },
  };
};
