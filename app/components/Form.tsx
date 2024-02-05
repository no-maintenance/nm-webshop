import {cloneElement, ReactElement, useState} from 'react';
import clsx from 'clsx';
import {m} from 'framer-motion';

export type FormErrors<T> = Record<keyof T | 'generalError', string | null>;

export function InputWrapper({
  children,
  id,
  label,
  fixedHeight = true,
}: {
  fixedHeight?: boolean;
  children: ReactElement;
  id: string;
  label: string;
}) {
  const [isFocused, setIsFocused] = useState(false);

  // Function to handle input focus
  const handleFocus = () => setIsFocused(true);

  // Function to handle input blur
  const handleBlur = () => setIsFocused(false);

  const labelAnimationVariants = {
    focused: {
      x: 8,
      y: 8,
      transition: {duration: 0.05},
    },
    initial: {
      x: 0,
      y: 3,
      transition: {duration: 0.05},
    },
  };

  // Clone the child input element to add onFocus and onBlur handlers
  const input = cloneElement(children, {
    id,
    onFocus: handleFocus,
    onBlur: handleBlur,
  });
  return (
    <div
      className={clsx(['flex flex-wrap relative', fixedHeight && 'h-[47px]'])}
    >
      <m.label
        initial={'initial'}
        animate={isFocused ? 'focused' : 'initial'}
        variants={labelAnimationVariants}
        htmlFor={id}
        className={'block text-fine bg-contrast z-10 cursor-pointer'}
      >
        {label}
      </m.label>
      {input}
    </div>
  );
}

export const INPUT_STYLE_CLASSES = clsx([
  'bg-transparent w-full p-2 pl-0 appearance-none border-0 border-b  leading-tight placeholder:text-primary/50',
  ' focus:border-0 focus:border-b-0 focus:pl-2 focus:placeholder:opacity-0 focus:rounded focus:shadow-notice',
]);
export const getInputStyleClasses = (isError?: string | null) => {
  return `${INPUT_STYLE_CLASSES} ${
    isError ? 'border-red-500' : 'border-primary'
  }`;
};

export function isValidEmail(email?: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email && emailRegex.test(email.toString());
}

