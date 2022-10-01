import { type InputHTMLAttributes, forwardRef } from 'react';

import { Box } from '@components/Inputs/Input.style';

/**
 * INVAIZ Input Box Props
 *
 * @param boxWidth type="image"의 width와 구분을 위한 box 자체의 width
 */
export interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  boxWidth?: number;
}

/**
 * INVAIZ Input Box
 *
 * @param InputHTMLAttributes
 * @param boxWidth type="image"의 width와 구분을 위한 box 자체의 width
 *
 * @returns HTMLInputElement
 */
const InputBox = forwardRef<HTMLInputElement, InputBoxProps>((props, ref) => (
  <Box {...props} ref={ref} />
));

export default InputBox;
