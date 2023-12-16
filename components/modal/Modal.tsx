import Image from "next/image";
import { useModalContext } from "../../context/ModalContext";
import { ModalContainer, ViewportWrapper } from "./Modal.styled";

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
          <button onClick={() => handlePrevSlide()}>PREV</button>
          <Image
            src={currSlide.frontmatter.coverImage}
            alt={`Cover image for post titled '${currSlide.frontmatter.title}'`}
            width={650}
            height={100}
            placeholder="blur"
            blurDataURL={currSlide.frontmatter.placeholderImage}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
          <button onClick={() => handleNextSlide()}>NEXT</button>
        </ModalContainer>
        <div />
      </ViewportWrapper>
    )
  );
};

export default Modal;
