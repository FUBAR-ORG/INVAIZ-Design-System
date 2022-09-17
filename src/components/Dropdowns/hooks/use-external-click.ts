import { useEffect } from 'react';

type UseExternalClick = (args: { selector: string; listener: () => void }) => void;

const useExternalClick: UseExternalClick = ({ selector, listener }) =>
  useEffect(() => {
    const handleClick = ({ target }: MouseEvent) => {
      if (!(target instanceof HTMLElement)) {
        return;
      }
      const searchedElements = document.querySelectorAll(selector);
      const isExternal = Array.from(searchedElements).every((el) => !el.contains(target));
      if (isExternal) {
        listener();
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [selector, listener]);

export default useExternalClick;
