import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export default function TabContent({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Content {...props}>{children}</Content>;
}

const Content = styled.div`
  min-height: 300px;
  line-height: 2.5;
  background-color: #fff;
  padding: 20px;
`;
