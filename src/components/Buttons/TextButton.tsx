import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

type Size = 'small' | 'default' | 'large' | 'x-large';

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  selected?: boolean;
}

export default function TextButton({
  text,
  size = 'default',
  disabled,
  loading,
  selected,
  ...props
}: TextButtonProps) {
  return <Text {...props}>{text}</Text>;
}

const Text = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
`;
