import type { HTMLProps } from 'react';
import type { Color, ColorTheme } from '@themes/color';
// types

import { Story } from '@storybook/react';
// React.js module

import { colorMap } from '@themes/color';
// styles

interface ColorComponentProps extends HTMLProps<HTMLDivElement> {
  colorKey: keyof Color;
  theme: ColorTheme;
}

const ColorComponent = ({ colorKey, theme, ...props }: ColorComponentProps) => {
  const getColor = colorMap[theme];
  return (
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: getColor[colorKey],
      }}
      {...props}
    />
  );
};

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
