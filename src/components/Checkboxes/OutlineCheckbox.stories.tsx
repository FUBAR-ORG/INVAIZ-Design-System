import { Story } from '@storybook/react';
import OutlineCheckbox, { OutlineCheckboxProps } from '@components/Checkboxes/OutlineCheckbox';

export default {
  title: 'Components/Checkboxes/OutlineCheckbox',
  component: OutlineCheckbox,
};

const Template: Story<OutlineCheckboxProps> = (props) => <OutlineCheckbox {...props} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Please enter you text here.',
};
