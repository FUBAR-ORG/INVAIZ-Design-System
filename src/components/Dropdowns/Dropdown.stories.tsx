import Tabs from '@components/Tabs/Tabs';
import { Story } from '@storybook/react';
import { useState } from 'react';
import Dropdown from '@components/Dropdowns/Dropdown';
import DropdownItem from '@components/Dropdowns/DropdownItem';

export default {
  title: 'Components/Dropdown',
  component: Tabs,
};

const Template: Story = () => {
  const [{ value, label }, setSelected] = useState({ value: 0, label: 'test' });
  const options = [
    { value: 0, label: 'test0' },
    { value: 1, label: 'test1' },
    { value: 2, label: 'test2' },
    { value: 3, label: 'test3' },
    { value: 4, label: 'test4' },
    { value: 5, label: 'test5' },
    { value: 6, label: 'test6' },
  ];
  return (
    <div style={{ padding: '20px' }}>
      <Dropdown text={label} type='outline'>
        {options.map((option) => (
          <DropdownItem.Default
            key={option.value}
            selected={value === option.value}
            onClick={() => setSelected(option)}
          >
            {option.label}
          </DropdownItem.Default>
        ))}
      </Dropdown>
    </div>
  );
};

export const Primary = Template.bind({});
