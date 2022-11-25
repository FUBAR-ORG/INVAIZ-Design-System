import { type ChangeEventHandler, useState } from 'react';

import Input from '@components/Inputs/Input';

export default function App() {
  const [input, setInput] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setInput(e.target.value);

  const onClear = () => setInput('');

  return (
    <Input
      width={240}
      placeholder='Hello. Text Field'
      value={input}
      onChange={onChange}
      onClear={onClear}
      required
    />
  );
}
