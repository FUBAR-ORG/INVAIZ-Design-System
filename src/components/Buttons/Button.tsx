import styled from '@emotion/styled';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Size = 'small' | 'default' | 'large' | 'x-large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  selected?: boolean;
  shape?: 'default' | 'pill';
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  outline: none;

  border: none;
  border-radius: 5px;

  transition: all 0.15s ease-in-out;
  box-sizing: border-box;

  // color
  color: ${({ theme }) => theme.color.grayScale.gray900};

  &.pill {
    border-radius: 18px;
  }
  &.small {
    min-width: 72px;
    min-height: 32px;
    ${({ theme }) => theme.font.kopub.contents6};
  }
  &.default {
    min-width: 80px;
    min-height: 36px;
    ${({ theme }) => theme.font.kopub.contents4};
  }
  &.large {
    min-width: 108px;
    min-height: 40px;
    ${({ theme }) => theme.font.kopub.contents1};
  }
  &.x-large {
    min-width: 128px;
    min-height: 56px;
    ${({ theme }) => theme.font.kopub.subT1};
  }
`;

export default Button;
