import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export default function Tab({
  children,
  ...args
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <TabBox {...args}>{children}</TabBox>;
}

const TabBox = styled.button`
  width: calc(var(--tab-width) * 1px);
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  transition: color 0.3s ease-in;
  z-index: 100;
`;
