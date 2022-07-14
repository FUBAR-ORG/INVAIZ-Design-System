import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: transparent;
  padding: 8px;
  cursor: pointer;
  outline: none;
  border: none;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  color: ${({ theme }) => theme.color.light.basic};
  font-size: ${({ theme }) => theme.fontSize.size14}px;
`;
