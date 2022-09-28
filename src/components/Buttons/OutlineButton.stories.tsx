import { Story } from '@storybook/react';
import OutlineButton from '@components/Buttons/OutlineButton';
import { ButtonProps } from '@components/Buttons/Button';

export default {
  title: 'Components/OutlineButton',
  component: OutlineButton,
};

const Template: Story<ButtonProps> = (props) => <OutlineButton {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};
