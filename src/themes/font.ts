import type { IFont, IFontSize, IFontWeight, ILineHeight } from '@themes/types/font';

import { css } from '@emotion/react';

import mediaQuery from '@themes/media';

const setFontUnit = (unit: number) =>
  css`
    font-size: ${unit}px;
  `;

const fontSize: IFontSize = {
  size64: 64,
  size48: 48,
  size40: 40,
  size32: 32,
  size28: 28,
  size24: 24,
  size20: 20,
  size18: 18,
  size16: 16,
  size14: 14,
  size12: 12,
  size10: 10,
  size8: 8,
};

const lineHeight: ILineHeight = {
  height40: 40,
  height32: 32,
  height26: 26,
  height22: 22,
  height18: 18,
  height14: 14,
  height11: 11,
};

const fontWeight: IFontWeight = {
  light: 100,
  regular: 300,
  medium: 500,
  semiBold: 700,
  bold: 900,
};

const font: IFont = {
  invaiz: {
    title1: setFontUnit(fontSize.size64),
    title2: setFontUnit(fontSize.size40),
    title3: setFontUnit(fontSize.size32),
    title4: setFontUnit(fontSize.size24),
    title5: setFontUnit(fontSize.size20),
  },
  kopub: {
    title1: css`
      ${setFontUnit(fontSize.size48)}
      font-weight: ${fontWeight.bold};
      ${mediaQuery.tablet} {
        ${setFontUnit(fontSize.size32)}
      }
      ${mediaQuery.mobile} {
        ${setFontUnit(fontSize.size24)}
      }
    `,
    title2: css`
      ${setFontUnit(fontSize.size40)}
      font-weight: ${fontWeight.bold};
      ${mediaQuery.tablet} {
        ${setFontUnit(fontSize.size20)}
      }
    `,
    title3: css`
      ${setFontUnit(fontSize.size32)}
      font-weight: ${fontWeight.bold};
      ${mediaQuery.tablet} {
        ${setFontUnit(fontSize.size18)}
        font-weight: ${fontWeight.medium};
      }
    `,
    subT1: css`
      ${setFontUnit(fontSize.size24)}
      font-weight: ${fontWeight.bold};
      ${mediaQuery.tablet} {
        ${setFontUnit(fontSize.size16)}
      }
      ${mediaQuery.mobile} {
        ${setFontUnit(fontSize.size20)}
      }
    `,
    subT2: css`
      ${setFontUnit(fontSize.size24)}
      font-weight: ${fontWeight.medium};
      ${mediaQuery.tablet} {
        ${setFontUnit(fontSize.size14)}
        font-weight: ${fontWeight.bold};
      }
      ${mediaQuery.mobile} {
        ${setFontUnit(fontSize.size20)}
      }
    `,
    subT3: css`
      ${setFontUnit(fontSize.size20)}
      font-weight: ${fontWeight.bold};
      ${mediaQuery.tablet} {
        ${setFontUnit(fontSize.size14)}
        font-weight: ${fontWeight.medium};
      }
      ${mediaQuery.mobile} {
        ${setFontUnit(fontSize.size16)}
        font-weight: ${fontWeight.bold};
      }
    `,
    contents1: css`
      ${setFontUnit(fontSize.size24)}
      font-weight: ${fontWeight.medium};
      ${mediaQuery.tablet} {
        ${setFontUnit(fontSize.size16)}
        font-weight: ${fontWeight.bold};
      }
    `,
    contents2: css`
      ${setFontUnit(fontSize.size20)}
      font-weight: ${fontWeight.medium};
      ${mediaQuery.tablet} {
        ${setFontUnit(fontSize.size16)};
      }
    `,
    contents3: css`
      ${setFontUnit(fontSize.size16)}
      font-weight: ${fontWeight.bold};
      ${mediaQuery.tablet} {
        font-weight: ${fontWeight.light};
      }
      ${mediaQuery.mobile} {
        font-weight: ${fontWeight.medium};
      }
    `,
    contents4: css`
      ${setFontUnit(fontSize.size16)}
      font-weight: ${fontWeight.medium};
      ${mediaQuery.tablet} {
        ${setFontUnit(fontSize.size14)}
        font-weight: ${fontWeight.bold}
      }
    `,
    contents5: css`
      ${setFontUnit(fontSize.size16)}
      font-weight: ${fontWeight.light};
      ${mediaQuery.tablet} {
        ${setFontUnit(fontSize.size14)}
        font-weight: ${fontWeight.medium}
      }
    `,
    contents6: css`
      ${setFontUnit(fontSize.size14)}
      font-weight: ${fontWeight.bold};
      ${mediaQuery.tablet} {
        ${setFontUnit(fontSize.size12)}
      }
    `,
    contents7: css`
      ${setFontUnit(fontSize.size14)}
      font-weight: ${fontWeight.medium};
      ${mediaQuery.tablet} {
        ${setFontUnit(fontSize.size12)}
      }
    `,
    small: css`
      ${setFontUnit(fontSize.size10)}
      font-weight: ${fontWeight.medium};
    `,
    micro: css`
      ${setFontUnit(fontSize.size8)}
      font-weight: ${fontWeight.medium};
    `,
  },
  notoSans: {
    title1: css`
      ${setFontUnit(fontSize.size32)}
      font-weight: ${fontWeight.semiBold};
    `,
    title2: css`
      ${setFontUnit(fontSize.size28)}
      font-weight: ${fontWeight.semiBold};
    `,
    title3: css`
      ${setFontUnit(fontSize.size24)}
      font-weight: ${fontWeight.semiBold};
    `,
    title4: css`
      ${setFontUnit(fontSize.size24)}
      font-weight: ${fontWeight.regular};
    `,
    contents1: css`
      ${setFontUnit(fontSize.size12)}
      font-weight: ${fontWeight.bold};
    `,
    contents2: css`
      ${setFontUnit(fontSize.size12)}
      font-weight: ${fontWeight.medium};
    `,
    contents3: css`
      ${setFontUnit(fontSize.size10)}
      font-weight: ${fontWeight.bold};
    `,
    contents4: css`
      ${setFontUnit(fontSize.size10)}
      font-weight: ${fontWeight.medium};
    `,
  },
};

export { fontSize, lineHeight, fontWeight };

export default font;
