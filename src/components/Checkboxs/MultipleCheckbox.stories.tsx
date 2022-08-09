import { Story } from '@storybook/react';
import MultipleCheckbox, { MultipleCheckboxProps } from '@components/Checkboxs/MultipleCheckbox';

export default {
  title: 'Components/Checkbox/MultipleCheckbox',
  component: MultipleCheckbox,
};

const Template: Story<MultipleCheckboxProps> = (props) => <MultipleCheckbox {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  locked: false,
};
