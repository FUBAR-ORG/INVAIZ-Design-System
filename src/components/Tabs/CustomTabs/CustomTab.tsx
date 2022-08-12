import styled from '@emotion/styled';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  active: boolean;
}

export default function CustomTab({ active, children, ...props }: Props) {
  return (
    <Wrapper type='button' active={active} {...props}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button<{ active: boolean }>`
  ${({ theme }) => theme.style.fontFace.kopub};
  color: ${({ theme }) => theme.color.grayScale.coolGray700};
  font-size: ${({ theme }) => theme.fontSize.size12}px;
  cursor: pointer;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.grayScale.coolGray500};
  width: 64px;
  height: 28px;
  border-radius: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.color.primary.blue500};
    border: none;
    color: ${theme.color.grayScale.basic.white};
  `}
`;
