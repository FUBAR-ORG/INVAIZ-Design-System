import type { TooltipProps } from '@components/Tooltips/interfaces/Tooltip.interface';
// types

import TooltipBase from '@components/Tooltips/TooltipBase';
// interfaces

import { StyleTooltipText } from '@components/Tooltips/styles/Tooltip.style';
// styles

/**
 * 기본적인 툴팁입니다.
 */
const Tooltip = ({ text, textSize, borderRadiusRatio, isArrow, children }: TooltipProps) => (
  <TooltipBase
    contents={<StyleTooltipText textSize={textSize}>{text}</StyleTooltipText>}
    borderRadiusRatio={borderRadiusRatio}
    isArrow={isArrow}
  >
    {children}
  </TooltipBase>
);

export default Tooltip;
