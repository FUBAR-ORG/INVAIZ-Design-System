import Tabs from '@components/Tabs/Tabs';
import { Story } from '@storybook/react';
import TabGlider from '@components/Tabs/TabGlider';
import Tab from '@components/Tabs/Tab';
import { useState } from 'react';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

interface ITemplate {
  tabsLength: number;
}

const Template: Story<ITemplate> = ({ tabsLength, ...args }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabsForStory = Array.from({ length: tabsLength }, (el, i: number) => ({
    title: `Tab ${i + 1}`,
    value: i + 1,
  }));

  return (
    <Tabs tabs={tabsForStory} {...args}>
      {tabsForStory.map((tab, i) => (
        <Tab key={tab.title} onClick={() => setCurrentIndex(i)} title={tab.title} value={tab.value}>
          {tab.title}
        </Tab>
      ))}
      <TabGlider currentIndex={currentIndex} />
    </Tabs>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  tabsLength: 3,
};
