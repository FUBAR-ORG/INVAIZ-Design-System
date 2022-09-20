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
  //default style
  min-width: 80px;
  min-height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.15s ease-in-out;
  border-radius: 5px;

  // space
  padding: ${({ theme }) => theme.whiteSpace.whiteSpace4}px;
  box-sizing: border-box;

  // font
  font-size: ${({ theme }) => theme.fontSize.size14}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  // color
  background-color: transparent;
  color: ${({ theme }) => theme.color.grayScale.gray900};

  &:hover {
    background-color: ${({ theme }) => theme.color.grayScale.coolGray100};
  }
`;
