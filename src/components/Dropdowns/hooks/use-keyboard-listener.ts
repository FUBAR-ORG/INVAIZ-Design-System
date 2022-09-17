import { useEffect } from 'react';

type UseKeyboardListener = (args: { key: string; effect: (e: KeyboardEvent) => void }) => void;

const useKeyboardListener: UseKeyboardListener = ({ key, effect }) =>
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => e.key === key && effect(e);
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [key, effect]);

export default useKeyboardListener;
