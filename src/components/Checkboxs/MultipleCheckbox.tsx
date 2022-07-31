import type { InputHTMLAttributes } from 'react';
// types

import { StyleCheckboxWrapper, StyleCheckboxView } from '@components/Checkboxs/Checkbox.style';
import {
  StyleMultipleLockIcon,
  StyleMultipleCheckIcon,
  StyleMultipleCheckbox,
  StyleMultipleCheckboxInput,
} from '@components/Checkboxs/MultipleCheckbox.style';
// styles

export interface MultipleCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  locked?: boolean;
}

const MultipleCheckbox = ({ locked, onChange, disabled, ...props }: MultipleCheckboxProps) => {
  const isDisabled = locked || disabled;
  return (
    <StyleCheckboxWrapper>
      <StyleMultipleCheckboxInput
        type='checkbox'
        onChange={(e) => onChange?.(e)}
        {...props}
        disabled={isDisabled}
      />
      <StyleCheckboxView>
        {locked ? (
          <StyleMultipleLockIcon size={20} icon='Lock' />
        ) : (
          <StyleMultipleCheckbox>
            <StyleMultipleCheckIcon size={20} icon='CheckBox' />
          </StyleMultipleCheckbox>
        )}
      </StyleCheckboxView>
    </StyleCheckboxWrapper>
  );
};

export default MultipleCheckbox;
