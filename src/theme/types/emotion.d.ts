import { IColor } from '@theme/types/color';
import { IFont, IFontSize, IFontWeight, ILineHeight } from '@theme/types/font';

declare module '@emotion/react' {
  export interface Theme {
    font: IFont;
    fontSize: IFontSize;
    lineHeight: ILineHeight;
    fontWeight: IFontWeight;
    color: IColor;
  }
}
