import { type InputHTMLAttributes, useEffect, useRef, useState, SyntheticEvent } from 'react';

import InputBar from '@components/Inputs/InputBar';

import { ClearableIcon, RequiredIcon, Wrapper } from '@components/Inputs/Input.style';

/**
 * INVAIZ Input Bar Feature Props
 *
 * @param barWidth type="image"의 width와 구분을 위한 bar 자체의 width
 * @param clearable clear 기능 여부
 */
export interface InputBarFeatureProps extends InputHTMLAttributes<HTMLInputElement> {
  barWidth?: number;
  clearable?: boolean;
}

/**
 * INVAIZ Input Bar Feature
 *
 * @param InputHTMLAttributes
 * @param barWidth type="image"의 width와 구분을 위한 bar 자체의 width
 * @param clearable clear 기능 여부
 *
 * @returns HTMLDivElement > HTMLInputElement
 */
const InputBarFeature = ({ ...props }: InputBarFeatureProps) => {
  const { disabled, clearable, required, value, barWidth, onChange } = props;

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
    <Wrapper width={barWidth}>
      <InputBar {...props} ref={ref} />
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

export default InputBarFeature;
