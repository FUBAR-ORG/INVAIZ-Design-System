import type { PropsWithChildren } from 'react';

import { ThemeProvider } from '@emotion/react';

import { lightColor, darkColor } from '@themes/color';
import font, { fontSize, fontWeight, lineHeight } from '@themes/font';
import style from '@themes/style';
import GlobalStyle from '@themes/GlobalStyle';

export default function GlobalThemeProvider({ children }: PropsWithChildren<unknown>) {
  const theme = {
    font,
    fontSize,
    lineHeight,
    fontWeight,
    color: lightColor,
    lightColor,
    darkColor,
    style,
  } as const;
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}
