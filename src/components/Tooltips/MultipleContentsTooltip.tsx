import type { ReactElement } from 'react';
import type { TooltipTextProps } from '@components/Tooltips/interfaces/Tooltip.interface';
// types

import TooltipBase from '@components/Tooltips/TooltipBase';
// components

import { StyleTooltipText } from '@components/Tooltips/styles/Tooltip.style';
// styles

interface MultipleContentsTooltipProps extends TooltipTextProps {
  /**
   * 툴팁을 적용하기 위한 다수 콘텐츠(배열 요소)입니다.
   */
  children: ReactElement[];
}

/**
 * 다수의 콘텐츠를 보여주는 툴팁입니다.
 *
 * 말풍선 꼬리를 생성합니다.
 */
const MultipleContentsTooltip = ({
  text,
  textSize,
  borderRadiusRatio,
  children,
}: MultipleContentsTooltipProps) => (
  <>
    {children.map((child) => (
      <TooltipBase
        contents={<StyleTooltipText textSize={textSize}>{text}</StyleTooltipText>}
        borderRadiusRatio={borderRadiusRatio}
      >
        {child}
      </TooltipBase>
    ))}
  </>
);

export default MultipleContentsTooltip;
