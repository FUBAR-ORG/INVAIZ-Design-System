import { type PropsWithChildren, useState, useEffect } from 'react';
// React modules

import {
  type TooltipCommonProps,
  TOOLTIP_BORDER_RADIUS_UNIT,
} from '@components/Tooltips/interfaces/Tooltip.interface';
import type { Point, Rect } from '@components/Tooltips/interfaces/Popper.interface';
// interfaces

import styled from '@emotion/styled';
import { css } from '@emotion/react';
// styles

const OUTLINE_PIXEL = 10 as const;
// constants

type PopperBaseProps = Required<Pick<TooltipCommonProps, 'borderRadiusRatio'>>;
type PopperProps = PropsWithChildren<PopperBaseProps & Pick<TooltipCommonProps, 'isArrow'> & Point>;
// types

const Popper = ({ x, y, borderRadiusRatio, isArrow, children }: PopperProps) => {
  const [popperRef, setPopperRef] = useState<HTMLDivElement | null>(null);
  const [delta, setDelta] = useState<Rect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const calculateDelta = () => {
      if (popperRef) {
        const { x: deltaX, width } = popperRef.getBoundingClientRect();
        if (deltaX < OUTLINE_PIXEL) {
          setDelta((prev) => ({ ...prev, x: OUTLINE_PIXEL - deltaX }));
        } else if (deltaX > window.innerWidth - OUTLINE_PIXEL) {
          setDelta((prev) => ({ ...prev, x: window.innerHeight - OUTLINE_PIXEL - deltaX }));
        }
        setDelta((prev) => ({ ...prev, width }));
      }
    };
    calculateDelta();

    const resizeObserver = new ResizeObserver(calculateDelta);
    if (popperRef) {
      resizeObserver.observe(popperRef);
    }
    return () => {
      if (popperRef) {
        resizeObserver.unobserve(popperRef);
      }
    };
  }, [popperRef]);

  return (
    <StylePopperWrapper ref={setPopperRef} role='tooltip' x={x} y={y}>
      <StylePopper {...delta} borderRadiusRatio={borderRadiusRatio}>
        {children}
      </StylePopper>
      {isArrow && <StylePopperArrow />}
    </StylePopperWrapper>
  );
};

export default Popper;

const StylePopperWrapper = styled.div<Point>`
  position: fixed;
  max-width: calc(100vw - ${OUTLINE_PIXEL * 2}px);

  ${({ x, y }) =>
    (x !== 0 || y !== 0) &&
    css`
      top: ${y}px;
      left: ${x}px;
    `};

  color: ${({ theme }) => theme.color.grayScale.coolGray800}e6; // 투명도 90%

  transform: translateX(-50%);
`;

interface StylePopperProps extends Point, PopperBaseProps {}

const StylePopper = styled.div<StylePopperProps>`
  padding: 20px;

  background: currentColor;

  border-radius: ${({ borderRadiusRatio }) => borderRadiusRatio * TOOLTIP_BORDER_RADIUS_UNIT}px;

  ${({ theme }) => theme.style.boxShadow.dropdownEmphasis};

  transform: translateX(${({ x }) => x}px);
  overflow: hidden;
`;

const StylePopperArrow = styled.div`
  position: absolute;
  top: -7px;
  left: 50%;

  display: flex;
  width: 8px;
  height: 7px;

  transform: translateX(-50%);

  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 5.5px;
    left: 50%;

    display: block;
    width: 7.35px;
    height: 7.35px;

    background: currentColor;

    transform: translateX(-50%) scaleY(${18 / (Math.sqrt(2) * 7.35)}) rotate(45deg);
  }
`;
