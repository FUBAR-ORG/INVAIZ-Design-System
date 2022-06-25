import type { SerializedStyles } from '@emotion/react';

interface IStyleBorder {
  /**
   * 일부 개체 선택 시 테두리
   * #0066FF / 내부 선 2px
   * border: solid 2px #0066FF
   */
  selected: SerializedStyles;
}

interface IStyleBoxShadow {
  /**
   * 드롭 다운 박스, 강조 버튼
   * * x0, y2, blur4 / #000000 35%
   * * box-shadow: 0px 2px 4px #00000059
   */
  dropdownEmphasis: SerializedStyles;
  /**
   * 드롭 다운 박스 오픈
   * * x0, y4, blur10 / #000000 75%
   * * box-shadow: 0px 4px 10px #000000bf
   */
  dropdownOpen: SerializedStyles;
}

interface IStyleFontFace {
  /**
   * KopubWorldDotum
   * 코펍월드돋움
   */
  kopub: SerializedStyles;
  /**
   * INVAIZ Inc.
   * (주)인바이즈
   */
  invaiz: SerializedStyles;
}

export interface IStyle {
  /** 테두리에 사용되는 CSS */
  border: IStyleBorder;
  /** 그림자에 사용되는 CSS */
  boxShadow: IStyleBorder;
  /** 폰트 타입 정의에 사용되는 CSS */
  fontFace: IStyleFontFace;
}
