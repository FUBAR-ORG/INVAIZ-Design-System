import { type ChangeEventHandler, useState } from 'react';
import { Story } from '@storybook/react';

import InputBar, { InputBarProps } from '@components/Inputs/InputBar';
import InputBarFeature, { InputBarFeatureProps } from '@components/Inputs/InputBarFeature';

export default {
  title: 'Components/Input/Bar',
  component: InputBar,
};

const InputBarTemplate: Story<InputBarProps> = ({ ...args }) => {
  const [input, setInput] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  return <InputBar value={input} onChange={onChange} {...args} />;
};

const InputBarFeatureTemplate: Story<InputBarFeatureProps> = ({ ...args }) => {
  const [input, setInput] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  const onClear = () => setInput('');

  return <InputBarFeature value={input} onChange={onChange} onClear={onClear} {...args} />;
};

export const Basic = InputBarTemplate.bind({});
Basic.args = { barWidth: 160, placeholder: 'placeholder' };

export const Disabled = InputBarTemplate.bind({});
Disabled.args = { barWidth: 160, placeholder: 'placeholder', disabled: true };

export const Clearable = InputBarFeatureTemplate.bind({});
Clearable.args = { barWidth: 160, placeholder: 'placeholder' };

export const Required = InputBarFeatureTemplate.bind({});
Required.args = { barWidth: 160, placeholder: 'placeholder', required: true, onClear: undefined };

export const ClearableRequired = InputBarFeatureTemplate.bind({});
ClearableRequired.args = {
  barWidth: 160,
  placeholder: 'placeholder',
  required: true,
};
