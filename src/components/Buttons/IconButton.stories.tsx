import { Story } from '@storybook/react';
import IconButton, { IconButtonProps } from '@components/Buttons/IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
};

const Template: Story<IconButtonProps> = (props) => <IconButton {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: 'Add',
};
