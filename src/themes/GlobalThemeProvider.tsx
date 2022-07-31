import type { PropsWithChildren } from 'react';
import type { ColorTheme } from '@themes/color';

import { ThemeProvider } from '@emotion/react';

import color from '@themes/color';
import font, { fontSize, fontWeight, lineHeight } from '@themes/font';
import style from '@themes/style';
import GlobalStyle from '@themes/GlobalStyle';

export default function GlobalThemeProvider({
  children,
  colorTheme,
}: PropsWithChildren<{ colorTheme: ColorTheme }>) {
  const theme = {
    font,
    fontSize,
    lineHeight,
    fontWeight,
    color: color[colorTheme],
    style,
  } as const;
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}
