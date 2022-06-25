import type { IFont, IFontSize, IFontWeight, ILineHeight } from '@themes/types/font';

import { css } from '@emotion/react';

const fontSize: IFontSize = {
  size12: 12,
  size14: 14,
  size16: 16,
  size18: 18,
  size20: 20,
  size24: 24,
  size30: 30,
  size38: 38,
  size46: 46,
  size56: 56,
  size68: 68,
};

const lineHeight: ILineHeight = {
  height20: 20,
  height22: 22,
  height24: 24,
  height28: 28,
  height32: 32,
  height38: 38,
  height46: 46,
  height54: 54,
  height64: 64,
  height76: 76,
};

const fontWeight: IFontWeight = {
  light: 100,
  medium: 500,
  bold: 900,
};

const font: IFont = {
  tabTitle: css`
    font-size: ${fontSize.size20}px;
    font-weight: ${fontWeight.medium};
  `,
  categoryTitle: css`
    font-size: ${fontSize.size14}px;
    font-weight: ${fontWeight.bold};
  `,
  categorySubtitle: css`
    font-size: ${fontSize.size14}px;
    font-weight: ${fontWeight.medium};
  `,
  inBoxContentsMedium: css`
    font-size: ${fontSize.size14}px;
    font-weight: ${fontWeight.medium};
  `,
  inBoxContentsBold: css`
    font-size: ${fontSize.size14}px;
    font-weight: ${fontWeight.bold};
  `,
  subContentsMedium: css`
    font-size: ${fontSize.size12}px;
    font-weight: ${fontWeight.medium};
  `,
  subContentsBold: css`
    font-size: ${fontSize.size12}px;
    font-weight: ${fontWeight.bold};
  `,
  tabMenu: css`
    font-size: ${fontSize.size12}px;
    font-weight: ${fontWeight.medium};
  `,
  groupNumber: css`
    font-size: ${fontSize.size18}px;
    font-weight: ${fontWeight.medium};
  `,
  groupName: css`
    font-size: ${fontSize.size16}px;
    font-weight: ${fontWeight.bold};
  `,
};

export { fontSize, lineHeight, fontWeight };
export default font;
