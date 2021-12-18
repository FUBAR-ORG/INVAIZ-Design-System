import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export default function TabList({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Nav {...props}>{children}</Nav>;
}

const Nav = styled.nav`
  display: flex;
  position: relative;
  background-color: #fff;
`;
