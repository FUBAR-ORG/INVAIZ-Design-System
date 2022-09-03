import { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

/**
 * HTML input tag props
 * @param boxWidth type="image"의 width와 구분을 위한 box 자체의 width
 */
export interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  boxWidth?: number;
}

/**
 * INVAIZ input box
 * @param InputHTMLAttributes
 * @param boxWidth type="image"의 width와 구분을 위한 box 자체의 width
 * @returns HTML input tag
 */
const InputBox = ({ ...props }: InputBoxProps) => <StyledInputBox {...props} />;

interface StyledInputBoxProps {
  boxWidth?: number;
}

const StyledInputBox = styled.input<StyledInputBoxProps>`
  box-sizing: border-box;
  width: ${({ boxWidth }) => (boxWidth ? `${boxWidth}px` : '100%')};
  height: 32px;
  padding: 0 10px;
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
    padding: 0 8px;
  }
`;

export default InputBox;
