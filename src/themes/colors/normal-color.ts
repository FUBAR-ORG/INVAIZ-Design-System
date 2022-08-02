const BWColor = {
  black: '#000',
  white: '#fff',
} as const;

const grayColor = {
  100: '#F5F5F5',
  200: '#E2E2E2',
  300: '#D3D3D3',
  400: '#B3B3B3',
  500: '#A1A1A1',
  600: '#7F7F7F',
  700: '#666',
  800: '#4C4C4C',
  900: '#2D2D2D',
} as const;

const coolGrayColor = {
  100: '#E8EDF5',
  200: '#CCD7EB',
  300: '#9CACC2',
  400: '#8699B2',
  500: '#7588A3',
  600: '#5B6C83',
  700: '#3C4B62',
  800: '#2F3743',
  900: '#1E242E',
} as const;

const blueColor = {
  100: '#F2F7FF',
  200: '#D2E4FF',
  300: '#7AB0FF',
  400: '#2F83FF',
  500: '#06F',
  600: '#0054D1',
  700: '#00409F',
  800: '#002B6A',
  900: '#001534',
} as const;

const orangeColor = {
  100: '#FFF9F6',
  200: '#FFD5C0',
  300: '#FFB997',
  400: '#FFA87D',
  500: '#FF925D',
  600: '#E57741',
  700: '#A84C1F',
  800: '#5B2910',
  900: '#411B09',
} as const;

const offColor = {
  1: '#B3B3B3',
  2: '#A1A1A1',
  3: '#7F7F7F',
  4: '#666',
} as const;

const cautionColor = {
  1: '#F27474',
  2: '#D66666',
  3: '#C05555',
  4: '#973F3F',
} as const;

const checkColor = {
  1: '#56EAB4',
  2: '#4ED1A2',
  3: '#32A67C',
  4: '#357B62',
} as const;

/**
 * `INVAIZ`에서 사용하는 음영, 색조, 테마 등을 포함한 공식 색상입니다.
 * 일반적으로 사용하는 색상을 제외하고 포인트, 경고와 같은 특수한 상황의 색상은 드물게 사용합니다.
 */
const normalColor = {
  /**
   * 범용적으로 사용할 수 있는 그레이 컬러 팔레트입니다.
   * 상황에 맞게 웜/쿨 톤 중에 선택할 수 있으며, 배경색으로도 사용할 수 있습니다.
   */
  grayScale: {
    BW: BWColor,
    gray: grayColor,
    coolGray: coolGrayColor,
  },
  /**
   * `INVAIZ`의 브랜드 컬러로써 화면과 구성요 요소에서 가장 자주 사용되는 포인트 컬러입니다.
   * 버튼, 폰트, 아이콘 등 여러 곳에서 활용 가능합니다.
   */
  primary: blueColor,
  /**
   * 보조 컬러는 특정 부분 강조나 포인트 컬러와 구분할 때 사용할 수 있으나, 자주 사용하지는 않습니다.
   * 목적과 어울리지 않는 경우 사용을 지양하며, 상황에 맞게 선택해서 사용할 수 있습니다.
   */
  secondary: orangeColor,
  /**
   * 특정 시스템의 상태를 전달하기 위해 사용하는 컬러입니다.
   * 혼동을 줄이기 위해, 아래의 경우 외에는 사용하지 않는 것을 원칙으로 합니다.
   */
  system: {
    off: offColor,
    caution: cautionColor,
    check: checkColor,
  },
} as const;

export default normalColor;
