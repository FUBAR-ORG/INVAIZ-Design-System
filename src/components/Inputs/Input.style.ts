import styled from '@emotion/styled';

import SvgIcon from '@components/SvgIcons/SvgIcon';

interface WrapperProps {
  boxWidth?: number;
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${({ boxWidth }) => (boxWidth ? `${boxWidth}px` : '100%')};
  display: flex;
  align-items: center;

  & > svg {
    position: absolute;
    right: 16px;
  }
`;

interface InputProps {
  boxWidth?: number;
  isClearable?: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 32px;
  padding-left: 16px;
  padding-right: ${({ isClearable, required }) => (isClearable || required ? 34 : 16)}px;

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
    padding-right: ${({ isClearable, required }) => (isClearable || required ? 32 : 14)}px;
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
