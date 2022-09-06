import Dropdown from '@components/Dropdowns/Dropdown';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState(0);
  const options = [
    { value: 0, label: 'test' },
    { value: 1, label: 'test2' },
  ];
  return <Dropdown value={value} onChange={setValue} options={options} />;
}
