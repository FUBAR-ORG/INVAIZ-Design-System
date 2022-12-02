import { type ChangeEventHandler, useRef, useState, useEffect } from 'react';

import Input from '@components/Inputs/Input';
import Button from '@components/Buttons/Button';

export default function App() {
  const [input, setInput] = useState('');
  const [submit, setSubmit] = useState(false);

  const ref = useRef<HTMLInputElement | null>(null);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setInput(e.target.value);

  const onClear = () => setInput('');

  const onSubmit = () => setSubmit(true);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
      }}
    >
      <Input
        ref={ref}
        width={240}
        placeholder='Hello, Text Field.'
        errorMessage='required'
        value={input}
        onChange={onChange}
        onClear={onClear}
        required={submit && !input}
      />

      <Button style={{ background: '#0066ff', marginTop: 30 }} onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
}
