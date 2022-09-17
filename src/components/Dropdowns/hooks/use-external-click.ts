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
    const handleKeydown = (e: KeyboardEvent) => e.key === 'Escape' && effect();

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [selector, effect]);

export default useExternalClick;
