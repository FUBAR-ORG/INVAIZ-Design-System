import { type ChangeEventHandler, useState } from 'react';
import { Story } from '@storybook/react';

import InputBox, { InputBoxProps } from '@components/Inputs/InputBox';
import InputBoxFeature, { InputBoxFeatureProps } from './InputBoxFeature';

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

const InputBoxFeatureTemplate: Story<InputBoxFeatureProps> = ({ ...args }) => {
  const [input, setInput] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  const onClear = () => setInput('');

  return <InputBoxFeature value={input} onChange={onChange} onClear={onClear} {...args} />;
};

export const Basic = InputBoxTemplate.bind({});
Basic.args = { boxWidth: 240, placeholder: 'placeholder' };

export const Disabled = InputBoxTemplate.bind({});
Disabled.args = { boxWidth: 240, placeholder: 'placeholder', disabled: true };

export const Clearable = InputBoxFeatureTemplate.bind({});
Clearable.args = { boxWidth: 240, placeholder: 'placeholder' };

export const Required = InputBoxFeatureTemplate.bind({});
Required.args = { boxWidth: 240, placeholder: 'placeholder', required: true, onClear: undefined };

export const ClearableRequired = InputBoxFeatureTemplate.bind({});
ClearableRequired.args = {
  boxWidth: 240,
  placeholder: 'placeholder',
  required: true,
};
