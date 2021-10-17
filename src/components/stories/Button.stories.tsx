import { Story } from '@storybook/react';
import Button from '@components/Button';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template: Story<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({
  children,
  ...args
}) => <Button {...args}>{children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'button',
};
