import type { PropsWithChildren } from 'react';

import { ThemeProvider } from '@emotion/react';

import color from '@themes/color';
import font, { fontSize, fontWeight, lineHeight } from '@themes/font';
import style from '@themes/style';
import GlobalStyle from '@themes/GlobalStyle';

export default function GlobalThemeProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}

const theme = { font, fontSize, lineHeight, fontWeight, color, style } as const;
