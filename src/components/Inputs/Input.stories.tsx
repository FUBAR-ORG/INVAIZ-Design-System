import { type ChangeEventHandler, useState } from 'react';
import { Story } from '@storybook/react';

import InputBox, { InputBoxProps } from '@components/Inputs/InputBox';

export default {
  title: 'Components/Input/Box',
  component: InputBox,
};

const InputBoxTemplate: Story<InputBoxProps> = ({ ...args }) => {
  const [input, setInput] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  return <InputBox value={input} onChange={onChange} {...args} />;
};

export const Basic = InputBoxTemplate.bind({});
Basic.args = { boxWidth: 240, placeholder: 'placeholder' };
