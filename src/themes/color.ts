/**
 * 인바이즈 메인 컬러
 */
export const point1Color = '#06F' as const;
/**
 * 인바이즈 서브 컬러
 */
export const point2Color = '#FF925D' as const;
/**
 * 인바이즈 경고 컬러
 */
export const cautionColor = '#F27474' as const;

export const darkColor = {
  /**
   * 배경색
   *
   * - Dark: `#1E212E`
   * - Light: `#F5F5F5`
   */
  background: '#1E212E',

  /**
   * Basic
   *
   * - Dark: `#FFFFFF`
   * - Light: `#000000`
   */
  basic: '#FFF',
  /**
   * Point 1
   *
   * - Dark: `#0066FF`
   * - Light: `#0066FF`
   */
  point1: point1Color,
  /**
   * Point 2
   *
   * - Dark: `#FF925D`
   * - Light: `#FF925D`
   */
  point2: point2Color,
  /**
   * Soft
   *
   * - Dark: `#C0C0C0`
   * - Light: `#3C4B62`
   */
  soft: '#C0C0C0',
  /**
   * Seat
   *
   * - Dark: `#363F4D`
   * - Light: `#D5DEED`
   */
  seat: '#363F4D',
  /**
   * Thin
   *
   * - Dark: `#596980`
   * - Light: `#BFC8DF`
   */
  thin: '#596980',
  /**
   * Light
   *
   * - Dark: `#73859E`
   * - Light: `#ACBAD3`
   */
  light: '#73859E',
  /**
   * Far
   *
   * - Dark: `#FFFFFF`, Opacity: 35%
   * - Light: `#90919D`
   */
  far: '#FFFFFF59',
  /**
   * Off
   *
   * - Dark: `#B3B3B3`
   * - Light: `#B3B3B3`
   */
  off: '#B3B3B3',
  /**
   * Caution
   *
   * - Dark: `#F27474`
   * - Light: `#F27474`
   */
  caution: cautionColor,
  /**
   * Wall
   *
   * - Dark: `#2F3743`
   * - Light: `#758899`
   */
  wall: '#2F3743',
} as const;

export const lightColor = {
  background: '#F5F5F5',

  basic: '#000',
  point1: point1Color,
  point2: point2Color,
  soft: '#3C4B62',
  seat: '#D5DEED',
  thin: '#BFC8DF',
  light: '#ACBAD3',
  far: '#90919D',
  off: '#B3B3B3',
  caution: cautionColor,
  wall: '#758899',
} as const;

export type Color = typeof darkColor | typeof lightColor;

export type ColorTheme = 'dark' | 'light';

const color: Record<ColorTheme, Color> = {
  dark: darkColor,
  light: lightColor,
};

export default color;
