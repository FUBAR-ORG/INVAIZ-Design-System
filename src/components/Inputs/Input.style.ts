import styled from '@emotion/styled';

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
  boxWidth?: number;
  barWidth?: number;
  clearable?: boolean;
}

export const Box = styled.input<InputProps>`
  width: ${({ boxWidth }) => (boxWidth ? `${boxWidth}px` : '100%')};
  height: 32px;
  padding-left: 16px;
  padding-right: ${({ clearable: isClearable, required }) => (isClearable || required ? 34 : 16)}px;

  font-size: ${({ theme }) => theme.fontSize.size14}px;

  color: ${({ theme, disabled }) =>
    disabled ? theme.color.system.off1 : theme.color.grayScale.basic.white};

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.grayScale.gray200 : theme.color.grayScale.coolGray400};

  border: none;
  border-radius: 5px;
  outline: none;

  &:focus {
    ${({ theme }) => theme.style.border.selected}
    padding-left: 14px;
    padding-right: ${({ clearable: isClearable, required }) =>
      isClearable || required ? 32 : 14}px;
  }

  & + button,
  & + svg {
    right: 16px;
  }
`;

export const Bar = styled.input<InputProps>`
  width: ${({ barWidth }) => (barWidth ? `${barWidth}px` : '100%')};
  height: 32px;
  padding-right: ${({ clearable: isClearable, required }) => (isClearable || required ? 16 : 0)}px;

  font-size: ${({ theme }) => theme.fontSize.size14}px;

  color: ${({ theme, disabled }) =>
    disabled ? theme.color.system.off1 : theme.color.grayScale.basic.black};

  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayScale.coolGray500};

  background: none;
  outline: none;

  /* &:focus {
    padding-right: ${({ clearable: isClearable, required }) =>
    isClearable || required ? 16 : 14}px;
  } */

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
  stroke: ${({ theme }) => theme.light.grayScale.coolGray600};
`;
