import { type InputHTMLAttributes } from 'react';

import { Wrapper, Box } from '@components/Inputs/Input.style';

/**
 * INVAIZ Input Props
 *
 * @param type box | bar | search
 * @param width 박스의 가로 길이
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'box';
  width?: number;
}

/**
 * INVAIZ Input
 *
 * @param InputHTMLAttributes
 * @param type box | bar | search
 * @param width 박스의 가로 길이
 *
 * @returns HTMLDivElement > HTMLInputElement
 */
const Input = ({ type = 'box', width, ...props }: InputProps) => (
  <Wrapper width={width}>{type === 'box' && <Box width={width} {...props} />}</Wrapper>
);

export default Input;
