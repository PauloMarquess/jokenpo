import { CloseModal, ContainerModal, ContainModal } from './styled';

interface ModalProps {
  titleModal: string;
  messageModal: string;
  open: any;
  handleOpenModal: any;
}

const Modal = ({
  handleOpenModal,
  open,
  titleModal,
  messageModal,
}: ModalProps) => {
  return (
    <ContainerModal open={open}>
      <ContainModal>
        <h1>{titleModal}</h1>
        <CloseModal onClick={() => handleOpenModal()}>x</CloseModal>
        <h3>{messageModal}</h3>
      </ContainModal>
    </ContainerModal>
  );
};

export default Modal;
