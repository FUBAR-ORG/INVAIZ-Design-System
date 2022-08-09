import normalColor from '@themes/colors/normal-color';
import lightColor from '@themes/colors/light-color';

export const normal = normalColor;
export const light = lightColor;

export type Color = typeof normal | typeof light;

export type ColorTheme = 'normal' | 'light';

export type ColorMap = Record<ColorTheme, Color>;

export const colorMap: ColorMap = {
  normal,
  light,
};
