import styled from 'styled-components';

interface ContainerModalProps {
  open: boolean;
}

export const ContainerModal = styled.div<ContainerModalProps>`
  width: 80%;
  background-color: #ececec;
  border-radius: 12px;
  padding: 16px;
  position: absolute;
  transition: 0.7s ease;
  top: ${(props) => (props.open ? '5%' : '-100%')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  z-index: 2;
  text-align: center;
  color: #000;
`;

export const CloseModal = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  right: 3%;
  top: 3%;
  background-color: #1a1a1a;
  border-radius: 50%;
  color: #ececec;
  font-weight: 700;
  font-size: 18px;
`;
export const ContainModal = styled.div`
  width: 90%;
  margin: 40px auto;
`;
