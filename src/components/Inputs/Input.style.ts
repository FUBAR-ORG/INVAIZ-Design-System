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
`;

export const Box = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  outline: none;
  background: ${({ theme, disabled }) =>
    disabled ? theme.color.grayScale.gray200 : theme.color.grayScale.coolGray100};
  padding: 0 16px;

  ${({ theme }) => theme.font.kopub};
  font-size: ${({ theme }) => theme.fontSize.size14};
  color: ${({ theme, disabled }) =>
    disabled ? theme.color.system.off1 : theme.color.grayScale.basic.black};

  &::placeholder {
    color: ${({ theme, disabled }) =>
      disabled ? theme.color.system.off1 : theme.color.grayScale.coolGray400};
  }

  &:focus {
    ${({ theme }) => theme.style.border.selected};
    padding: 0 14px;
  }

  & + button {
    right: 16px;
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
