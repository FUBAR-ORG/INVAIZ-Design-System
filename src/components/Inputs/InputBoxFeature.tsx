import { type InputHTMLAttributes, useEffect, useRef, useState, SyntheticEvent } from 'react';

import InputBox from '@components/Inputs/InputBox';

import { ClearableIcon, RequiredIcon, Wrapper } from '@components/Inputs/Input.style';

/**
 * INVAIZ Input Box Feature Props
 *
 * @param boxWidth type="image"의 width와 구분을 위한 box 자체의 width
 * @param clearable clear 기능 여부
 */
export interface InputBoxFeatureProps extends InputHTMLAttributes<HTMLInputElement> {
  boxWidth?: number;
  clearable?: boolean;
}

/**
 * INVAIZ Input Feature Box
 *
 * @param InputHTMLAttributes
 * @param boxWidth type="image"의 width와 구분을 위한 box 자체의 width
 * @param clearable clear 기능 여부
 *
 * @returns HTMLDivElement > HTMLInputElement
 */
const InputBoxFeature = ({ ...props }: InputBoxFeatureProps) => {
  const { disabled, clearable, required, value, boxWidth, onChange } = props;

  const [isFilled, setIsFilled] = useState(false);

  const ref = useRef<HTMLInputElement | null>(null);
  const { current } = ref;

  const onClear = clearable
    ? (e: SyntheticEvent) => {
        if (current && onChange) {
          onChange({ ...e, target: { value: '' } });
          current.focus();
        }
      }
    : undefined;

  useEffect(() => {
    if (value === '') {
      setIsFilled(false);
    } else {
      setIsFilled(true);
    }
  }, [value]);

  return (
    <Wrapper boxWidth={boxWidth}>
      <InputBox {...props} ref={ref} />
      {!disabled && (
        <>
          {clearable && isFilled && (
            <button type='button' onClick={onClear}>
              <ClearableIcon icon='Cancel' size={16} />
            </button>
          )}
          {required && !isFilled && (
            <RequiredIcon data-testid='required-icon' icon='Caution' size={16} />
          )}
        </>
      )}
    </Wrapper>
  );
};

export default InputBoxFeature;
