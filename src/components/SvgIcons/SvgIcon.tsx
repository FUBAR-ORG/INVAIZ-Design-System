import { SVGProps } from 'react';
import styled from '@emotion/styled';
import SVG_ICONS from '@assets/svg';

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  /** 아이콘의 형태 */
  icon: keyof typeof SVG_ICONS;
  /** 아이콘 사이즈 */
  size?: 16 | 20 | 24;
  /** 아이콘에 적용될 컬러 */
  color?: string;
}

const NoneStyleSvgIcon = ({ icon, size = 24, color, ...props }: SvgIconProps) => {
  const Icon = SVG_ICONS[icon];
  return <Icon width={size} height={size} style={{ fill: color }} {...props} />;
};

const SvgIcon = styled(NoneStyleSvgIcon)`
  fill: ${({ theme }) => theme.color.grayScale.basic.black};
`;

export default SvgIcon;
