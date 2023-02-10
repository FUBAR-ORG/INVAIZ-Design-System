import type SVG_ICONS from '@assets/svg';
// types

import { type ChangeEvent, useState, useEffect } from 'react';
// React modules

import SvgIcon from '@components/SvgIcons/SvgIcon';
// components

import styled from '@emotion/styled';
import { type Theme, css } from '@emotion/react';
// styles

interface SliderProps {
  /**
   * 슬라이더의 넓이를 지정합니다.
   */
  width?: number;
  /**
   * 슬라이더의 높이를 지정합니다.
   * 높이를 통해 슬라이더 내부 요소의 세로 크기가 결정됩니다.
   */
  height?: number;
  /**
   * 슬라이더 조작 시 발생하는 이벤트 리스너입니다.
   *
   * @param value 조작 후 변경된 값을 매개 변수로 입력 받습니다.
   */
  onChange?: (value: number) => void;
  /**
   * 슬라이더 좌측에 표시될 아이콘입니다.
   */
  icon?: keyof typeof SVG_ICONS;
  iconSize?: 16 | 20 | 24;
  /**
   * 슬라이더의 현재 값입니다.
   *
   * * 기본값은 최솟값과 같습니다.
   */
  value?: number;
  /**
   * 슬라이더의 최솟값입니다.
   *
   * * 기본값은 0입니다.
   */
  min?: number;
  /**
   * 슬라이더의 최댓값입니다.
   *
   * * 기본값은 100입니다.
   */
  max?: number;
  /**
   * 슬라이더에서 한 칸의 범위를 지정합니다.
   *
   * * 기본값은 1입니다.
   */
  step?: number;
  /**
   * 슬라이더 비활성화 여부입니다.
   */
  disabled?: boolean;
}

/**
 * 사용자에게 수치 조절 기능을 제공할 때 사용하는 슬라이더입니다.
 */
const Slider = ({
  width,
  height = 16,
  onChange,
  icon,
  iconSize = 16,
  value,
  min = 0,
  max = 100,
  step,
  disabled,
}: SliderProps) => {
  const [innerValue, setInnerValue] = useState(value ?? min ?? 0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(Number(e.target.value));
  };

  useEffect(() => {
    onChange?.(innerValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [innerValue]);

  useEffect(() => {
    if (value !== undefined && innerValue !== value) {
      setInnerValue(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Box>
      {icon && <Icon size={iconSize} icon={icon} />}
      <InputRange
        type='range'
        onChange={handleChange}
        width={width}
        height={height}
        value={innerValue}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        innerValue={innerValue}
      />
      <input type='range' />
    </Box>
  );
};

export default Slider;

const Box = styled.div`
  display: inline-flex;
  align-items: center;
`;

const thumbStyle = ({ theme, height }: { theme: Theme; height: number }) => css`
  position: relative;

  background: ${theme.normal.grayScale.basic.white};

  border: solid ${(height * 3) / 4}px ${theme.color.primary.blue500};
  border-radius: 50%;

  width: ${`${height * 3}px`};
  height: ${`${height * 3}px`};

  cursor: pointer;
  appearance: none;

  transition: border 0.2s ease-in-out;
  &:hover {
    border-width: ${`${(height * 9) / 16}px`};
  }
  &:active {
    border-width: ${`${height}px`};
  }

  box-sizing: border-box;
`;

interface InputRangeProps {
  width?: number;
  height: number;

  min: number;
  max: number;

  innerValue: number;
}

const InputRange = styled.input<InputRangeProps>`
  &[type='range'] {
    width: ${({ width }) => (width ? `${width}px` : 'auto')};
    height: ${({ height }) => `${height}px`};

    color: ${({ theme }) => theme.color.primary.blue500};
    background-color: ${({ theme }) => theme.color.grayScale.coolGray200};
    background-image: linear-gradient(
      ${({ theme }) => `${theme.color.primary.blue500}, ${theme.color.primary.blue500}`}
    );
    background-repeat: no-repeat;
    background-size: ${({ max, min, innerValue }) =>
      `${((innerValue - min) * 100) / (max - min)}% 100%`};

    border-radius: ${({ height }) => `${height / 2}px`};

    margin: ${({ height }) => height}px 0;
    padding: 0;
    border: none;

    appearance: none;
    outline: none;

    &::-webkit-slider-thumb {
      ${thumbStyle}
    }
    &::-moz-range-thumb {
      ${thumbStyle}
    }
    &::-ms-thumb {
      ${thumbStyle}
    }
  }
`;

const Icon = styled(SvgIcon)`
  margin: ${({ size }) => `${(size ?? 0) / 2}px`};
`;
