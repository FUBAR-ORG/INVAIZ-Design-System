import { TabProps } from '@components/Tabs/interface';

import { Contain } from '@components/Tabs/Tab.style';

const TabContain = ({ index, currentIndex, disabled, changeTab, children }: TabProps) => {
  const onClick = () => changeTab(index);

  return (
    <Contain onClick={onClick} disabled={disabled} selected={index === currentIndex}>
      {children}
    </Contain>
  );
};

export default TabContain;
