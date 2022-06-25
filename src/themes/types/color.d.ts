/**
 * 테마의 종류
 *
 * light 모드, dark 모드
 */
export type ColorScheme = 'light' | 'dark';

/**
 * Typeface:
 * Text Color
 */
export interface ITextColorScheme {
  /**
   * 텍스트 기본 값
   * * light: #000000
   * * dark: #FFFFFF
   */
  basic: string;
  /**
   * 보조 텍스트
   * * light: #666666
   * * dark: #COCOCO
   */
  sub: string;
  /**
   * 미입력 / 보조 정보
   * * light: #000000, Opacity: 35%
   * * dark: #FFFFFF, Opacity: 50%
   */
  assistant: string;
}

/**
 * Color Palette:
 * Box Color
 */
export interface IBoxColorScheme {
  /**
   * 박스 기본값(배경)
   * * light:
   * * dark: #363F4D
   */
  basic: string;
  /**
   * 강조 버튼(배경)
   * * light:
   * * dark: #0066FF
   */
  emphasis: string;
  /**
   * 선태 시 / 입력상자(배경)
   * * light:
   * * dark: #596980
   */
  selected: string;
  /**
   * 추가 버튼(배경)
   * * light:
   * * dark: #73859E
   */
  additional: string;
  /**
   * 비활성화 버튼(배경)
   * * light:
   * * dark: #B3B3B3
   */
  disabled: string;

  /**
   * 마우스 오버(배경)
   * * light:
   * * dark: #0066FF
   */
  hover: string;
}

/**
 * Color Pallete:
 * Icon Color
 */
export interface IIconColorScheme {
  /**
   * 아이콘 기본값
   * * light:
   * * dark: #FFFFFF
   */
  basic: string;
  /**
   * 보조 아이콘
   * * light:
   * * dark: #COCOCO
   */
  sub: string;
  /**
   * 경고
   * * light:
   * * dark: #F27474
   */
  alert: string;

  /**
   * 마우스 오버(배경) / 보조색
   * * light:
   * * dark: #596980
   */
  hover: string;
}

/**
 * 한 테마에서 사용하는 Color 모음
 */
export interface IColorScheme {
  /** 텍스트 Color Theme */
  text: ITextColorScheme;
  /** 박스 Color Theme */
  box: IBoxColorScheme;
  /** 아이콘 Color Theme */
  icon: IIconColorScheme;
  /**
   * 배경색
   * * light: #F5F5F5
   * * dark: #1E212E
   */
  background: string;
  /**
   * 메인 색상
   * * 공통: #0066FF
   */
  main: string;
}

/**
 * 모든 테마의 Color
 */
export type IColor = Record<ColorScheme, IColorScheme>;
