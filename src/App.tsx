import Dropdown from '@components/Dropdowns/Dropdown';
import { useState } from 'react';

type Option = {
  value: number;
  label: string;
};

export default function App() {
  const [selectedValue, setSelectedValue] = useState(0);
  const options: Option[] = [
    { value: 0, label: 'test' },
    { value: 1, label: 'test2' },
  ];
  return (
    <Dropdown
      selected={selectedValue}
      onChange={(selected) => setSelectedValue(selected.value)}
      options={options}
    />
  );
}
