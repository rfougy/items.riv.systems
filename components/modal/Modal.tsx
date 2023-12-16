import Image from "next/image";
import { useModalContext } from "../../context/ModalContext";

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
      <div>
        <p>Modal</p>
        <button onClick={() => handleModalClose()}>CLOSE</button>
        <button onClick={() => handlePrevSlide()}>PREV</button>
        <button onClick={() => handleNextSlide()}>NEXT</button>
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
      </div>
    )
  );
};

export default Modal;
