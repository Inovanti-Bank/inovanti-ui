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
  'flex flex-row flex-nowrap gap-2 justify-center items-center rounded-sm z-10', 
  'py-0.5 px-2 btn-hover font-medium border border-transparent', 
  'focus:border-primary bg-primary text-black click:bg-red-500')

const buttonDisabledStyles = cn(
  'disabled:bg-none disabled:shadow-none disabled:transition-none',
  'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-700',
  'dark:disabled:bg-gray-700 dark:disabled:text-gray-200'
)

const buttonAnimationStyles = cn(
  'before:-z-10 before:ease relative overflow-hidden border shadow-2xl hover:border-gray-100 border-[1.5px] hover:box-border box-border dark:hover:border-gray-700',
  'transition-all before:absolute before:right-0 before:-top-[10%] before:h-[120%] before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-40',
  'before:duration-500 hover:shadow-primary/50 hover:before:-translate-x-[15%]'
)

export const buttonStyles = cn(
  buttonBaseStyles,
  buttonDisabledStyles,
  buttonAnimationStyles
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
