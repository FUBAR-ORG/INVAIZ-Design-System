import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import TabList from '@components/Tabs/TabList';
import { ITab } from '@components/Tabs/Tab';

export interface TabsProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  tabs: ITab[];
}

export default function Tabs({ tabs, children, ...args }: TabsProps) {
  return (
    <Container tabsLength={tabs.length} {...args}>
      <TabList>{children}</TabList>
    </Container>
  );
}

const Container = styled.div<{ tabsLength: number }>`
  --tab-width: 120;
  width: calc(var(---tab-width) * ${({ tabsLength }) => tabsLength} * 1px);
  margin: 20px;
  border-radius: 5px;
  overflow: hidden;
`;
