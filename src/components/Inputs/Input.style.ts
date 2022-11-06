import styled from '@emotion/styled';
import { css } from '@emotion/react';

import SvgIcon from '@components/SvgIcons/SvgIcon';

interface WrapperProps {
  width?: number;
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  display: flex;
  align-items: center;

  & > button {
    position: absolute;
    border: none;
    outline: none;
    background: none;
    height: 16px;
  }

  & > svg {
    position: absolute;
  }
`;

interface InputProps {
  isClearable?: boolean;
}

const Input = styled.input<InputProps>`
  width: 100%;
  border: none;
  outline: none;

  ${({ theme }) => theme.font.kopub};
  font-size: 14px;
  color: ${({ theme, disabled }) =>
    disabled ? theme.color.system.off1 : theme.color.grayScale.basic.black};

  &::placeholder {
    color: ${({ theme, disabled }) =>
      disabled ? theme.color.system.off1 : theme.color.grayScale.coolGray400};
  }
`;

export const Box = styled(Input)`
  height: 40px;
  border-radius: 5px;
  background: ${({ theme, disabled }) =>
    disabled ? theme.color.grayScale.gray200 : theme.color.grayScale.coolGray100};
  padding-left: 16px;
  padding-right: ${({ isClearable }) => (isClearable ? 34 : 16)}px;

  &:focus {
    ${({ theme }) => theme.style.border.selected};
    padding-left: 14px;
    padding-right: ${({ isClearable }) => (isClearable ? 32 : 14)}px;
  }

  & + button,
  & + svg {
    right: 16px;
  }
`;

export const Bar = styled(Input)`
  height: 21px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayScale.coolGray700};
  ${({ isClearable }) =>
    isClearable &&
    css`
      padding-right: 18px;
    `}

  &:focus {
    border-bottom-color: ${({ theme }) => theme.color.primary.blue500};
    ${({ isClearable }) =>
      isClearable &&
      css`
        padding-right: 18px;
      `}
  }

  & + button,
  & + svg {
    right: 0;
  }
`;

export const ClearableIcon = styled(SvgIcon)`
  fill: ${({ theme }) => theme.color.grayScale.coolGray500};
  cursor: pointer;
`;

export const RequiredIcon = styled(SvgIcon)`
  fill: ${({ theme }) => theme.normal.system.caution1};
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: -14px;
  left: 4px;
  ${({ theme }) => theme.font.kopub};
  font-size: 10px;
  color: ${({ theme }) => theme.color.system.caution1};
`;
