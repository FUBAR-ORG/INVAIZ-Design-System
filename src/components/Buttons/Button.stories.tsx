import { Story } from '@storybook/react';
import ContainButton from '@components/Buttons/ContainButton';
import OutlineButton from '@components/Buttons/OutlineButton';
import TextButton from '@components/Buttons/TextButton';
import { ButtonProps } from '@components/Buttons/Button';
import { SvgIconProps } from '@components/SvgIcons/SvgIcon';

export default {
  title: 'Components/Button',
  component: TextButton,
};

const TextButtonTemplate: Story<ButtonProps> = (props) => <TextButton {...props} />;

export const Text = TextButtonTemplate.bind({});

Text.args = {
  children: 'Button',
};

const ContainButtonTemplate: Story<ButtonProps> = (props) => <ContainButton {...props} />;

export const Contain = ContainButtonTemplate.bind({});

Contain.args = {
  children: 'Button',
};

const OutlineButtonTemplate: Story<ButtonProps> = (props) => <OutlineButton {...props} />;

export const Outline = OutlineButtonTemplate.bind({});

Outline.args = {
  children: 'Button',
};
