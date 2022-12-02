import { type ReactNode } from 'react';

import { Button, Panel } from '@components/Tabs/Tabs.style';

interface TabPanelProps {
  index: number;
  currentIndex: number;
  children: ReactNode;
}

export const TabPanel = ({ index, currentIndex, children }: TabPanelProps) =>
  index === currentIndex ? <Panel>{children}</Panel> : null;

interface TabProps {
  index: number;
  changeTab: (index: number) => void;
  children: ReactNode;
}

const Tab = ({ index, changeTab, children }: TabProps) => {
  const onClick = () => changeTab(index);

  return <Button onClick={onClick}>{children}</Button>;
};

interface TabsProps {
  tabs: string[];
  changeTab: (index: number) => void;
}

const Tabs = ({ tabs, changeTab }: TabsProps) => (
  <>
    {tabs.map((tab, index) => (
      <Tab key={tab} index={index} changeTab={changeTab}>
        {tab}
      </Tab>
    ))}
  </>
);

export default Tabs;
