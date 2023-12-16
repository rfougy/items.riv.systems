import { createContext, useState, useContext } from "react";

export const ModalContext = createContext<any | null>(null);
export const useModalContext = () => useContext(ModalContext);

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [slides, setSlides] = useState<any[]>([]);
  const [currSlide, setCurrSlide] = useState<any>();

  const currSlideIndex = slides && slides.indexOf(currSlide);

  function handleModalOpen(slide: any) {
    setCurrSlide(slide);
    setOpenModal(true);
  }

  function handleModalClose() {
    setOpenModal(false);
    setSlides([]);
    setCurrSlide(null);
  }

  function handleNextSlide() {
    const isLastSlide = currSlideIndex === slides.length - 1;
    const nextSlide = isLastSlide ? slides[0] : slides[currSlideIndex + 1];
    setCurrSlide(nextSlide);
  }

  function handlePrevSlide() {
    const isFirstSlide = currSlideIndex === 0;
    const prevSlide = isFirstSlide
      ? slides[slides.length - 1]
      : slides[currSlideIndex - 1];

    setCurrSlide(prevSlide);
  }

  return (
    <ModalContext.Provider
      value={{
        openModal,
        slides,
        currSlide,
        setOpenModal,
        setSlides,
        setCurrSlide,
        handleModalOpen,
        handleModalClose,
        handleNextSlide,
        handlePrevSlide,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
