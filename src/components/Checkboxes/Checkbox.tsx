import type { InputHTMLAttributes } from 'react';
// types

import {
  StyleCheckboxWrapper,
  StyleCheckIcon,
  StyleCheckboxView,
  StyleCheckbox,
  StyleCheckboxText,
  StyleCheckboxInput,
} from '@components/Checkboxes/styles/Checkbox.style';
// styles

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * 체크 박스 우측에 표시될 텍스트입니다.
   */
  text?: string;
}

/**
 * 단독 선택 체크박스
 */
const Checkbox = ({ text, ...props }: CheckboxProps) => (
  <StyleCheckboxWrapper>
    <StyleCheckboxInput type='checkbox' {...props} />
    <StyleCheckboxView>
      <StyleCheckbox>
        <StyleCheckIcon size={20} icon='Check' />
      </StyleCheckbox>
    </StyleCheckboxView>
    {text && <StyleCheckboxText>{text}</StyleCheckboxText>}
  </StyleCheckboxWrapper>
);

export default Checkbox;
