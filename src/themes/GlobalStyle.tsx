import { Global, css } from '@emotion/react';

// import _INVAIZ_FONT from '@assets/fonts/INVAIZ.ttf';
// import _KOPUBWORLD_LIGHT_FONT from '@assets/fonts/KoPubWorldLight.ttf';
// import _KOPUBWORLD_MEDIUM_FONT from '@assets/fonts/KoPubWorldMedium.ttf';
// import _KOPUBWORLD_BOLD_FONT from '@assets/fonts/KoPubWorldBold.ttf';

export default function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

/*
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
  */
const globalStyle = css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
