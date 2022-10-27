import type SVG_ICONS from '@assets/svg';
import type {
  SingleChildrenProps,
  TooltipCommonProps,
} from '@components/Tooltips/interfaces/Tooltip.interface';
// types

import SvgIcon from '@components/SvgIcons/SvgIcon';
import TooltipBase from '@components/Tooltips/TooltipBase';
// components

interface HaveIconTooltipProps extends SingleChildrenProps, TooltipCommonProps {
  /**
   * 텍스트 및 아이콘 사이즈를 조절합니다.
   */
  textSize?: 16 | 20 | 24;
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
  textSize = 16,
  borderRadiusRatio,
  icon,
  children,
}: HaveIconTooltipProps) => (
  <TooltipBase
    contents={
      <p style={{ fontSize: textSize }}>
        <SvgIcon icon={icon} size={textSize} />
        {text}
      </p>
    }
    borderRadiusRatio={borderRadiusRatio}
  >
    {children}
  </TooltipBase>
);

export default HaveIconTooltip;
