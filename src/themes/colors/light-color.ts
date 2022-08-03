const basicColor = {
  black: '#fff',
  white: '#000',
} as const;

const grayColor = {
  gray100: '#2D2D2D',
  gray200: '#4C4C4C',
  gray300: '#666',
  gray400: '#7F7F7F',
  gray500: '#A1A1A1',
  gray600: '#B3B3B3',
  gray700: '#D3D3D3',
  gray800: '#E2E2E2',
  gray900: '#F5F5F5',
} as const;

const coolGrayColor = {
  coolGray100: '#1E242E',
  coolGray200: '#2F3743',
  coolGray300: '#3C4B62',
  coolGray400: '#5B6C83',
  coolGray500: '#7588A3',
  coolGray600: '#8699B2',
  coolGray700: '#9CACC2',
  coolGray800: '#CCD7EB',
  coolGray900: '#E8EDF5',
} as const;

const blueColor = {
  blue100: '#001534',
  blue200: '#002B6A',
  blue300: '#00409F',
  blue400: '#0054D1',
  blue500: '#06F',
  blue600: '#2F83FF',
  blue700: '#7AB0FF',
  blue800: '#D2E4FF',
  blue900: '#F2F7FF',
} as const;

const orangeColor = {
  orange100: '#411B09',
  orange200: '#5B2910',
  orange300: '#A84C1F',
  orange400: '#E57741',
  orange500: '#FF925D',
  orange600: '#FFA87D',
  orange700: '#FFB997',
  orange800: '#FFD5C0',
  orange900: '#FFF9F6',
} as const;

const offColor = {
  off1: '#666',
  off2: '#7F7F7F',
  off3: '#A1A1A1',
  off4: '#B3B3B3',
} as const;

const cautionColor = {
  caution1: '#973F3F',
  caution2: '#C05555',
  caution3: '#D66666',
  caution4: '#F27474',
} as const;

const checkColor = {
  check1: '#357B62',
  check2: '#32A67C',
  check3: '#4ED1A2',
  check4: '#56EAB4',
} as const;

/**
 * `INVAIZ`에서 사용하는 음영, 색조, 테마 등을 포함한 공식 색상입니다.
 * 일반적으로 사용하는 색상을 제외하고 포인트, 경고와 같은 특수한 상황의 색상은 드물게 사용합니다.
 */
const lightColor = {
  /**
   * 범용적으로 사용할 수 있는 그레이 컬러 팔레트입니다.
   * 상황에 맞게 웜/쿨 톤 중에 선택할 수 있으며, 배경색으로도 사용할 수 있습니다.
   */
  grayScale: {
    basic: basicColor,
    ...grayColor,
    ...coolGrayColor,
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
    ...offColor,
    ...cautionColor,
    ...checkColor,
  },
} as const;

export default lightColor;
