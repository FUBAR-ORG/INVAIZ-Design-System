import type {
  SingleChildrenProps,
  TooltipCommonProps,
} from '@components/Tooltips/interfaces/Tooltip.interface';
// types

import TooltipBase from '@components/Tooltips/TooltipBase';
// components

interface HaveImageTooltipProps extends SingleChildrenProps, TooltipCommonProps {
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
  <TooltipBase
    contents={
      <p style={{ fontSize: textSize }}>
        <img src={imageUrl} alt='TooltipImage' />
        {text}
      </p>
    }
    borderRadiusRatio={borderRadiusRatio}
  >
    {children}
  </TooltipBase>
);

export default HaveImageTooltip;
