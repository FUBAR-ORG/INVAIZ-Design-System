import styled from '@emotion/styled';
import SvgIcon, { SvgIconProps } from '@components/SvgIcons/SvgIcon';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shape?: 'default' | 'pill';
}

export type IconButtonProps = ButtonProps & Pick<SvgIconProps, 'icon' | 'size' | 'color'>;

export default function IconButton({
  icon,
  size = 24,
  color = '#fff',
  shape = 'default',
  ...props
}: IconButtonProps) {
  const cn = shape === 'pill' ? 'pill' : '';

  return (
    <StyledIconButton {...props} className={[cn, props.className].join(' ')}>
      <SvgIcon icon={icon} size={size} color={color} />
    </StyledIconButton>
  );
}

const StyledIconButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  outline: none;
  border: none;
  min-width: 36px;
  min-height: 36px;
  padding: ${({ theme }) => theme.whiteSpace.whiteSpace10}px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.primary.blue500};

  &.pill {
    border-radius: 100%;
  }
`;
