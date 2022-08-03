import { css } from '@emotion/react';
import mediaQuery from '@themes/media';
import { normal } from './colors/color';

const fontSize = {
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
} as const;

const lineHeight = {
  height40: 40,
  height32: 32,
  height26: 26,
  height22: 22,
  height18: 18,
  height14: 14,
  height11: 11,
} as const;

const fontWeight = {
  light: 100,
  regular: 300,
  medium: 500,
  semiBold: 700,
  bold: 900,
} as const;

const fontColor = {
  primary: normal.grayScale.basic.white,
  secondary: normal.grayScale.gray300,
} as const;

const textAlign = {
  left: 'left',
  center: 'center',
} as const;

const font = {
  /**
   * 인바이즈의 시그니처 서체로, 특별한 경우에만 사용합니다.<br />
   * 인바이즈의 제품 이름이나 일부 제목을 강조할 때 사용합니다.
   */
  invaiz: {
    /**
     * # Title 1
     *
     * `64px`
     */
    title1: css`
      font-size: ${fontSize.size64}px;
    `,
    /**
     * ## Title 2
     *
     * `40px`
     */
    title2: css`
      font-size: ${fontSize.size40}px;
    `,
    /**
     * ### Title 3
     *
     * `32px`
     */
    title3: css`
      font-size: ${fontSize.size32}px;
    `,
    /**
     * #### Title 4
     *
     * `24px`
     */
    title4: css`
      font-size: ${fontSize.size24}px;
    `,
    /**
     * ##### Title 5
     *
     * `20px`
     */
    title5: css`
      font-size: ${fontSize.size20}px;
    `,
  },
  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며,<br />
   * 특별한 경우가 아니라면 `KopubWorldDotum`를 사용합니다.
   * <br />
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   */
  kopub: {
    /**
     * # Title 1
     *
     * - Desktop: `48px`, `Bold`
     * - Tablet: `32px`, `Bold`
     * - Mobile: `24px`, `Bold`
     */
    title1: css`
      font-size: ${fontSize.size48}px;
      font-weight: ${fontWeight.bold};
      ${mediaQuery.tablet} {
        font-size: ${fontSize.size32}px;
      }
      ${mediaQuery.mobile} {
        font-size: ${fontSize.size24}px;
      }
    `,
    /**
     * ## Title 2
     *
     * - Desktop: `40px`, `Bold`
     * - Tablet: `20px`, `Bold`
     * - Mobile: `20px`, `Bold`
     */
    title2: css`
      font-size: ${fontSize.size40}px;
      font-weight: ${fontWeight.bold};
      ${mediaQuery.tablet} {
        font-size: ${fontSize.size20}px;
      }
    `,
    /**
     * ### Title 3
     *
     * - Desktop: `32px`, `Bold`
     * - Tablet: `18px`, `Medium`
     * - Mobile: `18px`, `Medium`
     */
    title3: css`
      font-size: ${fontSize.size32}px;
      font-weight: ${fontWeight.bold};
      ${mediaQuery.tablet} {
        font-size: ${fontSize.size18}px;
        font-weight: ${fontWeight.medium};
      }
    `,
    /**
     * SubTitle 1
     *
     * - Desktop: `24px`, `Bold`
     * - Tablet: `16px`, `Bold`
     * - Mobile: `20px`, `Bold`
     */
    subT1: css`
      font-size: ${fontSize.size24}px;
      font-weight: ${fontWeight.bold};
      ${mediaQuery.tablet} {
        font-size: ${fontSize.size16}px;
      }
      ${mediaQuery.mobile} {
        font-size: ${fontSize.size20}px;
      }
    `,
    /**
     * SubTitle 2
     *
     * - Desktop: `24px`, `Medium`
     * - Tablet: `14px`, `Bold`
     * - Mobile: `20px`, `Medium`
     */
    subT2: css`
      font-size: ${fontSize.size24}px;
      font-weight: ${fontWeight.medium};
      ${mediaQuery.tablet} {
        font-size: ${fontSize.size14}px;
        font-weight: ${fontWeight.bold};
      }
      ${mediaQuery.mobile} {
        font-size: ${fontSize.size20}px;
      }
    `,
    /**
     * SubTitle 3
     *
     * - Desktop: `20px`, `Bold`
     * - Tablet: `14px`, `Medium`
     * - Mobile: `16px`, `Bold`
     */
    subT3: css`
      font-size: ${fontSize.size20}px;
      font-weight: ${fontWeight.bold};
      ${mediaQuery.tablet} {
        font-size: ${fontSize.size14}px;
        font-weight: ${fontWeight.medium};
      }
      ${mediaQuery.mobile} {
        font-size: ${fontSize.size16}px;
        font-weight: ${fontWeight.bold};
      }
    `,
    /**
     * Contents 1
     *
     * - Desktop: `24px`, `Medium`
     * - Tablet: `16px`, `Bold`
     * - Mobile: `16px`, `Bold`
     */
    contents1: css`
      font-size: ${fontSize.size24}px;
      font-weight: ${fontWeight.medium};
      ${mediaQuery.tablet} {
        font-size: ${fontSize.size16}px;
        font-weight: ${fontWeight.bold};
      }
    `,
    /**
     * Contents 2
     *
     * - Desktop: `20px`, `Medium`
     * - Tablet: `16px`, `Bold`
     * - Mobile: `16px`, `Bold`
     */
    contents2: css`
      font-size: ${fontSize.size20}px;
      font-weight: ${fontWeight.medium};
      ${mediaQuery.tablet} {
        font-size: ${fontSize.size16}px;
      }
    `,
    /**
     * Contents 3
     *
     * - Desktop: `16px`, `Bold`
     * - Tablet: `16px`, `Light`
     * - Mobile: `16px`, `Medium`
     */
    contents3: css`
      font-size: ${fontSize.size16}px;
      font-weight: ${fontWeight.bold};
      ${mediaQuery.tablet} {
        font-weight: ${fontWeight.light};
      }
      ${mediaQuery.mobile} {
        font-weight: ${fontWeight.medium};
      }
    `,
    /**
     * Contents 4
     *
     * - Desktop: `16px`, `Medium`
     * - Tablet: `14px`, `Bold`
     * - Mobile: `14px`, `Bold`
     */
    contents4: css`
      font-size: ${fontSize.size16}px;
      font-weight: ${fontWeight.medium};
      ${mediaQuery.tablet} {
        font-size: ${fontSize.size14}px;
        font-weight: ${fontWeight.bold};
      }
    `,
    /**
     * Contents 5
     *
     * - Desktop: `16px`, `Light`
     * - Tablet: `14px`, `Medium`
     * - Mobile: `14px`, `Medium`
     */
    contents5: css`
      font-size: ${fontSize.size16}px;
      font-weight: ${fontWeight.light};
      ${mediaQuery.tablet} {
        font-size: ${fontSize.size14}px;
        font-weight: ${fontWeight.medium};
      }
    `,
    /**
     * Contents 6
     *
     * - Desktop: `14px`, `Bold`
     * - Tablet: `12px`, `Bold`
     * - Mobile: `12px`, `Bold`
     */
    contents6: css`
      font-size: ${fontSize.size14}px;
      font-weight: ${fontWeight.bold};
      ${mediaQuery.tablet} {
        font-size: ${fontSize.size12}px;
      }
    `,
    /**
     * Contents 7
     *
     * - Desktop: `14px`, `Medium`
     * - Tablet: `12px`, `Medium`
     * - Mobile: `12px`, `Medium`
     */
    contents7: css`
      font-size: ${fontSize.size14}px;
      font-weight: ${fontWeight.medium};
      ${mediaQuery.tablet} {
        font-size: ${fontSize.size12}px;
      }
    `,
    /**
     * Small
     *
     * - Desktop: `10px`, `Medium`
     * - Tablet: `10px`, `Medium`
     * - Mobile: `10px`, `Medium`
     */
    small: css`
      font-size: ${fontSize.size10}px;
      font-weight: ${fontWeight.medium};
    `,
    /**
     * Micro
     *
     * - Desktop: `8px`, `Medium`
     * - Tablet: `8px`, `Medium`
     * - Mobile: `8px`, `Medium`
     */
    micro: css`
      font-size: ${fontSize.size8}px;
      font-weight: ${fontWeight.medium};
    `,
  },
  /**
   * PC 플러그인 등 `KopubWorldDotum`이 어울리지 않을 때, 혹은 더욱 두께 차이가 많이 나는 폰트를 필요로 할 때<br />
   * `Noto Sans`를 통해 작업합니다.<br />
   * `Noto Sans`는 상황에 따라 `Inter`로 대체될 수 있습니다.
   */
  notoSans: {
    /**
     * # Title 1
     *
     * `32px`, `SemiBold`
     */
    title1: css`
      font-size: ${fontSize.size32}px;
      font-weight: ${fontWeight.semiBold};
    `,
    /**
     * # Title 2
     *
     * `28px`, `SemiBold`
     */
    title2: css`
      font-size: ${fontSize.size28}px;
      font-weight: ${fontWeight.semiBold};
    `,
    /**
     * # Title 3
     *
     * `24px`, `SemiBold`
     */
    title3: css`
      font-size: ${fontSize.size24}px;
      font-weight: ${fontWeight.semiBold};
    `,
    /**
     * # Title 4
     *
     * `24px`, `Regular`
     */
    title4: css`
      font-size: ${fontSize.size24}px;
      font-weight: ${fontWeight.regular};
    `,
    /**
     * Contents 1
     *
     * `12px`, `Bold`
     */
    contents1: css`
      font-size: ${fontSize.size12}px;
      font-weight: ${fontWeight.bold};
    `,
    /**
     * Contents 2
     *
     * `12px`, `Medium`
     */
    contents2: css`
      font-size: ${fontSize.size12}px;
      font-weight: ${fontWeight.medium};
    `,
    /**
     * Contents 3
     *
     * `10px`, `Bold`
     */
    contents3: css`
      font-size: ${fontSize.size10}px;
      font-weight: ${fontWeight.bold};
    `,
    /**
     * Contents 4
     *
     * `10px`, `Medium`
     */
    contents4: css`
      font-size: ${fontSize.size10}px;
      font-weight: ${fontWeight.medium};
    `,
  },
  /**
   * Emphasis Text
   *
   * 텍스트 강조
   */
  emphasisText: {
    point1: css`
      color: ${normal.primary.blue400};
      font-weight: ${fontWeight.bold};
    `,
    point2: css`
      color: ${normal.secondary.orange500};
      font-weight: ${fontWeight.bold};
    `,
  },
  /**
   * No Input Text
   *
   * 텍스트를 약하게 처리할 때
   */
  noInputText: css`
    color: ${normal.grayScale.gray500};
  `,
  /**
   * Link Text
   *
   * 링크가 적용된 텍스트
   */
  linkText: css`
    color: ${normal.primary.blue400};
    cursor: pointer;
    text-decoration: underline;
  `,
} as const;

export { fontSize, lineHeight, fontWeight, fontColor, textAlign };

export default font;
