import { SVGProps } from 'react';
import SVG_ICONS from '@assets/svg';

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  icon: keyof typeof SVG_ICONS;
  size?: 16 | 20 | 24;
}

export default function SvgIcon({ icon, size = 24, ...props }: SvgIconProps) {
  const Icon = SVG_ICONS[icon];
  return <Icon width={size} height={size} {...props} />;
}
