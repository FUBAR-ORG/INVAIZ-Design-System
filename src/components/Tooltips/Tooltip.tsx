import type { TooltipBaseProps } from '@components/Tooltips/interfaces/Tooltip.interface';
// types

import {
  useState,
  useRef,
  Children,
  cloneElement,
  // FunctionComponentElement,
  // RefAttributes,
} from 'react';
// React modules

const Tooltip = ({ text, textSize, borderRadiusRatio, children }: TooltipBaseProps) => {
  const childrenRef = useRef<HTMLElement>(null);
  const timer = useRef<NodeJS.Timer | null>(null);
  const child = Children.only(children);

  const [visible, setVisible] = useState(false);

  console.log(visible, child, childrenRef.current);

  if (!visible) {
    return child;
  }

  return cloneElement(
    <div role='tooltip'>
      {text} {textSize} {borderRadiusRatio}
      {child}
    </div>,
    {
      ref: childrenRef,
      onMouseOver: () => {
        if (timer.current) {
          clearTimeout(timer.current);
        }
        setVisible(() => true);
      },
      onMouseLeave: () => {
        timer.current = setTimeout(() => {
          setVisible(() => false);
        });
      },
    }
  );
};

// interface TestProps {
//   children: FunctionComponentElement<RefAttributes<HTMLElement>>;
// }
//
// const Test = ({ children }: TestProps) => {
// };

export default Tooltip;
