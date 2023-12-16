import PostCard from "./card/PostCard";

import { Grid, GridItem } from "./GridView.styled";

const GridView: React.FC<{
  content: any;
}> = ({ content }) =>
  content ? (
    <Grid>
      {content.map((singleContent: any, index: number) => (
        <GridItem key={index}>
          <PostCard
            path={singleContent.path}
            frontmatter={singleContent.frontmatter}
          />
        </GridItem>
      ))}
    </Grid>
  ) : (
    <div>Error: No content available...</div>
  );

export default GridView;
