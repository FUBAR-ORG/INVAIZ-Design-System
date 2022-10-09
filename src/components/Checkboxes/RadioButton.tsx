import type { CheckboxDefaultProps } from '@components/Checkboxes/interfaces/Checkbox.interface';
// types

import HoverCircle from '@components/Checkboxes/HoverCircle';
// components

import {
  StyleRadioButton,
  StyleRadioButtonInput,
} from '@components/Checkboxes/styles/RadioButton.style';
// styles

/**
 * 라디오 버튼을 나타내는 컴포넌트입니다.
 */
const RadioButton = ({ disabled, onChange, ...props }: CheckboxDefaultProps) => (
  <HoverCircle disabled={disabled}>
    <StyleRadioButtonInput
      type='checkbox'
      onChange={(e) => onChange?.(e.target.checked)}
      disabled={disabled}
      {...props}
    />
    <StyleRadioButton />
  </HoverCircle>
);

export default RadioButton;
