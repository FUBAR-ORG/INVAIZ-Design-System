import type { CheckboxDefaultProps } from '@components/Checkboxes/OutlineCheckbox';
// types

import { Story } from '@storybook/react';
import FillCheckbox from '@components/Checkboxes/FillCheckbox';

export default {
  title: 'Components/Checkboxes/FillCheckbox',
  component: FillCheckbox,
};

const Template: Story<CheckboxDefaultProps> = (props) => <FillCheckbox {...props} />;

export const Primary = Template.bind({});

Primary.args = {};
