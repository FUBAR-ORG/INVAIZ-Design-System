import styled from '@emotion/styled';
import SvgIcon, { SvgIconProps } from '@components/SvgIcons/SvgIcon';
import { ButtonHTMLAttributes } from 'react';
import SVG_ICONS from '@assets/svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shape?: 'default' | 'pill';
}

export type IconButtonProps = ButtonProps & SvgIconProps;

export default function IconButton({ icon, size = 24, color = '#fff', ...props }: IconButtonProps) {
  return (
    <StyledIconButton>
      <SvgIcon icon={icon} size={size} color={color} {...props} />
    </StyledIconButton>
  );
}

const StyledIconButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  min-width: 36px;
  min-height: 36px;
  padding: ${({ theme }) => theme.whiteSpace.whiteSpace10}px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.primary.blue500};
`;
