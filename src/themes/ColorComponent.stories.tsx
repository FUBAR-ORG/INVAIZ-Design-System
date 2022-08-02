import { Story } from '@storybook/react';
// React.js module

import ColorComponent, { ColorComponentProps } from '@themes/ColorComponent';

export default {
  title: 'Themes/Color',
  component: ColorComponent,
};

const Template: Story<ColorComponentProps> = (props) => <ColorComponent {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  colorKey: 'basic',
  theme: 'light',
};
