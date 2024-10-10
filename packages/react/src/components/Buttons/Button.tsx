'use client'

import { cn } from '@/utils/cn'
import { SpaceType, resolveSpace } from '@inovanti/tokens'
import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

import './button.css'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    children: React.ReactNode
    className?: string
    $width?: SpaceType
}

export const buttonStyles = cn(
  'flex flex-row gap-2 justify-center items-center rounded py-0.5 px-2','btn-hover',
  'disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-700',
  'border border-transparent focus:border-primary',
  'bg-primary',
  'text-accent')

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    { children, className, $width = 'fit', ...props }: ButtonProps,
    ref,
    ) => {
    
    return (
        <button
            className={cn(
                `${resolveSpace($width)}`,
                buttonStyles,
                className
            )}
            ref={ref}
            {...props}
        >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
