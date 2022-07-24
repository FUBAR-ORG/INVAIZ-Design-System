import { Story } from '@storybook/react';
import SvgIcon, { SvgIconProps } from '@components/SvgIcon/SvgIcon';

export default {
  title: 'Components/SvgIcon',
  component: SvgIcon,
};

const Template: Story<SvgIconProps> = (props) => <SvgIcon {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: 'Add',
};
