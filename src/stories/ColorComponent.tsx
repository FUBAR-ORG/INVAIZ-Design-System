import type { HTMLProps } from 'react';
import type { Color, ColorTheme } from '@themes/color';

import color from '@themes/color';

export interface ColorComponentProps extends HTMLProps<HTMLDivElement> {
  colorKey: keyof Color;
  theme: ColorTheme;
}

const ColorComponent = ({ colorKey, theme, ...props }: ColorComponentProps) => {
  const getColor = color[theme];
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

export default ColorComponent;
