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

export interface MultipleCheckboxProps extends CheckboxDefaultProps {
  /**
   * 다중 선택 체크박스의 잠금 상태를 설정합니다.
   * `true`를 전달할 시 잠금 아이콘으로 변경되고, `input`의 상태가 `disabled`와 같아집니다.
   */
  locked?: boolean;
}

/**
 * 다중 선택 체크박스
 */
const MultipleCheckbox = ({ locked, disabled, onChange, ...props }: MultipleCheckboxProps) => {
  const isDisabled = locked || disabled;
  return (
    <StyleCheckboxView>
      <StyleMultipleCheckboxInput
        type='checkbox'
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={isDisabled}
        {...props}
      />
      {locked ? (
        <StyleMultipleLockIcon size={20} icon='Lock' />
      ) : (
        <StyleMultipleCheckbox>
          <StyleMultipleCheckIcon size={20} icon='Check' />
        </StyleMultipleCheckbox>
      )}
    </StyleCheckboxView>
  );
};

export default MultipleCheckbox;
