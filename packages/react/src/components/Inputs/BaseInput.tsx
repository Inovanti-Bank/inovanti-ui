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
        'border border-primary',
        'focus:border-secondary focus:outline-none focus:opacity-100',
        'bg-background opacity-95',
        'text-gray-primary',
        'placeholder:text-gray-tertiary',
        className
    )
}