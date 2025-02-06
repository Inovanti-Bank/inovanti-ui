'use client';

import { cn } from '@/utils/cn';
import { SpaceType, resolveSpace } from '@inovanti/tokens';
import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

import './button.css';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  className?: string;
  $width?: SpaceType;
}


const buttonBaseStyles = cn(
  'flex flex-row flex-nowrap gap-2 justify-center items-center rounded-sm z-0', 
  'py-0.5 px-2 btn-hover font-medium border border-transparent', 
  'focus:border-primary bg-primary text-black click:bg-red-500')

const buttonDisabledStyles = cn(
  'disabled:bg-none disabled:shadow-none disabled:transition-none',
  'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-700',
  'dark:disabled:bg-gray-700 dark:disabled:text-gray-200'
)


export const buttonStyles = cn(
  buttonBaseStyles,
  buttonDisabledStyles,
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, $width = 'fit', ...props }: ButtonProps, ref) => {
    return (
      <button
        className={cn(`${resolveSpace($width)}`, buttonStyles, className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
