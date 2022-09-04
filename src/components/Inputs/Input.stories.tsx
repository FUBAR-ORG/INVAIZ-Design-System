import type { ChangeEventHandler } from 'react';
import { useState } from 'react';
import { Story } from '@storybook/react';

import InputBox, { InputBoxProps } from '@components/Inputs/InputBox';

export default {
  title: 'Components/Input/Box',
  component: InputBox,
};

const Template: Story<InputBoxProps> = ({ ...args }) => {
  const [input, setInput] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  return <InputBox value={input} onChange={onChange} {...args} />;
};

export const Basic = Template.bind({});
Basic.args = { boxWidth: 240, placeholder: 'placeholder' };

export const Disabled = Template.bind({});
Disabled.args = { boxWidth: 240, placeholder: 'placeholder', disabled: true };

export const Clearable = Template.bind({});
Clearable.args = { boxWidth: 240, placeholder: 'placeholder', clearable: true };

export const Required = Template.bind({});
Required.args = { boxWidth: 240, placeholder: 'placeholder', required: true };
