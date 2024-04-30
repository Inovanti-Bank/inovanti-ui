'use client'

import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { cn } from '@/utils/cn'

interface BaseInputProps extends ComponentPropsWithoutRef<'input'>  {}

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      className,
      ...props
    },
    ref,
  ) => {
    return (
        <input
          className={baseInputStyles(className)}
            type={props.type}
          ref={ref}
          {...props}
        />
    )
  },
)

BaseInput.displayName = 'BaseInput'

export const baseInputStyles = (className?: string) => {
  return cn(
        'cursor-text px-3 py-2 rounded-sm text-base',
        'disabled:cursor-not-allowed',
        'border border-primary/65',
        'focus:border-primary/100 focus:outline-none focus:opacity-100',
        'bg-white dark:bg-gray-850 opacity-95',
        'text-black dark:text-white',
        'placeholder:text-gray-400',
        className
    )
}