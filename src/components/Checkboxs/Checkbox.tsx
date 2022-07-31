import type { InputHTMLAttributes } from 'react';
// types

import {
  StyleCheckboxWrapper,
  StyleCheckIcon,
  StyleCheckboxView,
  StyleCheckbox,
  StyleCheckboxText,
  StyleCheckboxInput,
} from '@components/Checkboxs/Checkbox.style';
// styles

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
}

const Checkbox = ({ text, onChange, ...props }: CheckboxProps) => (
  <StyleCheckboxWrapper>
    <StyleCheckboxInput type='checkbox' onChange={(e) => onChange?.(e)} {...props} />
    <StyleCheckboxView>
      <StyleCheckbox>
        <StyleCheckIcon size={20} icon='Check' />
      </StyleCheckbox>
    </StyleCheckboxView>
    {text && <StyleCheckboxText>{text}</StyleCheckboxText>}
  </StyleCheckboxWrapper>
);

export default Checkbox;
