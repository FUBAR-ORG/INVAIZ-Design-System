import type { PropsWithChildren } from 'react';
import type { EmotionTheme } from '@themes/emotion-theme';
import type { ColorTheme } from '@themes/color';
// types

import { ThemeProvider } from '@emotion/react';
// React.js module

import font, { fontSize, fontWeight, lineHeight } from '@themes/font';
import whiteSpace from '@themes/whiteSpace';
import { colorMap, lightColor, darkColor } from '@themes/color';
import style from '@themes/style';
import GlobalStyle from '@themes/GlobalStyle';

interface GlobalThemeProviderProps {
  colorTheme?: ColorTheme;
}

export default function GlobalThemeProvider({
  children,
  colorTheme = 'light',
}: PropsWithChildren<GlobalThemeProviderProps>) {
  const theme: EmotionTheme = {
    font,
    fontSize,
    lineHeight,
    fontWeight,
    whiteSpace,
    lightColor,
    darkColor,
    color: colorMap[colorTheme],
    style,
  };
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}
