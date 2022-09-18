import type { CheckboxDefaultProps } from '@components/Checkboxes/interfaces/Checkbox.interface';
// types

import HoverCircle from '@components/Checkboxes/HoverCircle';
// components

import {
  StyleFillCheckIcon,
  StyleFillCheckbox,
  StyleFillCheckboxInput,
} from '@components/Checkboxes/styles/FillCheckbox.style';
// styles

/**
 * 다중 선택 체크박스
 */
const FillCheckbox = ({ disabled, onChange, ...props }: CheckboxDefaultProps) => (
  <HoverCircle disabled={disabled}>
    <StyleFillCheckboxInput
      type='checkbox'
      onChange={(e) => onChange?.(e.target.checked)}
      disabled={disabled}
      {...props}
    />
    <StyleFillCheckbox>
      <StyleFillCheckIcon size={20} icon='Check' />
    </StyleFillCheckbox>
  </HoverCircle>
);

export default FillCheckbox;
