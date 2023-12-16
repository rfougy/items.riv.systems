import { Dispatch, SetStateAction, useEffect } from "react";

import PostViewToggle from "../../features/post-view-toggle/PostViewToggle";
import { postView } from "../../../types/postView";
import useViewportWidthEventListener from "../../../hooks/useViewportWidthListener";

import { Box, PageTitle } from "./TitleAndToggler.styled";
import { breakpoints } from "../../../styles/theme";

const TitleAndToggler: React.FC<{
  title: string;
  isContentResultsPage?: boolean;
  postView: postView;
  setPostView: Dispatch<SetStateAction<postView>>;
}> = ({ title, isContentResultsPage, postView, setPostView }) => {
  const isVerticalView = useViewportWidthEventListener(
    breakpoints.useViewportWidth.xs
  );

  function switchViewForMobile() {
    const newView = isVerticalView ? "default" : "column";
    if (!isContentResultsPage) setPostView(newView);
  }

  useEffect(() => switchViewForMobile(), [isVerticalView]);

  return (
    <>
      {!isVerticalView && (
        <PostViewToggle setPostView={setPostView} postView={postView} />
      )}
    </>
  );
};

export default TitleAndToggler;
