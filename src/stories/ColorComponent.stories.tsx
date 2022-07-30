import { Story } from '@storybook/react';
import ColorComponent, { ColorComponentProps } from './ColorComponent';

export default {
  title: 'Themes/Color',
  component: ColorComponent,
};

const Template: Story<ColorComponentProps> = (props) => <ColorComponent {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  colorKey: 'background',
  theme: 'light',
};
