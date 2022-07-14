import type { IStyle } from '@themes/types/style';

import { css } from '@emotion/react';

import { point1Color } from '@themes/color';

const style: IStyle = {
  border: {
    selected: css`
      border: solid 2px ${point1Color};
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
    invaiz: css`
      font-family: 'INVAIZ';
    `,
    kopub: css`
      font-family: 'KoPubWorld';
    `,
    notoSans: css`
      font-family: 'Noto Sans', 'Inter';
    `,
  },
};

export default style;
