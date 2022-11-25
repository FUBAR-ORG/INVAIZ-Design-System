import { type ChangeEventHandler, useRef, useState, useEffect } from 'react';

import Input from '@components/Inputs/Input';

export default function App() {
  const [input, setInput] = useState('');

  const ref = useRef<HTMLInputElement | null>(null);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setInput(e.target.value);

  const onClear = () => setInput('');

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <Input
      ref={ref}
      width={240}
      placeholder='Hello. Text Field'
      value={input}
      onChange={onChange}
      onClear={onClear}
      required
    />
  );
}
