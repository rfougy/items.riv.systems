import { useModalContext } from "../../context/ModalContext";

const Modal: React.FC = () => {
  const { openModal, handleModalClose } = useModalContext();

  return (
    openModal && (
      <div>
        <p>Modal</p>
        <button onClick={() => handleModalClose()} />
      </div>
    )
  );
};

export default Modal;
