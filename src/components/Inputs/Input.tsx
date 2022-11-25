import { type InputHTMLAttributes, forwardRef } from 'react';

import {
  Label,
  StyleInput,
  ClearableIcon,
  RequiredIcon,
  ErrorMessage,
} from '@components/Inputs/Input.style';

/**
 * INVAIZ Input Props
 *
 * @param shape box | bar
 * @param width 박스의 가로 길이
 * @param onClear 지우기 기능
 * @param errorMessage 내용과 관련된 에러 메세지
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  shape?: 'box' | 'bar';
  width?: number;
  onClear?: () => void;
  errorMessage?: string;
}

/**
 * INVAIZ Input
 *
 * @param InputHTMLAttributes
 * @param shape box | bar
 * @param width 박스의 가로 길이
 * @param onClear 지우기 기능
 * @param errorMessage 내용과 관련된 에러 메세지
 *
 * @returns HTMLLabelElement > HTMLInputElement
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ shape = 'box', width, onClear, errorMessage, ...props }, ref) => {
    const { value, required, disabled } = props;

    const isFilled = value !== '' && onClear;
    const isRequired = value === '' && required;

    return (
      <Label width={width}>
        <StyleInput ref={ref} shape={shape} isClearable={!!onClear} {...props} />

        {!disabled && (
          <>
            {isFilled && (
              <button type='button' onClick={onClear}>
                <ClearableIcon data-testid='clear-icon' icon='Cancel' size={16} />
              </button>
            )}

            {isRequired && (
              <>
                <RequiredIcon data-testid='required-icon' icon='Caution' size={16} />
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
              </>
            )}
          </>
        )}
      </Label>
    );
  }
);

export default Input;
