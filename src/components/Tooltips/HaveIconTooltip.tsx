import type { TooltipBaseProps } from '@components/Tooltips/interfaces/Tooltip.interface';
import type SVG_ICONS from '@assets/svg';
// types

import Tooltip from '@components/Tooltips/Tooltip';
import SvgIcon from '@components/SvgIcons/SvgIcon';
// components

interface HaveIconTooltipProps extends TooltipBaseProps {
  /**
   * 툴팁과 함께 보여질 아이콘의 키(이름)입니다.
   */
  icon: keyof typeof SVG_ICONS;
}

/**
 * 아이콘을 함께 사용하는 툴팁입니다.
 */
const HaveIconTooltip = ({
  text,
  textSize,
  borderRadiusRatio,
  icon,
  children,
}: HaveIconTooltipProps) => (
  <Tooltip
    text={
      <>
        <SvgIcon icon={icon} />
        {text}
      </>
    }
    textSize={textSize}
    borderRadiusRatio={borderRadiusRatio}
  >
    {children}
  </Tooltip>
);

export default HaveIconTooltip;
