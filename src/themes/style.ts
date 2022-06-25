import type { IStyle } from '@themes/types/style';

import { css } from '@emotion/react';

import { mainColor } from '@themes/color';

const style: IStyle = {
  border: {
    selected: css`
      border: solid 2px ${mainColor};
    `,
  },
  boxShadow: {
    dropdownEmphasis: css`
      box-shadow: 0px 2px 4px #00000059;
    `,
    dropdownOpen: css`
      box-shadow: 0px 4px 10px #000000bf;
    `,
  },
  fontFace: {
    kopub: css`
      font-family: 'KoPubWorld';
    `,
    invaiz: css`
      font-family: 'INVAIZ';
    `,
  },
};

export default style;
