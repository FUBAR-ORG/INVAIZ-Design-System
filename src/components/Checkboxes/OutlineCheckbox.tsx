import type { CheckboxDefaultProps } from '@components/Checkboxes/interfaces/Checkbox.interface';
// types

import {
  StyleLabel,
  StyleOutlineCheckIcon,
  StyleOutlineCheckbox,
  StyleOutlineCheckboxInput,
  StyleOutlineCheckboxHover,
  StyleCheckboxText,
} from '@components/Checkboxes/styles/OutlineCheckbox.style';
// styles

export interface CheckboxProps extends CheckboxDefaultProps {
  /**
   * 체크 박스 우측에 표시될 텍스트입니다.
   */
  text: string;
}

/**
 * 단독 선택 체크박스
 */
const OutlineCheckbox = ({ text, onChange, disabled, ...props }: CheckboxProps) => (
  <StyleLabel>
    <StyleOutlineCheckboxHover disabled={disabled}>
      <StyleOutlineCheckboxInput
        type='checkbox'
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
        {...props}
      />
      <StyleOutlineCheckbox>
        <StyleOutlineCheckIcon size={20} icon='Subtract' />
      </StyleOutlineCheckbox>
    </StyleOutlineCheckboxHover>
    <StyleCheckboxText disabled={disabled}>{text}</StyleCheckboxText>
  </StyleLabel>
);

export default OutlineCheckbox;
