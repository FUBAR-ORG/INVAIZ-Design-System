import { type ReactNode, useState, useRef, cloneElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
// React modules

import {
  type BorderRadiusProps,
  type SingleChildrenProps,
  TOOLTIP_BORDER_RADIUS_UNIT,
} from '@components/Tooltips/interfaces/Tooltip.interface';
// interfaces

import styled from '@emotion/styled';
import { css } from '@emotion/react';
// styles

interface Point {
  x: number;
  y: number;
}

interface TooltipBaseProps extends BorderRadiusProps, SingleChildrenProps {
  contents: ReactNode;
}

/**
 * 툴팁의 베이스 역할을 하는 컴포넌트입니다.
 */
const TooltipBase = ({ contents, borderRadiusRatio = 2, children }: TooltipBaseProps) => {
  const timer = useRef<NodeJS.Timer | null>(null);
  const childrenRef = useRef<HTMLElement>(null);

  const [visible, setVisible] = useState(false);
  const [point, setPoint] = useState<Point>({
    x: -1,
    y: -1,
  });

  const onMouseOver = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setVisible(() => true);
  };

  const onMouseLeave = () => {
    timer.current = setTimeout(() => {
      setVisible(() => false);
    }, 200);
  };

  useEffect(() => {
    const childrenRefValue = childrenRef.current;
    childrenRefValue?.addEventListener('mouseover', onMouseOver);
    childrenRefValue?.addEventListener('mouseleave', onMouseLeave);

    if (childrenRefValue) {
      const { x, y, width, height } = childrenRefValue.getBoundingClientRect();
      setPoint({
        x: x + width / 2,
        y: y + height + 10,
      });
    }

    return () => {
      childrenRefValue?.removeEventListener('mouseover', onMouseOver);
      childrenRefValue?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [childrenRef]);

  return (
    <>
      {visible &&
        createPortal(
          <StyleTooltip role='tooltip' {...point} borderRadiusRatio={borderRadiusRatio}>
            {contents}
          </StyleTooltip>,
          document.body
        )}
      {cloneElement(children, {
        ref: childrenRef,
      })}
    </>
  );
};

interface StyleTooltipProps extends Partial<Point>, Required<BorderRadiusProps> {}

const StyleTooltip = styled.div<StyleTooltipProps>`
  position: fixed;
  ${({ x, y }) =>
    x !== undefined &&
    y !== undefined &&
    css`
      top: ${y}px;
      left: ${x}px;
    `};
  transform: translateX(-50%);
  border-radius: ${({ borderRadiusRatio }) => borderRadiusRatio * TOOLTIP_BORDER_RADIUS_UNIT}px;
`;

export default TooltipBase;
