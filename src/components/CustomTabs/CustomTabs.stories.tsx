import { Story } from '@storybook/react';
import { useArgs } from '@storybook/addons';
import CustomTabs, { Props as CustomTabsProps } from './CustomTabs';

export default {
  title: 'Components/CustomTabs',
  component: CustomTabs,
  args: {
    activeIndex: 0,
  },
};

const TABS = ['전체 보기 탭 메뉴', '다이얼', '버튼'];

const Template: Story<CustomTabsProps> = ({ ...args }) => {
  const [{ activeIndex }, updateArgs] = useArgs();

  const handleChange = (value: number) => {
    updateArgs({ activeIndex: value });
  };

  return (
    <CustomTabs {...args} activeIndex={activeIndex} onChange={handleChange}>
      {TABS.map((tab, i) => (
        <CustomTabs.Tab key={tab} index={i}>
          {tab}
        </CustomTabs.Tab>
      ))}
    </CustomTabs>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  activeIndex: 0,
};
