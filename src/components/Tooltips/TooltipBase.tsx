import { type ReactNode, useState, useRef, useEffect, cloneElement } from 'react';
import { createPortal } from 'react-dom';
// React modules

import Popper from '@components/Tooltips/Popper';
// components

import type { TooltipCommonProps } from '@components/Tooltips/interfaces/Tooltip.interface';
import type { Point } from '@components/Tooltips/interfaces/Popper.interface';
// interfaces

const BETWEEN_CONTENTS_SPACE = 10 as const;
const HAVE_ARROW_ADDITIONAL_SPACE = 7 as const;
// constants

interface TooltipBaseProps extends TooltipCommonProps {
  contents: ReactNode;
}

/**
 * 툴팁의 베이스 역할을 하는 컴포넌트입니다.
 */
const TooltipBase = ({ contents, borderRadiusRatio = 2, isArrow, children }: TooltipBaseProps) => {
  const childrenRef = useRef<HTMLElement>(null);

  const [visible, setVisible] = useState(false);
  const [point, setPoint] = useState<Point>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onMouseOver = () => {
      setVisible(() => true);
    };

    const onMouseLeave = () => {
      setVisible(() => false);
    };

    const childrenRefValue = childrenRef.current;
    childrenRefValue?.addEventListener('mouseover', onMouseOver);
    childrenRefValue?.addEventListener('mouseleave', onMouseLeave);

    if (childrenRefValue) {
      const { x, y, width, height } = childrenRefValue.getBoundingClientRect();
      setPoint({
        x: x + width / 2,
        y: y + height + BETWEEN_CONTENTS_SPACE + (isArrow ? HAVE_ARROW_ADDITIONAL_SPACE : 0),
      });
    }

    return () => {
      childrenRefValue?.removeEventListener('mouseover', onMouseOver);
      childrenRefValue?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [childrenRef, isArrow]);

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
