import type { CheckboxDefaultProps } from '@components/Checkboxes/Checkbox';
// types

import { Story } from '@storybook/react';
import Toggle from '@components/Toggles/Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
};

const Template: Story<CheckboxDefaultProps> = (props) => <Toggle {...props} />;

export const Primary = Template.bind({});

Primary.args = {};
