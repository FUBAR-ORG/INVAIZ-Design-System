import Dropdown from '@components/Dropdowns/Dropdown';
import { useState } from 'react';

type Option = {
  value: number;
  label: string;
};

export default function App() {
  const [selected, setSelected] = useState(0);
  const options: Option[] = [
    { value: 0, label: 'test' },
    { value: 1, label: 'test2' },
  ];
  return (
    <Dropdown selected={selected}>
      {options.map((option) => (
        <Dropdown.Item
          key={option.value}
          selected={selected === option.value}
          onClick={() => setSelected(option.value)}
        >
          {option.label}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}
