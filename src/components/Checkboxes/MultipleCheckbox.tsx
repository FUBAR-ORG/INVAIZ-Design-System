import type { CheckboxDefaultProps } from '@components/Checkboxes/Checkbox';
// types

import { StyleCheckboxView } from '@components/Checkboxes/styles/CommonCheckbox.style';
import {
  StyleMultipleLockIcon,
  StyleMultipleCheckIcon,
  StyleMultipleCheckbox,
  StyleMultipleCheckboxInput,
} from '@components/Checkboxes/styles/MultipleCheckbox.style';
// styles

/**
 * 다중 선택 체크박스
 */
const MultipleCheckbox = ({ disabled, onChange, ...props }: CheckboxDefaultProps) => (
  <StyleCheckboxView>
    <StyleMultipleCheckboxInput
      type='checkbox'
      onChange={(e) => onChange?.(e.target.checked)}
      disabled={disabled}
      {...props}
    />
    {disabled ? (
      <StyleMultipleLockIcon size={20} icon='Lock' />
    ) : (
      <StyleMultipleCheckbox>
        <StyleMultipleCheckIcon size={20} icon='Check' />
      </StyleMultipleCheckbox>
    )}
  </StyleCheckboxView>
);

export default MultipleCheckbox;
