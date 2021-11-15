import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export default function TabList({
  children,
  ...args
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Nav {...args}>{children}</Nav>;
}

const Nav = styled.nav`
  display: flex;
  position: relative;
  background-color: #fff;
`;
