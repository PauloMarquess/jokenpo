import { ReactNode } from 'react';
import { ContainerButton } from './style';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <ContainerButton>
      <button onClick={onClick}>{children}</button>
    </ContainerButton>
  );
};
export default Button;
