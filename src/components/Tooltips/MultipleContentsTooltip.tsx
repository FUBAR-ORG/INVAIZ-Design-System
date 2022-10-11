import type { ReactElement } from 'react';
import type { TooltipParentProps } from '@components/Tooltips/interfaces/Tooltip.interface';
// types

interface MultipleContentsTooltipProps extends TooltipParentProps {
  /**
   * 툴팁을 적용하기 위한 다수 콘텐츠(배열 요소)입니다.
   */
  children: ReactElement[];
}

const MultipleContentsTooltip = ({
  text,
  textSize,
  borderRadiusRatio,
  children,
}: MultipleContentsTooltipProps) => (
  <div>
    {text} {textSize} {borderRadiusRatio}
    {children}
  </div>
);

export default MultipleContentsTooltip;
