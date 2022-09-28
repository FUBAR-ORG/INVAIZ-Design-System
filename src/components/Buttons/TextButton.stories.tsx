import { Story } from '@storybook/react';
import TextButton from '@components/Buttons/TextButton';
import { ButtonProps } from '@components/Buttons/Button';

export default {
  title: 'Components/TextButton',
  component: TextButton,
};

const Template: Story<ButtonProps> = (props) => <TextButton {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};
