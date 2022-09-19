import type { ComponentProps } from 'react';
// types

import { Story } from '@storybook/react';
// storybook modules

import OutlineCheckbox from '@components/Checkboxes/OutlineCheckbox';
// components

export default {
  title: 'Components/Checkboxes/OutlineCheckbox',
  component: OutlineCheckbox,
};

const Template: Story<ComponentProps<typeof OutlineCheckbox>> = (props) => (
  <OutlineCheckbox {...props} />
);

export const Primary = Template.bind({});

Primary.args = {
  text: 'Please enter you text here.',
};
