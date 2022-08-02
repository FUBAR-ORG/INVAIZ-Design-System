import type { Color, ColorMap } from '@themes/colors/color';
import font, { fontWeight, fontSize, lineHeight } from '@themes/font';
import type style from '@themes/style';

export interface EmotionTheme extends ColorMap {
  /** 모든 테마의 Color */
  color: Color;
  /** font size, weight 등의 정보 접근자 */
  font: typeof font;
  fontSize: typeof fontSize;
  lineHeight: typeof lineHeight;
  fontWeight: typeof fontWeight;
  /** 모든 테마에서 사용 가능한 CSS */
  style: typeof style;
}