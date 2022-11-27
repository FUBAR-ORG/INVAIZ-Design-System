import type { ComponentProps } from 'react';
import type { Story } from '@storybook/react';
// types

import FillCheckbox from '@components/Checkboxes/FillCheckbox';
// components

export default {
  title: 'Components/Checkboxes/FillCheckbox',
  component: FillCheckbox,
};

export const Template: Story<ComponentProps<typeof FillCheckbox>> = (props) => (
  <FillCheckbox {...props} />
);
Template.storyName = 'Playground';

export const All = () => (
  <>
    <FillCheckbox checked={false} />
    <FillCheckbox checked />
    <FillCheckbox checked={false} disabled />
    <FillCheckbox checked disabled />
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
