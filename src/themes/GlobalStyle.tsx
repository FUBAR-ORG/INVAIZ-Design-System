import { Global, css } from '@emotion/react';

import _INVAIZ_FONT from '@theme/fonts/INVAIZ.ttf';
import _KOPUBWORLD_LIGHT_FONT from '@theme/fonts/KoPubWorldLight.ttf';
import _KOPUBWORLD_MEDIUM_FONT from '@theme/fonts/KoPubWorldMedium.ttf';
import _KOPUBWORLD_BOLD_FONT from '@theme/fonts/KoPubWorldBold.ttf';

export default function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

const globalStyle = css`
  @font-face {
    font-family: 'INVAIZ';
    font-style: normal;
    font-weight: normal;
    src: url(${_INVAIZ_FONT}) format('truetype');
  }
  @font-face {
    font-family: 'INVAIZ';
    font-style: normal;
    font-weight: 500;
    src: url(${_INVAIZ_FONT}) format('truetype');
  }
  @font-face {
    font-family: 'INVAIZ';
    font-style: normal;
    font-weight: bold;
    src: url(${_INVAIZ_FONT}) format('truetype');
  }

  @font-face {
    font-family: 'KoPubWorld';
    font-style: normal;
    font-weight: normal;
    src: url(${_KOPUBWORLD_LIGHT_FONT}) format('truetype');
  }
  @font-face {
    font-family: 'KoPubWorld';
    font-style: normal;
    font-weight: 500;
    src: url(${_KOPUBWORLD_MEDIUM_FONT}) format('truetype');
  }
  @font-face {
    font-family: 'KoPubWorld';
    font-style: normal;
    font-weight: bold;
    src: url(${_KOPUBWORLD_BOLD_FONT}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
