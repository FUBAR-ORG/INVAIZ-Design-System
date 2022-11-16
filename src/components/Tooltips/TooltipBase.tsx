import { type ReactNode, useState, useRef, useEffect, cloneElement } from 'react';
import { createPortal } from 'react-dom';
// React modules

import Popper from '@components/Tooltips/Popper';
// components

import type { TooltipCommonProps } from '@components/Tooltips/interfaces/Tooltip.interface';
import type { Point } from '@components/Tooltips/interfaces/Popper.interface';
// interfaces

interface TooltipBaseProps extends TooltipCommonProps {
  contents: ReactNode;
}

/**
 * 툴팁의 베이스 역할을 하는 컴포넌트입니다.
 */
const TooltipBase = ({ contents, borderRadiusRatio = 2, isArrow, children }: TooltipBaseProps) => {
  const timer = useRef<NodeJS.Timer | null>(null);
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
          <Popper {...point} borderRadiusRatio={borderRadiusRatio} isArrow={isArrow}>
            {contents}
          </Popper>,
          document.body
        )}
      {cloneElement(children, {
        ref: childrenRef,
      })}
    </>
  );
};

export default TooltipBase;
