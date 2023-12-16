import styled from "@emotion/styled";

export const ViewportWrapper = styled.div`
  position: fixed;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;

  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  padding: 2rem;

  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(7.5px);
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  margin: auto;
`;
