import { Story } from '@storybook/react';
import MultipleCheckbox, { MultipleCheckboxProps } from '@components/Checkboxes/MultipleCheckbox';

export default {
  title: 'Components/Checkboxes/MultipleCheckbox',
  component: MultipleCheckbox,
};

const Template: Story<MultipleCheckboxProps> = (props) => <MultipleCheckbox {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  locked: false,
};
