import { Story } from '@storybook/react';
import Toggle, { ToggleProps } from '@components/Toggles/Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
};

const Template: Story<ToggleProps> = (props) => <Toggle {...props} />;

export const Primary = Template.bind({});
Primary.args = {};
