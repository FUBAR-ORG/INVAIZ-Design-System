import { Story } from '@storybook/react';
import TextField, { TextFieldProps } from '@components/TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
};

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  scale: 'normal',
  placeholder: 'Type something here...',
  fontSize: 'normal',
  fullWidth: false,
};

export const Password = Template.bind({});
Password.args = {
  scale: 'normal',
  placeholder: 'Type something here...',
  fontSize: 'normal',
  fullWidth: false,
  password: true,
};

export const Large = Template.bind({});
Large.args = {
  scale: 'large',
  placeholder: 'Type something here...',
  fontSize: 'large',
  fullWidth: false,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  scale: 'normal',
  placeholder: 'Type something here...',
  fontSize: 'normal',
  fullWidth: true,
};

export const Active = Template.bind({});
Active.args = {
  scale: 'normal',
  placeholder: 'is typing something now ...',
  fontSize: 'normal',
  fullWidth: false,
  active: true,
};
