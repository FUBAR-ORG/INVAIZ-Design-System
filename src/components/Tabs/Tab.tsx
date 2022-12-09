import { type ReactNode } from 'react';

import { Button, Panel } from '@components/Tabs/Tab.style';

interface TabPanelProps {
  index: number;
  currentIndex: number;
  children: ReactNode;
}

export const TabPanel = ({ index, currentIndex, children }: TabPanelProps) =>
  index === currentIndex ? <Panel>{children}</Panel> : null;

interface TabProps {
  index: number;
  disabled?: boolean;
  changeTab: (index: number) => void;
  children: ReactNode;
}

const Tab = ({ index, disabled, changeTab, children }: TabProps) => {
  const onClick = () => changeTab(index);

  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default Tab;
