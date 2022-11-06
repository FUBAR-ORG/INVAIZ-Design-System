import { type ChangeEventHandler, useState } from 'react';
import { Story } from '@storybook/react';

import InputBar, { InputProps } from '@components/Inputs/Input';

export default {
  title: 'Components/Input',
  component: InputBar,
};

const InputTemplate: Story<InputProps> = ({ ...args }) => {
  const [input, setInput] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setInput(e.target.value);

  return <InputBar value={input} onChange={onChange} {...args} />;
};

export const Box = InputTemplate.bind({});
Box.args = { width: 240, placeholder: 'Hello. Text Field' };
