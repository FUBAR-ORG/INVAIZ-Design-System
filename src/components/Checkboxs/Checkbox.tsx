import type { InputHTMLAttributes } from 'react';
// types

import {
  StyleCheckboxWrapper,
  StyleCheckIcon,
  StyleCheckboxView,
  StyleCheckboxText,
  StyleCheckboxInput,
} from '@components/Checkboxs/Checkbox.style';
// styles
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
}

const Checkbox = ({ text, ...props }: CheckboxProps) => (
  <StyleCheckboxWrapper>
    <StyleCheckboxInput type='checkbox' {...props} />
    <StyleCheckboxView>
      <StyleCheckIcon size={20} icon='Check' />
    </StyleCheckboxView>
    {text && <StyleCheckboxText>{text}</StyleCheckboxText>}
  </StyleCheckboxWrapper>
);

export default Checkbox;
