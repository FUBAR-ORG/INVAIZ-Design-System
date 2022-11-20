import useEventListener from '@components/Dropdowns/hooks/useEventListener';

type Handler = (event: MouseEvent) => void;

function useOnClickOutside<T extends HTMLElement | null = HTMLElement>(
  ref: T,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void {
  useEventListener(mouseEvent, (event) => {
    if (!(event.target instanceof Node)) {
      return;
    }
    if (ref?.contains(event.target)) {
      return;
    }
    handler(event);
  });
}

export default useOnClickOutside;
