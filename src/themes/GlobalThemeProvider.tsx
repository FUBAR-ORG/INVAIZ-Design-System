import type { PropsWithChildren } from 'react';
import type { EmotionTheme } from '@themes/emotion-theme';
import type { ColorTheme } from '@themes/colors/color';
// types

import { ThemeProvider } from '@emotion/react';
// React.js module

import font, { fontSize, fontWeight, lineHeight } from '@themes/font';
import { colorMap, normal, light } from '@themes/colors/color';
import style from '@themes/style';
import GlobalStyle from '@themes/GlobalStyle';

interface GlobalThemeProviderProps {
  colorTheme?: ColorTheme;
}

export default function GlobalThemeProvider({
  children,
  colorTheme = 'normal',
}: PropsWithChildren<GlobalThemeProviderProps>) {
  const theme: EmotionTheme = {
    normal,
    light,

    color: colorMap[colorTheme],

    font,
    fontSize,
    lineHeight,
    fontWeight,

    style,
  };
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}
