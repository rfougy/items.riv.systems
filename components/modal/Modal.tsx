import Image from "next/image";
import { useRef } from "react";
import { useModalContext } from "../../context/ModalContext";
import {
  Content,
  ImageBox,
  ModalContainer,
  Text,
  ViewportWrapper,
} from "./Modal.styled";
import useOutsideClick from "../../hooks/useOutsideClick";

const Modal: React.FC = () => {
  const {
    currSlide,
    openModal,
    handleModalClose,
    handleNextSlide,
    handlePrevSlide,
  } = useModalContext();

  const contentRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  useOutsideClick(contentRef, () => handleModalClose());
  useOutsideClick(nextButtonRef, () => handleModalClose());
  useOutsideClick(prevButtonRef, () => handleModalClose());

  return (
    openModal && (
      <ViewportWrapper>
        <button onClick={() => handleModalClose()}>CLOSE</button>
        <ModalContainer>
          <button ref={prevButtonRef} onClick={() => handlePrevSlide()}>
            PREV
          </button>
          <Content ref={contentRef}>
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
          <button ref={nextButtonRef} onClick={() => handleNextSlide()}>
            NEXT
          </button>
        </ModalContainer>
        <div />
      </ViewportWrapper>
    )
  );
};

export default Modal;
