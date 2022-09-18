import type { CheckboxDefaultProps } from '@components/Checkboxes/OutlineCheckbox';
// types

import { Story } from '@storybook/react';
import RadioButton from '@components/Checkboxes/RadioButton';
// components

export default {
  title: 'Components/Checkboxes/RadioButton',
  component: RadioButton,
};

const Template: Story<CheckboxDefaultProps> = (props) => <RadioButton {...props} />;

export const Primary = Template.bind({});

Primary.args = {};
