import type { Color, darkColor, lightColor } from '@themes/color';
import font, { fontWeight, fontSize, lineHeight } from '@themes/font';
import whiteSpace from '@themes/whiteSpace';
import type style from '@themes/style';

export interface EmotionTheme {
  /** 모든 테마의 Color */
  color: Color;
  lightColor: typeof lightColor;
  darkColor: typeof darkColor;
  /** font size, weight 등의 정보 접근자 */
  font: typeof font;
  fontSize: typeof fontSize;
  lineHeight: typeof lineHeight;
  fontWeight: typeof fontWeight;
  /** 모든 테마에서 사용 가능한 CSS */
  style: typeof style;
  /** 여백 */
  whiteSpace: typeof whiteSpace;
}
