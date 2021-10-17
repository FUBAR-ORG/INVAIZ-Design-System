import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export default function Button({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: transparent;
  padding: 8px;
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
