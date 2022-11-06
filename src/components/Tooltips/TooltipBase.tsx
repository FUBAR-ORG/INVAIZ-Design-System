import { type ReactNode, useState, useRef, useEffect, cloneElement } from 'react';
import { createPortal } from 'react-dom';
// React modules

import {
  type TooltipBorderRadiusProps,
  type TooltipSingleChildrenProps,
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

interface TooltipBaseProps extends TooltipBorderRadiusProps, TooltipSingleChildrenProps {
  contents: ReactNode;
}

/**
 * 툴팁의 베이스 역할을 하는 컴포넌트입니다.
 */
const TooltipBase = ({ contents, borderRadiusRatio = 2, children }: TooltipBaseProps) => {
  const timer = useRef<NodeJS.Timer | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLElement>(null);

  const [visible, setVisible] = useState(false);
  const [point, setPoint] = useState<Point>({
    x: -1,
    y: -1,
  });

  useEffect(() => {
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

    const tooltipRefValue = tooltipRef.current;
    const childrenRefValue = childrenRef.current;
    childrenRefValue?.addEventListener('mouseover', onMouseOver);
    childrenRefValue?.addEventListener('mouseleave', onMouseLeave);

    console.log(tooltipRefValue, childrenRefValue);
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
  }, [tooltipRef, childrenRef]);

  return (
    <>
      {visible &&
        createPortal(
          <StyleTooltip
            role='tooltip'
            ref={tooltipRef}
            {...point}
            borderRadiusRatio={borderRadiusRatio}
          >
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

interface StyleTooltipProps extends Partial<Point>, Required<TooltipBorderRadiusProps> {}

const StyleTooltip = styled.div<StyleTooltipProps>`
  position: fixed;
  ${({ x, y }) =>
    x !== undefined &&
    y !== undefined &&
    css`
      top: ${y}px;
      left: ${x}px;
    `};

  padding: 20px;

  background: ${({ theme }) => theme.color.grayScale.coolGray800}e6; // 투명도 90%

  border-radius: ${({ borderRadiusRatio }) => borderRadiusRatio * TOOLTIP_BORDER_RADIUS_UNIT}px;

  ${({ theme }) => theme.style.boxShadow.dropdownEmphasis};
  transform: translateX(-50%);
`;

export default TooltipBase;
