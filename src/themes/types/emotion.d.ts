import type { EmotionTheme } from '@themes/emotion-theme';

declare module '@emotion/react' {
  export interface Theme extends EmotionTheme {}
}
