import { StyledInput } from './style';

interface InputProps {
  placeholder?: string;
  type?: string;
  onChange?: () => void;
}

const Input = ({ placeholder, type, onChange }: InputProps) => {
  return (
    <StyledInput onChange={onChange} placeholder={placeholder} type={type} />
  );
};

export default Input;
