import { Story } from '@storybook/react/types-6-0';
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

export const Example = Template.bind({});
Example.args = {
  children: 'button',
};
