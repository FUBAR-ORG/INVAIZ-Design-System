import type { IColor } from '@themes/types/color';
import type { IFont, IFontSize, IFontWeight, ILineHeight } from '@themes/types/font';
import type { IStyle } from '@themes/types/style';

declare module '@emotion/react' {
  export interface Theme {
    /** 모든 테마의 Color */
    color: IColor;
    /** font size, weight 등의 정보 접근자 */
    font: IFont;
    fontSize: IFontSize;
    lineHeight: ILineHeight;
    fontWeight: IFontWeight;
    /** 모든 테마에서 사용 가능한 CSS */
    style: IStyle;
  }
}
