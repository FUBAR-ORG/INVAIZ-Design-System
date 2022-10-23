import type { TooltipBaseProps } from '@components/Tooltips/interfaces/Tooltip.interface';
// types

import { useState, useRef, cloneElement } from 'react';
import { createPortal } from 'react-dom';
// React modules

const Tooltip = ({ children }: TooltipBaseProps) => {
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
      {visible && createPortal(<div role='tooltip'>this is ToolTip</div>, document.body)}
      {cloneElement(children, {
        ref: childrenRef,
        onMouseOver,
        onMouseLeave,
      })}
    </>
  );
};

// interface TestProps {
//   children: FunctionComponentElement<RefAttributes<HTMLElement>>;
// }
//
// const Test = ({ children }: TestProps) => {
// };

export default Tooltip;
