/**
 * 테마의 종류
 *
 * `Dark` 모드, `Light` 모드
 */
export type ColorScheme = 'dark' | 'light';

/**
 * 한 테마에서 사용하는 Color 모음
 * <br />
 * 음영, 색조, 테마 등을 포함하여 사용되는 공식 색상입니다.<br />
 * 일반적으로 사용되는 색상을 제외하고 `point`, `caution` 같은 특수한 상황에서 사용하는 색상은 드물게 사용합니다.
 */
export interface IColorScheme {
  /**
   * 배경색
   *
   * - Dark: `#1E212E`
   * - Light: `#F5F5F5`
   */
  background: string;

  /**
   * Basic
   *
   * - Dark: `#FFFFFF`
   * - Light: `#000000`
   */
  basic: string;
  /**
   * Point 1
   *
   * - Dark: `#0066FF`
   * - Light: `#0066FF`
   */
  point1: string;
  /**
   * Point 2
   *
   * - Dark: `#FF925D`
   * - Light: `#FF925D`
   */
  point2: string;
  /**
   * Soft
   *
   * - Dark: `#C0C0C0`
   * - Light: `#3C4B62`
   */
  soft: string;
  /**
   * Seat
   *
   * - Dark: `#363F4D`
   * - Light: `#D5DEED`
   */
  seat: string;
  /**
   * Thin
   *
   * - Dark: `#596980`
   * - Light: `#BFC8DF`
   */
  thin: string;
  /**
   * Light
   *
   * - Dark: `#73859E`
   * - Light: `#ACBAD3`
   */
  light: string;
  /**
   * Far
   *
   * - Dark: `#FFFFFF`, Opacity: 35%
   * - Light: `#90919D`
   */
  far: string;
  /**
   * Off
   *
   * - Dark: `#B3B3B3`
   * - Light: `#B3B3B3`
   */
  off: string;
  /**
   * Caution
   *
   * - Dark: `#F27474`
   * - Light: `#F27474`
   */
  caution: string;
  /**
   * Wall
   *
   * - Dark: `#2F3743`
   * - Light: `#758899`
   */
  wall: string;
}

/**
 * 모든 테마의 Color
 */
export type IColor = Record<ColorScheme, IColorScheme>;
