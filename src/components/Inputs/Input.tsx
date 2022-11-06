import { type InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import { Wrapper, Box, ClearableIcon } from '@components/Inputs/Input.style';

/**
 * INVAIZ Input Props
 *
 * @param type box | bar | search
 * @param width 박스의 가로 길이
 * @param onClear 내용 지우기 버튼의 기능
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'box';
  width?: number;
  onClear?: () => void;
}

/**
 * INVAIZ Input
 *
 * @param InputHTMLAttributes
 * @param type box | bar | search
 * @param width 박스의 가로 길이
 * @param onClear 내용 지우기 버튼의 기능
 *
 * @returns HTMLDivElement > HTMLInputElement
 */
const Input = ({ type = 'box', width, onClear, value, ...props }: InputProps) => {
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
      {type === 'box' && <Box type='text' {...props} ref={ref} />}

      {onClear && isFilled && (
        <button type='button' onClick={clear}>
          <ClearableIcon icon='Cancel' size={16} />
        </button>
      )}
    </Wrapper>
  );
};

export default Input;
