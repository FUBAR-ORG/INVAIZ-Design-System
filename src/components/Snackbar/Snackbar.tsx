import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  open?: boolean;
  variant?: 'default' | 'success' | 'error' | 'warning';
}
export default function Snackbar({
  children,
  open = false,
  variant = 'default',
  ...props
}: SnackbarProps) {
  const isOpen = open ? '--open' : '';
  return (
    <StyledSnackbar className={[props.className, variant, isOpen].join(' ')} {...props}>
      {children}
    </StyledSnackbar>
  );
}

const StyledSnackbar = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: 235px;
  min-height: 65px;

  transform: translateY(30px);
  transition: all 0.1s ease-in-out;
  opacity: 0;

  padding: ${({ theme }) => theme.whiteSpace.whiteSpace20}px;

  border-radius: 5px;
  box-sizing: border-box;

  color: ${({ theme }) => theme.fontColor.primary};

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(2px);

  &.default {
    background-color: ${({ theme }) => theme.color.grayScale.coolGray800};
  }
  &.success {
    background-color: ${({ theme }) => theme.color.primary.blue500};
  }
  &.error {
    background-color: ${({ theme }) => theme.color.system.caution1};
  }
  &.warning {
    background-color: ${({ theme }) => theme.color.secondary.orange600};
  }
  &.--open {
    opacity: 1;
    transform: translateY(0);
  }
`;
