import { type ReactNode } from 'react';

import { Line, Contain, Vertical, Panel } from '@components/Tabs/Tab.style';

interface TabPanelProps {
  index: number;
  currentIndex: number;
  children: ReactNode;
}

export const TabPanel = ({ index, currentIndex, children }: TabPanelProps) =>
  index === currentIndex ? <Panel>{children}</Panel> : null;

interface TabProps {
  shape?: 'line' | 'contain' | 'vertical';
  index: number;
  currentIndex: number;
  disabled?: boolean;
  changeTab: (index: number) => void;
  children: ReactNode;
}

const Tab = ({ shape = 'line', index, currentIndex, disabled, changeTab, children }: TabProps) => {
  const onClick = () => changeTab(index);

  if (shape === 'line') {
    return (
      <Line onClick={onClick} disabled={disabled} shape={shape} selected={index === currentIndex}>
        {children}
      </Line>
    );
  }
  if (shape === 'contain') {
    return (
      <Contain
        onClick={onClick}
        disabled={disabled}
        shape={shape}
        selected={index === currentIndex}
      >
        {children}
      </Contain>
    );
  }
  return (
    <Vertical onClick={onClick} disabled={disabled} shape={shape} selected={index === currentIndex}>
      {children}
    </Vertical>
  );
};
export default Tab;
