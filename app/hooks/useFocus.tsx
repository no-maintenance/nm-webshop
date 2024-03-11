import {useRef} from 'react';

export function useFocus<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const setFocus = () => ref?.current?.focus?.();

  return [ref, setFocus] as const;
}
