import { type InputHTMLAttributes, forwardRef } from 'react';

import { Bar } from '@components/Inputs/Input.style';

/**
 * INVAIZ Input Bar Props
 *
 * @param barWidth type="image"의 width와 구분을 위한 bar 자체의 width
 */
export interface InputBarProps extends InputHTMLAttributes<HTMLInputElement> {
  barWidth?: number;
}

/**
 * INVAIZ Input Bar
 *
 * @param InputHTMLAttributes
 * @param barWidth type="image"의 width와 구분을 위한 bar 자체의 width
 *
 * @returns HTMLInputElement
 */
const InputBar = forwardRef<HTMLInputElement, InputBarProps>((props, ref) => (
  <Bar {...props} ref={ref} />
));

export default InputBar;
