import { TabProps } from '@components/Tabs/interface';

import { Vertical } from '@components/Tabs/Tab.style';

const TabVertical = ({ index, currentIndex, disabled, changeTab, children }: TabProps) => {
  const onClick = () => changeTab(index);

  return (
    <Vertical onClick={onClick} disabled={disabled} selected={index === currentIndex}>
      {children}
    </Vertical>
  );
};

export default TabVertical;
