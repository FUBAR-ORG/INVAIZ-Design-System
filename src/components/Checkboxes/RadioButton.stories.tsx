import type { ComponentProps } from 'react';
// types

import { Story } from '@storybook/react';
// storybook modules

import RadioButton from '@components/Checkboxes/RadioButton';
// components

export default {
  title: 'Components/Checkboxes/RadioButton',
  component: RadioButton,
};

const Template: Story<ComponentProps<typeof RadioButton>> = (props) => <RadioButton {...props} />;

export const Primary = Template.bind({});

Primary.args = {};
