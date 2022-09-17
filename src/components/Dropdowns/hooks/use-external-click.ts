import { useEffect } from 'react';

type UseExternalClick = (args: { selector: string; effect: () => void }) => void;

const useExternalClick: UseExternalClick = ({ selector, effect }) =>
  useEffect(() => {
    const handleClick = ({ target }: MouseEvent) => {
      if (!(target instanceof HTMLElement)) {
        return;
      }
      const searchedElements = document.querySelectorAll(selector);
      const isInside = Array.from(searchedElements).some((el) => el.contains(target));
      if (isInside) {
        return;
      }
      effect();
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [selector, effect]);

export default useExternalClick;
