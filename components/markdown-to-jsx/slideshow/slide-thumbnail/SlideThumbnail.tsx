import NextImage from "../../NextImage";
import _ from "lodash";

import { ISlide } from "../../../../interfaces/ISlide";

import { ListItem, Thumbnail } from "./SlideThumbnail.styled";

const SlideThumbnail: React.FC<{
  currSlide: ISlide;
  slide: ISlide;
  slideIndex: number;
  setCurrSlideIndex: (arg: number) => void;
}> = ({ slide, currSlide, slideIndex, setCurrSlideIndex }) => {
  const isCurrSlide: boolean = _.isEqual(slide, currSlide);

  return (
    <ListItem>
      <Thumbnail
        isCurrSlide={isCurrSlide}
        onClick={() => setCurrSlideIndex(slideIndex)}
      >
        <NextImage aspectRatio={"1:1"} isSlideThumbnail {...slide} />
      </Thumbnail>
    </ListItem>
  );
};

export default SlideThumbnail;
