import type { Color, ColorTheme } from '@themes/color';
// types

import { colorMap } from '@themes/color';
// styles

export interface ColorComponentProps {
  colorKey: keyof Color;
  theme: ColorTheme;
}

const ColorComponent = ({ colorKey, theme }: ColorComponentProps) => {
  const getColor = colorMap[theme];
  return (
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: getColor[colorKey],
      }}
    />
  );
};

export default ColorComponent;
