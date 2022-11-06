import type SVG_ICONS from '@assets/svg';
import type {
  TooltipSingleChildrenProps,
  TooltipTextProps,
} from '@components/Tooltips/interfaces/Tooltip.interface';
// types

import SvgIcon from '@components/SvgIcons/SvgIcon';
import TooltipBase from '@components/Tooltips/TooltipBase';
// components

import styled from '@emotion/styled';
import { StyleTooltipText } from '@components/Tooltips/styles/Tooltip.style';
// styles

interface HaveIconTooltipProps extends TooltipSingleChildrenProps, TooltipTextProps {
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
      <StyleTooltipText textSize={textSize}>
        <StyleSvgIcon icon={icon} size={textSize} color='#fff' />
        <StyleText>{text}</StyleText>
      </StyleTooltipText>
    }
    borderRadiusRatio={borderRadiusRatio}
  >
    {children}
  </TooltipBase>
);

export const StyleSvgIcon = styled(SvgIcon)`
  vertical-align: middle;

  margin-right: 4px;
`;

export const StyleText = styled.span`
  vertical-align: middle;
`;

export default HaveIconTooltip;
