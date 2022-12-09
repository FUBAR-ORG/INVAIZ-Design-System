import { useState } from 'react';
import { Story } from '@storybook/react';
import Snackbar, { SnackbarProps } from '@components/Snackbar/Snackbar';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
};

const Template: Story<SnackbarProps> = ({ ...args }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen((prev) => !prev)}>open snackbar</Button>
      <Snackbar open={open} {...args} />
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  message: 'message',
};
