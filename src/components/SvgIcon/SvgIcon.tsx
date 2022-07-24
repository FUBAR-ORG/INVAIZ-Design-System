import { SVGProps } from 'react';
import SVG_ICONS from '@assets/svg';

interface Props extends SVGProps<SVGSVGElement> {
  icon: keyof typeof SVG_ICONS;
  size?: 16 | 20 | 24;
}

function SvgIcon({ icon, size = 24, ...props }: Props) {
  const Icon = SVG_ICONS[icon];
  return <Icon width={size} height={size} {...props} />;
}

export default SvgIcon;
