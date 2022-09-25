import { type InputHTMLAttributes, useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';

import SvgIcon from '@components/SvgIcons/SvgIcon';

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

// style ------------------------------------------------------------------------------------------

interface WrapperProps {
  boxWidth?: number;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${({ boxWidth }) => (boxWidth ? `${boxWidth}px` : '100%')};
  display: flex;
  align-items: center;

  & > svg {
    position: absolute;
    right: 16px;
  }
`;

interface InputProps {
  boxWidth?: number;
  isClearable?: boolean;
}

const Input = styled.input<InputProps>`
  width: 100%;
  height: 32px;
  padding-left: 16px;
  padding-right: ${({ isClearable, required }) => (isClearable || required ? 34 : 16)}px;

  font-size: ${({ theme }) => theme.fontSize.size14}px;

  color: ${({ theme, disabled }) =>
    disabled ? theme.color.system.off1 : theme.color.grayScale.basic.white};

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.grayScale.gray200 : theme.color.grayScale.coolGray400};

  border: none;
  border-radius: 5px;
  outline: none;

  &:focus {
    ${({ theme }) => theme.style.border.selected}
    padding-left: 14px;
    padding-right: ${({ isClearable, required }) => (isClearable || required ? 32 : 14)}px;
  }
`;

const ClearableIcon = styled(SvgIcon)`
  fill: ${({ theme }) => theme.color.grayScale.coolGray500};
  cursor: pointer;
`;

const RequiredIcon = styled(SvgIcon)`
  fill: ${({ theme }) => theme.normal.system.caution1};
  stroke: ${({ theme }) => theme.light.grayScale.coolGray600};
`;

export default InputBox;
