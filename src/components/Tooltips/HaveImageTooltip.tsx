import type { TooltipBaseProps } from '@components/Tooltips/interfaces/Tooltip.interface';
// types

interface HaveImageTooltipProps extends TooltipBaseProps {
  /**
   * 툴팁과 함께 보여질 이미지의 경로(이름)입니다.
   */
  imageUrl: string;
}

const HaveImageTooltip = ({
  text,
  textSize,
  borderRadiusRatio,
  imageUrl,
  children,
}: HaveImageTooltipProps) => (
  <div>
    {text} {textSize} {borderRadiusRatio}
    {children}
    <img src={imageUrl} alt='TooltipImage' />
  </div>
);

export default HaveImageTooltip;
