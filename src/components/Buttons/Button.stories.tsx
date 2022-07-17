import { Story } from '@storybook/react';
import Button, { ButtonProps } from '@components/Buttons/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template: Story<ButtonProps> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'button',
};
