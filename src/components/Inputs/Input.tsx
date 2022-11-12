import { type InputHTMLAttributes, useRef } from 'react';

import {
  Wrapper,
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
 * @param clearable 내용 지우기 기능 여부
 * @param errorMessage 내용과 관련된 에러 메세지
 * @param onChange 입력 값을 관리하는 함수 (value: string) => string
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  shape?: 'box' | 'bar';
  width?: number;
  clearable?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
}

/**
 * INVAIZ Input
 *
 * @param InputHTMLAttributes
 * @param shape box | bar
 * @param width 박스의 가로 길이
 * @param clearable 내용 지우기 기능 여부
 * @param errorMessage 내용과 관련된 에러 메세지
 * @param onChange 입력 값을 관리하는 함수 (value: string) => string
 *
 * @returns HTMLDivElement > HTMLInputElement
 */
const Input = ({
  shape = 'box',
  width,
  clearable = false,
  errorMessage = '',
  onChange,
  ...props
}: InputProps) => {
  const { value, disabled, required } = props;

  const ref = useRef<HTMLInputElement | null>(null);
  const { current } = ref;

  const clear =
    clearable &&
    // eslint-disable-next-line func-names
    function () {
      if (current && onChange) {
        onChange('');
        current.value = '';
        current.focus();
      }
    };

  return (
    <Wrapper width={width}>
      <StyleInput
        ref={ref}
        shape={shape}
        isClearable={clearable}
        onChange={(e) => onChange?.(e.target.value)}
        value={value}
        {...props}
      />

      {!disabled && (
        <>
          {clear && value && (
            <button type='button' onClick={clear}>
              <ClearableIcon data-testid='clear-icon' icon='Cancel' size={16} />
            </button>
          )}
          {required && !value && (
            <>
              <RequiredIcon data-testid='required-icon' icon='Caution' size={16} />
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Input;
