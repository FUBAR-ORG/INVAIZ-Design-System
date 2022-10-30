import { type InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import InputBox from '@components/Inputs/InputBox';

import { ClearableIcon, RequiredIcon, Wrapper } from '@components/Inputs/Input.style';

/**
 * INVAIZ Input Box Feature Props
 *
 * @param boxWidth type="image"의 width와 구분을 위한 box 자체의 width
 * @param onClear clear 기능
 */
export interface InputBoxFeatureProps extends InputHTMLAttributes<HTMLInputElement> {
  boxWidth?: number;
  onClear?: () => void;
}

/**
 * INVAIZ Input Box Feature
 *
 * @param InputHTMLAttributes
 * @param boxWidth type="image"의 width와 구분을 위한 box 자체의 width
 * @param onClear clear 기능
 *
 * @returns HTMLDivElement > HTMLInputElement
 */
const InputBoxFeature = ({ ...props }: InputBoxFeatureProps) => {
  const { disabled, onClear, required, value, boxWidth, onChange } = props;

  const [isFilled, setIsFilled] = useState(false);

  const ref = useRef<HTMLInputElement | null>(null);
  const { current } = ref;

  const clear = onClear
    ? () => {
        if (current && onChange) {
          onClear();
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
    <Wrapper width={boxWidth}>
      <InputBox {...props} ref={ref} />
      {!disabled && (
        <>
          {onClear && isFilled && (
            <button type='button' onClick={clear}>
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
