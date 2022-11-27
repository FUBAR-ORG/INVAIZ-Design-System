import type { ComponentProps } from 'react';
import type { Story } from '@storybook/react';
// types

import RadioButton from '@components/Checkboxes/RadioButton';
// components

export default {
  title: 'Components/Checkboxes/RadioButton',
  component: RadioButton,
};

export const Template: Story<ComponentProps<typeof RadioButton>> = (props) => (
  <RadioButton {...props} />
);
Template.storyName = 'Playground';

export const All = () => (
  <>
    <RadioButton checked={false} />
    <RadioButton checked />
    <RadioButton checked={false} disabled />
    <RadioButton checked disabled />
  </>
);

export const Unchecked = Template.bind({});
Unchecked.args = { checked: false };

export const Checked = Template.bind({});
Checked.args = { checked: true };

export const UncheckedDisabled = Template.bind({});
UncheckedDisabled.args = { disabled: true };

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = { checked: true, disabled: true };
