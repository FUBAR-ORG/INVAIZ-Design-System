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
  width: 240,
  placeholder: 'Hello. Text Field',
  onClear: undefined,
  disabled: true,
};

export const Clearable = InputTemplate.bind({});
Clearable.args = { width: 240, placeholder: 'Hello. Text Field' };

export const Required = InputTemplate.bind({});
Required.args = {
  width: 240,
  placeholder: 'Hello. Text Field',
  required: true,
  onClear: undefined,
};

export const BoxAllOptions = InputTemplate.bind({});
BoxAllOptions.args = {
  width: 240,
  placeholder: 'Hello. Text Field',
  required: true,
  errorMessage: 'Hello. Error Message',
};

export const Bar = InputTemplate.bind({});
Bar.args = { type: 'bar', width: 160, placeholder: 'Hello. Text Field', onClear: undefined };

export const BarAllOptions = InputTemplate.bind({});
BarAllOptions.args = {
  type: 'bar',
  width: 160,
  placeholder: 'Hello. Text Field',
  required: true,
  errorMessage: 'Hello. Error Message',
};
