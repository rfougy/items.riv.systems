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
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  height: 100%;
  width: 100%;
  max-width: 1000px;

  margin: auto;
`;

export const ImageBox = styled.div`
  position: relative;

  height: 100%;
  max-height: fit-content;
  width: 90%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: 100%;
  height: 100%;
`;

export const Text = styled.caption`
  color: #ffffff;
  font-size: 1rem;
`;
