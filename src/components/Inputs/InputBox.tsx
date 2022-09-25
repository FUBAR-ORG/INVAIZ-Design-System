import { type InputHTMLAttributes, useRef, useState, useEffect } from 'react';

import { Wrapper, Input, ClearableIcon, RequiredIcon } from '@components/Inputs/Input.style';

/**
 * INVAIZ Input Box Props
 *
 * @param boxWidth type="image"의 width와 구분을 위한 box 자체의 width
 * @param clear clear 기능
 */
export interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  boxWidth?: number;
  clear?: () => void;
}

/**
 * INVAIZ Input Box
 *
 * @param InputHTMLAttributes
 * @param boxWidth type="image"의 width와 구분을 위한 box 자체의 width
 * @param clear clear 기능
 *
 * @returns HTMLElment div > input
 */
const InputBox = ({ ...props }: InputBoxProps) => {
  const { disabled, required, value, boxWidth, clear } = props;
  const isClearable = clear !== undefined;

  const ref = useRef<HTMLInputElement | null>(null);
  const { current } = ref;

  const [isFilled, setIsFilled] = useState(false);

  const onClear = () => {
    if (current && isClearable) {
      clear();
      current.focus();
      setIsFilled(false);
    }
  };

  useEffect(() => {
    if (value === '') {
      setIsFilled(false);
    } else {
      setIsFilled(true);
    }
  }, [value]);

  return (
    <Wrapper boxWidth={boxWidth}>
      <Input ref={ref} isClearable={isClearable} {...props} />
      {!disabled && (
        <>
          {isClearable && isFilled && <ClearableIcon icon='Cancel' size={16} onClick={onClear} />}
          {required && !isFilled && <RequiredIcon icon='Caution' size={16} />}
        </>
      )}
    </Wrapper>
  );
};

export default InputBox;
