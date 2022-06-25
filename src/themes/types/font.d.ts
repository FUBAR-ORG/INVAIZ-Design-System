import type { SerializedStyles } from '@emotion/react';

export interface IFontSize {
  size12: number;
  size14: number;
  size16: number;
  size20: number;
  size24: number;
  size30: number;
  size38: number;
  size46: number;
  size56: number;
  size68: number;
}

export interface ILineHeight {
  height20: number;
  height22: number;
  height24: number;
  height28: number;
  height32: number;
  height38: number;
  height46: number;
  height54: number;
  height64: number;
  height76: number;
}

export interface IFontWeight {
  light: number;
  medium: number;
  bold: number;
}

/**
 * font size, weight 등의 정보 접근자
 */
export interface IFont {
  /**
   * 탭 제목
   * font-size: 20px
   * font-weight: medium
   */
  tabTitle: SerializedStyles;
  /**
   * 카테고리 제목
   * font-size: 14px
   * font-weight: bold
   */
  categoryTitle: SerializedStyles;
  /**
   * 카테고리 소제목
   * font-size: 14px
   * font-weight: medium
   */
  categorySubtitle: SerializedStyles;
  /**
   * 박스 내 콘텐츠 - Medium
   * font-size: 14px
   * font-weight: medium
   */
  inBoxContentsMedium: SerializedStyles;
  /**
   * 박스 내 콘텐츠 - Bold
   * font-size: 14px
   * font-weight: bold
   */
  inBoxContentsBold: SerializedStyles;
  /**
   * 하위 콘텐츠 - Medium
   * font-size: 12px
   * font-weight: medium
   */
  subContentsMedium: SerializedStyles;
  /**
   * 하위 콘텐츠 - Bold
   * font-size: 12px
   * font-weight: bold
   */
  subContentsBold: SerializedStyles;
  /**
   * 탭 메뉴
   * font-size: 12px
   * font-weight: medium
   */
  tabMenu: SerializedStyles;
  /**
   * 그룹 번호
   * font-size: 18px
   * font-weight: medium
   */
  groupNumber: SerializedStyles;
  /**
   * 그룹 이름
   * font-size: 16px
   * font-weight: bold
   */
  groupName: SerializedStyles;
}
