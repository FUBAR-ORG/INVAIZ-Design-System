import type { IColor } from '@themes/types/color';

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

const color: IColor = {
  dark: {
    background: '#1E212E',

    basic: '#FFF',
    point1: point1Color,
    point2: point2Color,
    soft: '#C0C0C0',
    seat: '#363F4D',
    thin: '#596980',
    light: '#73859E',
    far: '#FFFFFF59',
    off: '#B3B3B3',
    caution: cautionColor,
    wall: '#2F3743',
  },
  light: {
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
  },
};

export default color;
