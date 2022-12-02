import { Story } from '@storybook/react';
import Snackbar, { SnackbarProps } from '@components/Snackbar/Snackbar';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
};

const Template: Story<SnackbarProps> = ({ children, ...args }) => (
  <Snackbar {...args}>{children}</Snackbar>
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'message',
  variant: 'default',
  open: true,
};
