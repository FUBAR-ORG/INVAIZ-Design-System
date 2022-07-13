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
  invaizTitle1: setFontUnit(fontSize.size64),
  invaizTitle2: setFontUnit(fontSize.size40),
  invaizTitle3: setFontUnit(fontSize.size32),
  invaizTitle4: setFontUnit(fontSize.size24),
  invaizTitle5: setFontUnit(fontSize.size20),

  kopubTitle1: css`
    ${setFontUnit(fontSize.size48)}
    font-weight: ${fontWeight.bold};
    ${mediaQuery.tablet} {
      ${setFontUnit(fontSize.size32)}
    }
    ${mediaQuery.mobile} {
      ${setFontUnit(fontSize.size24)}
    }
  `,
  kopubTitle2: css`
    ${setFontUnit(fontSize.size40)}
    font-weight: ${fontWeight.bold};
    ${mediaQuery.tablet} {
      ${setFontUnit(fontSize.size20)}
    }
  `,
  kopubTitle3: css`
    ${setFontUnit(fontSize.size32)}
    font-weight: ${fontWeight.bold};
    ${mediaQuery.tablet} {
      ${setFontUnit(fontSize.size18)}
      font-weight: ${fontWeight.medium};
    }
  `,
  kopubSubT1: css`
    ${setFontUnit(fontSize.size24)}
    font-weight: ${fontWeight.bold};
    ${mediaQuery.tablet} {
      ${setFontUnit(fontSize.size16)}
    }
    ${mediaQuery.mobile} {
      ${setFontUnit(fontSize.size20)}
    }
  `,
  kopubSubT2: css`
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
  kopubSubT3: css`
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
  kopubContents1: css`
    ${setFontUnit(fontSize.size24)}
    font-weight: ${fontWeight.medium};
    ${mediaQuery.tablet} {
      ${setFontUnit(fontSize.size16)}
      font-weight: ${fontWeight.bold};
    }
  `,
  kopubContents2: css`
    ${setFontUnit(fontSize.size20)}
    font-weight: ${fontWeight.medium};
    ${mediaQuery.tablet} {
      ${setFontUnit(fontSize.size16)};
    }
  `,
  kopubContents3: css`
    ${setFontUnit(fontSize.size16)}
    font-weight: ${fontWeight.bold};
    ${mediaQuery.tablet} {
      font-weight: ${fontWeight.light};
    }
    ${mediaQuery.mobile} {
      font-weight: ${fontWeight.medium};
    }
  `,
  kopubContents4: css`
    ${setFontUnit(fontSize.size16)}
    font-weight: ${fontWeight.medium};
    ${mediaQuery.tablet} {
      ${setFontUnit(fontSize.size14)}
      font-weight: ${fontWeight.bold}
    }
  `,
  kopubContents5: css`
    ${setFontUnit(fontSize.size16)}
    font-weight: ${fontWeight.light};
    ${mediaQuery.tablet} {
      ${setFontUnit(fontSize.size14)}
      font-weight: ${fontWeight.medium}
    }
  `,
  kopubContents6: css`
    ${setFontUnit(fontSize.size14)}
    font-weight: ${fontWeight.bold};
    ${mediaQuery.tablet} {
      ${setFontUnit(fontSize.size12)}
    }
  `,
  kopubContents7: css`
    ${setFontUnit(fontSize.size14)}
    font-weight: ${fontWeight.medium};
    ${mediaQuery.tablet} {
      ${setFontUnit(fontSize.size12)}
    }
  `,
  kopubSmall: css`
    ${setFontUnit(fontSize.size10)}
    font-weight: ${fontWeight.medium};
  `,
  kopubMicro: css`
    ${setFontUnit(fontSize.size8)}
    font-weight: ${fontWeight.medium};
  `,

  notoSansTitle1: css`
    ${setFontUnit(fontSize.size32)}
    font-weight: ${fontWeight.semiBold};
  `,
  notoSansTitle2: css`
    ${setFontUnit(fontSize.size28)}
    font-weight: ${fontWeight.semiBold};
  `,
  notoSansTitle3: css`
    ${setFontUnit(fontSize.size24)}
    font-weight: ${fontWeight.semiBold};
  `,
  notoSansTitle4: css`
    ${setFontUnit(fontSize.size24)}
    font-weight: ${fontWeight.regular};
  `,
  notoSansContents1: css`
    ${setFontUnit(fontSize.size12)}
    font-weight: ${fontWeight.bold};
  `,
  notoSansContents2: css`
    ${setFontUnit(fontSize.size12)}
    font-weight: ${fontWeight.medium};
  `,
  notoSansContents3: css`
    ${setFontUnit(fontSize.size10)}
    font-weight: ${fontWeight.bold};
  `,
  notoSansContents4: css`
    ${setFontUnit(fontSize.size10)}
    font-weight: ${fontWeight.medium};
  `,
};

export { fontSize, lineHeight, fontWeight };

export default font;
