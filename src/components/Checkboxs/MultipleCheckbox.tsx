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
  /**
   * 다중 선택 체크박스의 잠금 상태를 설정합니다.
   * `true`를 전달할 시 잠금 아이콘으로 변경되고, `input`의 상태가 `disabled`와 같아집니다.
   */
  locked?: boolean;
}

/**
 * 다중 선택 체크박스
 */
const MultipleCheckbox = ({ locked, onChange, disabled, ...props }: MultipleCheckboxProps) => {
  const isDisabled = locked || disabled;
  return (
    <StyleCheckboxWrapper>
      <StyleMultipleCheckboxInput
        type='checkbox'
        onChange={(e) => onChange?.(e)}
        disabled={isDisabled}
        {...props}
      />
      <StyleCheckboxView>
        {locked ? (
          <StyleMultipleLockIcon size={20} icon='Lock' />
        ) : (
          <StyleMultipleCheckbox>
            <StyleMultipleCheckIcon size={20} icon='Check' />
          </StyleMultipleCheckbox>
        )}
      </StyleCheckboxView>
    </StyleCheckboxWrapper>
  );
};

export default MultipleCheckbox;
