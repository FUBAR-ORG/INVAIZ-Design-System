import { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

/**
 * HTML input tag props
 * @param boxWidth type="image"의 width와 구분을 위한 box 자체의 width
 */
export interface InputBasicProps extends InputHTMLAttributes<HTMLInputElement> {
  boxWidth?: number;
}

/**
 * INVAIZ input basic
 * @param InputHTMLAttributes
 * @param boxWidth type="image"의 width와 구분을 위한 box 자체의 width
 * @returns HTML input tag
 */
const InputBasic = ({ ...props }: InputBasicProps) => <StyledInputBasic {...props} />;

interface StyledInputBasicProps {
  boxWidth?: number;
}

const StyledInputBasic = styled.input<StyledInputBasicProps>`
  box-sizing: border-box;
  width: ${({ boxWidth }) => (boxWidth ? `${boxWidth}px` : '100%')};
  height: 32px;
  padding: 0 10px;
  font-size: ${({ theme }) => theme.fontSize.size14}px;
  color: ${({ theme }) => theme.color.grayScale.basic.white};
  background-color: ${({ theme }) => theme.color.grayScale.coolGray400};
  border: none;
  border-radius: 5px;
  outline: none;

  &:focus {
    ${({ theme }) => theme.style.border.selected}
    padding: 0 8px;
  }
`;

export default InputBasic;
