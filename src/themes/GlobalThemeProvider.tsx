import type { PropsWithChildren } from 'react';

import { Theme, ThemeProvider } from '@emotion/react';

import color from '@theme/color';
import font, { fontSize, fontWeight, lineHeight } from '@theme/font';
import style from '@theme/style';
import GlobalStyle from '@theme/GlobalStyle';

export default function GlobalThemeProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}

const theme: Theme = { font, fontSize, lineHeight, fontWeight, color, style };
