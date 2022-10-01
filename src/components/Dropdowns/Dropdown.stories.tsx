import { Story } from '@storybook/react';
import { ComponentProps, useState } from 'react';
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

const Template: Story<ComponentProps<typeof Dropdown> & Props> = ({ itemType = 'Default' }) => {
  const [{ value }, setSelected] = useState({ value: 0, label: 'item' });
  const options = [
    { value: 0, label: 'item0' },
    { value: 1, label: 'item1' },
    { value: 2, label: 'item2' },
    { value: 3, label: 'item3' },
    { value: 4, label: 'item4' },
    { value: 5, label: 'item5' },
    { value: 6, label: 'item6' },
  ];

  const renderItem = (option: typeof options[number]) => {
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
        return <div>Not Found</div>;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Dropdown type='default' list={options} selected={value} render={renderItem} />
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
