import type { ChangeEvent } from 'react';
import type SVG_ICONS from '@assets/svg';
import { useState } from 'react';
// types

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
 * 사용자에게 수치 조절 기능을 제공할 때 사용하느 슬라이더입니다.
 */
const Slider = ({ width, height, onChange, icon, ...restProps }: SliderProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(parseInt(e.target.value, 10));
  };

  useState();

  return (
    <div>
      {width} {height}
      {icon}
      <input type='range' onChange={handleChange} {...restProps} />
    </div>
  );
};

export default Slider;
