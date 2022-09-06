import { useEffect } from 'react';

const useExternalClick = (args: { selector: string; effect: () => void }) =>
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { target } = e;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      const searchedElements = document.querySelectorAll(args.selector);
      const isInside = Array.from(searchedElements).some((el) => el.contains(target));
      if (!isInside) {
        args.effect();
      }
    };
    const handleKeydown = (e: KeyboardEvent) => e.key === 'Escape' && args.effect();

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [args]);

export default useExternalClick;
