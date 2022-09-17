import { useEffect } from 'react';

type UseEventListener = <K extends keyof DocumentEventMap>(
  type: K,
  listener: (this: Document, ev: DocumentEventMap[K]) => unknown,
  options?: boolean | AddEventListenerOptions
) => void;

const useKeyboardListener: UseEventListener = (type, listener, options) =>
  useEffect(() => {
    document.addEventListener(type, listener, options);
    return () => document.removeEventListener(type, listener, options);
  }, [type, listener, options]);

export default useKeyboardListener;
