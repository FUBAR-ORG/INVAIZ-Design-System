import { Story } from '@storybook/react';
import Tabs, { Props as TabsProps } from './Tabs';
import CustomTabs from './CustomTabs/CustomTabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const TABS = ['전체 보기 탭 메뉴', '다이얼', '버튼'];

const Template: Story<TabsProps> = ({ tabs, ...args }) => <Tabs tabs={tabs} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabs: TABS,
};

const CustomTabsTemplate: Story<TabsProps> = ({ tabs, ...args }) => (
  <CustomTabs tabs={tabs} {...args} />
);

export const Custom = CustomTabsTemplate.bind({});
Custom.args = {
  tabs: TABS,
};

Custom.storyName = 'Custom Tabs';
