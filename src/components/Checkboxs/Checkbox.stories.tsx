import { Story } from '@storybook/react';
import Checkbox, { CheckboxProps } from '@components/Checkboxs/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const Template: Story<CheckboxProps> = (props) => <Checkbox {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Please enter you text here.',
};
