import clsx from 'clsx';
import {useEffect, useRef} from 'react';

export function Input({
  className = '',
  type,
  variant,
  isFocused,
  ...props
}: {
  className?: string;
  type?: string;
  variant: 'search' | 'minisearch' | 'mobileSearch';
  [key: string]: any;
  isFocused?: boolean;
}) {
  const variants = {
    mobileSearch:
      'bg-transparent text-heading w-full pl-0 focus:ring-0 focus:shadow-none border-b-black border-x-0 border-t-0 transition focus:ring-primary focus:shadow-primary',
    search:
      'bg-transparent px-0 py-2 text-heading w-full focus:ring-0 border-x-0 border-t-0 transition  border-primary/10 focus:border-primary/90',
    minisearch:
      'bg-transparent hidden md:inline-block text-left lg:text-right border-b transition border-transparent -mb-px border-x-0 border-t-0 appearance-none px-0 py-1 focus:ring-transparent placeholder:opacity-20 placeholder:text-inherit',
  };

  const styles = clsx(variants[variant], className);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isFocused && inputRef.current) inputRef.current.focus();
  }, [isFocused]);
  return <input ref={inputRef} type={type} {...props} className={styles} />;
}
