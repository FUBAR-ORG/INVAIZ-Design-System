import styled from '@emotion/styled';
import { ButtonHTMLAttributes, PropsWithChildren, useContext } from 'react';
import { CustomTabsContext } from './CustomTabs';

interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  index: number;
}

export default function CustomTab({ children, index, ...props }: Props) {
  const value = useContext(CustomTabsContext);

  return (
    <Wrapper type='button' active={index === Number(value)} data-index={index} {...props}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button<{ active?: boolean }>`
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
