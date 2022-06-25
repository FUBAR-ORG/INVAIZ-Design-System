import type { IColor } from '@theme/types/color';

export const mainColor = '#06F';

const color: IColor = {
  light: {
    text: {
      basic: '#000',
      sub: '#666',
      assistant: '#00000059',
    },
    box: {
      basic: '',
      emphasis: '',
      selected: '',
      additional: '',
      disabled: '',

      hover: '',
    },
    icon: {
      basic: '',
      sub: '',
      alert: '',

      hover: '',
    },
    background: '#F5F5F5',
    main: mainColor,
  },
  dark: {
    text: {
      basic: '#FFF',
      sub: '#C0C0C0',
      assistant: '#FFFFFF80',
    },
    box: {
      basic: '#363F4D',
      emphasis: mainColor,
      selected: '#596980',
      additional: '#73859E',
      disabled: '#B3B3B3',

      hover: mainColor,
    },
    icon: {
      basic: '#FFF',
      sub: '#C0C0C0',
      alert: '#F27474',

      hover: '#596980',
    },
    background: '#1E212E',
    main: mainColor,
  },
};

export default color;
