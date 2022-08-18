import { Story } from '@storybook/react';
import Checkbox, { CheckboxProps } from '@components/Checkboxes/Checkbox';

export default {
  title: 'Components/Checkboxes/Checkbox',
  component: Checkbox,
};

const Template: Story<CheckboxProps> = (props) => <Checkbox {...props} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Please enter you text here.',
};
