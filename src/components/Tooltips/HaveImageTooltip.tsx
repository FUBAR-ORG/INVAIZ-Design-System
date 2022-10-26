import type { TooltipBaseProps } from '@components/Tooltips/interfaces/Tooltip.interface';
// types

import Tooltip from '@components/Tooltips/Tooltip';
// components

interface HaveImageTooltipProps extends TooltipBaseProps {
  /**
   * 툴팁과 함께 보여질 이미지의 경로(이름)입니다.
   */
  imageUrl: string;
}

/**
 * 이미지를 함께 사용하는 툴팁입니다.
 */
const HaveImageTooltip = ({
  text,
  textSize,
  borderRadiusRatio,
  imageUrl,
  children,
}: HaveImageTooltipProps) => (
  <Tooltip
    text={
      <>
        <img src={imageUrl} alt='TooltipImage' />
        {text}
      </>
    }
    textSize={textSize}
    borderRadiusRatio={borderRadiusRatio}
  >
    {children}
  </Tooltip>
);

export default HaveImageTooltip;
