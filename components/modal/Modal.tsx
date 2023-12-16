import Image from "next/image";
import { useModalContext } from "../../context/ModalContext";
import {
  Content,
  ImageBox,
  ModalContainer,
  NavButton,
  Text,
  ViewportWrapper,
} from "./Modal.styled";
import ArrowIcon from "../icons/ArrowIcon";
import { darkTheme } from "../../styles/theme";

const Modal: React.FC = () => {
  const {
    currSlide,
    openModal,
    handleModalClose,
    handleNextSlide,
    handlePrevSlide,
  } = useModalContext();

  return (
    openModal && (
      <ViewportWrapper>
        <button onClick={() => handleModalClose()}>CLOSE</button>
        <ModalContainer>
          <NavButton onClick={() => handlePrevSlide()}>
            <ArrowIcon forModal left color={darkTheme.primary} />
          </NavButton>
          <Content>
            <ImageBox>
              <Image
                src={currSlide.frontmatter.coverImage}
                alt={`Cover image for post titled '${currSlide.frontmatter.title}'`}
                layout="fill"
                placeholder="blur"
                blurDataURL={currSlide.frontmatter.placeholderImage}
                style={{
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </ImageBox>
            <Text>{currSlide.frontmatter.excerpt}</Text>
          </Content>
          <NavButton onClick={() => handleNextSlide()}>
            <ArrowIcon forModal right color={darkTheme.primary} />
          </NavButton>
        </ModalContainer>
        <div />
      </ViewportWrapper>
    )
  );
};

export default Modal;
