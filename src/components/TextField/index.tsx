import { Input } from './style/TextField';

export interface TextFieldProps {
  scale?: 'normal' | 'large';
  placeholder?: string;
  fontSize?: 'normal' | 'large';
  fullWidth?: boolean;
  active?: boolean;
  password?: boolean;
}

export default function TextField({
  scale = 'normal',
  placeholder = '',
  fontSize = 'normal',
  fullWidth = false,
  active = false,
  password = false,
}: TextFieldProps) {
  return (
    <Input
      type={password ? 'password' : 'text'}
      placeholder={placeholder}
      scale={scale}
      fontSize={fontSize}
      fullWidth={fullWidth}
      active={active}
    />
  );
}
