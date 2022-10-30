import type {
  TooltipSingleChildrenProps,
  TooltipTextProps,
} from '@components/Tooltips/interfaces/Tooltip.interface';
// types

import TooltipBase from '@components/Tooltips/TooltipBase';
// interfaces

interface TooltipProps extends TooltipSingleChildrenProps, TooltipTextProps {}

/**
 * 기본적인 툴팁입니다.
 */
const Tooltip = ({ text, textSize, borderRadiusRatio, children }: TooltipProps) => (
  <TooltipBase
    contents={<p style={{ fontSize: textSize }}>{text}</p>}
    borderRadiusRatio={borderRadiusRatio}
  >
    {children}
  </TooltipBase>
);

export default Tooltip;
