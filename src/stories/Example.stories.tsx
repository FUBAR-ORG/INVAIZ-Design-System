import Component, { ComponentProps } from "./Example";
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'Component',
  component: Component
}

const Template:Story<ComponentProps> = (args) => <Component {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: 'Example Component'
}

