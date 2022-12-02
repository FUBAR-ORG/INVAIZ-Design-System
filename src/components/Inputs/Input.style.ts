import styled from '@emotion/styled';
import { css } from '@emotion/react';

import SvgIcon from '@components/SvgIcons/SvgIcon';

interface LabelProps {
  width?: number;
}

export const Label = styled.label<LabelProps>`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  display: inline-flex;
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
  shape: 'box' | 'bar';
  isClearable?: boolean;
}

export const StyleInput = styled.input<InputProps>`
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

  ${({ shape, theme, disabled, isClearable }) =>
    shape === 'box'
      ? css`
          height: 40px;
          border-radius: 5px;
          background: ${disabled
            ? theme.color.grayScale.gray200
            : theme.color.grayScale.coolGray100};

          padding-left: 16px;
          padding-right: ${isClearable ? 34 : 16}px;

          &:focus {
            outline: 2px solid ${theme.color.primary.blue500};
          }

          & + button,
          & + svg {
            right: 16px;
            padding: 0;
          }
        `
      : css`
          height: 21px;
          border-bottom: 1px solid ${theme.color.grayScale.coolGray700};
          ${isClearable &&
          css`
            padding-right: 18px;
          `}

          &:focus {
            border-bottom-color: ${theme.color.primary.blue500};
            ${isClearable &&
            css`
              padding-right: 18px;
            `}
          }

          & + button,
          & + svg {
            right: 0;
          }
        `}
`;

export const ClearableIcon = styled(SvgIcon)`
  fill: ${({ theme }) => theme.color.grayScale.coolGray500};
  cursor: pointer;
`;

export const RequiredIcon = styled(SvgIcon)`
  fill: ${({ theme }) => theme.normal.system.caution1};
`;

interface ErrorMessageProps {
  shape: 'box' | 'bar';
}

export const ErrorMessage = styled.p<ErrorMessageProps>`
  position: absolute;
  transform: translate(4px, ${({ shape }) => (shape === 'box' ? -30 : -20)}px);
  ${({ theme }) => theme.font.kopub};
  font-size: 10px;
  color: ${({ theme }) => theme.color.system.caution1};
`;
