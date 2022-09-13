import { ReactNode } from 'react';
import { ContainerButton } from './style';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  id?: string;
}

const Button = ({ children, onClick, id }: ButtonProps) => {
  return (
    <ContainerButton>
      <button id={id} onClick={onClick}>
        {children}
      </button>
    </ContainerButton>
  );
};
export default Button;
