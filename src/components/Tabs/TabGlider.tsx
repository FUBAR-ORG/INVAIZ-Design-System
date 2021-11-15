import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export interface TabGliderProps extends PropsWithChildren<HTMLAttributes<HTMLSpanElement>> {
  currentIndex: number;
}

export default function TabGlider({ currentIndex, ...args }: TabGliderProps) {
  return <Glider currentIndex={currentIndex} {...args} />;
}

const Glider = styled.span<{ currentIndex: number }>`
  position: absolute;
  top: 50px;
  left: 0;
  height: 10px;
  width: calc(var(--tab-width) * 1px);
  background-color: red;
  transform: translateX(${({ currentIndex }) => currentIndex * 100}%);
  transition: 0.25s ease-out;
`;
