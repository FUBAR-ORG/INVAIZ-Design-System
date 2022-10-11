import type { TooltipBaseProps } from '@components/Tooltips/interfaces/Tooltip.interface';
import type SVG_ICONS from '@assets/svg';
// types

import SvgIcon from '@components/SvgIcons/SvgIcon';
// components

interface HaveIconTooltipProps extends TooltipBaseProps {
  /**
   * 툴팁과 함께 보여질 아이콘의 키(이름)입니다.
   */
  icon: keyof typeof SVG_ICONS;
}

const HaveIconTooltip = ({
  text,
  textSize,
  borderRadiusRatio,
  icon,
  children,
}: HaveIconTooltipProps) => (
  <div>
    {text} {textSize} {borderRadiusRatio}
    {children}
    <SvgIcon icon={icon} />
  </div>
);

export default HaveIconTooltip;
