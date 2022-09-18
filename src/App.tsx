import Dropdown from '@components/Dropdowns/Dropdown';
import { useState } from 'react';

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
          <Dropdown.Item
            key={option.value}
            selected={value === option.value}
            onClick={() => setSelected(option)}
          >
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
}
