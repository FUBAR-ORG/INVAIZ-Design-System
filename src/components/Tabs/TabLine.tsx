import { TabProps } from '@components/Tabs/interface';

import { Line } from '@components/Tabs/Tab.style';

const TabLine = ({ index, currentIndex, disabled, changeTab, children }: TabProps) => {
  const onClick = () => changeTab(index);

  return (
    <Line onClick={onClick} disabled={disabled} selected={index === currentIndex}>
      {children}
    </Line>
  );
};

export default TabLine;
