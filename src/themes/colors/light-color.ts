const BWColor = {
  black: '#fff',
  white: '#000',
} as const;

const grayColor = {
  100: '#2D2D2D',
  200: '#4C4C4C',
  300: '#666',
  400: '#7F7F7F',
  500: '#A1A1A1',
  600: '#B3B3B3',
  700: '#D3D3D3',
  800: '#E2E2E2',
  900: '#F5F5F5',
} as const;

const coolGrayColor = {
  100: '#1E242E',
  200: '#2F3743',
  300: '#3C4B62',
  400: '#5B6C83',
  500: '#7588A3',
  600: '#8699B2',
  700: '#9CACC2',
  800: '#CCD7EB',
  900: '#E8EDF5',
} as const;

const blueColor = {
  100: '#001534',
  200: '#002B6A',
  300: '#00409F',
  400: '#0054D1',
  500: '#06F',
  600: '#2F83FF',
  700: '#7AB0FF',
  800: '#D2E4FF',
  900: '#F2F7FF',
} as const;

const orangeColor = {
  100: '#411B09',
  200: '#5B2910',
  300: '#A84C1F',
  400: '#E57741',
  500: '#FF925D',
  600: '#FFA87D',
  700: '#FFB997',
  800: '#FFD5C0',
  900: '#FFF9F6',
} as const;

const offColor = {
  1: '#666',
  2: '#7F7F7F',
  3: '#A1A1A1',
  4: '#B3B3B3',
} as const;

const cautionColor = {
  1: '#973F3F',
  2: '#C05555',
  3: '#D66666',
  4: '#F27474',
} as const;

const checkColor = {
  1: '#357B62',
  2: '#32A67C',
  3: '#4ED1A2',
  4: '#56EAB4',
} as const;

const lightColor = {
  grayScale: {
    BW: BWColor,
    gray: grayColor,
    coolGray: coolGrayColor,
  },
  primary: blueColor,
  secondary: orangeColor,
  system: {
    off: offColor,
    caution: cautionColor,
    check: checkColor,
  },
} as const;

export default lightColor;
