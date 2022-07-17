import { css } from '@emotion/react';

import { point1Color } from '@themes/color';

/** 테두리에 사용되는 CSS */
const border = {
  /**
   * 일부 개체 선택 시 테두리
   * #0066FF / 내부 선 2px
   * border: solid 2px #0066FF
   */
  selected: css`
    border: solid 2px ${point1Color};
  `,
} as const;

/** 그림자에 사용되는 CSS */
const boxShadow = {
  /**
   * 드롭 다운 박스, 강조 버튼
   * * x0, y2, blur4 / #000000 35%
   * * box-shadow: 0px 2px 4px #00000059
   */
  dropdownEmphasis: css`
    box-shadow: 0 2px 4px #00000059;
  `,
  /**
   * 드롭 다운 박스 오픈
   * * x0, y4, blur10 / #000000 75%
   * * box-shadow: 0px 4px 10px #000000bf
   */
  dropdownOpen: css`
    box-shadow: 0 4px 10px #000000bf;
  `,
} as const;

/** 폰트 타입 정의에 사용되는 CSS */
const fontFace = {
  /**
   * INVAIZ Inc.<br />
   * (주)인바이즈<br />
   * 인바이즈의 시그니처 서체로, 특별한 경우에만 사용합니다.<br />
   * 인바이즈의 제품 이름이나 일부 제목을 강조할 때 사용합니다.
   */
  invaiz: css`
    font-family: 'INVAIZ';
  `,
  /**
   * `KopubWorldDotum`<br />
   * 코펍월드돋움<br />
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며,<br />
   * 특별한 경우가 아니라면 `KopubWorldDotum`를 사용합니다.
   * <br />
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   */
  kopub: css`
    font-family: 'KoPubWorld';
  `,
  /**
   * `Noto Sans` || `Inter` <br />
   * PC 플러그인 등 `KopubWorldDotum`이 어울리지 않을 때, 혹은 더욱 두께 차이가 많이 나는 폰트를 필요로 할 때<br />
   * `Noto Sans`를 통해 작업합니다.<br />
   * `Noto Sans`는 상황에 따라 `Inter`로 대체될 수 있습니다.
   */
  notoSans: css`
    font-family: 'Noto Sans', 'Inter';
  `,
} as const;

const style = {
  border,
  boxShadow,
  fontFace,
} as const;

export default style;
