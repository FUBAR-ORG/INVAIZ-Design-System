import { useState, useRef, cloneElement } from 'react';
import { createPortal } from 'react-dom';
// React modules

import {
  type TooltipBaseProps,
  TOOLTIP_BORDER_RADIUS_UNIT,
} from '@components/Tooltips/interfaces/Tooltip.interface';
// interfaces

/**
 * 기본적인 툴팁입니다.
 */
const Tooltip = ({ children, text, textSize, borderRadiusRatio = 2 }: TooltipBaseProps) => {
  const timer = useRef<NodeJS.Timer | null>(null);
  const childrenRef = useRef<HTMLElement>(null);

  const [visible, setVisible] = useState(false);

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

  return (
    <>
      {visible &&
        createPortal(
          <div
            role='tooltip'
            style={{
              fontSize: textSize,
              borderRadius: borderRadiusRatio * TOOLTIP_BORDER_RADIUS_UNIT,
            }}
          >
            {text}
          </div>,
          document.body
        )}
      {cloneElement(children, {
        ref: childrenRef,
        onMouseOver,
        onMouseLeave,
      })}
    </>
  );
};

export default Tooltip;
