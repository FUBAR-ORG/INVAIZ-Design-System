import type { TooltipBaseProps } from '@components/Tooltips/interfaces/Tooltip.interface';
// types

const Tooltip = ({ text, textSize, borderRadiusRatio, children }: TooltipBaseProps) => (
  <div>
    {text} {textSize} {borderRadiusRatio}
    {children}
  </div>
);

export default Tooltip;
