import { useModalContext } from "../../context/ModalContext";

const Modal: React.FC = () => {
  const { openModal, modalContent, setOpenModal, setModalContent } =
    useModalContext();

  return openModal && <div>Modal</div>;
};

export default Modal;
