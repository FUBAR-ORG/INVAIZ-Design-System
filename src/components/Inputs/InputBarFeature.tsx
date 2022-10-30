import { type InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import InputBar from '@components/Inputs/InputBar';

import { ClearableIcon, RequiredIcon, Wrapper } from '@components/Inputs/Input.style';

/**
 * INVAIZ Input Bar Feature Props
 *
 * @param barWidth type="image"의 width와 구분을 위한 bar 자체의 width
 * @param onClear clear 기능
 */
export interface InputBarFeatureProps extends InputHTMLAttributes<HTMLInputElement> {
  barWidth?: number;
  onClear?: () => void;
}

/**
 * INVAIZ Input Bar Feature
 *
 * @param InputHTMLAttributes
 * @param barWidth type="image"의 width와 구분을 위한 bar 자체의 width
 * @param onClear clear 기능
 *
 * @returns HTMLDivElement > HTMLInputElement
 */
const InputBarFeature = ({ ...props }: InputBarFeatureProps) => {
  const { disabled, onClear, required, value, barWidth, onChange } = props;

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
    <Wrapper width={barWidth}>
      <InputBar {...props} ref={ref} />
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

export default InputBarFeature;
