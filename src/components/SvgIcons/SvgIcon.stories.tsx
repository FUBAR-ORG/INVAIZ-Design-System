import { Story } from '@storybook/react';
import SvgIcon, { SvgIconProps } from '@components/SvgIcons/SvgIcon';

export default {
  title: 'Components/SvgIcons',
  component: SvgIcon,
};

const Template: Story<SvgIconProps> = (props) => <SvgIcon {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: 'Add',
};
