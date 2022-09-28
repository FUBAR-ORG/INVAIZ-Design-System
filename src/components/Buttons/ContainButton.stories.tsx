import { Story } from '@storybook/react';
import ContainButton from '@components/Buttons/ContainButton';
import { ButtonProps } from '@components/Buttons/Button';

export default {
  title: 'Components/ContainButton',
  component: ContainButton,
};

const Template: Story<ButtonProps> = (props) => <ContainButton {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};
