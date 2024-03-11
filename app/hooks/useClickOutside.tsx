import type {RefObject} from 'react';
import {useEffect} from 'react';

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]); // Re-run if ref or callback changes
}
