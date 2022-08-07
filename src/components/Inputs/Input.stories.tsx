import type { ChangeEventHandler } from 'react';
import { useState } from 'react';
import { Story } from '@storybook/react';

import InputBasic, { InputBasicProps } from '@components/Inputs/InputBasic';

export default {
  title: 'Components/Input',
  component: InputBasic,
};

const Template: Story<InputBasicProps> = ({ ...args }) => {
  const [input, setInput] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  return <InputBasic value={input} onChange={onChange} {...args} />;
};

export const Box = Template.bind({});
Box.args = { boxWidth: 240, placeholder: 'input' };
