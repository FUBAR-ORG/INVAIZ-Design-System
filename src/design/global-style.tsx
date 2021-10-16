import { css, Global } from '@emotion/react';
import React from 'react';

const globalStyle = css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

export default GlobalStyle;
