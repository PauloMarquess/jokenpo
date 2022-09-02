import { CloseModal, ContainerModal } from './styled';

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
      <div>
        <h1>{titleModal}</h1>
        <CloseModal onClick={() => handleOpenModal()}>X</CloseModal>
        <h3>{messageModal}</h3>
      </div>
    </ContainerModal>
  );
};

export default Modal;
