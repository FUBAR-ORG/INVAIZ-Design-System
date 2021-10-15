import { Story } from '@storybook/react/types-6-0';
import Component, { ComponentProps } from './Example';

export default {
  title: 'Component',
  component: Component,
};

const Template:Story<ComponentProps> = (args) => <Component {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: 'Example Component',
};
