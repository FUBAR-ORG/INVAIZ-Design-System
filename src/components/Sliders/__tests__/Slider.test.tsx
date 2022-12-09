import { render, fireEvent } from '@tests/test-utils';
// test utils

import Slider from '@components/Sliders/Slider';
// components

describe('Slider', () => {
  it('슬라이더는 마우스 클릭을 통해 값 변경이 가능하다.', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Slider onChange={onChange} />);

    const slider = getByRole('slider');
    fireEvent.mouseDown(slider);
    fireEvent.mouseMove(slider, {
      clientX: 10,
    });
    fireEvent.mouseUp(slider);
    expect(onChange).toBeCalledWith(0);
  });

  it('슬라이더는 마우스 드래그를 통해 값 변경이 가능하다.', () => {});

  it('슬라이더는 아이콘과 함께 렌더링이 가능하다.', () => {});

  it('슬라이더는 `width` 및 `height` 조절이 가능하며, `height`에 따라 막대 등의 요소 크기가 결정된다.', () => {});

  it('슬라이더를 호버할 때, 드래그할 때 내부 원의 크기가 변경된다.', () => {});

  it('슬라이더가 `disabled`일 때, 값 변경이 불가능하며, 호버 시 애니메이션이 발생하지 않는다.', () => {});
});
