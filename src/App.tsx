import Dropdown from '@components/Dropdowns/Dropdown';
import DropdownItem from '@components/Dropdowns/DropdownItem';
import { useState } from 'react';
import SvgIcon from '@components/SvgIcons/SvgIcon';

type Option = {
  value: number;
  label: string;
};

export default function App() {
  const [{ value }, setSelected] = useState({ value: 0, label: 'test' });
  const options: Option[] = [
    { value: 0, label: 'test' },
    { value: 1, label: 'test2' },
    { value: 2, label: 'test3' },
  ];
  return (
    <div style={{ padding: '20px' }}>
      <Dropdown text='Text' type='outline'>
        {options.map((option) => (
          <DropdownItem.IconMenus
            key={option.value}
            selected={value === option.value}
            onClick={() => setSelected(option)}
            icon={<SvgIcon icon='Cancel' size={16} />}
          >
            {option.label}
          </DropdownItem.IconMenus>
        ))}
      </Dropdown>
    </div>
  );
}
