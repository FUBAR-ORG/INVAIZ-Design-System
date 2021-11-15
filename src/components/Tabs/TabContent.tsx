import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export default function TabContent({
  children,
  ...args
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Content {...args}>{children}</Content>;
}

const Content = styled.div`
  min-height: 300px;
  line-height: 2.5;
  background-color: #fff;
  padding: 20px;
`;
