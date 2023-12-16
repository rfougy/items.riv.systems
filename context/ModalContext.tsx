import { createContext, useState, useContext, useEffect } from "react";

export const ModalContext = createContext<any | null>(null);
export const useModalContext = () => useContext(ModalContext);

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [content, setContent] = useState<any[]>();
  const [focusedContent, setFocusedContent] = useState<any>();

  function handleModalOpen(contentToFocus: any) {
    setFocusedContent(contentToFocus);
    setOpenModal(true);
  }

  function handleModalClose() {
    setOpenModal(false);
    setContent([]);
    setFocusedContent(null);
  }

  return (
    <ModalContext.Provider
      value={{
        openModal,
        content,
        focusedContent,
        setOpenModal,
        setContent,
        setFocusedContent,
        handleModalOpen,
        handleModalClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
