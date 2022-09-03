import type { InputHTMLAttributes } from 'react';

import styled from '@emotion/styled';

import SvgIcon from '@components/SvgIcons/SvgIcon';

/**
 * HTML input tag props
 * @param boxWidth type="image"의 width와 구분을 위한 box 자체의 width
 * @param clearable clear 버튼 표시 여부
 * @param clear clear 함수
 */
export interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  boxWidth?: number;
  clearable?: boolean;
  clear?: () => void;
}

/**
 * INVAIZ input box
 * @param InputHTMLAttributes
 * @param boxWidth type="image"의 width와 구분을 위한 box 자체의 width
 * @param clearable clear 버튼 표시 여부
 * @param clear clear 함수
 * @returns HTML div > input
 */
const InputBox = ({ boxWidth, clearable = false, clear, ...props }: InputBoxProps) => (
  <Wrapper boxWidth={boxWidth}>
    <Input clearable={clearable} {...props} />
    {clearable && <SvgIcon icon='Cancel' size={16} onClick={clear} />}
  </Wrapper>
);

//------------------------------------------------------------------------------------------

interface WrapperProps {
  boxWidth?: number;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${({ boxWidth }) => (boxWidth ? `${boxWidth}px` : '100%')};
  display: flex;
  align-items: center;

  & > svg {
    position: absolute;
    right: 16px;
    cursor: pointer;
  }
`;

interface InputProps {
  boxWidth?: number;
  clearable?: boolean;
}

const Input = styled.input<InputProps>`
  width: 100%;
  height: 32px;
  padding-left: 16px;
  padding-right: ${({ clearable }) => (clearable ? 34 : 16)}px;

  font-size: ${({ theme }) => theme.fontSize.size14}px;

  color: ${({ theme, disabled }) =>
    disabled ? theme.color.system.off1 : theme.color.grayScale.basic.white};

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.grayScale.gray800 : theme.color.grayScale.coolGray400};

  border: none;
  border-radius: 5px;
  outline: none;

  &:focus {
    ${({ theme }) => theme.style.border.selected}
    padding-left: 14px;
    padding-right: ${({ clearable }) => (clearable ? 32 : 14)}px;
  }
`;

export default InputBox;
