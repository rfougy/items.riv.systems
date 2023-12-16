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
import IconButton from "../shared/icon-button/IconButton";

import closeIcon from "../../public/assets/icons/close-icon.svg";

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
        <IconButton
          forModal
          src={closeIcon}
          alt="close button"
          ariaLabel="close button"
          height="2.25rem"
          width="2.25rem"
          onClick={() => handleModalClose()}
        />
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
