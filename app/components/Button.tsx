import {forwardRef} from 'react';
import {Link} from '@remix-run/react';
import clsx from 'clsx';

import {missingClass} from '~/lib/utils';

export const Button = forwardRef(
  (
    {
      as = 'button',
      className = '',
      variant = 'primary',
      width = 'auto',
      isThin = false,
      ...props
    }: {
      isThin?: boolean;
      as?: React.ElementType;
      className?: string;
      variant?: 'primary' | 'inverted' | 'unstyled';
      width?: 'auto' | 'full';
      [key: string]: any;
    },
    ref,
  ) => {
    const Component = props?.to ? Link : as;

    const baseButtonClasses = clsx([
      'uppercase font-normal text-copy',
      isThin
        ? 'py-2 px-4 h-[37px]'
        : 'inline-block font-normal text-center uppercase py-5 px-10',
    ]);

    const variants = {
      primary: `${baseButtonClasses} bg-primary text-contrast`,
      inverted: `${baseButtonClasses} border border-primary/10 bg-contrast text-primary`,
      inline: 'border-b border-primary/10 leading-none pb-1',
      unstyled: '',
    };

    const widths = {
      auto: 'w-auto',
      full: 'w-full',
    };

    const styles = clsx(
      missingClass(className, 'bg-') && variants[variant],
      missingClass(className, 'w-') && widths[width],
      className,
    );

    return (
      <Component
        // @todo: not supported until react-router makes it into Remix.
        // preventScrollReset={true}
        className={styles}
        {...props}
        ref={ref}
      />
    );
  },
);
