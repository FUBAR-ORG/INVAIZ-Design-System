import React, { PropsWithChildren } from 'react';
import { Theme, ThemeProvider } from '@emotion/react';
import font, { fontSize, fontWeight, lineHeight } from '@theme/font';
import color from '@theme/color';
import GlobalStyle from '@theme/GlobalStyle';

export default function GlobalThemeProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}

const theme: Theme = { font, fontSize, lineHeight, fontWeight, color };
