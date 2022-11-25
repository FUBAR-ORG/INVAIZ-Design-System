import { type ChangeEventHandler, useState } from 'react';
import { Story } from '@storybook/react';

import Input, { InputProps } from '@components/Inputs/Input';

export default {
  title: 'Components/Input',
  component: Input,
};

const InputTemplate: Story<InputProps> = ({ ...args }) => {
  const [input, setInput] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setInput(e.target.value);

  const onClear = () => setInput('');

  return <Input value={input} onChange={onChange} onClear={onClear} {...args} />;
};

export const Box = InputTemplate.bind({});
Box.args = { width: 240, placeholder: 'Hello. Text Field', onClear: undefined };

export const Disabled = InputTemplate.bind({});
Disabled.args = {
  value: 'Disabled',
  width: 240,
  placeholder: 'Hello. Text Field',
  disabled: true,
  onClear: undefined,
};

export const Clearable = InputTemplate.bind({});
Clearable.args = { width: 240, placeholder: 'Hello. Text Field' };

export const Required = InputTemplate.bind({});
Required.args = {
  width: 240,
  placeholder: 'Hello. Text Field',
  onClear: undefined,
  required: true,
};

export const ErrorMessage = InputTemplate.bind({});
ErrorMessage.args = {
  width: 240,
  placeholder: 'Hello. Text Field',
  onClear: undefined,
  required: true,
  errorMessage: 'Hello, Error Message',
};

export const BoxClearableRequired = InputTemplate.bind({});
BoxClearableRequired.args = {
  width: 240,
  placeholder: 'Hello. Text Field',
  required: true,
  errorMessage: 'Hello. Error Message',
};

export const BarClearableRequired = InputTemplate.bind({});
BarClearableRequired.args = {
  shape: 'bar',
  width: 160,
  placeholder: 'Hello. Text Field',
  required: true,
  errorMessage: 'Hello. Error Message',
};
