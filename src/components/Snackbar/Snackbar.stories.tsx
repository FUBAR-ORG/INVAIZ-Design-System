import { Story } from '@storybook/react';
import Snackbar, { SnackbarProps } from '@components/Snackbar/Snackbar';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
};

const Template: Story<SnackbarProps> = ({ ...args }) => <Snackbar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'test',
  variant: 'error',
};
