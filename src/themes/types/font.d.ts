import type { SerializedStyles } from '@emotion/react';

export interface IFontSize {
  size64: number;
  size48: number;
  size40: number;
  size32: number;
  size28: number;
  size24: number;
  size20: number;
  size18: number;
  size16: number;
  size14: number;
  size12: number;
  size10: number;
  size8: number;
}

export interface ILineHeight {
  height40: number;
  height32: number;
  height26: number;
  height22: number;
  height18: number;
  height14: number;
  height11: number;
}

export interface IFontWeight {
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
}

/**
 * font size, weight 등의 정보 접근자
 */
export interface IFont {
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
    title1: SerializedStyles;
    /**
     * ## Title 2
     *
     * `40px`
     */
    title2: SerializedStyles;
    /**
     * ### Title 3
     *
     * `32px`
     */
    title3: SerializedStyles;
    /**
     * #### Title 4
     *
     * `24px`
     */
    title4: SerializedStyles;
    /**
     * ##### Title 5
     *
     * `20px`
     */
    title5: SerializedStyles;
  };
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
    title1: SerializedStyles;
    /**
     * ## Title 2
     *
     * - Desktop: `40px`, `Bold`
     * - Tablet: `20px`, `Bold`
     * - Mobile: `20px`, `Bold`
     */
    title2: SerializedStyles;
    /**
     * ### Title 3
     *
     * - Desktop: `32px`, `Bold`
     * - Tablet: `18px`, `Medium`
     * - Mobile: `18px`, `Medium`
     */
    title3: SerializedStyles;
    /**
     * SubTitle 1
     *
     * - Desktop: `24px`, `Bold`
     * - Tablet: `16px`, `Bold`
     * - Mobile: `20px`, `Bold`
     */
    subT1: SerializedStyles;
    /**
     * SubTitle 2
     *
     * - Desktop: `24px`, `Medium`
     * - Tablet: `14px`, `Bold`
     * - Mobile: `20px`, `Medium`
     */
    subT2: SerializedStyles;
    /**
     * SubTitle 3
     *
     * - Desktop: `20px`, `Bold`
     * - Tablet: `14px`, `Medium`
     * - Mobile: `16px`, `Bold`
     */
    subT3: SerializedStyles;
    /**
     * Contents 1
     *
     * - Desktop: `24px`, `Medium`
     * - Tablet: `16px`, `Bold`
     * - Mobile: `16px`, `Bold`
     */
    contents1: SerializedStyles;
    /**
     * Contents 2
     *
     * - Desktop: `20px`, `Medium`
     * - Tablet: `16px`, `Bold`
     * - Mobile: `16px`, `Bold`
     */
    contents2: SerializedStyles;
    /**
     * Contents 3
     *
     * - Desktop: `16px`, `Bold`
     * - Tablet: `16px`, `Light`
     * - Mobile: `16px`, `Medium`
     */
    contents3: SerializedStyles;
    /**
     * Contents 4
     *
     * - Desktop: `16px`, `Medium`
     * - Tablet: `14px`, `Bold`
     * - Mobile: `14px`, `Bold`
     */
    contents4: SerializedStyles;
    /**
     * Contents 5
     *
     * - Desktop: `16px`, `Light`
     * - Tablet: `14px`, `Medium`
     * - Mobile: `14px`, `Medium`
     */
    contents5: SerializedStyles;
    /**
     * Contents 6
     *
     * - Desktop: `14px`, `Bold`
     * - Tablet: `12px`, `Bold`
     * - Mobile: `12px`, `Bold`
     */
    contents6: SerializedStyles;
    /**
     * Contents 7
     *
     * - Desktop: `14px`, `Medium`
     * - Tablet: `12px`, `Medium`
     * - Mobile: `12px`, `Medium`
     */
    contents7: SerializedStyles;
    /**
     * Small
     *
     * - Desktop: `10px`, `Medium`
     * - Tablet: `10px`, `Medium`
     * - Mobile: `10px`, `Medium`
     */
    small: SerializedStyles;
    /**
     * Micro
     *
     * - Desktop: `8px`, `Medium`
     * - Tablet: `8px`, `Medium`
     * - Mobile: `8px`, `Medium`
     */
    micro: SerializedStyles;
  };
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
    title1: SerializedStyles;
    /**
     * # Title 2
     *
     * `28px`, `SemiBold`
     */
    title2: SerializedStyles;
    /**
     * # Title 3
     *
     * `24px`, `SemiBold`
     */
    title3: SerializedStyles;
    /**
     * # Title 4
     *
     * `24px`, `Regular`
     */
    title4: SerializedStyles;
    /**
     * Contents 1
     *
     * `12px`, `Bold`
     */
    contents1: SerializedStyles;
    /**
     * Contents 2
     *
     * `12px`, `Medium`
     */
    contents2: SerializedStyles;
    /**
     * Contents 3
     *
     * `10px`, `Bold`
     */
    contents3: SerializedStyles;
    /**
     * Contents 4
     *
     * `10px`, `Medium`
     */
    contents4: SerializedStyles;
  };
}
