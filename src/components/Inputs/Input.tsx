import { type InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import {
  Wrapper,
  Box,
  Bar,
  ClearableIcon,
  RequiredIcon,
  ErrorMessage,
} from '@components/Inputs/Input.style';

/**
 * INVAIZ Input Props
 *
 * @param type box | bar | search
 * @param width 박스의 가로 길이
 * @param onClear 내용 지우기 버튼의 기능
 * @param errorMessage 내용과 관련된 에러 메세지
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'box' | 'bar';
  width?: number;
  onClear?: () => void;
  errorMessage?: string;
}

/**
 * INVAIZ Input
 *
 * @param InputHTMLAttributes
 * @param type box | bar | search
 * @param width 박스의 가로 길이
 * @param onClear 내용 지우기 버튼의 기능
 * @param errorMessage 내용과 관련된 에러 메세지
 *
 * @returns HTMLDivElement > HTMLInputElement
 */
const Input = ({ type = 'box', width, onClear, errorMessage = '', ...props }: InputProps) => {
  const { value, disabled, required } = props;

  const [isFilled, setIsFilled] = useState(false);

  const ref = useRef<HTMLInputElement | null>(null);
  const { current } = ref;

  const clear =
    onClear &&
    // eslint-disable-next-line func-names
    function () {
      if (current) {
        current.value = '';
        current.focus();
        onClear();
      }
    };

  useEffect(() => {
    setIsFilled(!!value);
  }, [value]);

  return (
    <Wrapper width={width}>
      {type === 'box' && <Box type='text' isClearable={!!onClear} {...props} ref={ref} />}
      {type === 'bar' && <Bar type='text' isClearable={!!onClear} {...props} ref={ref} />}

      {!disabled && (
        <>
          {onClear && isFilled && (
            <button type='button' onClick={clear}>
              <ClearableIcon icon='Cancel' size={16} />
            </button>
          )}
          {required && !isFilled && (
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
