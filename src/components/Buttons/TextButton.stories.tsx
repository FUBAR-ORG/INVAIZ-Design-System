import { Story } from '@storybook/react';
import TextButton, { TextButtonProps } from '@components/Buttons/TextButton';

export default {
  title: 'Components/TextButton',
  component: TextButton,
};

const Template: Story<TextButtonProps> = (props) => <TextButton {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  children: 'button',
};
