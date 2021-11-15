import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export interface ITab extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  title: string;
  value: string | number;
}

export default function Tab({ children, ...args }: ITab) {
  return <TabBox {...args}>{children}</TabBox>;
}

const TabBox = styled.button`
  min-width: calc(var(--tab-width) * 1px);
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  transition: color 0.3s ease-in;
  outline: 0;
  background: #fff;
  border: none;
`;
