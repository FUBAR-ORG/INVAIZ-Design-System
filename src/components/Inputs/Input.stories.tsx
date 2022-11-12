import { useState } from 'react';
import { Story } from '@storybook/react';

import Input, { InputProps } from '@components/Inputs/Input';

export default {
  title: 'Components/Input',
  component: Input,
};

const InputTemplate: Story<InputProps> = ({ ...args }) => {
  const [input, setInput] = useState('');

  const onChange = (value: string) => setInput(value);

  return <Input value={input} onChange={onChange} {...args} />;
};

export const Box = InputTemplate.bind({});
Box.args = { width: 240, placeholder: 'Hello. Text Field' };

export const Disabled = InputTemplate.bind({});
Disabled.args = {
  width: 240,
  placeholder: 'Hello. Text Field',
  disabled: true,
};

export const Clearable = InputTemplate.bind({});
Clearable.args = { width: 240, placeholder: 'Hello. Text Field', clearable: true };

export const Required = InputTemplate.bind({});
Required.args = {
  width: 240,
  placeholder: 'Hello. Text Field',
  required: true,
};

export const BoxAllOptions = InputTemplate.bind({});
BoxAllOptions.args = {
  width: 240,
  placeholder: 'Hello. Text Field',
  clearable: true,
  required: true,
  errorMessage: 'Hello. Error Message',
};

export const Bar = InputTemplate.bind({});
Bar.args = { shape: 'bar', width: 160, placeholder: 'Hello. Text Field' };

export const BarAllOptions = InputTemplate.bind({});
BarAllOptions.args = {
  shape: 'bar',
  width: 160,
  placeholder: 'Hello. Text Field',
  clearable: true,
  required: true,
  errorMessage: 'Hello. Error Message',
};
