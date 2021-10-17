import { Global, css } from '@emotion/react';

export default function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

const globalStyle = css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0;
  }
`;
