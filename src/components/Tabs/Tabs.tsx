import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import TabList from '@components/Tabs/TabList';

export interface TabsProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  tabsLength: number;
}

export default function Tabs({ tabsLength, children, ...args }: TabsProps) {
  return (
    <Container tabsLength={tabsLength} {...args}>
      <TabList />
      {children}
    </Container>
  );
}

const Container = styled.div<{ tabsLength: number }>`
  --tab-width: 200;
  width: calc(var(---tab-width) * ${({ tabsLength }) => tabsLength} * 1px);
  margin: 20px;
  border-radius: 5px;
  overflow: hidden;
`;
