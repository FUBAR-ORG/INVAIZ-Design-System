import type { ReactElement } from 'react';
// React modules

export interface BorderRadiusProps {
  /**
   * 모서리 라운드 값을 조정합니다.
   *
   * * 5의 배수로 적용됩니다.
   */
  borderRadiusRatio?: number;
}

export interface SingleChildrenProps {
  /**
   * 퉅팁을 적용하기 위한 단독 콘텐츠(단일 요소)입니다.
   */
  children: ReactElement;
}

export interface TooltipCommonProps extends BorderRadiusProps {
  /**
   * 툴팁에 보여질 내용(텍스트)입니다.
   */
  text: string;
  /**
   * 텍스트 사이즈를 조절합니다.
   */
  textSize?: number;
}

export const TOOLTIP_BORDER_RADIUS_UNIT = 5 as const;
