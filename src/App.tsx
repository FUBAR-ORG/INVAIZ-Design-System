import Dropdown from '@components/Dropdowns/Dropdown';
import DropdownItem from '@components/Dropdowns/DropdownItem';
import { useState } from 'react';

type Option = {
  value: number;
  label: string;
};

export default function App() {
  const [{ value, label }, setSelected] = useState({ value: 0, label: 'test' });
  const options: Option[] = [
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
      <Dropdown text={label} type='default'>
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
}
