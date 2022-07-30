import type { InputHTMLAttributes } from 'react';
// types

import {
  StyleCheckboxLabel,
  StyleCheckboxInput,
  StyleCheckbox,
  StyleCheckboxText,
} from '@components/Checkboxs/Checkbox.style';
// styles

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
}

const Checkbox = ({ text, ...props }: CheckboxProps) => {
  return (
    <StyleCheckboxLabel>
      <StyleCheckbox>?</StyleCheckbox>
      {text && <StyleCheckboxText />}
      <StyleCheckboxInput {...props} />
    </StyleCheckboxLabel>
  );
};

export default Checkbox;
