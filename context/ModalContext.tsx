import { createContext, useState, useContext } from "react";

export const ModalContext = createContext<any | null>(null);
export const useModalContext = () => useContext(ModalContext);

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<any>();

  return (
    <ModalContext.Provider
      value={{ openModal, modalContent, setOpenModal, setModalContent }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
