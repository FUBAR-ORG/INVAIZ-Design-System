import type { ComponentProps } from 'react';
// types

import { Story } from '@storybook/react';
// storybook modules

import FillCheckbox from '@components/Checkboxes/FillCheckbox';
// components

export default {
  title: 'Components/Checkboxes/FillCheckbox',
  component: FillCheckbox,
};

const Template: Story<ComponentProps<typeof FillCheckbox>> = (props) => <FillCheckbox {...props} />;

export const Primary = Template.bind({});

Primary.args = {};
