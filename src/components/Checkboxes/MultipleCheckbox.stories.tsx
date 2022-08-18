import type { CheckboxDefaultProps } from '@components/Checkboxes/Checkbox';
// types

import { Story } from '@storybook/react';
import MultipleCheckbox from '@components/Checkboxes/MultipleCheckbox';

export default {
  title: 'Components/Checkboxes/MultipleCheckbox',
  component: MultipleCheckbox,
};

const Template: Story<CheckboxDefaultProps> = (props) => <MultipleCheckbox {...props} />;

export const Primary = Template.bind({});

Primary.args = {};
