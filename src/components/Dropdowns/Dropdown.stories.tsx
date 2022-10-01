import { Story } from '@storybook/react';
import { useState } from 'react';
import Dropdown from '@components/Dropdowns/Dropdown';
import DropdownItem from '@components/Dropdowns/DropdownItem';
import SvgIcon from '@components/SvgIcons/SvgIcon';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

interface Props {
  itemType: keyof typeof DropdownItem;
}

const Template: Story<Props> = ({ itemType = 'Default' }) => {
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
        {options.map((option) => {
          switch (itemType) {
            case 'Default':
              return (
                <DropdownItem.Default
                  key={option.value}
                  selected={value === option.value}
                  onClick={() => setSelected(option)}
                >
                  {option.label}
                </DropdownItem.Default>
              );
            case 'IconMenus':
              return (
                <DropdownItem.IconMenus
                  icon={<SvgIcon icon='Web' />}
                  key={option.value}
                  selected={value === option.value}
                  onClick={() => setSelected(option)}
                >
                  {option.label}
                </DropdownItem.IconMenus>
              );
            case 'OnlyIcon':
              return (
                <DropdownItem.OnlyIcon
                  icon={<SvgIcon icon='Web' />}
                  key={option.value}
                  selected={value === option.value}
                  onClick={() => setSelected(option)}
                />
              );
            default:
              return null;
          }
        })}
      </Dropdown>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  itemType: 'Default',
};

export const IconMenus = Template.bind({});
IconMenus.args = {
  itemType: 'IconMenus',
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  itemType: 'OnlyIcon',
};
