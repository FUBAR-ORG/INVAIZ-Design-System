import type { ComponentProps } from 'react';
import type { Story } from '@storybook/react';
// types

import OutlineCheckbox from '@components/Checkboxes/OutlineCheckbox';
// components

export default {
  title: 'Components/Checkboxes/OutlineCheckbox',
  component: OutlineCheckbox,
};

export const Template: Story<ComponentProps<typeof OutlineCheckbox>> = (props) => (
  <OutlineCheckbox {...props} />
);
Template.args = {
  text: 'You can control to OutlineCheckbox',
};
Template.storyName = 'Playground';

export const All = () => (
  <>
    <OutlineCheckbox text='' checked={false} />
    <OutlineCheckbox text='' checked />
    <OutlineCheckbox text='' checked={false} disabled />
    <OutlineCheckbox text='' checked disabled />
    <OutlineCheckbox text='Please enter you text here.' />
    <OutlineCheckbox text='Jump out the window. if you are the object of passion. Flee it if you feel it. Passion goes, boredom remains' />
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

export const TextOneLine = Template.bind({});
TextOneLine.args = {
  text: 'Please enter you text here.',
};

export const TextMultiLine = Template.bind({});
TextMultiLine.args = {
  text: 'Jump out the window. if you are the object of passion. Flee it if you feel it. Passion goes, boredom remains',
};
